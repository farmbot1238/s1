// ============================================
// ملف الإعدادات الرئيسي - غير البيانات هنا فقط
// ============================================

const SITE_CONFIG = {
    // معلومات الموقع
    siteName: "LMJO 09",
    ownerName: "عبدالرحمن المعايطه",
    
    // روابط التواصل
    whatsapp: "https://wa.me/962798688787",
    email: "abdalrhmanmaaith1@gmail.com",
    discord: "https://discord.gg/78NKW84H",
    suggestionForm: "https://docs.google.com/forms/d/e/1FAIpQLSeOP7ow84vcJ-q8tm4YlHsKMCuGdoL-E5OCJw6C66PDrbMpWw/viewform",
    
    // الروابط الرئيسية للمواد
    links: {
        // الفصل الأول
        deen_f1: "https://farmbot1238.github.io/DEEN/",
        arabic_f1: "https://farmbot1238.github.io/Ardic/",
        history_f1: "https://farmbot1238.github.io/MMMNII/",
        bank_f1: "https://farmbot1238.github.io/BNK/",
        
        // الفصل الثاني
        deen_f2: "https://farmbot1238.github.io/d1/",
        arabic_f2: "https://farmbot1238.github.io/a1/",
        history_f2: "https://farmbot1238.github.io/t1/",
        english_f2: "https://farmbot1238.github.io/e1/",
        
        // إضافات
        speed_challenge: "https://farmbot1238.github.io/thd1/",
        exams: "https://farmbot1238.github.io/w2/",
        books: "https://farmbot1238.github.io/Book/"
    }
};

// ============================================
// هيكل القائمة - سهل التعديل والإضافة
// ============================================

const MENU_STRUCTURE = [
    {
        title: "متعاونين على التفوق",
        type: "featured",
        items: [
            {
                icon: "fab fa-discord",
                text: "سيرفر ديسكورد | المساعدة الدراسية وتنفيذ الأفكار",
                action: "link",
                url: SITE_CONFIG.discord,
                special: true
            }
        ]
    },
    {
        title: "📖 الفصل الأول",
        type: "normal",
        items: [
            { icon: "fas fa-mosque", text: "الدين (الفصل الأول)", action: "iframe", url: SITE_CONFIG.links.deen_f1 },
            { icon: "fas fa-book", text: "العربي (الفصل الأول)", action: "iframe", url: SITE_CONFIG.links.arabic_f1 },
            { icon: "fas fa-landmark", text: "التاريخ (الفصل الأول)", action: "iframe", url: SITE_CONFIG.links.history_f1 },
            { icon: "fas fa-database", text: "📚 بنوك الفصل الأول", action: "iframe", url: SITE_CONFIG.links.bank_f1 }
        ]
    },
    {
        title: "📘 الفصل الثاني",
        type: "normal",
        items: [
            { icon: "fas fa-mosque", text: "الدين (الفصل الثاني)", action: "iframe", url: SITE_CONFIG.links.deen_f2 },
            { icon: "fas fa-book", text: "العربي (الفصل الثاني)", action: "iframe", url: SITE_CONFIG.links.arabic_f2 },
            { icon: "fas fa-landmark", text: "التاريخ (الفصل الثاني)", action: "iframe", url: SITE_CONFIG.links.history_f2 },
            { icon: "fas fa-language", text: "الانجليزي (الفصل الثاني)", action: "iframe", url: SITE_CONFIG.links.english_f2 }
        ]
    },
    {
        title: "⚡ إضافات مفيدة",
        type: "normal",
        items: [
            { icon: "fas fa-bolt", text: "تحدي السرعة الشامل", action: "iframe", url: SITE_CONFIG.links.speed_challenge },
            { icon: "fas fa-file-alt", text: "امتحانات وزارية سابقة", action: "iframe", url: SITE_CONFIG.links.exams },
            { icon: "fas fa-book-open", text: "كتب وزارية", action: "iframe", url: SITE_CONFIG.links.books }
        ]
    },
    {
        title: "📞 تواصل واقتراحات",
        type: "normal",
        items: [
            { icon: "fab fa-whatsapp", text: "واتساب (تواصل مباشر)", action: "link", url: SITE_CONFIG.whatsapp },
            { icon: "fas fa-pray", text: "دعاء للطالب / اقتراح", action: "link", url: SITE_CONFIG.suggestionForm }
        ]
    }
];
