(function () {
  const el = document.getElementById("ops-map");
  if (!el || typeof L === "undefined") return;

  function parse(attr) {
    try {
      return JSON.parse(el.getAttribute(attr) || "[]");
    } catch (e) {
      return [];
    }
  }

  const cameras = parse("data-cameras");
  const zones = parse("data-zones");
  const alerts = parse("data-alerts");
  const officers = parse("data-officers");
  const isMapPage = el.classList.contains("tall") || el.dataset.mapMode === "full";

  const streets = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap",
  });
  const satellite = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, attribution: "Tiles &copy; Esri" }
  );
  const labels = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png",
    { maxZoom: 19, pane: "overlayPane" }
  );

  const map = L.map(el, {
    zoomControl: true,
    layers: isMapPage ? [satellite, labels] : [streets],
  }).setView([27.5285, 41.6995], 15);

  if (isMapPage) {
    L.control
      .layers(
        { Satellite: L.layerGroup([satellite, labels]), Streets: streets },
        {},
        { position: "topleft" }
      )
      .addTo(map);
  }

  function iconHtml(type, color, pulse) {
    const symbols = {
      camera: "📹",
      incident: "⚠",
      patrol: "👮",
      site: "📍",
    };
    const pulseHtml = pulse
      ? `<span style="position:absolute;inset:-6px;border-radius:50%;border:2px solid ${color};animation:madarPulse 1.4s ease-out infinite;opacity:.7"></span>`
      : "";
    return L.divIcon({
      className: "madar-marker",
      html: `<div style="position:relative;width:34px;height:34px;display:grid;place-items:center">
        ${pulseHtml}
        <span style="width:30px;height:30px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 4px 12px rgba(0,0,0,.35);display:grid;place-items:center;font-size:13px;line-height:1">${symbols[type] || "•"}</span>
      </div>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -14],
    });
  }

  if (!document.getElementById("madar-map-style")) {
    const style = document.createElement("style");
    style.id = "madar-map-style";
    style.textContent = `
      @keyframes madarPulse { from { transform:scale(.6); opacity:.8 } to { transform:scale(1.6); opacity:0 } }
      .madar-popup h4 { margin:0 0 .35rem; font-size:14px }
      .madar-popup p { margin:.15rem 0; color:#475569; font-size:12px }
      .madar-popup .tag { display:inline-block; padding:.15rem .45rem; border-radius:999px; font-size:11px; color:#fff; margin-top:.35rem }
      .leaflet-container { font-family: Cairo, Manrope, sans-serif }
    `;
    document.head.appendChild(style);
  }

  const layers = {
    cameras: L.layerGroup(),
    incidents: L.layerGroup(),
    patrols: L.layerGroup(),
    sites: L.layerGroup(),
  };

  const points = [];
  const zoneColor = { green: "#10B981", amber: "#F59E0B", red: "#EF4444" };

  zones.forEach((z) => {
    const color = zoneColor[z.color] || "#2563EB";
    const circle = L.circle([z.lat, z.lng], {
      radius: z.radius || 140,
      color,
      fillColor: color,
      fillOpacity: 0.16,
      weight: 2,
    }).bindPopup(
      `<div class="madar-popup"><h4>${z.name}</h4><p>Zone / موقع حيوي</p><span class="tag" style="background:${color}">${z.color}</span></div>`
    );
    layers.sites.addLayer(circle);
    layers.sites.addLayer(
      L.marker([z.lat, z.lng], { icon: iconHtml("site", "#F59E0B") }).bindPopup(
        `<div class="madar-popup"><h4>${z.name}</h4><p>Vital site marker</p></div>`
      )
    );
    points.push([z.lat, z.lng]);
  });

  cameras.forEach((c) => {
    const online = !!c.online;
    const color = online ? "#10B981" : "#64748B";
    const status = online ? "Online / متصل" : "Offline / غير متصل";
    const marker = L.marker([c.lat, c.lng], { icon: iconHtml("camera", color) }).bindPopup(
      `<div class="madar-popup">
        <h4>${c.name}</h4>
        <p><b>ID:</b> ${c.code || c.id}</p>
        <p>${status}</p>
        <p>Zone: ${c.zone || "—"}</p>
        <span class="tag" style="background:${color}">Camera</span>
      </div>`
    );
    layers.cameras.addLayer(marker);
    points.push([c.lat, c.lng]);
  });

  officers.forEach((o) => {
    const marker = L.marker([o.lat, o.lng], { icon: iconHtml("patrol", "#2563EB") }).bindPopup(
      `<div class="madar-popup">
        <h4>${o.name}</h4>
        <p>Patrol / دورية</p>
        <p>${o.badge || ""}</p>
        <span class="tag" style="background:#2563EB">Officer</span>
      </div>`
    );
    layers.patrols.addLayer(marker);
    points.push([o.lat, o.lng]);
  });

  alerts.forEach((a) => {
    const critical = a.severity === "critical" || a.severity === "high";
    const marker = L.marker([a.lat, a.lng], {
      icon: iconHtml("incident", "#EF4444", critical),
      zIndexOffset: 1000,
    }).bindPopup(
      `<div class="madar-popup">
        <h4>${a.title}</h4>
        <p>Severity: ${a.severity}</p>
        <p>Potential security incident</p>
        <span class="tag" style="background:#EF4444">Incident</span>
      </div>`
    );
    layers.incidents.addLayer(marker);
    points.push([a.lat, a.lng]);
  });

  Object.values(layers).forEach((g) => g.addTo(map));

  if (isMapPage) {
    L.control
      .layers(
        null,
        {
          Cameras: layers.cameras,
          Incidents: layers.incidents,
          Patrols: layers.patrols,
          Sites: layers.sites,
        },
        { collapsed: false, position: "topright" }
      )
      .addTo(map);
  }

  if (points.length > 1) {
    map.fitBounds(points, { padding: [40, 40], maxZoom: 16 });
  }

  // Fix blank map when container was hidden/resized
  setTimeout(() => map.invalidateSize(), 80);
  window.addEventListener("resize", () => map.invalidateSize());
  window.addEventListener("madar:langchange", () => map.invalidateSize());

  // Wire filter buttons if present
  document.querySelectorAll("[data-map-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-map-filter");
      const layer = layers[key];
      if (!layer) return;
      if (map.hasLayer(layer)) {
        map.removeLayer(layer);
        btn.classList.remove("active");
      } else {
        map.addLayer(layer);
        btn.classList.add("active");
      }
    });
  });

  window.MadarMap = map;
})();
