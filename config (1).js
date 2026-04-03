const SITE_CONFIG = {
    siteName: "LMJO 09",
    email: "abdalrhmanmaaith1@gmail.com",
    discord: "https://discord.gg/CpF8Uk8Yt",
    suggestionForm: "https://docs.google.com/forms/d/e/1FAIpQLSeOP7ow84vcJ-q8tm4YlHsKMCuGdoL-E5OCJw6C66PDrbMpWw/viewform",
    googleScriptURL: "https://script.google.com/macros/s/AKfycbzT1wNRWEgVeVTtvKXhMpG-rVBPTdG99ubHG3c3mzax1TBHIfvxaHa6AxqnPygfeUkU/exec",
    aiAssistant: "https://lmjo-jordanian-buddy.lovable.app/",
    timer: "https://farmbot1238.github.io/timer/",
    chat: "https://cooperate-and-conquer.lovable.app",
    achievement: "https://my-achievement-buddy.lovable.app",
    links: {
        deen_f1: "https://farmbot1238.github.io/DEEN/",
        arabic_f1: "https://farmbot1238.github.io/Ardic/",
        history_f1: "https://farmbot1238.github.io/MMMNII/",
        bank_f1: "https://farmbot1238.github.io/BNK/",
        deen_f2: "https://farmbot1238.github.io/d1/",
        arabic_f2: "https://farmbot1238.github.io/a1/",
        history_f2: "https://farmbot1238.github.io/t1/",
        english_f2: "https://farmbot1238.github.io/e1/",
        speed_challenge: "https://farmbot1238.github.io/thd1/",
        speed_daily: "https://farmbot1238.github.io/thd2/",
        exams: "https://farmbot1238.github.io/w2/",
        books: "https://farmbot1238.github.io/Book/"
    }
};

const QUOTES = [
    `جادل فانك قد خلقت مجادلا\nمن لا يجادل يستوي بالبغل\nحمال أسفار ينوء بحملها\nظهر البعير سخرت للحمل`,
    `نفس تجن وما بها من جنة\nإن الجنون لبعض وحي العقل`,
    `من سائل الوردة الحمراء عن عبق\nيجيبك الجذر من روث له طعم`,
    `إن تأخرت بالسعي نحو مجد\nقد ينال المجد بالسعي سواك`,
    `أنفضوا النوم وهبوا للعلا\nفالعلا وقف على من لم ينم`,
    `عجبت لهم قالوا تماديت في المنى\nوفي المثل العليا وفي المرتقى الصعب`,
    `فقلت لهم مهلا فما اليأس شيمتي\nسأبذر حبي والثمار من الرب`,
    `أسكنت أحلامي زجاجات الرضا\nأودعتها بحر الدعاء فابحرت\nإن شاء ربي أن تعود لضفتي\nأو ربما خيره أن غادرت`,
    `العلم صداع الرؤوس بما حوت\nكالأرض تصدع من هطول الوبل`,
    `الحقيقة المرة خير ألف مرة من الوهم المريح`,
    `إنك تستطيع أن تصبح عظيماً، إن العظمة ليست محصورة بين قلة من الناس، إنك أحد هؤلاء العظماء متى ما أردت وعملت على ذلك`,
    `إننا خلقنا لنحيا حياة جميلة وحافلة بالإنجازات والنجاحات، ولم نخلق لنعيش على الهامش. إن لم تزد شيئاً على الحياة كنت أنت - لا سمح الله - الزيادة عليها`,
    `الكثير منا يعيشون أسرى ضمن حدود منطقتهم الآمنة، ولكن الكيس الفطن من يتجاوز حدود هذه المنطقة`
];

const MENU_STRUCTURE = [
    {
        title: "🏠 الرئيسية",
        type: "normal",
        items: [
            { icon: "fas fa-home", text: "الصفحة الرئيسية", action: "home", url: "welcome" }
        ]
    },
    {
        title: "✨ خدماتنا",
        type: "normal",
        items: [
            { icon: "fas fa-robot", text: "🤖 المساعد الذكي", action: "iframe", url: SITE_CONFIG.aiAssistant },
            { icon: "fas fa-trophy", text: "🏆 الإنجاز", action: "iframe", url: SITE_CONFIG.achievement, isNew: true },
            { icon: "fas fa-comments", text: "💬 دردشة دراسية", action: "iframe", url: SITE_CONFIG.chat, isNew: true },
            { icon: "fab fa-discord", text: "سيرفر ديسكورد", action: "link", url: SITE_CONFIG.discord }
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
            { icon: "fas fa-star", text: "⚡ تحدي السرعة اليومي ⚡", action: "iframe", url: SITE_CONFIG.links.speed_daily },
            { icon: "fas fa-hourglass-half", text: "⏱️ Timer", action: "iframe", url: SITE_CONFIG.timer },
            { icon: "fas fa-file-alt", text: "امتحانات وزارية سابقة", action: "iframe", url: SITE_CONFIG.links.exams },
            { icon: "fas fa-book-open", text: "كتب وزارية", action: "iframe", url: SITE_CONFIG.links.books }
        ]
    },
    {
        title: "📞 تواصل واقتراحات",
        type: "normal",
        items: [
            { icon: "fas fa-bell", text: "📧 اشترك في تحديثات الموقع", action: "subscribe", url: "" },
            { icon: "fas fa-envelope", text: "📧 البريد الإلكتروني", action: "email", url: SITE_CONFIG.email },
            { icon: "fas fa-pray", text: "دعاء للطالب / اقتراح", action: "link", url: SITE_CONFIG.suggestionForm }
        ]
    }
];
