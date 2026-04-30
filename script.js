// ════════════════════════════════════════════════
// رسائل التشجيع لكل مستوى
// ════════════════════════════════════════════════
const LEVEL_INTRO_DATA = {
    1: {
        icon: '🏰',
        title: 'المستوى الأول: بوابة الجملة الاسمية',
        subtitle: '"تحدي المبتدأ والخبر"',
        motivation: 'أهلاً بك يا بطل في بداية الرحلة! قبل أن نواجه النواسخ، علينا أولاً أن نتقن بناء البيت الأصلي.. "الجملة الاسمية". هل يمكنك ضبط المبتدأ والخبر ليكون البناء متوازناً؟',
        task: 'اختر العلامة الإعرابية الصحيحة (الضمة، الألف، أو الواو) لرفع المبتدأ والخبر لتجتاز البوابة الأولى.',
        rule: 'تذكر دائماً.. مبتدأ وخبر توأمان في "رفع". يُرفعان بالضمة (مفرد/جمع مؤنث/جمع تكسير)، وبالألف (مثنى)، وبالواو (جمع مذكر سالم/من الأسماء الخمسة).'
    },
    2: {
        icon: '🔵',
        title: 'المستوى الثاني: بوابة "إنَّ" وأخواتها',
        subtitle: '"تحدي الحروف الناسخة"',
        motivation: 'أهلاً بك يا بطل في أولى محطات المغامرة! هل أنت مستعد لتغيير موازين الجملة الاسمية؟ الحروف الناسخة تنتظر ذكاءك لترتب صفوفها.',
        task: 'ستظهر لك جمل اسمية "مهتزة"، عليك اختيار الكلمة الصحيحة التي تلي الحرف الناسخ لتستقر الجملة وتكسب النقاط.',
        rule: 'تذكر دائماً.. (إنَّ وأخواتها) حروف قوية، تدخل على جملة فـ "تنصب" مبتدأ (بالفتحة أو بالياء أو بالألف) و "ترفع" خبر. كن دقيقاً في اختيار علامة نصب!'
    },
    3: {
        icon: '🟠',
        title: 'المستوى الثالث: حصن "كانَ" وأخواتها',
        subtitle: '"معركة الأفعال الناسخة"',
        motivation: 'رائع! لقد اجتزت الحروف، لكن الآن واجهت "الأفعال" التي تقلب القواعد! حصن "كان" يحتاج إلى قائد يتقن ضبط الأواخر. هل ستكون أنت هذا القائد؟',
        task: 'وازن الجملة باختيار "خبر كان" الصحيح. العلامات الإعرابية هنا هي مفتاح الفوز، فخطأ واحد قد يكلفك خسارة العملات!',
        rule: 'انتبه.. (كان وأخواتها) أفعال مغيرة، فهي "ترفع" مبتدأ و "تنصب" خبر. ركز جيداً على خبر، فهو من سيحتاج منك لمسة تصحيح (بالفتحة أو بالياء أو بالكسرة في جمع مؤنث).'
    },
    4: {
        icon: '🟣',
        title: 'المستوى الرابع: التحدي المختلط',
        subtitle: '"ساحة العمالقة - الاختبار النهائي"',
        motivation: 'أنت الآن في منطقة العمالقة! لا مجال للتردد. هنا تختلط الحروف بالأفعال، وتظهر الكلمات الممنوعة من الصرف لتختبر تركيزك العالي. أثبت لنا أنك "خبير النواسخ" الأول!',
        task: 'سريعة ودقيقة؛ هكذا يجب أن تكون إجاباتك. ميز بين "إنَّ" و "كانَ" في لمح البصر، وانتبه للكلمات التي لا تقبل التنوين (الممنوعة من الصرف).',
        rule: 'قاعدة هي "تركيز تام". قارن بين تأثير حرف وتأثير فعل قبل اختيار. مبتدأ منصوب مع إنَّ، وخبر منصوب مع كانَ. انطلق نحو شارة ذهبية!'
    }
};

const LEVEL_COMPLETE_DATA = {

    1: { emoji: '🌟', title: 'أكملت المستوى الأول!', nextIcon: '🔵', nextName: 'إنَّ وأخواتها' },
    2: { emoji: '🏆', title: 'أكملت المستوى الثاني!', nextIcon: '🟠', nextName: 'كانَ وأخواتها' },
    3: { emoji: '🔥', title: 'أكملت المستوى الثالث!', nextIcon: '🟣', nextName: 'المراجعة الشاملة' },
    4: { emoji: '🎉', title: 'أكملت جميع المستويات!', nextIcon: '', nextName: '' }
};

function getMotivationMessage(level, errors) {
    // رسالة تبعاً للأخطاء
    const perfect = errors === 0;
    const nearPerfect = errors <= 2;
    const decent = errors <= 5;

    const byError = perfect
        ? '⭐ أنت بطل لا يُقهر! أداء مثالي تماماً!'
        : nearPerfect
            ? '👏 إنجاز عظيم! أداء ممتاز مع أخطاء قليلة جداً!'
            : decent
                ? '💪 استمر، قاربت الوصول! تحسّن ملحوظ!'
                : '📖 لا بأس، التكرار أساس التمكّن. حاول مجدداً!';

    // رسالة إضافية خاصة بالمستوى
    const byLevel = {
        1: 'أتقنت الجملة الاسمية، وهي اللبنة الأساسية!',
        2: 'إنَّ وأخواتها لا تخفى عليك الآن!',
        3: 'كانَ وأخواتها أصبحت في متناول يدك!',
        4: 'أثبتّ إتقانك للنواسخ بجميع أنواعها!'
    };

    return `${byError}<br><small style="font-weight:600;color:#666;font-size:15px">${byLevel[level] || ''}</small>`;
}

// ════════════════════════════════════════════════
// نظام الشارات
// ════════════════════════════════════════════════
const BADGES = [
    { id: 'perfect', icon: '🌟', name: 'بلا أخطاء', desc: 'أكملت اللعبة دون أي خطأ', check: (s) => s.errors === 0 },
    { id: 'fast', icon: '⚡', name: 'سريع البرق', desc: 'أكملت في أقل من دقيقتين', check: (s) => s.time < 120 },
    { id: 'fullscore', icon: '🏆', name: 'المتفوق', desc: 'حصلت على النقاط الكاملة 70', check: (s) => s.score >= 70 },
    { id: 'legend', icon: '🔥', name: 'الأسطورة', desc: 'بلا أخطاء وأسرع من دقيقتين', check: (s) => s.errors === 0 && s.time < 120 },
    { id: 'scholar', icon: '📚', name: 'العالم', desc: 'لعبت 3 مرات أو أكثر', check: (s, p) => (p.totalGames || 0) >= 3 },
    { id: 'diamond', icon: '💎', name: 'الماسة', desc: 'حصلت على المركز الأول', check: (s) => s.rank === 1 },
    { id: 'persistent', icon: '🌙', name: 'المثابر', desc: 'لعبت 5 ألعاب أو أكثر', check: (s, p) => (p.totalGames || 0) >= 5 },
    { id: 'perfect3', icon: '🎯', name: 'الدقيق', desc: '3 ألعاب متتالية بلا أخطاء', check: (s, p) => (p.perfectStreak || 0) >= 3 },
    { id: 'speed_perfect', icon: '🚀', name: 'رائد الفضاء', desc: 'بلا أخطاء وأسرع من دقيقة', check: (s) => s.errors === 0 && s.time < 60 },
    { id: 'coins100', icon: '🪙', name: 'جامع الكنوز', desc: 'جمعت 100 عملة أو أكثر', check: (s, p) => (p.totalCoins || 0) >= 100 }
];

function calcCoins(score, errors, time) {
    let c = score;
    if (errors === 0) c += 50;
    else c -= errors * 3;
    if (time < 60) c += 30;
    else if (time < 120) c += 15;
    else if (time < 180) c += 5;
    return Math.max(c, 0);
}
function calcStars(errors) {
    return errors === 0 ? 3 : errors <= 3 ? 2 : 1;
}

// ════════════════════════════════════════════════
// الأفاتارات
// ════════════════════════════════════════════════
const AVATARS = [
    '🦁', '🐯', '🦊', '🐻', '🐼', '🐨',
    '🦋', '🦜', '🐬', '🦅', '🌟', '🚀',
    '🎯', '🎨', '🎭', '🏆', '⚡', '🌙',
    '🔥', '💎', '🎸', '🍀', '🌺', '🦄', '🐙'
];

// ════════════════════════════════════════════════
// الأمثلة
// ════════════════════════════════════════════════
// ════════════════════════════════════════════════
// البيانات الضخمة للمستويات (تم استخراجها من صور المستخدم)
// ════════════════════════════════════════════════
const ALL_LEVELS_DATA = {
    1: [ // المستوى الأول: الجملة الاسمية (مرفوعان)
        { ism: "العلمُ", ism_decoy: "العلمَ", khabar: "نورٌ", khabar_decoy: "نوراً" },
        { ism: "الطالبانِ", ism_decoy: "الطالبينِ", khabar: "مجتهدانِ", khabar_decoy: "مجتهدينِ" },
        { ism: "المؤمنونَ", ism_decoy: "المؤمنينَ", khabar: "إخوةٌ", khabar_decoy: "إخوةً" },
        { ism: "المعلماتُ", ism_decoy: "المعلماتِ", khabar: "بارعاتٌ", khabar_decoy: "بارعاتٍ" },
        { ism: "العلماءُ", ism_decoy: "العلماءَ", khabar: "أذكياءُ", khabar_decoy: "أذكياءَ" },
        { ism: "أبوكَ", ism_decoy: "أباكَ", khabar: "ذو علمٍ", khabar_decoy: "ذا علمٍ" },
        { ism: "الولدانِ", ism_decoy: "الولدينِ", khabar: "نائمانِ", khabar_decoy: "نائمينِ" },
        { ism: "الصائمونَ", ism_decoy: "الصائمينَ", khabar: "صابرونَ", khabar_decoy: "صابرينَ" },
        { ism: "الأصدقاءُ", ism_decoy: "الأصدقاءَ", khabar: "أوفياءُ", khabar_decoy: "أوفياءَ" },
        { ism: "أخوكَ", ism_decoy: "أخاكَ", khabar: "صادقٌ", khabar_decoy: "صادقاً" },
        { ism: "اللاعبانِ", ism_decoy: "اللاعبينِ", khabar: "سريعانِ", khabar_decoy: "سريعينِ" },
        { ism: "المهندسونَ", ism_decoy: "المهندسينَ", khabar: "بارعونَ", khabar_decoy: "بارعينَ" },
        { ism: "ذو", ism_decoy: "ذا", khabar: "المالِ كريمٌ", khabar_decoy: "المالِ كريماً" },
        { ism: "الوطنُ", ism_decoy: "الوطنَ", khabar: "عزيزٌ", khabar_decoy: "عزيزاً" },
        { ism: "اللهُ", ism_decoy: "اللهَ", khabar: "غفورٌ", khabar_decoy: "غفوراً" }
    ],

    2: [ // المستوى الثاني: إن وأخواتها (تنصب الاسم وترفع الخبر)
        { nasikh: "إنَّ", ism: "الصدقَ", ism_decoy: "الصدقُ", khabar: "منجاةٌ", khabar_decoy: "منجاةً" },
        { nasikh: "ليتَ", ism: "الغائبَ", ism_decoy: "الغائبُ", khabar: "عائدٌ", khabar_decoy: "عائداً" },
        { nasikh: "لعلَّ", ism: "النصرَ", ism_decoy: "النصرُ", khabar: "قريبٌ", khabar_decoy: "قريباً" },
        { nasikh: "كأنَّ", ism: "البيتَ", ism_decoy: "البيتُ", khabar: "قصرٌ", khabar_decoy: "قصراً" },
        { nasikh: "إنَّ", ism: "الكتابينِ", ism_decoy: "الكتابانِ", khabar: "مفيدانِ", khabar_decoy: "مفيدينِ" },
        { nasikh: "لعلَّ", ism: "المسافرينِ", ism_decoy: "المسافرانِ", khabar: "قادمانِ", khabar_decoy: "قادمينِ" },
        { nasikh: "إنَّ", ism: "المؤمنينَ", ism_decoy: "المؤمنونَ", khabar: "إخوةٌ", khabar_decoy: "إخوةً" },
        { nasikh: "لعلَّ", ism: "المتفوّقينَ", ism_decoy: "المتفوّقونَ", khabar: "مكرّمونَ", khabar_decoy: "مكرّمينَ" },
        { nasikh: "إنَّ", ism: "المعلماتِ", ism_decoy: "المعلماتُ", khabar: "مخلصاتٌ", khabar_decoy: "مخلصاتٍ" },
        { nasikh: "لعلَّ", ism: "الأصدقاءَ", ism_decoy: "الأصدقاءُ", khabar: "أوفياءُ", khabar_decoy: "أوفياءَ" }
    ],
    3: [ // المستوى الثالث: كان وأخواتها (ترفع الاسم وتنصب الخبر)
        { nasikh: "كانَ", ism: "الجوُّ", ism_decoy: "الجوَّ", khabar: "رائعاً", khabar_decoy: "رائعٌ" },
        { nasikh: "أصبحَ", ism: "الماءُ", ism_decoy: "الماءَ", khabar: "ثلجاً", khabar_decoy: "ثلجٌ" },
        { nasikh: "صارَ", ism: "الدقيقُ", ism_decoy: "الدقيقَ", khabar: "خبزاً", khabar_decoy: "خبزٌ" },
        { nasikh: "ليسَ", ism: "الكذبُ", ism_decoy: "الكذبَ", khabar: "نافعاً", khabar_decoy: "نافعٌ" },
        { nasikh: "صارَ", ism: "اللاعبانِ", ism_decoy: "اللاعبينِ", khabar: "ماهرينِ", khabar_decoy: "ماهرانِ" },
        { nasikh: "كانَ", ism: "القطارانِ", ism_decoy: "القطارينِ", khabar: "مسرعينِ", khabar_decoy: "مسرعانِ" },
        { nasikh: "كانَ", ism: "المسلمونَ", ism_decoy: "المسلمينَ", khabar: "صادقينَ", khabar_decoy: "صادقونَ" },
        { nasikh: "صارَ", ism: "المجتهدونَ", ism_decoy: "المجتهدينَ", khabar: "ناجحينَ", khabar_decoy: "ناجحونَ" },
        { nasikh: "أصبحتِ", ism: "الشجراتُ", ism_decoy: "الشجراتِ", khabar: "مثمراتٍ", khabar_decoy: "مثمراتٌ" },
        { nasikh: "ظلَّ", ism: "الأصدقاءُ", ism_decoy: "الأصدقاءَ", khabar: "أوفياءَ", khabar_decoy: "أوفياءُ" }
    ],
    4: [ // المستوى الرابع: مراجعة شاملة (مزيج من النواسخ)
        { nasikh: "لعلَّ", ism: "المخترعَ", ism_decoy: "المخترعُ", khabar: "مكرّمٌ", khabar_decoy: "مكرّماً" },
        { nasikh: "كأنَّ", ism: "القمرَ", ism_decoy: "القمرُ", khabar: "مصباحٌ", khabar_decoy: "مصباحاً" },
        { nasikh: "صارَ", ism: "الطعامُ", ism_decoy: "الطعامَ", khabar: "جاهزاً", khabar_decoy: "جاهزٌ" },
        { nasikh: "إنَّ", ism: "ذا", ism_decoy: "ذو", khabar: "الأدبِ محبوبٌ", khabar_decoy: "الأدبِ محبوباً" },
        { nasikh: "أضحتِ", ism: "النتائجُ", ism_decoy: "النتائجَ", khabar: "مبهرةً", khabar_decoy: "مبهرةٌ" },
        { nasikh: "ليتَ", ism: "الظلمَ", ism_decoy: "الظلمُ", khabar: "زائلٌ", khabar_decoy: "زائلاً" },
        { nasikh: "إنَّ", ism: "المؤمناتِ", ism_decoy: "المؤمناتُ", khabar: "قانتاتٌ", khabar_decoy: "قانتاتٍ" },
        { nasikh: "أصبحَ", ism: "العصفورُ", ism_decoy: "العصفورَ", khabar: "مغرّداً", khabar_decoy: "مغرّدٌ" },
        { nasikh: "ليسَ", ism: "التواضعُ", ism_decoy: "التواضعَ", khabar: "ضعفاً", khabar_decoy: "ضعفٌ" },
        { nasikh: "ظلَّ", ism: "الحقُّ", ism_decoy: "الحقَّ", khabar: "واضحاً", khabar_decoy: "واضحٌ" },
        { nasikh: "كانَ", ism: "الخلفاءُ", ism_decoy: "الخلفاءَ", khabar: "راشدينَ", khabar_decoy: "راشدونَ" },
        { nasikh: "صارَ", ism: "البرتقالُ", ism_decoy: "البرتقالَ", khabar: "عصيراً", khabar_decoy: "عصيرٌ" }
    ]
};



// ════════════════════════════════════════════════
// التغذية الراجعة لكل قاعدة
// ════════════════════════════════════════════════
const RULE_FEEDBACK = {
    1: '⭐ قاعدة ذهبية: مبتدأ وخبر توأمان في رفع ',
    2: '📗 قاعدة ذهبية: (إنَّ وأخواتها) حروف قوية، تنصب مبتدأ، وترفع خبر.',
    3: '📙 قاعدة ذهبية: (كان وأخواتها) أفعال مغيرة، ترفع مبتدأ وتنصب خبر (بالفتحة/بالياء/بالكسرة).',
    4: '🏆 ساحة عمالقة: قارن بين تأثير حرف (إنَّ) وفعل (كانَ) قبل اختيار. مبتدأ منصوب مع إنَّ، وخبر منصوب مع كانَ.'
};



// ════════════════════════════════════════════════
// حالة اللعبة
// ════════════════════════════════════════════════
let currentLevel = 1;
let currentExIndex = 0;
let score = 0;
let errorCount = 0;
let sessionCoins = 0;
let draggedPiece = null;
let currentValidate = null;
let currentRuleLevel = 1;
let exitContext = 'game';

// متغيرات الـ 3D الجديدة
let selected3DPiece = null;
let puzzleSlots = [];
let puzzlePieces = [];
let isDragging3D = false;
let dragPlane = null;   // يُهيَّأ بعد تحميل A-Frame
let raycaster = null;   // يُهيَّأ بعد تحميل A-Frame
let mouse = null;       // يُهيَّأ بعد تحميل A-Frame

/**
 * دالة مساعدة لرسم نص عربي واضح على Canvas لتحويله لقوام ثلاثي الأبعاد
 * تضمن تحميل الخط قبل الرسم (مهم جداً في بيئة Streamlit و iframe)
 */
function createTextTexture(text, color = "#1A237E", bgColor = "#FFFFFF") {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    // خلفية
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // استخدام Cairo مع fallback لـ Arial لضمان العمل في كل البيئات
    const fontStack = "'Cairo', 'Arial', sans-serif";
    ctx.fillStyle = color;
    ctx.font = `900 115px ${fontStack}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // رسم النص
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL();
}

/**
 * تحميل مسبق للخط لضمان ظهور النص صحيحاً (مهم لبيئة Streamlit)
 */
function preloadFont() {
    return document.fonts.load("900 20px 'Cairo'").catch(() => { });
}

// إضافة المستمعات الأساسية مرة واحدة فقط عند التحميل
window.addEventListener('mousemove', on3DMouseMove);
window.addEventListener('mouseup', on3DDragEnd);

/**
 * تعطيل الدوران عند التفاعل مع القطع
 */
function setLookControls(enabled) {
    const cam = document.getElementById('camera');
    if (cam) cam.setAttribute('look-controls', `enabled: ${enabled}`);
}

let playerName = '';
let playerAvatar = AVATARS[0];
let selectedAvIdx = 0;

let timerInterval = null;
let elapsedSeconds = 0;
let gameMode = 'Standard'; // 'Standard' or 'VR'

const TOTAL_LEVELS = 4;
function getExamplesForCurrentLevel() {
    return ALL_LEVELS_DATA[currentLevel] || ALL_LEVELS_DATA[1];
}


const LS_LB_KEY = 'nawasikh_leaderboard';
const LS_PL_KEY = 'nawasikh_players';

// ════════════════════════════════════════════════
// Init
// ════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    buildAvatarGrid();

    // أزرار التسجيل
    document.getElementById('start-btn').addEventListener('click', onStartClick);
    document.getElementById('show-leaderboard-btn').addEventListener('click', () => showLeaderboard());
    document.getElementById('player-name-input').addEventListener('keydown', e => { if (e.key === 'Enter') onStartClick(); });
    document.getElementById('player-name-input').addEventListener('input', onNameInput);
    document.getElementById('show-teacher-btn').addEventListener('click', requestTeacherAccess);
    document.getElementById('submit-password-btn').addEventListener('click', submitTeacherPassword);
    document.getElementById('cancel-password-btn').addEventListener('click', cancelTeacherPassword);
    document.getElementById('teacher-password-input').addEventListener('keydown', e => { if (e.key === 'Enter') submitTeacherPassword(); });

    // داخل اللعبة
    document.getElementById('next-btn').addEventListener('click', goToNext);
    document.getElementById('in-game-exit-btn').addEventListener('click', () => requestExit('game'));
    document.getElementById('start-level-btn').addEventListener('click', startActualLevel);


    // شاشة إكمال المستوى
    document.getElementById('continue-btn').addEventListener('click', onContinue);
    document.getElementById('lc-exit-btn').addEventListener('click', () => requestExit('level-complete'));

    // تأكيد / إلغاء الخروج
    document.getElementById('confirm-exit-btn').addEventListener('click', confirmExit);
    document.getElementById('cancel-exit-btn').addEventListener('click', cancelExit);

    // قائمة الإنجاز
    document.getElementById('close-leaderboard-btn').addEventListener('click', () =>
        document.getElementById('leaderboard-screen').classList.add('hidden'));
    document.getElementById('lb-exit-btn').addEventListener('click', () => goToRegister());

    // شاشة اختيار النمط
    document.getElementById('mode-standard').addEventListener('click', () => setGameMode('Standard'));
    document.getElementById('mode-vr').addEventListener('click', () => setGameMode('VR'));
    document.getElementById('back-to-reg-btn').addEventListener('click', () => {
        document.getElementById('mode-selection-screen').classList.add('hidden');
        document.getElementById('register-screen').classList.remove('hidden');
    });

    document.getElementById('close-teacher-btn').addEventListener('click', () => {
        document.getElementById('teacher-dashboard-screen').classList.add('hidden');
    });
    document.getElementById('clear-data-btn').addEventListener('click', clearAllData);

    window.addEventListener('contextmenu', e => e.preventDefault());

    // تهيئة كائنات THREE بعد تحميل A-Frame (مهم لبيئة Streamlit)
    const sceneEl = document.querySelector('a-scene');
    if (sceneEl) {
        const initThree = () => {
            if (typeof THREE !== 'undefined') {
                dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 3);
                raycaster = new THREE.Raycaster();
                mouse = new THREE.Vector2();
            }
        };
        if (sceneEl.hasLoaded) {
            initThree();
        } else {
            sceneEl.addEventListener('loaded', initThree);
        }
    }
});

// ════════════════════════════════════════════════
// شبكة الأفاتارات
// ════════════════════════════════════════════════
function buildAvatarGrid() {
    const grid = document.getElementById('avatar-grid');
    AVATARS.forEach((av, i) => {
        const el = document.createElement('div');
        el.className = 'avatar-option' + (i === 0 ? ' selected' : '');
        el.textContent = av;
        el.addEventListener('click', () => {
            document.querySelectorAll('.avatar-option').forEach(a => a.classList.remove('selected'));
            el.classList.add('selected');
            selectedAvIdx = i; playerAvatar = av;
        });
        grid.appendChild(el);
    });
}

// ════════════════════════════════════════════════
// اقتراح بيانات اللاعب العائد
// ════════════════════════════════════════════════
function onNameInput() {
    const name = document.getElementById('player-name-input').value.trim();
    const ret = document.getElementById('returning-player');
    if (!name) { ret.classList.add('hidden'); return; }

    const profile = getPlayerProfile(name);
    if (!profile) { ret.classList.add('hidden'); return; }

    const badgesHTML = (profile.badges || []).slice(0, 5).map(id => {
        const b = BADGES.find(x => x.id === id); return b ? `<span class="ret-badge-chip">${b.icon}</span>` : '';
    }).join('');

    ret.innerHTML = `
        <div class="ret-title">مرحباً بعودتك!</div>
        <div class="ret-row">
            <span class="ret-av">${profile.avatar}</span>
            <div class="ret-info">
                <div class="ret-name">${profile.name}</div>
                <div class="ret-stats">🎮 ${profile.totalGames} لعبة | 🪙 ${profile.totalCoins} عملة | 🏅 أفضل: ${profile.bestScore} نقطة</div>
                <div class="ret-badges">${badgesHTML}</div>
            </div>
        </div>`;
    ret.classList.remove('hidden');

    const avIdx = AVATARS.indexOf(profile.avatar);
    if (avIdx !== -1) {
        document.querySelectorAll('.avatar-option').forEach(a => a.classList.remove('selected'));
        document.querySelectorAll('.avatar-option')[avIdx].classList.add('selected');
        selectedAvIdx = avIdx; playerAvatar = profile.avatar;
    }
}

// ════════════════════════════════════════════════
// بدء اللعب
// ════════════════════════════════════════════════
function onStartClick() {
    const name = document.getElementById('player-name-input').value.trim();
    if (!name) {
        const inp = document.getElementById('player-name-input');
        inp.focus(); inp.style.borderColor = '#EF5350';
        setTimeout(() => inp.style.borderColor = '', 1200);
        return;
    }
    playerName = name;
    playerAvatar = AVATARS[selectedAvIdx];

    // بدلاً من بدء اللعب فوراً، ننتقل لشاشة اختيار النمط
    gsap.to('#register-screen', {
        opacity: 0, duration: 0.4, onComplete: () => {
            document.getElementById('register-screen').classList.add('hidden');
            document.getElementById('register-screen').style.opacity = '1';

            // تحديث معلومات اللاعب في واجهة اختيار النمط
            document.getElementById('mode-avatar-display').textContent = playerAvatar;
            document.getElementById('mode-name-display').textContent = playerName;

            document.getElementById('mode-selection-screen').classList.remove('hidden');
            gsap.from('#mode-selection-screen .overlay-content', { scale: 0.8, opacity: 0, duration: 0.5, ease: 'back.out(1.5)' });
        }
    });
}

function setGameMode(mode) {
    gameMode = mode;
    document.getElementById('mode-selection-screen').classList.add('hidden');
    initGameSession();
}


// ════════════════════════════════════════════════
// تهيئة الجلسة
// ════════════════════════════════════════════════
function initGameSession() {
    score = 0; errorCount = 0; sessionCoins = 0;
    currentLevel = 1; currentExIndex = 0; elapsedSeconds = 0;
    document.getElementById('header-avatar').textContent = playerAvatar;
    document.getElementById('header-name').textContent = playerName;
    document.getElementById('coins-display').textContent = getPlayerProfile(playerName)?.totalCoins || 0;
    updateHeader();
    startTimer();
    // انتظار تحميل الخط أولاً لضمان ظهور النص الصحيح على Streamlit
    preloadFont().then(() => loadExample());
}

// ════════════════════════════════════════════════
// المؤقت
// ════════════════════════════════════════════════
function startTimer() { clearInterval(timerInterval); elapsedSeconds = 0; renderTimer(); timerInterval = setInterval(() => { elapsedSeconds++; renderTimer(); }, 1000); }
function stopTimer() { clearInterval(timerInterval); }
function renderTimer() {
    const m = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
    const s = String(elapsedSeconds % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${m}:${s}`;
}
function formatTime(sec) { return String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0'); }

// ════════════════════════════════════════════════
// تحديث الهيدر
// ════════════════════════════════════════════════
function updateHeader() {
    const examples = getExamplesForCurrentLevel();
    const examplesCount = examples.length;

    // تحديث الأفاتار والاسم في الهيدر
    document.getElementById('header-avatar').textContent = playerAvatar;
    document.getElementById('header-name').textContent = playerName;

    // تحديث الإحصائيات مع التأكد من مطابقة الـ IDs في HTML
    const scoreEl = document.getElementById('score');
    if (scoreEl) scoreEl.innerText = score;

    const levelEl = document.getElementById('level');
    if (levelEl) levelEl.innerText = currentLevel;

    const coinsEl = document.getElementById('coins-display');
    if (coinsEl) coinsEl.innerText = sessionCoins;

    const errorsEl = document.getElementById('errors');
    if (errorsEl) errorsEl.innerText = errorCount;

    // تحديث شريط التقدم
    const pct = (currentExIndex / examplesCount) * 100;
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = `${pct}%`;

    const txt = document.getElementById('progress-text');
    if (txt) txt.innerText = `${currentExIndex + 1} / ${examplesCount}`;
}


// ════════════════════════════════════════════════
// بناء السؤال
// ════════════════════════════════════════════════
function buildQuestion(ex) {
    // تحديد القاعدة بناءً على ما إذا كان هناك ناسخ في المثال
    let type = 1; // افتراضياً مبتدأ وخبر
    if (ex.nasikh) {
        // التحقق من نوع الناسخ (إنّ أو كان)
        const innaSisters = ["إنَّ", "أنَّ", "ليتَ", "لعلَّ", "كأنَّ", "لكنَّ"];
        type = innaSisters.some(s => ex.nasikh.includes(s)) ? 2 : 3;
    }

    switch (type) {
        case 1:
            currentRuleLevel = 1;
            return {
                instruction: `🏰 <strong>المستوى الأول: بوابة الجملة الاسمية</strong><br>
                <small>أهلاً بك يا بطل! لنضبط المبتدأ والخبر لنبني البيت الأصلي "الجملة الاسمية".</small><br>
                🎯 <strong>المطلوب:</strong> اختر علامة الرفع الصحيحة (الضمة، الألف، الواو).`,
                pieces: shuffle([{ text: ex.ism, type: "MUBTADA" }, { text: ex.khabar, type: "KHABAR" }, { text: ex.ism_decoy, type: "DECOY" }, { text: ex.khabar_decoy, type: "DECOY" }]),
                slotCount: 2, validate: seq => seq[0] === "MUBTADA" && seq[1] === "KHABAR"
            };

        case 2:
            currentRuleLevel = 2;
            return {
                instruction: `🔵 <strong>المستوى الثاني: بوابة "إنَّ" وأخواتها</strong><br>
                <small>أهلاً بك يا بطل! هل أنت مستعد لتغيير موازين الجملة الاسمية؟ الحروف الناسخة تنتظر ذكاءك.</small><br>
                🎯 <strong>المطلوب:</strong> اختر الكلمة الصحيحة التي تلي الحرف الناسخ لتستقر الجملة.`,
                pieces: shuffle([{ text: ex.nasikh, type: "NASIKH" }, { text: ex.ism, type: "ISM" }, { text: ex.khabar, type: "KHABAR" }, { text: ex.ism_decoy, type: "DECOY" }, { text: ex.khabar_decoy, type: "DECOY" }]),
                slotCount: 3, validate: seq => seq[0] === "NASIKH" && seq[1] === "ISM" && seq[2] === "KHABAR"
            };
        case 3:
            currentRuleLevel = 3;
            return {
                instruction: `🟠 <strong>المستوى الثالث: حصن "كانَ" وأخواتها</strong><br>
                <small>حصن "كان" يحتاج إلى قائد يتقن ضبط الأواخر. هل ستكون أنت هذا القائد؟</small><br>
                🎯 <strong>المطلوب:</strong> وازن الجملة باختيار "خبر كان" الصحيح. العلامات الإعرابية هي مفتاح الفوز!`,
                pieces: shuffle([{ text: ex.nasikh, type: "NASIKH" }, { text: ex.ism, type: "ISM" }, { text: ex.khabar, type: "KHABAR" }, { text: ex.ism_decoy, type: "DECOY" }, { text: ex.khabar_decoy, type: "DECOY" }]),
                slotCount: 3, validate: seq => seq[0] === "NASIKH" && seq[1] === "ISM" && seq[2] === "KHABAR"
            };
        case 4:
            currentRuleLevel = 4;
            return {
                instruction: `🟣 <strong>المستوى الرابع: التحدي المختلط (ساحة العمالقة)</strong><br>
                <small>لا مجال للتردد! هنا تختلط الحروف بالأفعال، وتظهر الكلمات الممنوعة من الصرف لتختبر تركيزك.</small><br>
                🎯 <strong>المطلوب:</strong> ميز بين "إنَّ" و "كانَ" في لمح البصر وانتبه للكلمات الممنوعة من الصرف!`,
                pieces: shuffle([{ text: ex.nasikh, type: "NASIKH" }, { text: ex.ism, type: "ISM" }, { text: ex.khabar, type: "KHABAR" }, { text: ex.ism_decoy, type: "DECOY" }, { text: ex.khabar_decoy, type: "DECOY" }]),
                slotCount: 3, validate: seq => seq[0] === "NASIKH" && seq[1] === "ISM" && seq[2] === "KHABAR"
            };
    }
}



// ════════════════════════════════════════════════
// تحميل السؤال
// ════════════════════════════════════════════════
function loadExample() {
    if (currentExIndex === 0) {
        showLevelIntro(currentLevel);
        return;
    }
    continueLoadingExample();
}

function showLevelIntro(level) {
    stopTimer();
    const data = LEVEL_INTRO_DATA[level];
    document.getElementById('intro-icon').textContent = data.icon;
    document.getElementById('intro-title').textContent = data.title;
    document.getElementById('intro-subtitle').textContent = data.subtitle;
    document.getElementById('intro-motivation').textContent = data.motivation;
    document.getElementById('intro-task').textContent = data.task;
    document.getElementById('intro-rule').textContent = data.rule;

    // تحديث معلومات اللاعب في واجهة التقديم
    document.getElementById('intro-avatar-display').textContent = playerAvatar;
    document.getElementById('intro-name-display').textContent = playerName;

    const screen = document.getElementById('level-intro-screen');
    screen.classList.remove('hidden');
    gsap.from('#level-intro-screen .overlay-content', { scale: 0.8, opacity: 0, duration: 0.5, ease: 'back.out(1.5)' });

    // إذا كنا في وضع VR: عرض زر "ابدأ" ثلاثي الأبعاد أيضاً
    if (isInVRMode()) {
        show3DLevelIntroButton();
    }
}

function show3DLevelIntroButton() {
    const world = document.getElementById('puzzle-world');
    if (!world) return;

    // إزالة أي زر قديم
    const oldBtn = document.getElementById('vr-start-btn');
    if (oldBtn) oldBtn.parentNode.removeChild(oldBtn);

    const btnEl = document.createElement('a-entity');
    btnEl.setAttribute('id', 'vr-start-btn');
    btnEl.setAttribute('position', '0 1.5 -2'); // أمام المستخدم مباشرة

    const texture = createFeedbackTexture([
        { text: 'إضغط هنا للبدء 🚀', bold: true }
    ], '#4CAF50', '#FFFFFF');

    const img = document.createElement('a-image');
    img.setAttribute('src', texture);
    img.setAttribute('width', '2.5');
    img.setAttribute('height', '1');
    img.setAttribute('class', 'clickable-vr-start');
    img.setAttribute('material', 'shader: flat; transparent: true');

    // إضافة تأثير نبض للزر
    img.setAttribute('animation', 'property: scale; dir: alternate; dur: 1000; loop: true; to: 1.1 1.1 1.1');

    btnEl.appendChild(img);
    btnEl.addEventListener('click', () => {
        btnEl.parentNode.removeChild(btnEl);
        startActualLevel();
    });

    world.appendChild(btnEl);
}

function startActualLevel() {
    document.getElementById('level-intro-screen').classList.add('hidden');
    startTimer();
    continueLoadingExample();
}

function continueLoadingExample() {
    const examples = getExamplesForCurrentLevel();
    const ex = examples[currentExIndex];

    const q = buildQuestion(ex);
    currentValidate = q.validate;



    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('instruction').innerHTML = q.instruction;

    // إخفاء/إظهار الحاويات حسب النمط
    if (gameMode === 'Standard') {
        document.getElementById('standard-game-zone').classList.remove('hidden');
        document.getElementById('three-container').classList.add('hidden');
        loadStandardPuzzle(q);
    } else {
        document.getElementById('standard-game-zone').classList.add('hidden');
        document.getElementById('three-container').classList.remove('hidden');
        loadVRPuzzle(q);
    }

    updateHeader();
}

/**
 * تحميل الألغاز للنمط العادي (2D)
 */
function loadStandardPuzzle(q) {
    const slotsCont = document.getElementById('slots-container');
    const piecesCont = document.getElementById('pieces-container');
    slotsCont.innerHTML = '';
    piecesCont.innerHTML = '';

    // إنشاء الفتحات
    for (let i = 0; i < q.slotCount; i++) {
        const slot = document.createElement('div');
        slot.className = `slot puzzle-slot puzzle-${q.slotCount}-${i}`;
        slot.dataset.index = i;
        slot.dataset.label = ['أولاً', 'ثانياً', 'ثالثاً'][i];

        slot.addEventListener('dragover', e => e.preventDefault());
        slot.addEventListener('drop', () => dropOnSlot(slot));
        slotsCont.appendChild(slot);
    }

    // إنشاء القطع
    q.pieces.forEach((pData, i) => {
        const piece = createPuzzlePiece(pData, q.slotCount, i);
        piecesCont.appendChild(piece);
    });
}

/**
 * تحميل الألغاز لنمط الـ VR (3D)
 */
function loadVRPuzzle(q) {
    const world = document.getElementById('puzzle-world');
    world.innerHTML = ''; // مسح المشهد السابق

    puzzleSlots = [];
    puzzlePieces = [];
    selected3DPiece = null;

    const slotSpacing = 2.6;
    const totalWidth = (q.slotCount - 1) * slotSpacing;

    // 1. إنشاء الفتحات (Slots)
    for (let i = 0; i < q.slotCount; i++) {
        const slotEl = document.createElement('a-entity');
        slotEl.setAttribute('geometry', { primitive: 'plane', width: 2.4, height: 1.1 });
        slotEl.setAttribute('material', { color: '#1A237E', opacity: 0.5, transparent: true, side: 'double' });

        slotEl.addEventListener('mouseenter', () => setLookControls(false));
        slotEl.addEventListener('mouseleave', () => setLookControls(true));

        const xPos = (totalWidth / 2) - (i * slotSpacing);
        slotEl.setAttribute('position', `${xPos} 2.5 -3.5`);
        slotEl.setAttribute('class', 'clickable-slot');
        slotEl.dataset.index = i;

        const textLabel = document.createElement('a-text');
        textLabel.setAttribute('value', ['أولاً', 'ثانياً', 'ثالثاً'][i]);
        textLabel.setAttribute('align', 'center');
        textLabel.setAttribute('position', '0 0.6 0.05');
        textLabel.setAttribute('scale', '0.8 0.8 0.8');
        textLabel.setAttribute('color', '#1A237E');
        slotEl.appendChild(textLabel);

        slotEl.addEventListener('click', () => onSlotClick(i));
        world.appendChild(slotEl);
        puzzleSlots.push({ el: slotEl, occupied: null });
    }

    // 2. إنشاء القطع (Pieces)
    const pieceSpacing = 2.5;
    const piecesTotalWidth = (q.pieces.length - 1) * pieceSpacing;

    q.pieces.forEach((data, idx) => {
        const pieceEl = document.createElement('a-entity');
        pieceEl.setAttribute('geometry', { primitive: 'box', width: 2.2, height: 1.0, depth: 0.25 });

        const textTexture = createTextTexture(data.text, "#000000", "#FFFFFF");
        pieceEl.setAttribute('material', { src: textTexture, color: '#FFFFFF' });

        pieceEl.addEventListener('mouseenter', () => setLookControls(false));
        pieceEl.addEventListener('mouseleave', () => setLookControls(true));

        const xPos = (piecesTotalWidth / 2) - (idx * pieceSpacing);
        const yBase = 0.4;
        pieceEl.setAttribute('position', `${xPos} ${yBase} -3`);
        pieceEl.dataset.homeX = xPos;
        pieceEl.dataset.homeY = yBase;
        pieceEl.dataset.homeZ = -3;

        pieceEl.setAttribute('class', 'clickable-piece');
        pieceEl.dataset.type = data.type;
        pieceEl.dataset.text = data.text;

        const bob = gsap.to(pieceEl.object3D.position, {
            y: yBase + 0.15, duration: 1.5 + Math.random(),
            repeat: -1, yoyo: true, ease: "sine.inOut"
        });
        pieceEl.animationInstance = bob;

        pieceEl.addEventListener('mousedown', (e) => start3DDrag(pieceEl, e));
        world.appendChild(pieceEl);
        puzzlePieces.push(pieceEl);
    });

    // إضافة الأفاتار كمرشد
    const guide = document.createElement('a-entity');
    guide.setAttribute('position', '3 2 -4');
    const avatarTexture = createTextTexture(playerAvatar, '#000000', 'rgba(0,0,0,0)');
    const guideImg = document.createElement('a-image');
    guideImg.setAttribute('src', avatarTexture);
    guideImg.setAttribute('width', '1');
    guideImg.setAttribute('height', '0.5');
    guideImg.setAttribute('material', 'shader: flat; transparent: true');
    guideImg.setAttribute('animation', 'property: position; dir: alternate; dur: 2000; loop: true; to: 0 0.3 0');
    guide.appendChild(guideImg);
    world.appendChild(guide);

    setupVRHands();
}

// ════════════════════════════════════════════════
// كشف وضع VR
// ════════════════════════════════════════════════
function isInVRMode() {
    const scene = document.querySelector('a-scene');
    return scene && scene.is && scene.is('vr-mode');
}

// ════════════════════════════════════════════════
// رسم لوحة عربية على Canvas (تدعم العربي بالكامل)
// ════════════════════════════════════════════════
function createFeedbackTexture(lines, bgColor, textColor) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // خلفية بزوايا مستديرة
    ctx.fillStyle = bgColor;
    const r = 40;
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.lineTo(canvas.width - r, 0);
    ctx.quadraticCurveTo(canvas.width, 0, canvas.width, r);
    ctx.lineTo(canvas.width, canvas.height - r);
    ctx.quadraticCurveTo(canvas.width, canvas.height, canvas.width - r, canvas.height);
    ctx.lineTo(r, canvas.height);
    ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - r);
    ctx.lineTo(0, r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.closePath();
    ctx.fill();

    // حدود مضيئة
    ctx.strokeStyle = textColor;
    ctx.lineWidth = 6;
    ctx.stroke();

    // رسم النصوص (كل سطر على حدة)
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const lineHeight = canvas.height / (lines.length + 1);
    lines.forEach((line, i) => {
        ctx.font = line.bold ? '900 64px Cairo, sans-serif' : '700 44px Cairo, sans-serif';
        ctx.fillText(line.text, canvas.width / 2, lineHeight * (i + 1));
    });

    return canvas.toDataURL();
}

// ════════════════════════════════════════════════
// عرض لوحة تغذية راجعة داخل المشهد ثلاثي الأبعاد
// ════════════════════════════════════════════════
function show3DFeedback(title, isSuccess, duration, extraLines = []) {
    // إزالة أي لوحة سابقة
    const oldWorld = document.getElementById('vr-feedback-panel');
    if (oldWorld && oldWorld.parentNode) oldWorld.parentNode.removeChild(oldWorld);

    const bgColor = '#FFFFFF';
    const textColor = isSuccess ? '#26A69A' : '#EF5350';
    const emoji = isSuccess ? '✅' : '❌';

    let lines = [];
    if (extraLines.length > 0) {
        lines = extraLines;
    } else {
        lines = [{ text: emoji + ' ' + title, bold: true }];
    }

    const texture = createFeedbackTexture(lines, bgColor, textColor);

    const feedbackEl = document.createElement('a-entity');
    feedbackEl.setAttribute('id', 'vr-feedback-panel');

    // نربطها بالكاميرا مباشرة (HUD) - تظهر دائماً أعلى مجال الرؤية
    feedbackEl.setAttribute('position', '0 0.52 -1.2');

    const img = document.createElement('a-image');
    img.setAttribute('src', texture);
    img.setAttribute('width', extraLines.length > 5 ? '1.8' : '1.5');
    img.setAttribute('height', extraLines.length > 5 ? '1.2' : '1.0');
    img.setAttribute('material', 'shader: flat; transparent: true; depthTest: false; side: double');
    feedbackEl.appendChild(img);

    // إضافة للكاميرا مباشرة (HUD)
    const camera = document.getElementById('camera');
    camera.appendChild(feedbackEl);

    // أنيميشن ظهور
    feedbackEl.object3D.scale.set(0, 0, 0);
    gsap.to(feedbackEl.object3D.scale, { x: 1, y: 1, z: 1, duration: 0.4, ease: 'back.out(2)' });

    // إزالة بعد المدة
    setTimeout(() => {
        if (feedbackEl.parentNode) {
            gsap.to(feedbackEl.object3D.scale, {
                x: 0, y: 0, z: 0, duration: 0.3, ease: 'power2.in',
                onComplete: () => {
                    if (feedbackEl.parentNode) feedbackEl.parentNode.removeChild(feedbackEl);
                }
            });
        }
    }, duration);
}

// ════════════════════════════════════════════════
// عرض شاشة إكمال المستوى داخل VR
// ════════════════════════════════════════════════
function show3DLevelComplete(level) {
    const world = document.getElementById('puzzle-world');
    if (!world) return;
    const data = LEVEL_COMPLETE_DATA[level];

    const texture = createFeedbackTexture([
        { text: data.emoji + ' ' + data.title, bold: true },
        { text: `النقاط: ${score}  |  الأخطاء: ${errorCount}  |  ${formatTime(elapsedSeconds)}`, bold: false },
        { text: '⏳ سيتم المتابعة تلقائياً...', bold: false }
    ], '#1A237E', '#FFFFFF');

    const panel = document.createElement('a-entity');
    panel.setAttribute('id', 'vr-level-panel');
    panel.setAttribute('position', '0 2.5 -3');

    const img = document.createElement('a-image');
    img.setAttribute('src', texture);
    img.setAttribute('width', '6');
    img.setAttribute('height', '3');
    img.setAttribute('material', 'shader: flat; transparent: true');
    panel.appendChild(img);

    world.appendChild(panel);
    gsap.from(panel.object3D.scale, { x: 0, y: 0, z: 0, duration: 0.6, ease: 'back.out(2)' });
}

function remove3DLevelComplete() {
    const panel = document.getElementById('vr-level-panel');
    if (panel && panel.parentNode) {
        gsap.to(panel.object3D.scale, {
            x: 0, y: 0, z: 0, duration: 0.3,
            onComplete: () => { if (panel.parentNode) panel.parentNode.removeChild(panel); }
        });
    }
}

// دالة النقر على الفتحة (للـ VR وللماوس)
function onSlotClick(slotIndex) {
    if (selected3DPiece) {
        onSlotSnap(puzzleSlots[slotIndex], selected3DPiece);
        selected3DPiece = null;
    }
}

/**
 * إعداد أيدي الـ VR للالتقاط (VR Hand Logic)
 */
// متغير لمنع تكرار مستمعات اليد
let handsSetupDone = false;
function setupVRHands() {
    if (handsSetupDone) return;
    const hands = [document.getElementById('leftHand'), document.getElementById('rightHand')];
    if (hands[0] || hands[1]) handsSetupDone = true;

    hands.forEach(hand => {
        if (!hand) return;

        hand.addEventListener('triggerdown', (evt) => {
            const raycaster = hand.components.raycaster;
            const intersected = raycaster.intersectedEls[0];

            if (intersected && intersected.classList.contains('clickable-piece')) {
                // منع الإمساك إذا كانت القطعة مقفولة
                if (intersected.dataset.locked === 'true') return;

                const object = intersected;
                object.setAttribute('data-vr-held', 'true');

                // تحريرها من أي مربع كانت فيه
                const oldSlot = puzzleSlots.find(s => s.occupied === object);
                if (oldSlot) oldSlot.occupied = null;

                const handObj = hand.object3D;
                const pieceObj = object.object3D;

                handObj.attach(pieceObj);
                pieceObj.rotation.set(0, 0, 0);
                playSnap();
            }
        });


        // عند إفلات الزر (Trigger Up) - منطق onRelease
        hand.addEventListener('triggerup', (evt) => {
            const world = document.getElementById('puzzle-world').object3D;
            const pieces = document.querySelectorAll('.clickable-piece');

            pieces.forEach(piece => {
                if (piece.getAttribute('data-vr-held') === 'true' && piece.object3D.parent === hand.object3D) {
                    piece.removeAttribute('data-vr-held');
                    piece.setAttribute('material', 'color', '#FFFFFF');

                    // إرجاع الملكية للمشهد (object.parent = null)
                    world.attach(piece.object3D);

                    // التحقق من الالتصاق (Snap Logic)
                    checkVRSnap(piece);
                }
            });
        });
    });
}

function checkVRSnap(piece) {
    let foundSlot = null;
    let minDistance = 0.8;

    puzzleSlots.forEach(slot => {
        const slotPos = slot.el.object3D.position;
        const piecePos = piece.object3D.position;
        const dist = slotPos.distanceTo(piecePos);

        if (dist < minDistance) {
            foundSlot = slot;
            minDistance = dist;
        }
    });

    if (foundSlot) {
        onSlotSnap(foundSlot, piece);
    } else {
        // إرجاع القطعة لمكانها الأصلي
        gsap.to(piece.object3D.position, { y: 0.4, z: -3, duration: 0.5 });
    }
}

function start3DDrag(el, e) {
    if (el.dataset.locked === 'true') return; // لا تسمح بسحبها إذا كانت مقفولة

    if (el.animationInstance) el.animationInstance.pause();

    // إذا كانت القطعة خارجة من فتحة، نحرر هذه الفتحة ونعيد القطعة للمشهد العام
    const oldSlot = puzzleSlots.find(s => s.occupied === el);
    if (oldSlot) {
        oldSlot.occupied = null;
        document.getElementById('puzzle-world').object3D.attach(el.object3D);
    }

    selected3DPiece = el;
    isDragging3D = true;
    setLookControls(false);
    el.setAttribute('material', 'color', '#FFEB3B');
    gsap.to(el.object3D.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.2 });
    playSnap();
}

function on3DMouseMove(e) {
    if (!isDragging3D || !selected3DPiece) return;
    // التأكد من تهيئة الكائنات قبل استخدامها (لبيئة Streamlit)
    if (!mouse || !raycaster || !dragPlane) return;

    const scene = document.querySelector('a-scene');
    const rect = scene.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    if (scene.camera) {
        raycaster.setFromCamera(mouse, scene.camera);

        let intersection = new THREE.Vector3();
        if (raycaster.ray.intersectPlane(dragPlane, intersection)) {
            selected3DPiece.object3D.position.copy(intersection);
            // Freeze Rotation: التأكد من أن القطعة تظل مستوية دائماً أثناء السحب
            selected3DPiece.object3D.rotation.set(0, 0, 0);
        }
    }
}

function on3DDragEnd(e) {
    if (!isDragging3D || !selected3DPiece) return;

    isDragging3D = false;
    setLookControls(true); // إعادة تفعيل الدوران

    // البحث عن أقرب فتحة - تقليل المدى لمنع التداخل (النصف تماماً)
    let foundSlot = null;
    let minDistance = 1.1; // نصف المسافة بين الفتحات لضمان عدم التداخل

    puzzleSlots.forEach(slot => {
        const slotPos = slot.el.object3D.position;
        const piecePos = selected3DPiece.object3D.position;
        // حساب المسافة في المستوى X و Y فقط لتسهيل الجذب
        const dist = Math.sqrt(Math.pow(slotPos.x - piecePos.x, 2) + Math.pow(slotPos.y - piecePos.y, 2));

        if (dist < minDistance) {
            foundSlot = slot;
            minDistance = dist;
        }
    });

    if (foundSlot) {
        onSlotSnap(foundSlot, selected3DPiece);
    } else {
        // العودة للمنزل بدقة الحفاظ على الاتجاه
        const hX = selected3DPiece.dataset.homeX;
        const hY = selected3DPiece.dataset.homeY;
        const hZ = selected3DPiece.dataset.homeZ;

        selected3DPiece.setAttribute('material', 'color', '#FFFFFF');
        gsap.to(selected3DPiece.object3D.position, { x: hX, y: hY, z: hZ, duration: 0.4, ease: "power2.out" });

        if (selected3DPiece.animationInstance) selected3DPiece.animationInstance.resume();
    }

    gsap.to(selected3DPiece.object3D.scale, { x: 1, y: 1, z: 1, duration: 0.2 });
    selected3DPiece = null;
}

function onSlotSnap(slot, piece) {
    // إذا كانت الفتحة مشغولة بقطعة أخرى، نعيد الأخرى لمكانها ونفك قفلها
    if (slot.occupied && slot.occupied !== piece) {
        const oldPiece = slot.occupied;
        oldPiece.dataset.locked = 'false'; // فك القفل مهم جداً

        const hX = oldPiece.dataset.homeX;
        const hY = oldPiece.dataset.homeY;
        const hZ = oldPiece.dataset.homeZ;

        oldPiece.setAttribute('material', 'color', '#FFFFFF');
        // إعادة القطعة القديمة للمشهد العام قبل تحريكها
        document.getElementById('puzzle-world').object3D.attach(oldPiece.object3D);

        gsap.to(oldPiece.object3D.position, { x: hX, y: hY, z: hZ, duration: 0.4 });
        if (oldPiece.animationInstance) oldPiece.animationInstance.resume();
    }

    slot.occupied = piece;
    piece.dataset.locked = 'true'; // قفل القطعة

    // تثبيت داخل المربع (Parenting)
    slot.el.object3D.attach(piece.object3D);

    gsap.to(piece.object3D.position, {
        x: 0,
        y: 0,
        z: 0.05, // فوق سطح المربع قليلاً
        duration: 0.3,
        ease: "power3.out"
    });

    // إيقاف الطفو تماماً عند الالتصاق
    if (piece.animationInstance) piece.animationInstance.pause();

    piece.setAttribute('material', 'color', '#FFF9C4');
    playSnap();
    checkCompletion();
}

function checkCompletion() {
    if (gameMode === 'Standard') {
        const slots = Array.from(document.querySelectorAll('.slot'));
        if (slots.length > 0 && slots.every(s => s.children.length > 0)) {
            const seq = slots.map(s => {
                const piece = s.querySelector('.piece');
                return piece ? piece.dataset.type : null;
            });
            if (currentValidate(seq)) {
                handleSuccess(slots);
            } else {
                handleError(slots);
            }
        }
    } else {
        if (puzzleSlots.length > 0 && puzzleSlots.every(s => s.occupied !== null)) {
            const seq = puzzleSlots.map(s => s.occupied.dataset.type);
            if (currentValidate(seq)) {
                handleSuccess(puzzleSlots);
            } else {
                handleError(puzzleSlots);
            }
        }
    }
}

// ════════════════════════════════════════════════
// إنشاء قطعة بزل
// ════════════════════════════════════════════════
function createPuzzlePiece(data, slotCount, pieceIndex) {
    const p = document.createElement('div');
    // تحديد شكل البزل للقطعة - كل قطعة تأخذ شكل عشوائي من الفتحات
    const shapeIndex = pieceIndex % slotCount;
    p.className = `piece puzzle-piece puzzle-shape-${slotCount}-${shapeIndex}`;
    p.dataset.type = data.type;
    p.draggable = true;

    // إنشاء الطبقة الداخلية للبزل
    const inner = document.createElement('div');
    inner.className = 'puzzle-inner';
    inner.textContent = data.text;
    p.appendChild(inner);

    p.addEventListener('dragstart', handleDragStart);
    p.addEventListener('dragend', handleDragEnd);
    p.addEventListener('touchstart', handleTouchStart, { passive: false });
    p.addEventListener('touchmove', handleTouchMove, { passive: false });
    p.addEventListener('touchend', handleTouchEnd);
    return p;
}

function createPiece(data) {
    const p = document.createElement('div');
    p.className = 'piece'; p.innerText = data.text; p.dataset.type = data.type; p.draggable = true;
    p.addEventListener('dragstart', handleDragStart); p.addEventListener('dragend', handleDragEnd);
    p.addEventListener('touchstart', handleTouchStart, { passive: false });
    p.addEventListener('touchmove', handleTouchMove, { passive: false });
    p.addEventListener('touchend', handleTouchEnd);
    return p;
}

// ════════════════════════════════════════════════
// نظام الصوت (Web Audio API — بدون ملفات خارجية)
// ════════════════════════════════════════════════
let audioCtx = null;
function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}

// صوت التك عند وضع البطاقة
function playSnap() {
    try {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(900, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.1);
    } catch (e) { }
}

// صوت النجاح (أربيجو صاعد)
function playSuccess() {
    try {
        const ctx = getAudioCtx();
        const notes = [523, 659, 784, 1047]; // C5 E5 G5 C6
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.type = 'sine'; osc.frequency.value = freq;
            const t = ctx.currentTime + i * 0.1;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.28, t + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
            osc.start(t); osc.stop(t + 0.35);
        });
    } catch (e) { }
}

// صوت الخطأ (طنين منخفض)
function playError() {
    try {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sawtooth'; osc.frequency.value = 140;
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.35);
    } catch (e) { }
}

// ════════════════════════════════════════════════
// Drag & Drop
// ════════════════════════════════════════════════
function handleDragStart(e) { draggedPiece = this; this.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; }
function handleDragEnd() { this.classList.remove('dragging'); }
function dropOnSlot(slot) {
    if (!draggedPiece) return;
    if (slot.firstChild) document.getElementById('pieces-container').appendChild(slot.firstChild);
    slot.appendChild(draggedPiece);
    playSnap();   // 🔊 صوت التك
    // وميض بصري سريع على الفتحة عند الالتصاق
    slot.classList.add('slot-snapped');
    setTimeout(() => slot.classList.remove('slot-snapped'), 220);
    draggedPiece = null; checkCompletion();
}

let touchOffsetX, touchOffsetY;
function handleTouchStart(e) {
    draggedPiece = this; const rect = this.getBoundingClientRect(), t = e.touches[0];
    touchOffsetX = t.clientX - rect.left; touchOffsetY = t.clientY - rect.top;
    this.classList.add('dragging'); this.style.position = 'fixed'; this.style.width = rect.width + 'px'; this.style.zIndex = '1000';
    moveTouchPiece(t.clientX, t.clientY);
}
function handleTouchMove(e) {
    e.preventDefault(); if (!draggedPiece) return; const t = e.touches[0]; moveTouchPiece(t.clientX, t.clientY);
    document.querySelectorAll('.slot').forEach(s => s.classList.remove('active'));
    const el = document.elementFromPoint(t.clientX, t.clientY)?.closest('.slot');
    if (el) el.classList.add('active');
}
function handleTouchEnd(e) {
    if (!draggedPiece) return; const t = e.changedTouches[0];
    draggedPiece.classList.remove('dragging');
    ['position', 'width', 'top', 'left', 'zIndex'].forEach(p => draggedPiece.style[p] = '');
    document.querySelectorAll('.slot').forEach(s => s.classList.remove('active'));
    const target = document.elementFromPoint(t.clientX, t.clientY)?.closest('.slot');
    if (target) { if (target.firstChild) document.getElementById('pieces-container').appendChild(target.firstChild); target.appendChild(draggedPiece); }
    else document.getElementById('pieces-container').appendChild(draggedPiece);
    draggedPiece = null; checkCompletion();
}
function moveTouchPiece(x, y) { draggedPiece.style.left = (x - touchOffsetX) + 'px'; draggedPiece.style.top = (y - touchOffsetY) + 'px'; }



// ════════════════════════════════════════════════
// نظام التغذية الراجعة النحوية المخصصة
// ════════════════════════════════════════════════
const GRAMMAR_RULES_DATA = {
    singular: { name: "مفرد", nom: "مرفوع بالضمة", acc: "منصوب بالفتحة" },
    plural_broken: { name: "جمع تكسير", nom: "مرفوع بالضمة", acc: "منصوب بالفتحة" },
    dual: { name: "مثنى", nom: "مرفوع بالألف", acc: "منصوب بالياء" },
    plural_masc: { name: "جمع مذكر سالم", nom: "مرفوع بالواو", acc: "منصوب بالياء" },
    plural_fem: { name: "جمع مؤنث سالم", nom: "مرفوع بالضمة", acc: "منصوب بالكسرة نيابة عن الفتحة" },
    five_names: { name: "من الأسماء الخمسة", nom: "مرفوع بالواو", acc: "منصوب بالألف" }
};

function detectGrammarType(word) {
    if (!word) return 'singular';
    if (word.match(/^(أبو|أخو|حمو|فو|ذو|أبا|أخا|حما|فا|ذا|أبي|أخي|حمي|في|ذي)/)) return 'five_names';
    if (word.endsWith('انِ') || word.endsWith('ينِ')) return 'dual';
    if (word.endsWith('ونَ') || word.endsWith('ينَ')) return 'plural_masc';
    if (word.includes('اتُ') || word.includes('اتِ') || word.includes('اتٌ') || word.includes('اتٍ')) return 'plural_fem';
    
    // قائمة كلمات جمع التكسير الموجودة في بيانات اللعبة
    const brokenPlurals = [
        "العلماءُ", "العلماءَ", "الأصدقاءُ", "الأصدقاءَ", "النتائجُ", "النتائجَ", 
        "الخلفاءُ", "الخلفاءَ", "إخوةٌ", "إخوةً", "أذكياءُ", "أذكياءَ", "أوفياءُ", "أوفياءَ"
    ];
    if (brokenPlurals.includes(word)) return 'plural_broken';

    return 'singular';
}

function generateGrammarFeedback(isCorrect) {
    const examples = getExamplesForCurrentLevel();
    const ex = examples[currentExIndex];
    if (!ex) return { title: "أحسنت!", msg: "إجابة صحيحة" };

    let ismState = 'nom', khabarState = 'nom';
    let ismPos = 'مبتدأ', khabarPos = 'خبر';

    if (currentRuleLevel === 2) { 
        ismState = 'acc'; ismPos = 'اسم إنَّ'; khabarPos = 'خبر إنَّ';
    } else if (currentRuleLevel === 3) { 
        khabarState = 'acc'; ismPos = 'اسم كانَ'; khabarPos = 'خبر كانَ';
    } else if (currentRuleLevel === 4) {
        const isInna = ["إنَّ", "أنَّ", "ليتَ", "لعلَّ", "كأنَّ", "لكنَّ"].some(s => ex.nasikh && ex.nasikh.includes(s));
        if (isInna) { ismState = 'acc'; ismPos = 'اسم ' + ex.nasikh; khabarPos = 'خبر ' + ex.nasikh; }
        else { khabarState = 'acc'; ismPos = 'اسم ' + ex.nasikh; khabarPos = 'خبر ' + ex.nasikh; }
    }

    const ismRule = GRAMMAR_RULES_DATA[detectGrammarType(ex.ism)];
    const khabarRule = GRAMMAR_RULES_DATA[detectGrammarType(ex.khabar)];

    if (isCorrect) {
        const title = ["أحسنت! 🌟", "رائع! ✨", "ممتاز! 🏆", "صحيح! ✅"][Math.floor(Math.random()*4)];
        const msg = `<div class="feedback-rule-box" style="text-align:right; font-size:0.95rem;">
            📍 <b>${ismPos} (${ex.ism}):</b> ${ismRule[ismState]} لأنه ${ismRule.name}.<br>
            📍 <b>${khabarPos} (${ex.khabar}):</b> ${khabarRule[khabarState]} لأنه ${khabarRule.name}.
        </div>`;
        const lines3D = [
            { text: title, bold: true },
            { text: `📍 ${ismPos} (${ex.ism}):`, bold: true },
            { text: `${ismRule[ismState]} لأنه ${ismRule.name}.`, bold: false },
            { text: `📍 ${khabarPos} (${ex.khabar}):`, bold: true },
            { text: `${khabarRule[khabarState]} لأنه ${khabarRule.name}.`, bold: false }
        ];
        return { title, msg, lines3D };
    } else {
        const title = "انتبه! ⚠️";
        const errorDesc = (ismState === 'acc') ? "حروف ناسخة تنصب اسم وترفع خبر." : (khabarState === 'acc') ? "أفعال ناسخة ترفع اسم وتنصب خبر." : "مبتدأ وخبر مرفوعان دائماً.";
        const msg = `<div class="feedback-rule-box" style="text-align:right; font-size:0.95rem; border-right-color:#EF5350;">
            ${errorDesc}<br>
            تذكر: ${ismRule.name} ${ismRule[ismState]}، و${khabarRule.name} ${khabarRule[khabarState]}.
        </div>`;
        const lines3D = [
            { text: title, bold: true },
            { text: errorDesc, bold: false },
            { text: `تذكر: ${ismRule.name} ${ismRule[ismState]}`, bold: true },
            { text: `و${khabarRule.name} ${khabarRule[khabarState]}`, bold: true }
        ];
        return { title, msg, lines3D };
    }
}

function handleSuccess(slots) {
    score += 10;
    updateHeader();
    playSuccess();

    // حفظ التقدم فوراً في ذاكرة الطالب
    updatePlayerProfile(playerName, playerAvatar, {
        score, errors: errorCount, time: elapsedSeconds, coins: sessionCoins, level: currentLevel
    });

    const feedback = generateGrammarFeedback(true);
    
    if (gameMode === 'VR') {
        slots.forEach(s => {
            // وميض أخضر مشع على الفتحة والقطعة (s هنا هو كائن من puzzleSlots)
            if (s.el) s.el.setAttribute('material', 'color', '#26A69A');
            if (s.occupied) s.occupied.setAttribute('material', 'color', '#26A69A');
        });
        // عرض التغذية الراجعة داخل المشهد ثلاثي الأبعاد
        show3DFeedback(feedback.title, true, 10000, feedback.lines3D);
    } else {
        // في النمط العادي (slots هنا مصفوفة من DOM elements)
        slots.forEach(s => {
            s.classList.add('slot-snapped', 'success-slot');
            const piece = s.querySelector('.piece');
            if (piece) piece.style.borderColor = '#26A69A';
        });
    }

    // تأثير الاحتفال (Confetti + Particles)
    try { confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } }); } catch (e) { }

    // إظهار إضاءة فوز داخل المشهد
    if (gameMode === 'VR') {
        const light = document.createElement('a-light');
        light.setAttribute('type', 'point');
        light.setAttribute('color', '#FFD700');
        light.setAttribute('intensity', '2');
        light.setAttribute('position', '0 2 -2');
        document.querySelector('a-scene').appendChild(light);
        setTimeout(() => { if (light.parentNode) light.parentNode.removeChild(light); }, 1500);
    }



    // عرض لوحة HTML أيضاً للوضع العادي
    document.getElementById('feedback-title').innerText = feedback.title;
    document.getElementById('feedback-message').innerHTML = feedback.msg;

    // إخفاء زر التالي وعرض مؤشر الانتقال التلقائي
    const nextBtn = document.getElementById('next-btn');
    const originalText = nextBtn.textContent;
    nextBtn.textContent = '⏳ جارٍ الانتقال...';
    nextBtn.disabled = true;
    document.getElementById('feedback').classList.remove('hidden');

    // الانتقال التلقائي بعد مدة كافية للقراءة
    const transitionDelay = gameMode === 'VR' ? 10000 : 5000;
    setTimeout(() => {
        document.getElementById('feedback').classList.add('hidden');
        nextBtn.textContent = originalText;
        nextBtn.disabled = false;
        goToNext();
    }, transitionDelay);
}

function handleError(slots) {
    errorCount++;
    updateHeader();
    playError();

    // عرض تغذية راجعة تعليمية عند الخطأ
    const feedback = generateGrammarFeedback(false);
    document.getElementById('feedback-title').innerText = feedback.title;
    document.getElementById('feedback-message').innerHTML = feedback.msg;
    const fbPanel = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    
    fbPanel.classList.remove('hidden');
    nextBtn.classList.add('hidden'); // إخفاء زر التالي في حالة الخطأ

    if (gameMode === 'VR') {
        show3DFeedback(feedback.title, false, 11200, feedback.lines3D);
    }

    const resetDelay = gameMode === 'VR' ? 11200 : 5600;
    setTimeout(() => {
        fbPanel.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        
        slots.forEach(s => {
            if (gameMode === 'VR') {
                if (s.occupied) {
                    const p = s.occupied;
                    p.dataset.locked = 'false';
                    document.getElementById('puzzle-world').object3D.attach(p.object3D);
                    const hX = p.dataset.homeX, hY = p.dataset.homeY, hZ = p.dataset.homeZ;
                    gsap.to(p.object3D.position, { x: hX, y: hY, z: hZ, duration: 0.5 });
                    if (p.animationInstance) p.animationInstance.resume();
                }
                s.occupied = null;
                if (s.el) s.el.setAttribute('material', { color: '#1A237E', opacity: 0.5 });
            } else {
                s.classList.remove('error-slot');
                if (s.firstChild) {
                    const piece = s.firstChild;
                    piece.style.borderColor = '';
                    document.getElementById('pieces-container').appendChild(piece);
                }
            }
        });
    }, resetDelay);
}

// ════════════════════════════════════════════════
// التنقل — مع شاشة إكمال المستوى
// ════════════════════════════════════════════════
function goToNext() {
    const examples = getExamplesForCurrentLevel();
    const examplesCount = examples.length;

    currentExIndex++;
    if (currentExIndex >= examplesCount) {
        // أنهى المستوى الحالي
        currentExIndex = 0;
        showLevelComplete(currentLevel); // عرض شاشة الإنجاز قبل الانتقال
    } else {
        loadExample();
    }
}

// ════════════════════════════════════════════════
// شاشة إكمال المستوى ✨
// ════════════════════════════════════════════════
function showLevelComplete(level) {
    stopTimer();

    const data = LEVEL_COMPLETE_DATA[level];
    document.getElementById('lc-emoji').textContent = data.emoji;
    document.getElementById('lc-title').textContent = data.title;
    document.getElementById('lc-subtitle').textContent = `جيد جداً يا ${playerName}!`;
    document.getElementById('lc-motivation').innerHTML = getMotivationMessage(level, errorCount);
    document.getElementById('lc-level').textContent = level;
    document.getElementById('lc-score').textContent = score;
    document.getElementById('lc-errors').textContent = errorCount;
    document.getElementById('lc-time').textContent = formatTime(elapsedSeconds);

    const nlp = document.getElementById('next-level-preview');
    if (level < TOTAL_LEVELS) {
        document.getElementById('nlp-icon').textContent = data.nextIcon;
        document.getElementById('nlp-text').textContent = `المستوى القادم: ${data.nextName}`;
        nlp.classList.remove('hidden');
    } else {
        nlp.classList.add('hidden');
    }

    // إذا كنا في وضع VR: عرض لوحة داخل المشهد + متابعة تلقائية
    if (isInVRMode()) {
        show3DLevelComplete(level);
        // متابعة تلقائية بعد 5 ثوانٍ في VR
        setTimeout(() => {
            remove3DLevelComplete();
            onContinue();
        }, 5000);
    } else {
        // الوضع العادي: عرض شاشة إكمال المستوى كالمعتاد
        const lc = document.getElementById('level-complete-screen');
        lc.classList.remove('hidden');
        gsap.from('#level-complete-screen .overlay-content', { scale: 0.65, opacity: 0, duration: 0.55, ease: 'back.out(1.5)' });
    }
}

// المتابعة بعد إكمال المستوى
function onContinue() {
    document.getElementById('level-complete-screen').classList.add('hidden');
    remove3DLevelComplete();
    currentLevel++;
    if (currentLevel > TOTAL_LEVELS) {
        // في VR، نخرج من VR أولاً قبل عرض شاشة النهاية
        if (isInVRMode()) {
            const scene = document.querySelector('a-scene');
            if (scene) scene.exitVR();
        }
        finishGame();
    } else {
        startTimer();
        loadExample();
    }
}

// ════════════════════════════════════════════════
// منطق الخروج
// ════════════════════════════════════════════════
function requestExit(context) {
    exitContext = context;
    // رسالة التحذير تختلف حسب السياق
    let msg = '';
    if (context === 'game') {
        const completedLevels = currentLevel - 1;
        if (completedLevels === 0) {
            msg = `⚠️ لم تُكمل أي مستوى بعد. <span class="warning-high">ستفقد جميع النقاط (${score} نقطة) عند الخروج.</span>`;
        } else {
            msg = `أكملت ${completedLevels} مستوى بنجاح. <span class="warning-med">ستفقد النقاط المكتسبة في المستوى الحالي (${score} نقطة) ولن تُحفظ النتيجة النهائية.</span>`;
        }
    } else {
        // خروج من شاشة إكمال المستوى (يُمكن الحفظ الجزئي)
        msg = `أكملت ${currentLevel} مستوى. <span class="warning-med">هل تريد الخروج الآن؟ لن تُحتسب نتيجتك الكاملة في قائمة الإنجاز.</span>`;
    }
    document.getElementById('exit-warning-msg').innerHTML = msg;
    document.getElementById('exit-warning-screen').classList.remove('hidden');
    gsap.from('#exit-warning-screen .overlay-content', { scale: 0.8, opacity: 0, duration: 0.3, ease: 'back.out(1.3)' });
}

function confirmExit() {
    // إغلاق التحذير وجميع الشاشات المفتوحة
    ['exit-warning-screen', 'level-complete-screen', 'feedback'].forEach(id =>
        document.getElementById(id).classList.add('hidden'));
    stopTimer();
    goToRegister();
}

function cancelExit() {
    document.getElementById('exit-warning-screen').classList.add('hidden');
    // إن كنا في شاشة إكمال المستوى نُعيدها
    if (exitContext === 'level-complete') {
        document.getElementById('level-complete-screen').classList.remove('hidden');
    } else {
        startTimer(); // استئناف المؤقت
    }
}

function goToRegister() {
    ['end-screen', 'leaderboard-screen', 'level-complete-screen', 'exit-warning-screen'].forEach(id =>
        document.getElementById(id).classList.add('hidden'));
    const reg = document.getElementById('register-screen');
    reg.style.opacity = '1'; reg.classList.remove('hidden');
    onNameInput(); // تحديث بيانات اللاعب العائد
}

// ════════════════════════════════════════════════
// إنهاء اللعبة + حفظ النتائج
// ════════════════════════════════════════════════
function finishGame() {
    stopTimer();
    sessionCoins = calcCoins(score, errorCount, elapsedSeconds);

    const lbEntry = { name: playerName, avatar: playerAvatar, score, errors: errorCount, time: elapsedSeconds, date: new Date().toLocaleDateString('ar-EG') };
    saveLbEntry(lbEntry);
    const rank = getPlayerRank(lbEntry);

    const profile = updatePlayerProfile(playerName, playerAvatar, { score, errors: errorCount, time: elapsedSeconds, coins: sessionCoins, rank });
    const newBadgeIds = calcNewBadges({ score, errors: errorCount, time: elapsedSeconds, rank }, profile);
    if (newBadgeIds.length) addBadgesToProfile(playerName, newBadgeIds);

    // تحديث رصيد العملات في الهيدر
    document.getElementById('coins-display').textContent = profile.totalCoins;

    renderEndScreen(rank, profile, newBadgeIds);
}

// ════════════════════════════════════════════════
// شاشة النهاية
// ════════════════════════════════════════════════
function renderEndScreen(rank, profile, newBadgeIds) {
    document.getElementById('end-avatar').textContent = playerAvatar;
    document.getElementById('end-name').textContent = `أحسنت يا ${playerName}!`;
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-coins').textContent = `+${sessionCoins}`;
    document.getElementById('final-errors').textContent = errorCount;
    document.getElementById('final-time').textContent = formatTime(elapsedSeconds);
    document.getElementById('final-rank').textContent = `#${rank}`;
    document.getElementById('total-coins').textContent = profile.totalCoins;

    // النجوم
    const stars = calcStars(errorCount);
    const sc = document.getElementById('star-rating');
    sc.innerHTML = '';
    for (let i = 1; i <= 3; i++) {
        const s = document.createElement('span');
        s.className = 'star' + (i <= stars ? ' lit' : ''); s.textContent = '⭐'; sc.appendChild(s);
    }
    gsap.from('.star.lit', { scale: 0, duration: 0.4, stagger: 0.15, ease: 'back.out(2)', delay: 0.3 });

    // شارات جديدة
    const nbSec = document.getElementById('new-badges-section');
    if (newBadgeIds.length) {
        nbSec.classList.remove('hidden');
        const nbList = document.getElementById('new-badges-list'); nbList.innerHTML = '';
        newBadgeIds.forEach(id => {
            const b = BADGES.find(x => x.id === id); if (!b) return;
            const chip = document.createElement('div'); chip.className = 'badge-chip new-badge';
            chip.innerHTML = `<span class="badge-icon">${b.icon}</span><span class="badge-name">${b.name}</span><span class="badge-desc">${b.desc}</span>`;
            nbList.appendChild(chip);
        });
        gsap.from('.new-badge', { scale: 0, duration: 0.5, stagger: 0.12, ease: 'back.out(2)', delay: 0.6 });
    } else nbSec.classList.add('hidden');

    // كل الشارات
    const allList = document.getElementById('all-badges-list'); allList.innerHTML = '';
    const earnedIds = profile.badges || [];
    BADGES.forEach(b => {
        const earned = earnedIds.includes(b.id);
        const chip = document.createElement('div'); chip.className = 'badge-chip' + (earned ? '' : ' locked'); chip.title = b.desc;
        chip.innerHTML = `<span class="badge-icon">${b.icon}</span><span class="badge-name">${b.name}</span>`;
        allList.appendChild(chip);
    });

    document.getElementById('end-screen').classList.remove('hidden');
    gsap.from('#end-screen .overlay-content', { scale: 0.65, opacity: 0, duration: 0.55, ease: 'back.out(1.5)' });
    if (errorCount === 0) confetti({ particleCount: 250, spread: 100, origin: { y: 0.5 } });
}

// ════════════════════════════════════════════════
// حساب الشارات الجديدة
// ════════════════════════════════════════════════
function calcNewBadges(sessionData, profile) {
    const already = profile.badges || [];
    return BADGES.filter(b => !already.includes(b.id) && b.check(sessionData, profile)).map(b => b.id);
}

// ════════════════════════════════════════════════
// LocalStorage: بروفايلات اللاعبين
// ════════════════════════════════════════════════
function getAllProfiles() { try { return JSON.parse(localStorage.getItem(LS_PL_KEY)) || {}; } catch { return {}; } }
function saveAllProfiles(p) { localStorage.setItem(LS_PL_KEY, JSON.stringify(p)); }
function getPlayerProfile(name) { return getAllProfiles()[name] || null; }

function updatePlayerProfile(name, avatar, sessionData) {
    const profiles = getAllProfiles();
    const prev = profiles[name] || { name, avatar, totalGames: 0, bestScore: 0, bestTime: Infinity, totalCoins: 0, badges: [], perfectStreak: 0, history: [] };
    prev.avatar = avatar; prev.totalGames += 1; prev.totalCoins += sessionData.coins;
    if (sessionData.score > prev.bestScore) prev.bestScore = sessionData.score;
    if (sessionData.time < prev.bestTime) prev.bestTime = sessionData.time;
    prev.perfectStreak = sessionData.errors === 0 ? (prev.perfectStreak || 0) + 1 : 0;
    prev.history.push({ score: sessionData.score, errors: sessionData.errors, time: sessionData.time, coins: sessionData.coins, rank: sessionData.rank, date: new Date().toLocaleDateString('ar-EG') });
    profiles[name] = prev; saveAllProfiles(profiles); return prev;
}

function addBadgesToProfile(name, badgeIds) {
    const profiles = getAllProfiles(); if (!profiles[name]) return;
    profiles[name].badges = [...new Set([...(profiles[name].badges || []), ...badgeIds])];
    saveAllProfiles(profiles);
}

// ════════════════════════════════════════════════
// LocalStorage: المتصدرون
// ════════════════════════════════════════════════
function getLeaderboard() { try { return JSON.parse(localStorage.getItem(LS_LB_KEY)) || []; } catch { return []; } }
function saveLbEntry(entry) {
    const lb = getLeaderboard(); lb.push(entry);
    lb.sort((a, b) => a.errors - b.errors || a.time - b.time || b.score - a.score);
    localStorage.setItem(LS_LB_KEY, JSON.stringify(lb));
}
function getPlayerRank(entry) {
    const lb = getLeaderboard();
    for (let i = 0; i < lb.length; i++) {
        if (lb[i].name === entry.name && lb[i].score === entry.score && lb[i].errors === entry.errors && lb[i].time === entry.time) return i + 1;
    }
    return lb.length;
}

// ════════════════════════════════════════════════
// عرض قائمة الإنجاز
// ════════════════════════════════════════════════
function showLeaderboard() {
    const lb = getLeaderboard();
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';

    if (!lb.length) {
        list.innerHTML = `<div class="lb-empty">لا توجد نتائج بعد.<br>كن أول من يُكمل اللعبة! 🚀</div>`;
    } else {
        const icons = ['🥇', '🥈', '🥉'];
        const seen = new Set();
        const unique = lb.filter(e => { if (seen.has(e.name)) return false; seen.add(e.name); return true; });

        unique.forEach((entry, i) => {
            const row = document.createElement('div');
            row.className = `lb-row rank-${i + 1}`;
            row.innerHTML = `
                <div class="lb-rank">${icons[i] || (i + 1)}</div>
                <div class="lb-avatar">${entry.avatar}</div>
                <div class="lb-info">
                    <div class="lb-player-name">${entry.name}</div>
                    <div class="lb-meta">${entry.date}</div>
                </div>
                <div class="lb-stats">
                    <div class="lb-score-val">${entry.score} نقطة</div>
                    <div class="lb-err-time">❌ ${entry.errors} | ⏱ ${formatTime(entry.time)}</div>
                </div>`;
            list.appendChild(row);
        });
    }
    document.getElementById('leaderboard-screen').classList.remove('hidden');
    gsap.from('#leaderboard-screen .overlay-content', { scale: 0.85, opacity: 0, duration: 0.4, ease: 'back.out(1.3)' });
}

// ════════════════════════════════════════════════
// حماية لوحة المعلم بكلمة مرور
// ════════════════════════════════════════════════
function requestTeacherAccess() {
    const screen = document.getElementById('teacher-login-screen');
    const input = document.getElementById('teacher-password-input');
    const error = document.getElementById('password-error');
    
    input.value = '';
    error.classList.add('hidden');
    screen.classList.remove('hidden');
    input.focus();
    
    gsap.from('#teacher-login-screen .overlay-content', { scale: 0.8, opacity: 0, duration: 0.4, ease: 'back.out(1.5)' });
}

function submitTeacherPassword() {
    const input = document.getElementById('teacher-password-input');
    const error = document.getElementById('password-error');
    
    if (input.value === '123') {
        document.getElementById('teacher-login-screen').classList.add('hidden');
        showTeacherDashboard();
    } else {
        error.classList.remove('hidden');
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
        input.value = '';
        input.focus();
    }
}

function cancelTeacherPassword() {
    document.getElementById('teacher-login-screen').classList.add('hidden');
}

// ════════════════════════════════════════════════
// لوحة تحكم المعلم والتحليلات
// ════════════════════════════════════════════════
let performanceChart = null;

function showTeacherDashboard() {
    const profiles = getAllProfiles();
    const students = Object.values(profiles);
    const listBody = document.getElementById('students-list-body');
    listBody.innerHTML = '';

    let totalScore = 0;
    let totalErrors = 0;
    const levelStats = { 1: { sum: 0, count: 0 }, 2: { sum: 0, count: 0 }, 3: { sum: 0, count: 0 }, 4: { sum: 0, count: 0 } };

    students.forEach(s => {
        totalScore += s.bestScore || 0;
        let sErrors = 0;
        s.history.forEach(h => {
            sErrors += h.errors;
            if (h.level && levelStats[h.level]) {
                levelStats[h.level].sum += h.score;
                levelStats[h.level].count++;
            }
        });
        totalErrors += sErrors / (s.totalGames || 1);

        const row = document.createElement('tr');
        const last = s.history[s.history.length - 1] || {};
        row.innerHTML = `<td>${s.avatar} ${s.name}</td><td>${last.level || 'جديد'}</td><td>${s.bestScore}</td><td>${last.errors || 0}</td><td>${formatTime(last.time || 0)}</td><td>${s.totalCoins}</td><td>${last.date || '-'}</td>`;
        listBody.appendChild(row);
    });

    document.getElementById('total-students-count').textContent = students.length;
    document.getElementById('avg-score-val').textContent = students.length ? Math.round(totalScore / students.length) : 0;
    document.getElementById('avg-errors-val').textContent = students.length ? (totalErrors / students.length).toFixed(1) : 0;

    renderPerformanceChart(levelStats);
    document.getElementById('teacher-dashboard-screen').classList.remove('hidden');
}

function renderPerformanceChart(stats) {
    const ctx = document.getElementById('performance-chart').getContext('2d');
    const data = [1, 2, 3, 4].map(l => stats[l].count ? Math.round(stats[l].sum / stats[l].count) : 0);
    if (performanceChart) performanceChart.destroy();
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['المستوى 1', 'المستوى 2', 'المستوى 3', 'المستوى 4'],
            datasets: [{ label: 'متوسط الأداء', data: data, borderColor: '#5C6BC0', backgroundColor: 'rgba(92, 107, 192, 0.1)', borderWidth: 3, tension: 0.4, fill: true }]
        }
    });
}

function clearAllData() { if (confirm('🗑 مسح جميع البيانات؟')) { localStorage.clear(); location.reload(); } }

// ════════════════════════════════════════════════
// إدارة اللعبة
// ════════════════════════════════════════════════
function goToRegister() { location.reload(); }

function onRestartClick() {
    const end = document.getElementById('end-screen');
    gsap.to(end, { opacity: 0, duration: 0.3, onComplete: () => { end.classList.add('hidden'); end.style.opacity = '1'; goToRegister(); } });
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; }
    return a;
}
