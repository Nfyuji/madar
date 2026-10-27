(() => {
  const STORAGE_KEY = "madar_lang";

  const dict = {
    ar: {
      brand: "مدار أمني",
      brand_en: "Madar Amney",
      nav_home: "الرئيسية",
      nav_cameras: "الكاميرات",
      nav_map: "الخريطة",
      nav_alerts: "التنبيهات",
      nav_incidents: "الحوادث",
      nav_reports: "التقارير",
      nav_personnel: "أفراد الأمن",
      nav_settings: "الإعدادات",
      nav_system_ok: "النظام يعمل بشكل طبيعي",
      search_ph: "ابحث عن موقع، كاميرا، أو حادثة...",
      notifications: "الإشعارات",
      logout: "خروج",
      role_admin: "مدير النظام",
      role_manager: "مشرف أمني",
      role_officer: "ضابط ميدان",
      kpi_sites: "المواقع الحيوية",
      kpi_sites_status: "محمية",
      kpi_personnel: "أفراد الأمن في الميدان",
      kpi_personnel_status: "في الخدمة",
      kpi_incidents: "الحوادث الحالية",
      kpi_incidents_status: "تحتاج مراجعة",
      kpi_cameras: "الكاميرات النشطة",
      kpi_cameras_status: "متصلة",
      map_title: "الخريطة التفاعلية",
      legend_camera: "كاميرا",
      legend_incident: "حادثة",
      legend_patrol: "دورية",
      legend_site: "موقع حيوي",
      map_demo_note: "بيانات توضيحية للمواقع (ليست تشغيلية حية)",
      live_feeds: "البث المباشر للكاميرات",
      live: "مباشر",
      offline: "غير متصل",
      recent_alerts: "آخر التنبيهات",
      view_all: "عرض الكل",
      risk_title: "مخطط المخاطر - الذكاء الاصطناعي",
      risk_level: "مستوى الخطر",
      sample_chart: "مخطط مبني على بيانات النظام الحالية",
      today_events: "أحداث اليوم",
      yesterday: "أمس",
      today: "اليوم",
      now: "الآن",
      cameras_title: "الكاميرات",
      add_camera: "إضافة كاميرا",
      edit: "تعديل",
      delete: "حذف",
      save: "حفظ",
      cancel: "إلغاء",
      toggle: "تشغيل/إيقاف",
      ai_analyze: "تحليل AI",
      name: "الاسم",
      code: "الرمز",
      description: "الوصف",
      lat: "خط العرض",
      lng: "خط الطول",
      status: "الحالة",
      actions: "إجراءات",
      confirm_delete: "هل أنت متأكد من الحذف؟",
      alerts_title: "التنبيهات",
      acknowledge: "استلام",
      resolve: "حل",
      dismiss: "تجاهل",
      severity: "الخطورة",
      incidents_title: "الحوادث الأمنية",
      no_incidents: "لا توجد حوادث عالية الخطورة حالياً",
      reports_title: "التقارير",
      readiness_report: "تقرير الجاهزية التشغيلية",
      export_csv: "تصدير CSV",
      print_report: "طباعة",
      personnel_title: "أفراد الأمن",
      email: "البريد",
      role: "الدور",
      badge: "الشارة",
      active: "نشط",
      disabled: "معطّل",
      settings_title: "إعدادات النظام",
      lang_pref: "تفضيل اللغة",
      profile: "الملف الشخصي",
      simulate_ai: "محاكاة تنبيه AI",
      home_about: "عن النظام",
      home_features: "المميزات",
      home_roles: "المستخدمون",
      home_login: "تسجيل الدخول",
      home_cta: "استعرض المميزات",
      home_hero_title: "منصة ذكية لإدارة العمليات الأمنية في الزمن الحقيقي",
      home_hero_lead: "مراقبة مباشرة · خريطة GIS · تنبيهات ذكاء اصطناعي · تنسيق ميداني مشفّر",
      home_about_title: "من المراقبة التفاعلية إلى الاستعداد الاستباقي",
      home_about_text: "مدار أمني منصة ويب مركزية تربط غرفة العمليات بالضباط في الميدان، وتقلل زمن اكتشاف التهديدات عبر التحليل الذكي والتنبيهات الفورية.",
      home_feat_title: "كل ما تحتاجه غرفة العمليات في مكان واحد",
      feat_gis: "لوحة قيادة GIS",
      feat_gis_text: "خريطة تفاعلية تعرض الكاميرات والضباط والمناطق والتهديدات النشطة.",
      feat_live: "مراقبة مباشرة",
      feat_live_text: "بدء البث الميداني ومتابعة نقاط المراقبة من واجهة الويب.",
      feat_ai: "كشف ذكي",
      feat_ai_text: "تحليل الأنماط وإنشاء تنبيهات فورية مع مستوى الخطورة والثقة.",
      feat_chat: "تواصل مشفّر",
      feat_chat_text: "قناة تنسيق بين القيادة والميدان لإسناد المهام ومتابعة الاستجابة.",
      roles_title: "واجهات حسب الدور التشغيلي",
      start_login: "ابدأ الدخول إلى النظام",
      login_title: "دخول المنصة",
      login_sub: "ادخل بحسابك حسب دورك: مدير نظام، مشرف عمليات، أو ضابط ميدان.",
      password: "كلمة المرور",
      login_now: "دخول الآن",
      demo_accounts: "حسابات تجريبية للعرض:",
      back_home: "العودة للصفحة الرئيسية",
      point_1: "غرفة قيادة وخريطة GIS",
      point_2: "تنبيهات الذكاء الاصطناعي",
      point_3: "تنسيق ميداني مشفّر",
      footer_uni: "جامعة حائل · كلية علوم وهندسة الحاسب الآلي",
      filter_all: "الكل",
      filter_online: "متصل",
      filter_offline: "غير متصل",
      no_data: "لا توجد بيانات",
      saved: "تم الحفظ بنجاح",
      deleted: "تم الحذف",
      lang_ar: "العربية",
      lang_en: "English",
    },
    en: {
      brand: "Madar Amney",
      brand_en: "Security Orbit",
      nav_home: "Dashboard",
      nav_cameras: "Cameras",
      nav_map: "Map",
      nav_alerts: "Alerts",
      nav_incidents: "Incidents",
      nav_reports: "Reports",
      nav_personnel: "Security Personnel",
      nav_settings: "Settings",
      nav_system_ok: "System operating normally",
      search_ph: "Search for a site, camera, or incident...",
      notifications: "Notifications",
      logout: "Logout",
      role_admin: "System Administrator",
      role_manager: "Security Supervisor",
      role_officer: "Field Officer",
      kpi_sites: "Protected Sites",
      kpi_sites_status: "Protected",
      kpi_personnel: "Active Security Personnel",
      kpi_personnel_status: "On duty",
      kpi_incidents: "Current Incidents",
      kpi_incidents_status: "Needs review",
      kpi_cameras: "Active Cameras",
      kpi_cameras_status: "Connected",
      map_title: "Interactive Map",
      legend_camera: "Camera",
      legend_incident: "Incident",
      legend_patrol: "Patrol",
      legend_site: "Vital site",
      map_demo_note: "Demonstration locations (not live operational data)",
      live_feeds: "Live Camera Feeds",
      live: "Live",
      offline: "Offline",
      recent_alerts: "Recent Alerts",
      view_all: "View all",
      risk_title: "Risk Analytics — AI",
      risk_level: "Risk level",
      sample_chart: "Chart based on current system data",
      today_events: "Today's Events",
      yesterday: "Yesterday",
      today: "Today",
      now: "Now",
      cameras_title: "Cameras",
      add_camera: "Add camera",
      edit: "Edit",
      delete: "Delete",
      save: "Save",
      cancel: "Cancel",
      toggle: "Toggle",
      ai_analyze: "AI analyze",
      name: "Name",
      code: "Code",
      description: "Description",
      lat: "Latitude",
      lng: "Longitude",
      status: "Status",
      actions: "Actions",
      confirm_delete: "Are you sure you want to delete this?",
      alerts_title: "Alerts",
      acknowledge: "Acknowledge",
      resolve: "Resolve",
      dismiss: "Dismiss",
      severity: "Severity",
      incidents_title: "Security Incidents",
      no_incidents: "No high-severity incidents currently",
      reports_title: "Reports",
      readiness_report: "Operational readiness report",
      export_csv: "Export CSV",
      print_report: "Print",
      personnel_title: "Security Personnel",
      email: "Email",
      role: "Role",
      badge: "Badge",
      active: "Active",
      disabled: "Disabled",
      settings_title: "System Settings",
      lang_pref: "Language preference",
      profile: "Profile",
      simulate_ai: "Simulate AI alert",
      home_about: "About",
      home_features: "Features",
      home_roles: "Users",
      home_login: "Sign in",
      home_cta: "Explore features",
      home_hero_title: "A smart platform for real-time security operations management",
      home_hero_lead: "Live monitoring · GIS map · AI alerts · Encrypted field coordination",
      home_about_title: "From reactive monitoring to proactive readiness",
      home_about_text: "Madar Amney is a centralized web platform linking the command center with field officers, reducing threat discovery time through intelligent analysis and instant alerts.",
      home_feat_title: "Everything the operations room needs in one place",
      feat_gis: "GIS Command Dashboard",
      feat_gis_text: "Interactive map showing cameras, officers, zones, and active threats.",
      feat_live: "Live Surveillance",
      feat_live_text: "Start field streaming and monitor checkpoints from the web.",
      feat_ai: "Smart Detection",
      feat_ai_text: "Pattern analysis with immediate severity-aware alerts.",
      feat_chat: "Encrypted Communication",
      feat_chat_text: "Coordination channel for tasking and response tracking.",
      roles_title: "Interfaces by operational role",
      start_login: "Sign in to the system",
      login_title: "Platform Sign-in",
      login_sub: "Sign in as administrator, operations supervisor, or field officer.",
      password: "Password",
      login_now: "Sign in now",
      demo_accounts: "Demo accounts:",
      back_home: "Back to home",
      point_1: "Command room and GIS map",
      point_2: "AI-powered alerts",
      point_3: "Encrypted field coordination",
      footer_uni: "University of Ha'il · College of Computer Science and Engineering",
      filter_all: "All",
      filter_online: "Online",
      filter_offline: "Offline",
      no_data: "No data available",
      saved: "Saved successfully",
      deleted: "Deleted",
      lang_ar: "العربية",
      lang_en: "English",
    },
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "ar" ? saved : "ar";
  }

  function t(key) {
    const lang = getLang();
    return (dict[lang] && dict[lang][key]) || (dict.ar[key] || key);
  }

  function applyTranslations(root = document) {
    const lang = getLang();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body && document.body.setAttribute("data-lang", lang);

    root.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });
    root.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key) el.innerHTML = t(key);
    });
    root.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(key));
    });
    root.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (key) el.setAttribute("title", t(key));
    });
    root.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", t(key));
    });

    // role labels
    root.querySelectorAll("[data-role-label]").forEach((el) => {
      const role = el.getAttribute("data-role-label");
      el.textContent = t(`role_${role}`);
    });

    // language switcher active state
    root.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
    });

    // datetime locale
    updateDateTime();

    // chart labels if charts exist
    window.dispatchEvent(new CustomEvent("madar:langchange", { detail: { lang } }));
  }

  function setLang(lang) {
    if (lang !== "ar" && lang !== "en") return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();
  }

  function updateDateTime() {
    const el = document.querySelector("#ops-datetime span");
    if (!el) return;
    const lang = getLang();
    const locale = lang === "ar" ? "ar-SA" : "en-US";
    const fmt = new Intl.DateTimeFormat(locale, {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    el.textContent = fmt.format(new Date());
  }

  function bind() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-set-lang]");
      if (!btn) return;
      e.preventDefault();
      setLang(btn.getAttribute("data-set-lang"));
    });
    applyTranslations();
    setInterval(updateDateTime, 30000);
  }

  window.MadarI18n = { t, setLang, getLang, applyTranslations, dict };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
