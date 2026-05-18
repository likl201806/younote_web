const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh-CN", name: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", name: "繁體中文", flag: "🇭🇰" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" }
];

const DEFAULT_LANGUAGE = "en";
const STORAGE_KEY = "younote_language";

const TRANSLATIONS = {
  en: {
    meta: {
      homeTitle: "YouNote - Notebook, whiteboard, and mind map workspace",
      privacyTitle: "Privacy Policy - YouNote",
      termsTitle: "Terms of Service - YouNote",
      supportTitle: "Support - YouNote",
      homeDescription: "YouNote is a focused note-taking app for notebooks, whiteboards, mind maps, text documents, and flexible export on iPhone and iPad.",
      privacyDescription: "YouNote Privacy Policy. Learn how YouNote handles data, permissions, and support contact information.",
      termsDescription: "YouNote Terms of Service and user policy.",
      supportDescription: "YouNote technical support, FAQ, and contact information."
    },
    nav: { home: "Home", privacy: "Privacy", terms: "Terms", support: "Support" },
    hero: { eyebrow: "For iPhone and iPad", title: "A calm workspace for notes, whiteboards, and mind maps.", subtitle: "YouNote keeps notebooks, freeform canvases, mind maps, and text documents together so ideas can move from rough sketch to organized page.", download: "Download on the App Store", learnMore: "Explore features" },
    mock: { library: "Documents", notebook: "Notebook", whiteboard: "Whiteboard", mindmap: "Mind Map", classNotes: "Class notes", updatedToday: "Updated today", projectBoard: "Project board", canvas: "Infinite canvas", ideaMap: "Idea map", nodes: "12 nodes" },
    features: { title: "Everything your notes need", subtitle: "Flexible tools for writing, sketching, structuring, and keeping work organized.", notebookTitle: "Notebook", notebookDesc: "Create structured notebooks with pages, paper styles, handwriting tools, and export options.", whiteboardTitle: "Whiteboard", whiteboardDesc: "Use a freeform canvas for diagrams, quick sketches, visual planning, and open-ended thinking.", mindmapTitle: "Mind Maps", mindmapDesc: "Turn scattered thoughts into connected nodes for study, planning, and creative exploration.", textTitle: "Text Documents", textDesc: "Write clean text documents alongside your visual notes without leaving the same workspace.", exportTitle: "Import and Export", exportDesc: "Bring files in, export notes as PDF or images, and keep your work portable when you need it.", languageTitle: "Made for Many Languages", languageDesc: "Switch the app language from settings and use YouNote in the language that feels natural." },
    showcase: { title: "Built for everyday thinking", body: "YouNote is designed for repeated use: class notes, meeting sketches, study plans, reading summaries, and personal knowledge maps all live in one quiet document library.", preview1Title: "Paper choices", preview1Body: "Blank, grid, dots, and custom page colors.", preview2Title: "Drawing tools", preview2Body: "Pen, highlighter, eraser, text, image, and lasso.", preview3Title: "Organized library", preview3Body: "Separate notebooks, whiteboards, and mind maps." },
    download: { title: "Start with YouNote", subtitle: "Download YouNote on the App Store for iPhone and iPad.", appstore: "Download on the App Store" },
    footer: { tagline: "Notebook, whiteboard, and mind map workspace.", product: "Product", features: "Features", download: "Download", legal: "Legal", privacy: "Privacy Policy", terms: "Terms of Service", support: "Support", contact: "Contact Us", copyright: "© 2026 YouNote. All rights reserved." },
    privacy: { title: "Privacy Policy", updated: "Last updated: May 18, 2026", introTitle: "Introduction", intro1: "YouNote respects your privacy. This policy explains how information is handled when you use the YouNote app and this website.", intro2: "By using YouNote, you agree to the practices described in this policy.", collectTitle: "Information We Handle", collectBody: "YouNote is a note-taking app. The content you create may include notebooks, whiteboards, mind maps, text documents, imported files, drawings, images, and exported documents.", collectList: ["Notes and documents you create or import are controlled by you.", "Support emails may include the contact information and diagnostic details you choose to provide.", "This static website does not require an account or collect payment information."], permissionsTitle: "Permissions", permissionsBody: "Some features may request system permissions only when needed.", permissionsList: ["Photo library access may be used to choose images or save exported images.", "File access may be used to import documents or export your work.", "Mail links open your email app only when you choose to contact support."], useTitle: "How Information Is Used", useList: ["Provide notebook, whiteboard, mind map, text editing, import, and export features.", "Respond to support requests.", "Improve reliability, usability, and language support."], shareTitle: "Sharing", shareBody: "We do not sell your personal data. You control the files, images, and documents you import, export, save, or share from the app.", securityTitle: "Security", securityBody: "Use device passcodes, Apple ID protections, and regular backups to protect important notes. No internet service or local device storage can be guaranteed to be perfectly secure.", childrenTitle: "Children", childrenBody: "YouNote is not directed to children under 13. If you believe a child has provided personal information through support contact, please email us.", changesTitle: "Changes", changesBody: "We may update this policy from time to time. The latest version will be posted on this page with an updated date.", contactTitle: "Contact Us", contactBody: "For privacy questions, contact us at:" },
    terms: { title: "Terms of Service", updated: "Last updated: May 18, 2026", serviceTitle: "Service Description", serviceBody: "YouNote is a productivity app for creating and managing notebooks, whiteboards, mind maps, and text documents on supported Apple devices.", acceptTitle: "Acceptance", acceptBody: "By downloading, installing, or using YouNote, you agree to these terms. If you do not agree, please stop using the app.", useTitle: "Acceptable Use", useBody: "You agree to use YouNote lawfully and responsibly.", useList: ["Do not use the app for illegal, harmful, or abusive activity.", "Do not attempt to reverse engineer, disrupt, or compromise the app.", "Do not infringe the rights, privacy, or intellectual property of others."], contentTitle: "Your Content", contentBody: "You retain ownership of notes, drawings, documents, images, and exports you create or import. You are responsible for backing up important content.", ipTitle: "Intellectual Property", ipBody: "The YouNote app, website, design, name, icons, and software are protected by intellectual property laws. You may not copy, modify, sell, or redistribute any part without permission.", availabilityTitle: "Availability", availabilityBody: "YouNote is provided as available. Features may change, and we do not guarantee uninterrupted or error-free operation.", disclaimerTitle: "Disclaimer", disclaimerBody: "To the maximum extent permitted by law, YouNote is provided without warranties of any kind. We are not liable for indirect, incidental, or consequential damages.", changesTitle: "Changes to Terms", changesBody: "We may update these terms. Continued use of YouNote after updates means you accept the revised terms.", contactTitle: "Contact", contactBody: "For questions about these terms, email:" },
    support: { title: "Technical Support", subtitle: "We are here to help with YouNote.", contactTitle: "Contact us", contactBody: "If the FAQ does not solve your problem, send us an email with your device model, iOS/iPadOS version, and a short description.", faqTitle: "Frequently Asked Questions", faqs: [{ q: "How do I download YouNote?", a: "Open the App Store link on this website or search for YouNote in the App Store." }, { q: "Which devices are supported?", a: "YouNote is designed for iPhone and iPad running iOS or iPadOS 17.0 or later." }, { q: "What can I create?", a: "You can create notebooks, whiteboards, mind maps, and text documents from the document library." }, { q: "Can I import and export files?", a: "Yes. YouNote includes import and export workflows, including PDF and image export where supported." }, { q: "How do I change the language?", a: "Open Settings in YouNote, choose Language, and select the language you prefer." }, { q: "What should I include in a bug report?", a: "Please include your device model, iOS or iPadOS version, YouNote version, and steps to reproduce the issue." }] }
  },
  "zh-CN": {
    meta: { homeTitle: "YouNote - 笔记本、白板与思维导图工作区", privacyTitle: "隐私政策 - YouNote", termsTitle: "用户政策 - YouNote", supportTitle: "技术支持 - YouNote", homeDescription: "YouNote 是一款专注的笔记应用，支持笔记本、白板、思维导图、文本文档以及 iPhone 和 iPad 上的灵活导出。", privacyDescription: "YouNote 隐私政策，了解数据、权限和支持联系方式。", termsDescription: "YouNote 用户政策和服务条款。", supportDescription: "YouNote 技术支持、常见问题和联系方式。" },
    nav: { home: "首页", privacy: "隐私", terms: "用户政策", support: "支持" },
    hero: { eyebrow: "适用于 iPhone 和 iPad", title: "为笔记、白板和思维导图打造的安静工作区。", subtitle: "YouNote 将笔记本、自由白板、思维导图和文本文档放在一起，让想法从草稿自然整理成页面。", download: "在 App Store 下载", learnMore: "查看功能" },
    mock: { library: "文档库", notebook: "笔记本", whiteboard: "白板", mindmap: "思维导图", classNotes: "课堂笔记", updatedToday: "今天更新", projectBoard: "项目白板", canvas: "无限画布", ideaMap: "灵感地图", nodes: "12 个节点" },
    features: { title: "笔记需要的工具都在这里", subtitle: "用于书写、绘制、组织和管理内容的灵活工具。", notebookTitle: "笔记本", notebookDesc: "创建带页面、纸张样式、手写工具和导出选项的结构化笔记本。", whiteboardTitle: "白板", whiteboardDesc: "用自由画布绘制图示、快速草图、视觉计划和开放式想法。", mindmapTitle: "思维导图", mindmapDesc: "把零散想法整理成相互连接的节点，适合学习、规划和创作。", textTitle: "文本文档", textDesc: "在同一个工作区中编写清爽的文本文档，并与视觉笔记并列管理。", exportTitle: "导入与导出", exportDesc: "导入文件，将笔记导出为 PDF 或图片，让内容随时可带走。", languageTitle: "支持多语言", languageDesc: "可在设置中切换应用语言，用你熟悉的语言使用 YouNote。" },
    showcase: { title: "为日常思考而设计", body: "YouNote 适合课堂笔记、会议草图、学习计划、阅读摘要和个人知识地图，所有内容都放在一个安静的文档库中。", preview1Title: "纸张选择", preview1Body: "空白、网格、点阵和自定义页面颜色。", preview2Title: "绘图工具", preview2Body: "画笔、荧光笔、橡皮擦、文本、图片和套索。", preview3Title: "有序文档库", preview3Body: "分别管理笔记本、白板和思维导图。" },
    download: { title: "开始使用 YouNote", subtitle: "在 App Store 下载适用于 iPhone 和 iPad 的 YouNote。", appstore: "在 App Store 下载" },
    footer: { tagline: "笔记本、白板与思维导图工作区。", product: "产品", features: "功能", download: "下载", legal: "法律", privacy: "隐私政策", terms: "用户政策", support: "支持", contact: "联系我们", copyright: "© 2026 YouNote. 保留所有权利。" },
    privacy: { title: "隐私政策", updated: "最后更新日期：2026年5月18日", introTitle: "简介", intro1: "YouNote 尊重你的隐私。本政策说明你使用 YouNote 应用和本网站时，相关信息会如何被处理。", intro2: "使用 YouNote 即表示你同意本政策中描述的做法。", collectTitle: "我们处理的信息", collectBody: "YouNote 是一款笔记应用。你创建的内容可能包括笔记本、白板、思维导图、文本文档、导入文件、绘图、图片和导出文档。", collectList: ["你创建或导入的笔记和文档由你控制。", "支持邮件可能包含你主动提供的联系方式和诊断信息。", "本静态网站不需要账户，也不收集付款信息。"], permissionsTitle: "权限", permissionsBody: "部分功能只会在需要时请求系统权限。", permissionsList: ["相册权限可用于选择图片或保存导出的图片。", "文件访问可用于导入文档或导出你的作品。", "邮件链接只会在你选择联系支持时打开邮件应用。"], useTitle: "信息用途", useList: ["提供笔记本、白板、思维导图、文本编辑、导入和导出功能。", "回复技术支持请求。", "改进可靠性、易用性和语言支持。"], shareTitle: "共享", shareBody: "我们不会出售你的个人数据。你可以控制从应用中导入、导出、保存或分享的文件、图片和文档。", securityTitle: "安全", securityBody: "请使用设备密码、Apple ID 保护和定期备份来保护重要笔记。任何互联网服务或本地设备存储都无法保证绝对安全。", childrenTitle: "儿童", childrenBody: "YouNote 不面向 13 岁以下儿童。如果你认为儿童通过支持联系提供了个人信息，请发送邮件给我们。", changesTitle: "政策变更", changesBody: "我们可能会不时更新本政策。最新版本会发布在本页面，并更新日期。", contactTitle: "联系我们", contactBody: "如有隐私相关问题，请通过以下邮箱联系我们：" },
    terms: { title: "用户政策", updated: "最后更新日期：2026年5月18日", serviceTitle: "服务说明", serviceBody: "YouNote 是一款生产力应用，用于在受支持的 Apple 设备上创建和管理笔记本、白板、思维导图和文本文档。", acceptTitle: "接受条款", acceptBody: "下载、安装或使用 YouNote 即表示你同意这些条款。如果你不同意，请停止使用本应用。", useTitle: "可接受使用", useBody: "你同意以合法且负责任的方式使用 YouNote。", useList: ["不得将应用用于违法、有害或滥用行为。", "不得尝试逆向工程、干扰或破坏应用。", "不得侵犯他人的权利、隐私或知识产权。"], contentTitle: "你的内容", contentBody: "你保留对自己创建或导入的笔记、绘图、文档、图片和导出内容的所有权。你负责备份重要内容。", ipTitle: "知识产权", ipBody: "YouNote 应用、网站、设计、名称、图标和软件受知识产权法律保护。未经许可，不得复制、修改、出售或再分发任何部分。", availabilityTitle: "可用性", availabilityBody: "YouNote 按可用状态提供。功能可能发生变化，我们不保证服务不间断或完全无错误。", disclaimerTitle: "免责声明", disclaimerBody: "在法律允许的最大范围内，YouNote 不提供任何形式的保证。我们不对间接、附带或后果性损害负责。", changesTitle: "条款变更", changesBody: "我们可能会更新这些条款。更新后继续使用 YouNote 即表示你接受修订后的条款。", contactTitle: "联系", contactBody: "如对这些条款有疑问，请发送邮件至：" },
    support: { title: "技术支持", subtitle: "我们随时为 YouNote 提供帮助。", contactTitle: "联系我们", contactBody: "如果常见问题没有解决你的问题，请发送邮件，并附上设备型号、iOS/iPadOS 版本和简要描述。", faqTitle: "常见问题", faqs: [{ q: "如何下载 YouNote？", a: "打开本网站上的 App Store 链接，或在 App Store 中搜索 YouNote。" }, { q: "支持哪些设备？", a: "YouNote 专为运行 iOS 或 iPadOS 17.0 及以上版本的 iPhone 和 iPad 设计。" }, { q: "我可以创建什么内容？", a: "你可以在文档库中创建笔记本、白板、思维导图和文本文档。" }, { q: "可以导入和导出文件吗？", a: "可以。YouNote 包含导入和导出流程，并在支持的场景下提供 PDF 和图片导出。" }, { q: "如何更改语言？", a: "打开 YouNote 的设置，选择语言，然后选择你偏好的语言。" }, { q: "反馈问题时需要提供什么？", a: "请提供设备型号、iOS 或 iPadOS 版本、YouNote 版本，以及复现问题的步骤。" }] }
  }
};

const ALIASES = {
  "zh-TW": {
    from: "zh-CN",
    replace: [
      [/隐私政策/g, "隱私政策"], [/用户政策/g, "使用者政策"], [/首页/g, "首頁"], [/隐私/g, "隱私"], [/支持/g, "支援"], [/功能/g, "功能"],
      [/笔记/g, "筆記"], [/白板/g, "白板"], [/思维导图/g, "心智圖"], [/文本文档/g, "文字文件"], [/文档/g, "文件"], [/导入/g, "匯入"], [/导出/g, "匯出"],
      [/创建/g, "建立"], [/设置/g, "設定"], [/应用/g, "應用程式"], [/邮件/g, "電子郵件"], [/联系/g, "聯絡"], [/数据/g, "資料"], [/权限/g, "權限"],
      [/信息/g, "資訊"], [/更新/g, "更新"], [/最后/g, "最後"], [/保留/g, "保留"], [/适用/g, "適用"], [/设备/g, "裝置"], [/文件/g, "檔案"],
      [/支持哪些设备/g, "支援哪些裝置"], [/可以/g, "可以"], [/请/g, "請"], [/选择/g, "選擇"], [/打开/g, "開啟"], [/问题/g, "問題"], [/条款/g, "條款"],
      [/服务/g, "服務"], [/可用性/g, "可用性"], [/免责声明/g, "免責聲明"], [/知识产权/g, "智慧財產權"], [/技术支持/g, "技術支援"],
      [/为/g, "為"], [/与/g, "與"], [/选/g, "選"], [/项/g, "項"], [/结构/g, "結構"], [/区/g, "區"], [/们/g, "們"],
      [/间/g, "間"], [/静/g, "靜"], [/专/g, "專"], [/将/g, "將"], [/让/g, "讓"], [/从/g, "從"], [/随/g, "隨"],
      [/时/g, "時"], [/过/g, "過"], [/务/g, "務"], [/备/g, "備"], [/体/g, "體"], [/创/g, "創"], [/导/g, "導"],
      [/灵/g, "靈"], [/绘/g, "繪"], [/组织/g, "組織"], [/管理/g, "管理"], [/页面/g, "頁面"], [/样式/g, "樣式"],
      [/书写/g, "書寫"], [/标/g, "標"], [/软/g, "軟"], [/发/g, "發"], [/权/g, "權"], [/数/g, "數"], [/据/g, "據"],
      [/邮箱/g, "信箱"], [/导图/g, "導圖"], [/应用程序/g, "應用程式"], [/网站/g, "網站"], [/账户/g, "帳戶"],
      [/付款/g, "付款"], [/检测/g, "檢測"], [/错/g, "錯"], [/变更/g, "變更"], [/条/g, "條"],
      [/带/g, "帶"], [/纸/g, "紙"], [/张/g, "張"], [/写/g, "寫"]
    ]
  }
};

const LANGUAGE_TERMS = {
  fr: { homeTitle: "YouNote - Carnets, tableaux blancs et cartes mentales", privacyTitle: "Politique de confidentialité - YouNote", termsTitle: "Conditions d’utilisation - YouNote", supportTitle: "Assistance - YouNote", nav: ["Accueil", "Confidentialité", "Conditions", "Assistance"], heroTitle: "Un espace calme pour notes, tableaux blancs et cartes mentales.", heroSubtitle: "YouNote rassemble carnets, canevas libres, cartes mentales et documents texte pour transformer les idées en pages organisées.", download: "Télécharger sur l’App Store", learnMore: "Voir les fonctionnalités", device: "Pour iPhone et iPad", documents: "Documents", notebook: "Carnet", whiteboard: "Tableau blanc", mindmap: "Carte mentale", textdoc: "Document texte", classNotes: "Notes de cours", updated: "Mis à jour aujourd’hui", project: "Tableau projet", canvas: "Canevas infini", idea: "Carte d’idées", nodes: "12 nœuds", featuresTitle: "Tout ce dont vos notes ont besoin", featuresSubtitle: "Des outils souples pour écrire, dessiner, structurer et organiser.", notebookDesc: "Créez des carnets structurés avec pages, styles de papier, écriture manuscrite et export.", whiteboardDesc: "Utilisez un canevas libre pour diagrammes, croquis rapides et planification visuelle.", mindmapDesc: "Transformez des idées dispersées en nœuds connectés pour étudier et planifier.", textDesc: "Rédigez des documents texte propres à côté de vos notes visuelles.", exportTitle: "Importer et exporter", exportDesc: "Importez des fichiers, exportez en PDF ou images, et gardez votre travail portable.", langTitle: "Pensé pour plusieurs langues", langDesc: "Changez la langue dans les réglages et utilisez YouNote naturellement.", everyday: "Conçu pour penser au quotidien", everydayBody: "YouNote convient aux cours, réunions, plans d’étude, résumés et cartes de connaissances.", paper: "Choix de papier", paperBody: "Vide, grille, points et couleurs de page.", tools: "Outils de dessin", toolsBody: "Stylo, surligneur, gomme, texte, image et lasso.", library: "Bibliothèque organisée", libraryBody: "Carnets, tableaux blancs et cartes mentales séparés.", start: "Commencez avec YouNote", startBody: "Téléchargez YouNote sur l’App Store pour iPhone et iPad.", footer: ["Produit", "Fonctionnalités", "Télécharger", "Légal", "Politique de confidentialité", "Conditions d’utilisation", "Assistance", "Nous contacter", "© 2026 YouNote. Tous droits réservés."], privacy: ["Politique de confidentialité", "Dernière mise à jour : 18 mai 2026", "Introduction", "YouNote respecte votre vie privée. Cette politique explique comment les informations sont traitées dans l’app et sur ce site.", "En utilisant YouNote, vous acceptez les pratiques décrites ici.", "Informations traitées", "YouNote est une app de prise de notes. Votre contenu peut inclure carnets, tableaux blancs, cartes mentales, textes, fichiers, dessins, images et exports.", ["Les notes et documents créés ou importés restent sous votre contrôle.", "Les e-mails d’assistance peuvent contenir les informations que vous choisissez d’envoyer.", "Ce site statique ne demande pas de compte et ne collecte pas d’informations de paiement."], "Autorisations", "Certaines fonctions peuvent demander des autorisations système uniquement si nécessaire.", ["La photothèque peut servir à choisir des images ou enregistrer des exports.", "L’accès aux fichiers peut servir à importer ou exporter votre travail.", "Les liens e-mail ouvrent votre app de messagerie seulement si vous contactez l’assistance."], "Utilisation des informations", ["Fournir les fonctions de carnet, tableau blanc, carte mentale, texte, import et export.", "Répondre aux demandes d’assistance.", "Améliorer la fiabilité, l’ergonomie et les langues."], "Partage", "Nous ne vendons pas vos données personnelles. Vous contrôlez ce que vous importez, exportez, enregistrez ou partagez.", "Sécurité", "Utilisez un code d’appareil, les protections Apple ID et des sauvegardes régulières pour protéger vos notes importantes.", "Enfants", "YouNote ne s’adresse pas aux enfants de moins de 13 ans.", "Modifications", "Cette politique peut être mise à jour. La dernière version est publiée sur cette page.", "Nous contacter", "Pour toute question de confidentialité, contactez-nous à :"], terms: ["Conditions d’utilisation", "Dernière mise à jour : 18 mai 2026", "Description du service", "YouNote est une app de productivité pour créer et gérer carnets, tableaux blancs, cartes mentales et documents texte.", "Acceptation", "En téléchargeant, installant ou utilisant YouNote, vous acceptez ces conditions.", "Utilisation acceptable", "Vous acceptez d’utiliser YouNote légalement et avec responsabilité.", ["N’utilisez pas l’app pour des activités illégales ou nuisibles.", "Ne tentez pas de perturber, compromettre ou contourner l’app.", "Ne violez pas les droits, la vie privée ou la propriété intellectuelle d’autrui."], "Votre contenu", "Vous conservez la propriété du contenu créé ou importé. Vous êtes responsable des sauvegardes.", "Propriété intellectuelle", "L’app, le site, le design, le nom, les icônes et le logiciel YouNote sont protégés.", "Disponibilité", "YouNote est fourni selon disponibilité. Les fonctions peuvent changer.", "Avertissement", "Dans la limite de la loi, YouNote est fourni sans garantie.", "Modification des conditions", "L’utilisation continue après mise à jour signifie que vous acceptez les conditions révisées.", "Contact", "Pour toute question sur ces conditions, écrivez à :"], support: ["Assistance technique", "Nous sommes là pour vous aider avec YouNote.", "Contactez-nous", "Si la FAQ ne résout pas le problème, envoyez votre modèle d’appareil, la version iOS/iPadOS et une courte description.", "Questions fréquentes", [["Comment télécharger YouNote ?", "Ouvrez le lien App Store de ce site ou recherchez YouNote dans l’App Store."], ["Quels appareils sont pris en charge ?", "YouNote est conçu pour iPhone et iPad sous iOS ou iPadOS 17.0 ou version ultérieure."], ["Que puis-je créer ?", "Vous pouvez créer carnets, tableaux blancs, cartes mentales et documents texte."], ["Puis-je importer et exporter ?", "Oui. YouNote prend en charge l’import et l’export, dont PDF et images quand disponible."], ["Comment changer la langue ?", "Ouvrez Réglages dans YouNote, choisissez Langue, puis sélectionnez votre langue."], ["Que mettre dans un rapport de bug ?", "Indiquez le modèle, la version iOS/iPadOS, la version YouNote et les étapes pour reproduire."]]] },
  de: { homeTitle: "YouNote - Notizbücher, Whiteboards und Mindmaps", privacyTitle: "Datenschutzrichtlinie - YouNote", termsTitle: "Nutzungsbedingungen - YouNote", supportTitle: "Support - YouNote", nav: ["Start", "Datenschutz", "Bedingungen", "Support"], heroTitle: "Ein ruhiger Arbeitsbereich für Notizen, Whiteboards und Mindmaps.", heroSubtitle: "YouNote vereint Notizbücher, freie Leinwände, Mindmaps und Textdokumente.", download: "Im App Store laden", learnMore: "Funktionen ansehen", device: "Für iPhone und iPad", documents: "Dokumente", notebook: "Notizbuch", whiteboard: "Whiteboard", mindmap: "Mindmap", textdoc: "Textdokument", classNotes: "Kursnotizen", updated: "Heute aktualisiert", project: "Projektboard", canvas: "Unendliche Leinwand", idea: "Ideenkarte", nodes: "12 Knoten", featuresTitle: "Alles, was deine Notizen brauchen", featuresSubtitle: "Flexible Werkzeuge zum Schreiben, Skizzieren, Strukturieren und Organisieren.", notebookDesc: "Erstelle strukturierte Notizbücher mit Seiten, Papierstilen, Handschrift und Export.", whiteboardDesc: "Nutze eine freie Leinwand für Diagramme, Skizzen und visuelle Planung.", mindmapDesc: "Verbinde verstreute Gedanken zu Knoten für Lernen, Planung und Kreativität.", textDesc: "Schreibe Textdokumente neben deinen visuellen Notizen.", exportTitle: "Import und Export", exportDesc: "Importiere Dateien, exportiere als PDF oder Bilder und halte deine Arbeit portabel.", langTitle: "Für viele Sprachen", langDesc: "Wechsle die Sprache in den Einstellungen und nutze YouNote natürlich.", everyday: "Für tägliches Denken gemacht", everydayBody: "YouNote eignet sich für Unterricht, Meetings, Lernpläne, Zusammenfassungen und Wissenskarten.", paper: "Papierauswahl", paperBody: "Leer, Raster, Punkte und Seitenfarben.", tools: "Zeichenwerkzeuge", toolsBody: "Stift, Marker, Radierer, Text, Bild und Lasso.", library: "Organisierte Bibliothek", libraryBody: "Getrennte Notizbücher, Whiteboards und Mindmaps.", start: "Mit YouNote starten", startBody: "Lade YouNote im App Store für iPhone und iPad.", footer: ["Produkt", "Funktionen", "Download", "Rechtliches", "Datenschutzrichtlinie", "Nutzungsbedingungen", "Support", "Kontakt", "© 2026 YouNote. Alle Rechte vorbehalten."], privacy: ["Datenschutzrichtlinie", "Zuletzt aktualisiert: 18. Mai 2026", "Einführung", "YouNote respektiert deine Privatsphäre. Diese Richtlinie erklärt die Verarbeitung von Informationen in App und Website.", "Durch die Nutzung von YouNote stimmst du diesen Praktiken zu.", "Informationen, die wir verarbeiten", "Inhalte können Notizbücher, Whiteboards, Mindmaps, Texte, Dateien, Zeichnungen, Bilder und Exporte enthalten.", ["Notizen und importierte Dokumente werden von dir kontrolliert.", "Support-E-Mails können Angaben enthalten, die du freiwillig sendest.", "Diese statische Website benötigt kein Konto und keine Zahlungsdaten."], "Berechtigungen", "Einige Funktionen fragen Systemberechtigungen nur bei Bedarf an.", ["Fotos können zum Auswählen oder Speichern von Bildern genutzt werden.", "Dateizugriff kann Import und Export ermöglichen.", "E-Mail-Links öffnen nur auf Wunsch deine Mail-App."], "Nutzung von Informationen", ["Bereitstellung von Notizbuch-, Whiteboard-, Mindmap-, Text-, Import- und Exportfunktionen.", "Beantwortung von Supportanfragen.", "Verbesserung von Zuverlässigkeit, Bedienung und Sprachen."], "Weitergabe", "Wir verkaufen keine personenbezogenen Daten. Du kontrollierst importierte, exportierte und geteilte Inhalte.", "Sicherheit", "Nutze Gerätesperre, Apple-ID-Schutz und regelmäßige Backups.", "Kinder", "YouNote richtet sich nicht an Kinder unter 13 Jahren.", "Änderungen", "Diese Richtlinie kann aktualisiert werden. Die neueste Version steht auf dieser Seite.", "Kontakt", "Bei Datenschutzfragen kontaktiere uns unter:"], terms: ["Nutzungsbedingungen", "Zuletzt aktualisiert: 18. Mai 2026", "Beschreibung des Dienstes", "YouNote ist eine Produktivitäts-App für Notizbücher, Whiteboards, Mindmaps und Textdokumente.", "Annahme", "Durch Download, Installation oder Nutzung akzeptierst du diese Bedingungen.", "Zulässige Nutzung", "Du verpflichtest dich, YouNote rechtmäßig und verantwortungsvoll zu verwenden.", ["Keine illegale, schädliche oder missbräuchliche Nutzung.", "Keine Störung, Kompromittierung oder Umgehung der App.", "Keine Verletzung von Rechten, Privatsphäre oder geistigem Eigentum anderer."], "Deine Inhalte", "Du behältst das Eigentum an erstellten oder importierten Inhalten und bist für Backups verantwortlich.", "Geistiges Eigentum", "App, Website, Design, Name, Icons und Software von YouNote sind geschützt.", "Verfügbarkeit", "YouNote wird nach Verfügbarkeit bereitgestellt; Funktionen können sich ändern.", "Haftungsausschluss", "Soweit gesetzlich zulässig, wird YouNote ohne Gewährleistung bereitgestellt.", "Änderungen", "Weitere Nutzung nach Aktualisierungen bedeutet Zustimmung zu den geänderten Bedingungen.", "Kontakt", "Fragen zu diesen Bedingungen bitte per E-Mail an:"], support: ["Technischer Support", "Wir helfen dir gerne mit YouNote.", "Kontakt", "Wenn die FAQ nicht hilft, sende Gerätemodell, iOS/iPadOS-Version und eine kurze Beschreibung.", "Häufige Fragen", [["Wie lade ich YouNote herunter?", "Öffne den App-Store-Link auf dieser Website oder suche im App Store nach YouNote."], ["Welche Geräte werden unterstützt?", "YouNote ist für iPhone und iPad mit iOS oder iPadOS 17.0 oder neuer entwickelt."], ["Was kann ich erstellen?", "Du kannst Notizbücher, Whiteboards, Mindmaps und Textdokumente erstellen."], ["Kann ich Dateien importieren und exportieren?", "Ja. YouNote unterstützt Import und Export, einschließlich PDF und Bildern, wo verfügbar."], ["Wie ändere ich die Sprache?", "Öffne Einstellungen in YouNote, wähle Sprache und dann deine bevorzugte Sprache."], ["Was gehört in einen Fehlerbericht?", "Bitte nenne Gerätemodell, iOS/iPadOS-Version, YouNote-Version und Schritte zur Reproduktion."]]] }
};

function buildTranslation(t) {
  return {
    meta: { homeTitle: t.homeTitle, privacyTitle: t.privacyTitle, termsTitle: t.termsTitle, supportTitle: t.supportTitle, homeDescription: t.heroSubtitle, privacyDescription: t.privacy[0], termsDescription: t.terms[0], supportDescription: t.support[0] },
    nav: { home: t.nav[0], privacy: t.nav[1], terms: t.nav[2], support: t.nav[3] },
    hero: { eyebrow: t.device, title: t.heroTitle, subtitle: t.heroSubtitle, download: t.download, learnMore: t.learnMore },
    mock: { library: t.documents, notebook: t.notebook, whiteboard: t.whiteboard, mindmap: t.mindmap, classNotes: t.classNotes, updatedToday: t.updated, projectBoard: t.project, canvas: t.canvas, ideaMap: t.idea, nodes: t.nodes },
    features: { title: t.featuresTitle, subtitle: t.featuresSubtitle, notebookTitle: t.notebook, notebookDesc: t.notebookDesc, whiteboardTitle: t.whiteboard, whiteboardDesc: t.whiteboardDesc, mindmapTitle: t.mindmap, mindmapDesc: t.mindmapDesc, textTitle: t.textdoc, textDesc: t.textDesc, exportTitle: t.exportTitle, exportDesc: t.exportDesc, languageTitle: t.langTitle, languageDesc: t.langDesc },
    showcase: { title: t.everyday, body: t.everydayBody, preview1Title: t.paper, preview1Body: t.paperBody, preview2Title: t.tools, preview2Body: t.toolsBody, preview3Title: t.library, preview3Body: t.libraryBody },
    download: { title: t.start, subtitle: t.startBody, appstore: t.download },
    footer: { tagline: t.homeTitle.replace("YouNote - ", ""), product: t.footer[0], features: t.footer[1], download: t.footer[2], legal: t.footer[3], privacy: t.footer[4], terms: t.footer[5], support: t.footer[6], contact: t.footer[7], copyright: t.footer[8] },
    privacy: { title: t.privacy[0], updated: t.privacy[1], introTitle: t.privacy[2], intro1: t.privacy[3], intro2: t.privacy[4], collectTitle: t.privacy[5], collectBody: t.privacy[6], collectList: t.privacy[7], permissionsTitle: t.privacy[8], permissionsBody: t.privacy[9], permissionsList: t.privacy[10], useTitle: t.privacy[11], useList: t.privacy[12], shareTitle: t.privacy[13], shareBody: t.privacy[14], securityTitle: t.privacy[15], securityBody: t.privacy[16], childrenTitle: t.privacy[17], childrenBody: t.privacy[18], changesTitle: t.privacy[19], changesBody: t.privacy[20], contactTitle: t.privacy[21], contactBody: t.privacy[22] },
    terms: { title: t.terms[0], updated: t.terms[1], serviceTitle: t.terms[2], serviceBody: t.terms[3], acceptTitle: t.terms[4], acceptBody: t.terms[5], useTitle: t.terms[6], useBody: t.terms[7], useList: t.terms[8], contentTitle: t.terms[9], contentBody: t.terms[10], ipTitle: t.terms[11], ipBody: t.terms[12], availabilityTitle: t.terms[13], availabilityBody: t.terms[14], disclaimerTitle: t.terms[15], disclaimerBody: t.terms[16], changesTitle: t.terms[17], changesBody: t.terms[18], contactTitle: t.terms[19], contactBody: t.terms[20] },
    support: { title: t.support[0], subtitle: t.support[1], contactTitle: t.support[2], contactBody: t.support[3], faqTitle: t.support[4], faqs: t.support[5].map(([q, a]) => ({ q, a })) }
  };
}

Object.keys(LANGUAGE_TERMS).forEach((lang) => {
  TRANSLATIONS[lang] = buildTranslation(LANGUAGE_TERMS[lang]);
});

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function applyAlias(alias) {
  const source = clone(TRANSLATIONS[alias.from]);
  const rewrite = (value) => {
    if (typeof value === "string") {
      return alias.replace.reduce((text, [from, to]) => text.replace(from, to), value);
    }
    if (Array.isArray(value)) return value.map(rewrite);
    if (value && typeof value === "object") {
      Object.keys(value).forEach((key) => { value[key] = rewrite(value[key]); });
    }
    return value;
  };
  return rewrite(source);
}

Object.keys(ALIASES).forEach((lang) => {
  TRANSLATIONS[lang] = applyAlias(ALIASES[lang]);
});

const SAME_STRUCTURE_LANGUAGES = {
  ja: {
    nav: ["ホーム", "プライバシー", "利用規約", "サポート"],
    terms: ["ノートブック", "ホワイトボード", "マインドマップ", "テキスト文書", "書類", "App Storeでダウンロード", "機能を見る", "iPhone と iPad 向け"],
    phrases: ["ノート、ホワイトボード、マインドマップのための落ち着いた作業空間。", "YouNote はノートブック、自由なキャンバス、マインドマップ、テキスト文書を一つにまとめます。", "ノートに必要なものを一つに", "書く、描く、整理するための柔軟なツール。", "技術サポート", "よくある質問"]
  },
  ko: {
    nav: ["홈", "개인정보", "약관", "지원"],
    terms: ["노트북", "화이트보드", "마인드맵", "텍스트 문서", "문서", "App Store에서 다운로드", "기능 보기", "iPhone 및 iPad용"],
    phrases: ["노트, 화이트보드, 마인드맵을 위한 차분한 작업 공간.", "YouNote는 노트북, 자유 캔버스, 마인드맵, 텍스트 문서를 한곳에 모읍니다.", "노트에 필요한 모든 것", "쓰기, 스케치, 구조화, 정리를 위한 유연한 도구.", "기술 지원", "자주 묻는 질문"]
  },
  hi: {
    nav: ["होम", "गोपनीयता", "शर्तें", "सहायता"],
    terms: ["नोटबुक", "व्हाइटबोर्ड", "माइंड मैप", "टेक्स्ट दस्तावेज़", "दस्तावेज़", "App Store से डाउनलोड करें", "फीचर देखें", "iPhone और iPad के लिए"],
    phrases: ["नोट्स, व्हाइटबोर्ड और माइंड मैप के लिए शांत कार्यक्षेत्र।", "YouNote नोटबुक, फ्रीफॉर्म कैनवास, माइंड मैप और टेक्स्ट दस्तावेज़ों को साथ रखता है।", "आपके नोट्स के लिए सब कुछ", "लिखने, स्केच करने और व्यवस्थित रखने के उपकरण।", "तकनीकी सहायता", "अक्सर पूछे जाने वाले प्रश्न"]
  },
  vi: {
    nav: ["Trang chủ", "Quyền riêng tư", "Điều khoản", "Hỗ trợ"],
    terms: ["Sổ tay", "Bảng trắng", "Sơ đồ tư duy", "Tài liệu văn bản", "Tài liệu", "Tải trên App Store", "Xem tính năng", "Cho iPhone và iPad"],
    phrases: ["Không gian yên tĩnh cho ghi chú, bảng trắng và sơ đồ tư duy.", "YouNote kết hợp sổ tay, canvas tự do, sơ đồ tư duy và tài liệu văn bản.", "Mọi thứ ghi chú cần", "Công cụ linh hoạt để viết, phác thảo và sắp xếp.", "Hỗ trợ kỹ thuật", "Câu hỏi thường gặp"]
  },
  id: {
    nav: ["Beranda", "Privasi", "Ketentuan", "Dukungan"],
    terms: ["Buku Catatan", "Papan Tulis", "Peta Pikiran", "Dokumen Teks", "Dokumen", "Unduh di App Store", "Lihat fitur", "Untuk iPhone dan iPad"],
    phrases: ["Ruang kerja tenang untuk catatan, papan tulis, dan peta pikiran.", "YouNote menyatukan buku catatan, kanvas bebas, peta pikiran, dan dokumen teks.", "Semua yang dibutuhkan catatan Anda", "Alat fleksibel untuk menulis, membuat sketsa, dan mengatur.", "Dukungan Teknis", "Pertanyaan Umum"]
  },
  pt: {
    nav: ["Início", "Privacidade", "Termos", "Suporte"],
    terms: ["Caderno", "Quadro branco", "Mapas mentais", "Documentos de texto", "Documentos", "Baixar na App Store", "Ver recursos", "Para iPhone e iPad"],
    phrases: ["Um espaço tranquilo para notas, quadros brancos e mapas mentais.", "YouNote reúne cadernos, telas livres, mapas mentais e documentos de texto.", "Tudo que suas notas precisam", "Ferramentas flexíveis para escrever, desenhar e organizar.", "Suporte Técnico", "Perguntas Frequentes"]
  },
  tr: {
    nav: ["Ana Sayfa", "Gizlilik", "Şartlar", "Destek"],
    terms: ["Defter", "Beyaz Tahta", "Zihin Haritası", "Metin Belgeleri", "Belgeler", "App Store’dan indir", "Özellikleri keşfet", "iPhone ve iPad için"],
    phrases: ["Notlar, beyaz tahtalar ve zihin haritaları için sakin bir çalışma alanı.", "YouNote defterleri, serbest tuvalleri, zihin haritalarını ve metin belgelerini bir araya getirir.", "Notlarınızın ihtiyaç duyduğu her şey", "Yazmak, çizmek ve düzenlemek için esnek araçlar.", "Teknik Destek", "Sık Sorulan Sorular"]
  }
};

function localizedFromEnglish(lang, spec) {
  const t = clone(TRANSLATIONS.en);
  const joiner = { ja: "と", ko: "및", hi: "और", vi: "và", id: "dan", pt: "e", tr: "ve" }[lang] || "and";
  t.meta.homeTitle = `YouNote - ${spec.terms[0]}, ${spec.terms[1]} ${joiner} ${spec.terms[2]}`;
  t.meta.privacyTitle = `${spec.nav[1]} - YouNote`;
  t.meta.termsTitle = `${spec.nav[2]} - YouNote`;
  t.meta.supportTitle = `${spec.nav[3]} - YouNote`;
  t.meta.homeDescription = spec.phrases[1];
  t.meta.privacyDescription = spec.nav[1];
  t.meta.termsDescription = spec.nav[2];
  t.meta.supportDescription = spec.phrases[4];
  t.nav = { home: spec.nav[0], privacy: spec.nav[1], terms: spec.nav[2], support: spec.nav[3] };
  t.hero = { eyebrow: spec.terms[7], title: spec.phrases[0], subtitle: spec.phrases[1], download: spec.terms[5], learnMore: spec.terms[6] };
  t.mock = { library: spec.terms[4], notebook: spec.terms[0], whiteboard: spec.terms[1], mindmap: spec.terms[2], classNotes: `${spec.terms[0]} 1`, updatedToday: "✓", projectBoard: spec.terms[1], canvas: spec.terms[4], ideaMap: spec.terms[2], nodes: "12" };
  t.features = { title: spec.phrases[2], subtitle: spec.phrases[3], notebookTitle: spec.terms[0], notebookDesc: `${spec.terms[0]}: pages, paper styles, handwriting and export.`.replace("pages, paper styles, handwriting and export.", lang === "ja" ? "ページ、用紙、手書き、書き出し。" : lang === "ko" ? "페이지, 용지, 필기, 내보내기." : lang === "hi" ? "पेज, पेपर शैली, हस्तलेखन और निर्यात।" : lang === "vi" ? "trang, kiểu giấy, chữ viết tay và xuất." : lang === "id" ? "halaman, gaya kertas, tulisan tangan, dan ekspor." : lang === "pt" ? "páginas, estilos de papel, escrita manual e exportação." : "sayfalar, kağıt stilleri, el yazısı ve dışa aktarma."), whiteboardTitle: spec.terms[1], whiteboardDesc: `${spec.terms[1]} ${lang === "ja" ? "で図、スケッチ、計画を作成します。" : lang === "ko" ? "로 다이어그램, 스케치, 계획을 만듭니다." : lang === "hi" ? "से आरेख, स्केच और योजना बनाएं।" : lang === "vi" ? "cho sơ đồ, phác thảo và kế hoạch." : lang === "id" ? "untuk diagram, sketsa, dan rencana." : lang === "pt" ? "para diagramas, esboços e planos." : "ile diyagram, eskiz ve plan yapın."}`, mindmapTitle: spec.terms[2], mindmapDesc: spec.phrases[2], textTitle: spec.terms[3], textDesc: spec.terms[3], exportTitle: lang === "ja" ? "インポートとエクスポート" : lang === "ko" ? "가져오기 및 내보내기" : lang === "hi" ? "इम्पोर्ट और एक्सपोर्ट" : lang === "vi" ? "Nhập và xuất" : lang === "id" ? "Impor dan Ekspor" : lang === "pt" ? "Importar e exportar" : "İçe ve dışa aktarma", exportDesc: spec.terms[5], languageTitle: lang === "ja" ? "多言語対応" : lang === "ko" ? "다국어 지원" : lang === "hi" ? "कई भाषाओं के लिए" : lang === "vi" ? "Hỗ trợ nhiều ngôn ngữ" : lang === "id" ? "Mendukung banyak bahasa" : lang === "pt" ? "Vários idiomas" : "Çok dil desteği", languageDesc: spec.nav[1] };
  t.showcase = { title: spec.phrases[2], body: spec.phrases[1], preview1Title: spec.terms[0], preview1Body: spec.phrases[3], preview2Title: spec.terms[1], preview2Body: spec.phrases[3], preview3Title: spec.terms[4], preview3Body: spec.phrases[1] };
  t.download = { title: spec.terms[5], subtitle: spec.phrases[1], appstore: spec.terms[5] };
  t.footer = { tagline: spec.phrases[0], product: spec.nav[0], features: spec.terms[6], download: spec.terms[5], legal: spec.nav[2], privacy: spec.nav[1], terms: spec.nav[2], support: spec.nav[3], contact: spec.phrases[4], copyright: "© 2026 YouNote." };
  t.privacy = { ...t.privacy, title: spec.nav[1], updated: lang === "ja" ? "最終更新日：2026年5月18日" : lang === "ko" ? "최종 업데이트: 2026년 5월 18일" : lang === "hi" ? "अंतिम अपडेट: 18 मई 2026" : lang === "vi" ? "Cập nhật lần cuối: 18/05/2026" : lang === "id" ? "Terakhir diperbarui: 18 Mei 2026" : lang === "pt" ? "Última atualização: 18 de maio de 2026" : "Son güncelleme: 18 Mayıs 2026", introTitle: spec.nav[1], intro1: spec.phrases[1], intro2: spec.phrases[0], collectTitle: spec.terms[4], collectBody: spec.phrases[1], collectList: [spec.terms[0], spec.terms[1], spec.terms[2]], permissionsTitle: spec.nav[1], permissionsBody: spec.phrases[3], permissionsList: [spec.terms[4], spec.terms[5], spec.phrases[4]], useTitle: spec.terms[6], useList: [spec.terms[0], spec.terms[1], spec.terms[2]], shareTitle: spec.nav[1], shareBody: spec.phrases[1], securityTitle: spec.nav[1], securityBody: spec.phrases[3], childrenTitle: spec.nav[1], childrenBody: spec.phrases[1], changesTitle: spec.nav[2], changesBody: spec.phrases[1], contactTitle: spec.phrases[4], contactBody: spec.phrases[4] };
  t.terms = { ...t.terms, title: spec.nav[2], updated: t.privacy.updated, serviceTitle: spec.nav[2], serviceBody: spec.phrases[1], acceptTitle: spec.nav[2], acceptBody: spec.phrases[0], useTitle: spec.nav[2], useBody: spec.phrases[3], useList: [spec.terms[0], spec.terms[1], spec.terms[2]], contentTitle: spec.terms[4], contentBody: spec.phrases[1], ipTitle: spec.nav[2], ipBody: spec.phrases[3], availabilityTitle: spec.nav[3], availabilityBody: spec.phrases[1], disclaimerTitle: spec.nav[2], disclaimerBody: spec.phrases[3], changesTitle: spec.nav[2], changesBody: spec.phrases[1], contactTitle: spec.phrases[4], contactBody: spec.phrases[4] };
  t.support = { title: spec.phrases[4], subtitle: spec.phrases[1], contactTitle: spec.phrases[4], contactBody: spec.phrases[3], faqTitle: spec.phrases[5], faqs: [[spec.terms[5], spec.terms[5]], [spec.terms[7], spec.terms[7]], [spec.terms[4], `${spec.terms[0]}, ${spec.terms[1]}, ${spec.terms[2]}, ${spec.terms[3]}`], [t.features.exportTitle, t.features.exportDesc], [t.features.languageTitle, t.features.languageDesc], [spec.phrases[4], spec.phrases[3]]].map(([q, a]) => ({ q, a })) };
  return t;
}

Object.keys(SAME_STRUCTURE_LANGUAGES).forEach((lang) => {
  TRANSLATIONS[lang] = localizedFromEnglish(lang, SAME_STRUCTURE_LANGUAGES[lang]);
});

function getValue(path, source) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function getBrowserLanguage() {
  const browserLang = (navigator.language || DEFAULT_LANGUAGE).toLowerCase();
  const exact = SUPPORTED_LANGUAGES.find((lang) => lang.code.toLowerCase() === browserLang);
  if (exact) return exact.code;
  const prefix = browserLang.split("-")[0];
  const match = SUPPORTED_LANGUAGES.find((lang) => lang.code.toLowerCase().split("-")[0] === prefix);
  return match ? match.code : DEFAULT_LANGUAGE;
}

function getTranslations(lang) {
  return TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANGUAGE];
}

function applyTranslations(translations) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(element.dataset.i18n, translations);
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getValue(element.dataset.i18nHtml, translations);
    if (typeof value === "string") element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, path] = pair.split(":");
      const value = getValue(path, translations);
      if (attr && typeof value === "string") element.setAttribute(attr, value);
    });
  });

  document.querySelectorAll("[data-i18n-list]").forEach((element) => {
    const list = getValue(element.dataset.i18nList, translations);
    if (!Array.isArray(list)) return;
    element.innerHTML = list.map((item) => `<li>${item}</li>`).join("");
  });

  renderFaq(translations);
}

function renderFaq(translations) {
  const faqList = document.getElementById("faq-list");
  if (!faqList) return;
  faqList.innerHTML = translations.support.faqs.map((faq, index) => `
    <div class="faq-item${index === 0 ? " active" : ""}">
      <div class="faq-question" onclick="toggleFaq(this)"><span>${faq.q}</span></div>
      <div class="faq-answer"><p>${faq.a}</p></div>
    </div>
  `).join("");
}

function updateLanguageSelector(currentLanguage) {
  const selector = document.querySelector(".lang-dropdown");
  const current = document.querySelector(".current-lang");
  if (!selector || !current) return;
  const currentMeta = SUPPORTED_LANGUAGES.find((lang) => lang.code === currentLanguage) || SUPPORTED_LANGUAGES[0];
  current.textContent = `${currentMeta.flag} ${currentMeta.name}`;
  selector.innerHTML = SUPPORTED_LANGUAGES.map((lang) => `
    <button class="lang-option${lang.code === currentLanguage ? " active" : ""}" type="button" data-lang="${lang.code}">
      <span>${lang.flag}</span><span>${lang.name}</span>
    </button>
  `).join("");
  selector.querySelectorAll(".lang-option").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.some((item) => item.code === lang)) return;
  localStorage.setItem(STORAGE_KEY, lang);
  const translations = getTranslations(lang);
  document.documentElement.lang = lang;
  applyTranslations(translations);
  updateLanguageSelector(lang);
  document.getElementById("language-selector")?.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  const language = SUPPORTED_LANGUAGES.some((lang) => lang.code === saved) ? saved : getBrowserLanguage();
  setLanguage(language);
});
