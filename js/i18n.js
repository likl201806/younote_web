const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
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

const BASE_TRANSLATION = {
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
  hero: {
    eyebrow: "For iPhone and iPad",
    title: "A calm workspace for notes, whiteboards, and mind maps.",
    subtitle: "YouNote keeps notebooks, freeform canvases, mind maps, and text documents together so ideas can move from rough sketch to organized page.",
    download: "Download on the App Store",
    learnMore: "Explore features"
  },
  mock: {
    library: "Documents",
    notebook: "Notebook",
    whiteboard: "Whiteboard",
    mindmap: "Mind Map",
    classNotes: "Class notes",
    updatedToday: "Updated today",
    projectBoard: "Project board",
    canvas: "Infinite canvas",
    ideaMap: "Idea map",
    nodes: "12 nodes"
  },
  features: {
    title: "Everything your notes need",
    subtitle: "Flexible tools for writing, sketching, structuring, and keeping work organized.",
    notebookTitle: "Notebook",
    notebookDesc: "Create structured notebooks with pages, paper styles, handwriting tools, and export options.",
    whiteboardTitle: "Whiteboard",
    whiteboardDesc: "Use a freeform canvas for diagrams, quick sketches, visual planning, and open-ended thinking.",
    mindmapTitle: "Mind Maps",
    mindmapDesc: "Turn scattered thoughts into connected nodes for study, planning, and creative exploration.",
    textTitle: "Text Documents",
    textDesc: "Write clean text documents alongside your visual notes without leaving the same workspace.",
    exportTitle: "Import and Export",
    exportDesc: "Bring files in, export notes as PDF or images, and keep your work portable when you need it.",
    languageTitle: "Made for Many Languages",
    languageDesc: "Switch the app language from settings and use YouNote in the language that feels natural."
  },
  showcase: {
    title: "Built for everyday thinking",
    body: "YouNote is designed for repeated use: class notes, meeting sketches, study plans, reading summaries, and personal knowledge maps all live in one quiet document library.",
    preview1Title: "Paper choices",
    preview1Body: "Blank, grid, dots, and custom page colors.",
    preview2Title: "Drawing tools",
    preview2Body: "Pen, highlighter, eraser, text, image, and lasso.",
    preview3Title: "Organized library",
    preview3Body: "Separate notebooks, whiteboards, and mind maps."
  },
  download: {
    title: "Start with YouNote",
    subtitle: "Download YouNote on the App Store for iPhone and iPad.",
    appstore: "Download on the App Store"
  },
  footer: {
    tagline: "Notebook, whiteboard, and mind map workspace.",
    product: "Product",
    features: "Features",
    download: "Download",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    support: "Support",
    contact: "Contact Us",
    copyright: "© 2026 YouNote. All rights reserved."
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: May 18, 2026",
    introTitle: "Introduction",
    intro1: "YouNote respects your privacy. This policy explains how information is handled when you use the YouNote app and this website.",
    intro2: "By using YouNote, you agree to the practices described in this policy.",
    collectTitle: "Information We Handle",
    collectBody: "YouNote is a note-taking app. The content you create may include notebooks, whiteboards, mind maps, text documents, imported files, drawings, images, and exported documents.",
    collectList: [
      "Notes and documents you create or import are controlled by you.",
      "Support emails may include the contact information and diagnostic details you choose to provide.",
      "This static website does not require an account or collect payment information."
    ],
    permissionsTitle: "Permissions",
    permissionsBody: "Some features may request system permissions only when needed.",
    permissionsList: [
      "Photo library access may be used to choose images or save exported images.",
      "File access may be used to import documents or export your work.",
      "Mail links open your email app only when you choose to contact support."
    ],
    useTitle: "How Information Is Used",
    useList: [
      "Provide notebook, whiteboard, mind map, text editing, import, and export features.",
      "Respond to support requests.",
      "Improve reliability, usability, and language support."
    ],
    shareTitle: "Sharing",
    shareBody: "We do not sell your personal data. You control the files, images, and documents you import, export, save, or share from the app.",
    securityTitle: "Security",
    securityBody: "Use device passcodes, Apple ID protections, and regular backups to protect important notes. No internet service or local device storage can be guaranteed to be perfectly secure.",
    childrenTitle: "Children",
    childrenBody: "YouNote is not directed to children under 13. If you believe a child has provided personal information through support contact, please email us.",
    changesTitle: "Changes",
    changesBody: "We may update this policy from time to time. The latest version will be posted on this page with an updated date.",
    contactTitle: "Contact Us",
    contactBody: "For privacy questions, contact us at:"
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: May 18, 2026",
    serviceTitle: "Service Description",
    serviceBody: "YouNote is a productivity app for creating and managing notebooks, whiteboards, mind maps, and text documents on supported Apple devices.",
    acceptTitle: "Acceptance",
    acceptBody: "By downloading, installing, or using YouNote, you agree to these terms. If you do not agree, please stop using the app.",
    useTitle: "Acceptable Use",
    useBody: "You agree to use YouNote lawfully and responsibly.",
    useList: [
      "Do not use the app for illegal, harmful, or abusive activity.",
      "Do not attempt to reverse engineer, disrupt, or compromise the app.",
      "Do not infringe the rights, privacy, or intellectual property of others."
    ],
    contentTitle: "Your Content",
    contentBody: "You retain ownership of notes, drawings, documents, images, and exports you create or import. You are responsible for backing up important content.",
    ipTitle: "Intellectual Property",
    ipBody: "The YouNote app, website, design, name, icons, and software are protected by intellectual property laws. You may not copy, modify, sell, or redistribute any part without permission.",
    availabilityTitle: "Availability",
    availabilityBody: "YouNote is provided as available. Features may change, and we do not guarantee uninterrupted or error-free operation.",
    disclaimerTitle: "Disclaimer",
    disclaimerBody: "To the maximum extent permitted by law, YouNote is provided without warranties of any kind. We are not liable for indirect, incidental, or consequential damages.",
    changesTitle: "Changes to Terms",
    changesBody: "We may update these terms. Continued use of YouNote after updates means you accept the revised terms.",
    contactTitle: "Contact",
    contactBody: "For questions about these terms, email:"
  },
  support: {
    title: "Technical Support",
    subtitle: "We are here to help with YouNote.",
    contactTitle: "Contact us",
    contactBody: "If the FAQ does not solve your problem, send us an email with your device model, iOS/iPadOS version, and a short description.",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "How do I download YouNote?", a: "Open the App Store link on this website or search for YouNote in the App Store." },
      { q: "Which devices are supported?", a: "YouNote is designed for iPhone and iPad running iOS or iPadOS 17.0 or later." },
      { q: "What can I create?", a: "You can create notebooks, whiteboards, mind maps, and text documents from the document library." },
      { q: "Can I import and export files?", a: "Yes. YouNote includes import and export workflows, including PDF and image export where supported." },
      { q: "How do I change the language?", a: "Open Settings in YouNote, choose Language, and select the language you prefer." },
      { q: "What should I include in a bug report?", a: "Please include your device model, iOS or iPadOS version, YouNote version, and steps to reproduce the issue." }
    ]
  }
};

const LOCALE_OVERRIDES = {
  fr: {
    nav: { home: "Accueil", privacy: "Confidentialité", terms: "Conditions", support: "Assistance" },
    hero: { eyebrow: "Pour iPhone et iPad", title: "Un espace calme pour notes, tableaux blancs et cartes mentales.", subtitle: "YouNote rassemble carnets, canevas libres, cartes mentales et documents texte pour transformer les idées en pages organisées.", download: "Télécharger sur l’App Store", learnMore: "Voir les fonctionnalités" },
    features: { title: "Tout ce dont vos notes ont besoin", subtitle: "Des outils souples pour écrire, dessiner, structurer et organiser.", notebookTitle: "Carnet", whiteboardTitle: "Tableau blanc", mindmapTitle: "Cartes mentales", textTitle: "Documents texte", exportTitle: "Importer et exporter", languageTitle: "Pensé pour plusieurs langues" },
    download: { title: "Commencez avec YouNote", subtitle: "Téléchargez YouNote sur l’App Store pour iPhone et iPad.", appstore: "Télécharger sur l’App Store" },
    footer: { product: "Produit", features: "Fonctionnalités", download: "Télécharger", legal: "Légal", privacy: "Politique de confidentialité", terms: "Conditions d’utilisation", support: "Assistance", contact: "Nous contacter", copyright: "© 2026 YouNote. Tous droits réservés." },
    privacy: { title: "Politique de confidentialité", updated: "Dernière mise à jour : 18 mai 2026", introTitle: "Introduction", collectTitle: "Informations traitées", permissionsTitle: "Autorisations", useTitle: "Utilisation des informations", shareTitle: "Partage", securityTitle: "Sécurité", childrenTitle: "Enfants", changesTitle: "Modifications", contactTitle: "Nous contacter", contactBody: "Pour toute question de confidentialité, contactez-nous à :" },
    terms: { title: "Conditions d’utilisation", updated: "Dernière mise à jour : 18 mai 2026", serviceTitle: "Description du service", acceptTitle: "Acceptation", useTitle: "Utilisation acceptable", contentTitle: "Votre contenu", ipTitle: "Propriété intellectuelle", availabilityTitle: "Disponibilité", disclaimerTitle: "Avertissement", changesTitle: "Modification des conditions", contactTitle: "Contact" },
    support: { title: "Assistance technique", subtitle: "Nous sommes là pour vous aider avec YouNote.", contactTitle: "Contactez-nous", faqTitle: "Questions fréquentes" }
  },
  de: {
    nav: { home: "Start", privacy: "Datenschutz", terms: "Bedingungen", support: "Support" },
    hero: { eyebrow: "Für iPhone und iPad", title: "Ein ruhiger Arbeitsbereich für Notizen, Whiteboards und Mindmaps.", subtitle: "YouNote vereint Notizbücher, freie Leinwände, Mindmaps und Textdokumente.", download: "Im App Store laden", learnMore: "Funktionen ansehen" },
    features: { title: "Alles, was deine Notizen brauchen", subtitle: "Flexible Werkzeuge zum Schreiben, Skizzieren, Strukturieren und Organisieren.", notebookTitle: "Notizbuch", whiteboardTitle: "Whiteboard", mindmapTitle: "Mindmaps", textTitle: "Textdokumente", exportTitle: "Import und Export", languageTitle: "Für viele Sprachen" },
    download: { title: "Mit YouNote starten", subtitle: "Lade YouNote im App Store für iPhone und iPad.", appstore: "Im App Store laden" },
    footer: { product: "Produkt", features: "Funktionen", download: "Download", legal: "Rechtliches", privacy: "Datenschutzrichtlinie", terms: "Nutzungsbedingungen", support: "Support", contact: "Kontakt", copyright: "© 2026 YouNote. Alle Rechte vorbehalten." },
    privacy: { title: "Datenschutzrichtlinie", updated: "Zuletzt aktualisiert: 18. Mai 2026", introTitle: "Einführung", collectTitle: "Informationen, die wir verarbeiten", permissionsTitle: "Berechtigungen", useTitle: "Nutzung von Informationen", shareTitle: "Weitergabe", securityTitle: "Sicherheit", childrenTitle: "Kinder", changesTitle: "Änderungen", contactTitle: "Kontakt" },
    terms: { title: "Nutzungsbedingungen", updated: "Zuletzt aktualisiert: 18. Mai 2026", serviceTitle: "Beschreibung des Dienstes", acceptTitle: "Annahme", useTitle: "Zulässige Nutzung", contentTitle: "Deine Inhalte", ipTitle: "Geistiges Eigentum", availabilityTitle: "Verfügbarkeit", disclaimerTitle: "Haftungsausschluss", changesTitle: "Änderungen", contactTitle: "Kontakt" },
    support: { title: "Technischer Support", subtitle: "Wir helfen dir gerne mit YouNote.", contactTitle: "Kontakt", faqTitle: "Häufige Fragen" }
  },
  ja: {
    nav: { home: "ホーム", privacy: "プライバシー", terms: "利用規約", support: "サポート" },
    hero: { eyebrow: "iPhone と iPad 向け", title: "ノート、ホワイトボード、マインドマップのための落ち着いた作業空間。", subtitle: "YouNote はノートブック、自由なキャンバス、マインドマップ、テキスト文書を一つにまとめます。", download: "App Store でダウンロード", learnMore: "機能を見る" },
    features: { title: "ノートに必要なものを一つに", subtitle: "書く、描く、整理するための柔軟なツール。", notebookTitle: "ノートブック", whiteboardTitle: "ホワイトボード", mindmapTitle: "マインドマップ", textTitle: "テキスト文書", exportTitle: "インポートとエクスポート", languageTitle: "多言語対応" },
    download: { title: "YouNote をはじめる", subtitle: "iPhone と iPad 向け YouNote を App Store からダウンロード。", appstore: "App Store でダウンロード" },
    footer: { product: "製品", features: "機能", download: "ダウンロード", legal: "法的情報", privacy: "プライバシーポリシー", terms: "利用規約", support: "サポート", contact: "お問い合わせ", copyright: "© 2026 YouNote. All rights reserved." },
    privacy: { title: "プライバシーポリシー", updated: "最終更新日：2026年5月18日", introTitle: "はじめに", collectTitle: "取り扱う情報", permissionsTitle: "権限", useTitle: "情報の利用", shareTitle: "共有", securityTitle: "セキュリティ", childrenTitle: "子ども", changesTitle: "変更", contactTitle: "お問い合わせ" },
    terms: { title: "利用規約", updated: "最終更新日：2026年5月18日", serviceTitle: "サービス説明", acceptTitle: "同意", useTitle: "適切な利用", contentTitle: "あなたのコンテンツ", ipTitle: "知的財産", availabilityTitle: "提供状況", disclaimerTitle: "免責事項", changesTitle: "規約の変更", contactTitle: "連絡先" },
    support: { title: "技術サポート", subtitle: "YouNote についてお手伝いします。", contactTitle: "お問い合わせ", faqTitle: "よくある質問" }
  },
  ko: {
    nav: { home: "홈", privacy: "개인정보", terms: "약관", support: "지원" },
    hero: { eyebrow: "iPhone 및 iPad용", title: "노트, 화이트보드, 마인드맵을 위한 차분한 작업 공간.", subtitle: "YouNote는 노트북, 자유 캔버스, 마인드맵, 텍스트 문서를 한곳에 모읍니다.", download: "App Store에서 다운로드", learnMore: "기능 보기" },
    features: { title: "노트에 필요한 모든 것", subtitle: "쓰기, 스케치, 구조화, 정리를 위한 유연한 도구.", notebookTitle: "노트북", whiteboardTitle: "화이트보드", mindmapTitle: "마인드맵", textTitle: "텍스트 문서", exportTitle: "가져오기 및 내보내기", languageTitle: "다국어 지원" },
    download: { title: "YouNote 시작하기", subtitle: "iPhone 및 iPad용 YouNote를 App Store에서 다운로드하세요.", appstore: "App Store에서 다운로드" },
    footer: { product: "제품", features: "기능", download: "다운로드", legal: "법적 고지", privacy: "개인정보 처리방침", terms: "서비스 약관", support: "지원", contact: "문의하기", copyright: "© 2026 YouNote. All rights reserved." },
    privacy: { title: "개인정보 처리방침", updated: "최종 업데이트: 2026년 5월 18일", introTitle: "소개", collectTitle: "처리하는 정보", permissionsTitle: "권한", useTitle: "정보 사용", shareTitle: "공유", securityTitle: "보안", childrenTitle: "아동", changesTitle: "변경", contactTitle: "문의하기" },
    terms: { title: "서비스 약관", updated: "최종 업데이트: 2026년 5월 18일", serviceTitle: "서비스 설명", acceptTitle: "동의", useTitle: "허용되는 사용", contentTitle: "사용자 콘텐츠", ipTitle: "지식 재산", availabilityTitle: "가용성", disclaimerTitle: "면책", changesTitle: "약관 변경", contactTitle: "연락처" },
    support: { title: "기술 지원", subtitle: "YouNote 사용을 도와드립니다.", contactTitle: "문의하기", faqTitle: "자주 묻는 질문" }
  },
  hi: {
    nav: { home: "होम", privacy: "गोपनीयता", terms: "शर्तें", support: "सहायता" },
    hero: { eyebrow: "iPhone और iPad के लिए", title: "नोट्स, व्हाइटबोर्ड और माइंड मैप के लिए शांत कार्यक्षेत्र।", subtitle: "YouNote नोटबुक, फ्रीफॉर्म कैनवास, माइंड मैप और टेक्स्ट दस्तावेज़ों को साथ रखता है।", download: "App Store से डाउनलोड करें", learnMore: "फीचर देखें" },
    features: { title: "आपके नोट्स के लिए सब कुछ", subtitle: "लिखने, स्केच करने, संरचना बनाने और व्यवस्थित रखने के उपकरण।", notebookTitle: "नोटबुक", whiteboardTitle: "व्हाइटबोर्ड", mindmapTitle: "माइंड मैप", textTitle: "टेक्स्ट दस्तावेज़", exportTitle: "इम्पोर्ट और एक्सपोर्ट", languageTitle: "कई भाषाओं के लिए" },
    download: { title: "YouNote शुरू करें", subtitle: "iPhone और iPad के लिए YouNote App Store से डाउनलोड करें।", appstore: "App Store से डाउनलोड करें" },
    footer: { product: "उत्पाद", features: "फीचर", download: "डाउनलोड", legal: "कानूनी", privacy: "गोपनीयता नीति", terms: "सेवा की शर्तें", support: "सहायता", contact: "संपर्क करें", copyright: "© 2026 YouNote. सर्वाधिकार सुरक्षित।" },
    privacy: { title: "गोपनीयता नीति", updated: "अंतिम अपडेट: 18 मई 2026", introTitle: "परिचय", collectTitle: "हम जो जानकारी संभालते हैं", permissionsTitle: "अनुमतियां", useTitle: "जानकारी का उपयोग", shareTitle: "साझाकरण", securityTitle: "सुरक्षा", childrenTitle: "बच्चे", changesTitle: "बदलाव", contactTitle: "संपर्क करें" },
    terms: { title: "सेवा की शर्तें", updated: "अंतिम अपडेट: 18 मई 2026", serviceTitle: "सेवा विवरण", acceptTitle: "स्वीकृति", useTitle: "स्वीकार्य उपयोग", contentTitle: "आपकी सामग्री", ipTitle: "बौद्धिक संपदा", availabilityTitle: "उपलब्धता", disclaimerTitle: "अस्वीकरण", changesTitle: "शर्तों में बदलाव", contactTitle: "संपर्क" },
    support: { title: "तकनीकी सहायता", subtitle: "हम YouNote में आपकी मदद के लिए हैं।", contactTitle: "संपर्क करें", faqTitle: "अक्सर पूछे जाने वाले प्रश्न" }
  },
  vi: {
    nav: { home: "Trang chủ", privacy: "Quyền riêng tư", terms: "Điều khoản", support: "Hỗ trợ" },
    hero: { eyebrow: "Cho iPhone và iPad", title: "Không gian yên tĩnh cho ghi chú, bảng trắng và sơ đồ tư duy.", subtitle: "YouNote kết hợp sổ tay, canvas tự do, sơ đồ tư duy và tài liệu văn bản.", download: "Tải trên App Store", learnMore: "Xem tính năng" },
    features: { title: "Mọi thứ ghi chú cần", subtitle: "Công cụ linh hoạt để viết, phác thảo, cấu trúc và sắp xếp.", notebookTitle: "Sổ tay", whiteboardTitle: "Bảng trắng", mindmapTitle: "Sơ đồ tư duy", textTitle: "Tài liệu văn bản", exportTitle: "Nhập và xuất", languageTitle: "Hỗ trợ nhiều ngôn ngữ" },
    download: { title: "Bắt đầu với YouNote", subtitle: "Tải YouNote trên App Store cho iPhone và iPad.", appstore: "Tải trên App Store" },
    footer: { product: "Sản phẩm", features: "Tính năng", download: "Tải xuống", legal: "Pháp lý", privacy: "Chính sách quyền riêng tư", terms: "Điều khoản dịch vụ", support: "Hỗ trợ", contact: "Liên hệ", copyright: "© 2026 YouNote. Bảo lưu mọi quyền." },
    privacy: { title: "Chính sách quyền riêng tư", updated: "Cập nhật lần cuối: 18/05/2026", introTitle: "Giới thiệu", collectTitle: "Thông tin chúng tôi xử lý", permissionsTitle: "Quyền truy cập", useTitle: "Cách sử dụng thông tin", shareTitle: "Chia sẻ", securityTitle: "Bảo mật", childrenTitle: "Trẻ em", changesTitle: "Thay đổi", contactTitle: "Liên hệ" },
    terms: { title: "Điều khoản dịch vụ", updated: "Cập nhật lần cuối: 18/05/2026", serviceTitle: "Mô tả dịch vụ", acceptTitle: "Chấp nhận", useTitle: "Sử dụng được phép", contentTitle: "Nội dung của bạn", ipTitle: "Sở hữu trí tuệ", availabilityTitle: "Tính khả dụng", disclaimerTitle: "Tuyên bố miễn trừ", changesTitle: "Thay đổi điều khoản", contactTitle: "Liên hệ" },
    support: { title: "Hỗ trợ kỹ thuật", subtitle: "Chúng tôi sẵn sàng hỗ trợ YouNote.", contactTitle: "Liên hệ", faqTitle: "Câu hỏi thường gặp" }
  },
  id: {
    nav: { home: "Beranda", privacy: "Privasi", terms: "Ketentuan", support: "Dukungan" },
    hero: { eyebrow: "Untuk iPhone dan iPad", title: "Ruang kerja tenang untuk catatan, papan tulis, dan peta pikiran.", subtitle: "YouNote menyatukan buku catatan, kanvas bebas, peta pikiran, dan dokumen teks.", download: "Unduh di App Store", learnMore: "Lihat fitur" },
    features: { title: "Semua yang dibutuhkan catatan Anda", subtitle: "Alat fleksibel untuk menulis, membuat sketsa, menyusun, dan mengatur.", notebookTitle: "Buku Catatan", whiteboardTitle: "Papan Tulis", mindmapTitle: "Peta Pikiran", textTitle: "Dokumen Teks", exportTitle: "Impor dan Ekspor", languageTitle: "Untuk Banyak Bahasa" },
    download: { title: "Mulai dengan YouNote", subtitle: "Unduh YouNote di App Store untuk iPhone dan iPad.", appstore: "Unduh di App Store" },
    footer: { product: "Produk", features: "Fitur", download: "Unduh", legal: "Legal", privacy: "Kebijakan Privasi", terms: "Ketentuan Layanan", support: "Dukungan", contact: "Hubungi Kami", copyright: "© 2026 YouNote. Hak cipta dilindungi." },
    privacy: { title: "Kebijakan Privasi", updated: "Terakhir diperbarui: 18 Mei 2026", introTitle: "Pengantar", collectTitle: "Informasi yang Kami Tangani", permissionsTitle: "Izin", useTitle: "Cara Informasi Digunakan", shareTitle: "Berbagi", securityTitle: "Keamanan", childrenTitle: "Anak-anak", changesTitle: "Perubahan", contactTitle: "Hubungi Kami" },
    terms: { title: "Ketentuan Layanan", updated: "Terakhir diperbarui: 18 Mei 2026", serviceTitle: "Deskripsi Layanan", acceptTitle: "Penerimaan", useTitle: "Penggunaan yang Diperbolehkan", contentTitle: "Konten Anda", ipTitle: "Kekayaan Intelektual", availabilityTitle: "Ketersediaan", disclaimerTitle: "Penafian", changesTitle: "Perubahan Ketentuan", contactTitle: "Kontak" },
    support: { title: "Dukungan Teknis", subtitle: "Kami siap membantu Anda dengan YouNote.", contactTitle: "Hubungi kami", faqTitle: "Pertanyaan Umum" }
  },
  pt: {
    nav: { home: "Início", privacy: "Privacidade", terms: "Termos", support: "Suporte" },
    hero: { eyebrow: "Para iPhone e iPad", title: "Um espaço tranquilo para notas, quadros brancos e mapas mentais.", subtitle: "YouNote reúne cadernos, telas livres, mapas mentais e documentos de texto.", download: "Baixar na App Store", learnMore: "Ver recursos" },
    features: { title: "Tudo que suas notas precisam", subtitle: "Ferramentas flexíveis para escrever, desenhar, estruturar e organizar.", notebookTitle: "Caderno", whiteboardTitle: "Quadro branco", mindmapTitle: "Mapas mentais", textTitle: "Documentos de texto", exportTitle: "Importar e exportar", languageTitle: "Feito para vários idiomas" },
    download: { title: "Comece com YouNote", subtitle: "Baixe YouNote na App Store para iPhone e iPad.", appstore: "Baixar na App Store" },
    footer: { product: "Produto", features: "Recursos", download: "Baixar", legal: "Legal", privacy: "Política de Privacidade", terms: "Termos de Serviço", support: "Suporte", contact: "Fale Conosco", copyright: "© 2026 YouNote. Todos os direitos reservados." },
    privacy: { title: "Política de Privacidade", updated: "Última atualização: 18 de maio de 2026", introTitle: "Introdução", collectTitle: "Informações que Tratamos", permissionsTitle: "Permissões", useTitle: "Como as Informações São Usadas", shareTitle: "Compartilhamento", securityTitle: "Segurança", childrenTitle: "Crianças", changesTitle: "Alterações", contactTitle: "Fale Conosco" },
    terms: { title: "Termos de Serviço", updated: "Última atualização: 18 de maio de 2026", serviceTitle: "Descrição do Serviço", acceptTitle: "Aceitação", useTitle: "Uso Aceitável", contentTitle: "Seu Conteúdo", ipTitle: "Propriedade Intelectual", availabilityTitle: "Disponibilidade", disclaimerTitle: "Isenção de Responsabilidade", changesTitle: "Alterações nos Termos", contactTitle: "Contato" },
    support: { title: "Suporte Técnico", subtitle: "Estamos aqui para ajudar com YouNote.", contactTitle: "Fale conosco", faqTitle: "Perguntas Frequentes" }
  },
  tr: {
    nav: { home: "Ana Sayfa", privacy: "Gizlilik", terms: "Şartlar", support: "Destek" },
    hero: { eyebrow: "iPhone ve iPad için", title: "Notlar, beyaz tahtalar ve zihin haritaları için sakin bir çalışma alanı.", subtitle: "YouNote defterleri, serbest tuvalleri, zihin haritalarını ve metin belgelerini bir araya getirir.", download: "App Store’dan indir", learnMore: "Özellikleri keşfet" },
    features: { title: "Notlarınızın ihtiyaç duyduğu her şey", subtitle: "Yazmak, çizmek, yapılandırmak ve düzenlemek için esnek araçlar.", notebookTitle: "Defter", whiteboardTitle: "Beyaz Tahta", mindmapTitle: "Zihin Haritaları", textTitle: "Metin Belgeleri", exportTitle: "İçe ve Dışa Aktarma", languageTitle: "Birçok Dil İçin" },
    download: { title: "YouNote ile başlayın", subtitle: "iPhone ve iPad için YouNote’u App Store’dan indirin.", appstore: "App Store’dan indir" },
    footer: { product: "Ürün", features: "Özellikler", download: "İndir", legal: "Yasal", privacy: "Gizlilik Politikası", terms: "Hizmet Şartları", support: "Destek", contact: "İletişim", copyright: "© 2026 YouNote. Tüm hakları saklıdır." },
    privacy: { title: "Gizlilik Politikası", updated: "Son güncelleme: 18 Mayıs 2026", introTitle: "Giriş", collectTitle: "İşlediğimiz Bilgiler", permissionsTitle: "İzinler", useTitle: "Bilgilerin Kullanımı", shareTitle: "Paylaşım", securityTitle: "Güvenlik", childrenTitle: "Çocuklar", changesTitle: "Değişiklikler", contactTitle: "İletişim" },
    terms: { title: "Hizmet Şartları", updated: "Son güncelleme: 18 Mayıs 2026", serviceTitle: "Hizmet Açıklaması", acceptTitle: "Kabul", useTitle: "Kabul Edilebilir Kullanım", contentTitle: "İçeriğiniz", ipTitle: "Fikri Mülkiyet", availabilityTitle: "Kullanılabilirlik", disclaimerTitle: "Sorumluluk Reddi", changesTitle: "Şartlardaki Değişiklikler", contactTitle: "İletişim" },
    support: { title: "Teknik Destek", subtitle: "YouNote konusunda yardımcı olmak için buradayız.", contactTitle: "Bize ulaşın", faqTitle: "Sık Sorulan Sorular" }
  }
};

const LOCALIZED_CONTENT = {
  fr: {
    meta: { homeTitle: "YouNote - Carnets, tableaux blancs et cartes mentales", privacyTitle: "Politique de confidentialité - YouNote", termsTitle: "Conditions d’utilisation - YouNote", supportTitle: "Assistance - YouNote" },
    mock: { library: "Documents", notebook: "Carnet", whiteboard: "Tableau", mindmap: "Carte", classNotes: "Notes de cours", updatedToday: "Mis à jour aujourd’hui", projectBoard: "Tableau projet", canvas: "Canevas infini", ideaMap: "Carte d’idées", nodes: "12 nœuds" },
    features: { notebookDesc: "Créez des carnets structurés avec pages, styles de papier, écriture manuscrite et export.", whiteboardDesc: "Utilisez un canevas libre pour diagrammes, croquis rapides et planification visuelle.", mindmapDesc: "Transformez des idées dispersées en nœuds connectés pour étudier et planifier.", textDesc: "Rédigez des documents texte propres à côté de vos notes visuelles.", exportDesc: "Importez des fichiers, exportez en PDF ou images, et gardez votre travail portable.", languageDesc: "Changez la langue dans les réglages et utilisez YouNote naturellement." },
    showcase: { title: "Conçu pour penser au quotidien", body: "YouNote convient aux cours, réunions, plans d’étude, résumés et cartes de connaissances.", preview1Title: "Choix de papier", preview1Body: "Vide, grille, points et couleurs de page.", preview2Title: "Outils de dessin", preview2Body: "Stylo, surligneur, gomme, texte, image et lasso.", preview3Title: "Bibliothèque organisée", preview3Body: "Carnets, tableaux blancs et cartes mentales séparés." },
    privacy: { intro1: "YouNote respecte votre vie privée. Cette politique explique comment les informations sont traitées dans l’app et sur ce site.", intro2: "En utilisant YouNote, vous acceptez les pratiques décrites ici.", collectBody: "YouNote est une app de prise de notes. Votre contenu peut inclure carnets, tableaux blancs, cartes mentales, textes, fichiers, dessins, images et exports.", collectList: ["Les notes et documents créés ou importés restent sous votre contrôle.", "Les e-mails d’assistance peuvent contenir les informations que vous choisissez d’envoyer.", "Ce site statique ne demande pas de compte et ne collecte pas d’informations de paiement."], permissionsBody: "Certaines fonctions peuvent demander des autorisations système uniquement si nécessaire.", permissionsList: ["La photothèque peut servir à choisir des images ou enregistrer des exports.", "L’accès aux fichiers peut servir à importer ou exporter votre travail.", "Les liens e-mail ouvrent votre app de messagerie seulement si vous contactez l’assistance."], useList: ["Fournir les fonctions de carnet, tableau blanc, carte mentale, texte, import et export.", "Répondre aux demandes d’assistance.", "Améliorer la fiabilité, l’ergonomie et les langues."], shareBody: "Nous ne vendons pas vos données personnelles. Vous contrôlez ce que vous importez, exportez, enregistrez ou partagez.", securityBody: "Utilisez un code d’appareil, les protections Apple ID et des sauvegardes régulières.", childrenBody: "YouNote ne s’adresse pas aux enfants de moins de 13 ans.", changesBody: "Cette politique peut être mise à jour. La dernière version est publiée sur cette page." },
    terms: { serviceBody: "YouNote est une app de productivité pour créer et gérer carnets, tableaux blancs, cartes mentales et documents texte.", acceptBody: "En téléchargeant ou utilisant YouNote, vous acceptez ces conditions.", useBody: "Vous acceptez d’utiliser YouNote légalement et avec responsabilité.", useList: ["N’utilisez pas l’app pour des activités illégales ou nuisibles.", "Ne tentez pas de perturber ou compromettre l’app.", "Ne violez pas les droits ou la vie privée d’autrui."], contentBody: "Vous conservez la propriété du contenu créé ou importé. Vous êtes responsable des sauvegardes.", ipBody: "L’app, le site, le design, le nom, les icônes et le logiciel YouNote sont protégés.", availabilityBody: "YouNote est fourni selon disponibilité. Les fonctions peuvent changer.", disclaimerBody: "Dans la limite de la loi, YouNote est fourni sans garantie.", changesBody: "L’utilisation continue après mise à jour signifie que vous acceptez les conditions révisées.", contactBody: "Pour toute question sur ces conditions, écrivez à :" },
    support: { contactBody: "Si la FAQ ne résout pas le problème, envoyez votre modèle d’appareil, la version iOS/iPadOS et une courte description.", faqs: [{ q: "Comment télécharger YouNote ?", a: "Ouvrez le lien App Store de ce site ou recherchez YouNote dans l’App Store." }, { q: "Quels appareils sont pris en charge ?", a: "YouNote est conçu pour iPhone et iPad sous iOS ou iPadOS 17.0 ou version ultérieure." }, { q: "Que puis-je créer ?", a: "Vous pouvez créer carnets, tableaux blancs, cartes mentales et documents texte." }, { q: "Puis-je importer et exporter ?", a: "Oui. YouNote prend en charge les flux d’import et d’export, dont PDF et images quand disponible." }, { q: "Comment changer la langue ?", a: "Ouvrez Réglages dans YouNote, choisissez Langue, puis sélectionnez votre langue." }, { q: "Que mettre dans un rapport de bug ?", a: "Indiquez le modèle, la version iOS/iPadOS, la version YouNote et les étapes pour reproduire." }] }
  },
  de: {
    meta: { homeTitle: "YouNote - Notizbücher, Whiteboards und Mindmaps", privacyTitle: "Datenschutzrichtlinie - YouNote", termsTitle: "Nutzungsbedingungen - YouNote", supportTitle: "Support - YouNote" },
    mock: { library: "Dokumente", notebook: "Notizbuch", whiteboard: "Whiteboard", mindmap: "Mindmap", classNotes: "Kursnotizen", updatedToday: "Heute aktualisiert", projectBoard: "Projektboard", canvas: "Unendliche Leinwand", ideaMap: "Ideenkarte", nodes: "12 Knoten" },
    features: { notebookDesc: "Erstelle strukturierte Notizbücher mit Seiten, Papierstilen, Handschrift und Export.", whiteboardDesc: "Nutze eine freie Leinwand für Diagramme, Skizzen und visuelle Planung.", mindmapDesc: "Verbinde verstreute Gedanken zu Knoten für Lernen, Planung und Kreativität.", textDesc: "Schreibe Textdokumente neben deinen visuellen Notizen.", exportDesc: "Importiere Dateien, exportiere als PDF oder Bilder und halte deine Arbeit portabel.", languageDesc: "Wechsle die Sprache in den Einstellungen und nutze YouNote natürlich." },
    showcase: { title: "Für tägliches Denken gemacht", body: "YouNote eignet sich für Unterricht, Meetings, Lernpläne, Zusammenfassungen und Wissenskarten.", preview1Title: "Papierauswahl", preview1Body: "Leer, Raster, Punkte und Seitenfarben.", preview2Title: "Zeichenwerkzeuge", preview2Body: "Stift, Marker, Radierer, Text, Bild und Lasso.", preview3Title: "Organisierte Bibliothek", preview3Body: "Getrennte Notizbücher, Whiteboards und Mindmaps." },
    privacy: { intro1: "YouNote respektiert deine Privatsphäre. Diese Richtlinie erklärt die Verarbeitung von Informationen in App und Website.", intro2: "Durch die Nutzung von YouNote stimmst du diesen Praktiken zu.", collectBody: "Inhalte können Notizbücher, Whiteboards, Mindmaps, Texte, Dateien, Zeichnungen, Bilder und Exporte enthalten.", collectList: ["Notizen und importierte Dokumente werden von dir kontrolliert.", "Support-E-Mails können Angaben enthalten, die du freiwillig sendest.", "Diese statische Website benötigt kein Konto und keine Zahlungsdaten."], permissionsBody: "Einige Funktionen fragen Systemberechtigungen nur bei Bedarf an.", permissionsList: ["Fotos können zum Auswählen oder Speichern von Bildern genutzt werden.", "Dateizugriff kann Import und Export ermöglichen.", "E-Mail-Links öffnen nur auf Wunsch deine Mail-App."], useList: ["Bereitstellung von Notizbuch-, Whiteboard-, Mindmap-, Text-, Import- und Exportfunktionen.", "Beantwortung von Supportanfragen.", "Verbesserung von Zuverlässigkeit, Bedienung und Sprachen."], shareBody: "Wir verkaufen keine personenbezogenen Daten. Du kontrollierst importierte, exportierte und geteilte Inhalte.", securityBody: "Nutze Gerätesperre, Apple-ID-Schutz und regelmäßige Backups.", childrenBody: "YouNote richtet sich nicht an Kinder unter 13 Jahren.", changesBody: "Diese Richtlinie kann aktualisiert werden. Die neueste Version steht auf dieser Seite." },
    terms: { serviceBody: "YouNote ist eine Produktivitäts-App für Notizbücher, Whiteboards, Mindmaps und Textdokumente.", acceptBody: "Durch Download, Installation oder Nutzung akzeptierst du diese Bedingungen.", useBody: "Du verpflichtest dich, YouNote rechtmäßig und verantwortungsvoll zu verwenden.", useList: ["Keine illegale, schädliche oder missbräuchliche Nutzung.", "Keine Störung, Kompromittierung oder Umgehung der App.", "Keine Verletzung von Rechten, Privatsphäre oder geistigem Eigentum anderer."], contentBody: "Du behältst das Eigentum an erstellten oder importierten Inhalten und bist für Backups verantwortlich.", ipBody: "App, Website, Design, Name, Icons und Software von YouNote sind geschützt.", availabilityBody: "YouNote wird nach Verfügbarkeit bereitgestellt; Funktionen können sich ändern.", disclaimerBody: "Soweit gesetzlich zulässig, wird YouNote ohne Gewährleistung bereitgestellt.", changesBody: "Weitere Nutzung nach Aktualisierungen bedeutet Zustimmung zu den geänderten Bedingungen.", contactBody: "Fragen zu diesen Bedingungen bitte per E-Mail an:" },
    support: { contactBody: "Wenn die FAQ nicht hilft, sende Gerätemodell, iOS/iPadOS-Version und eine kurze Beschreibung.", faqs: [{ q: "Wie lade ich YouNote herunter?", a: "Öffne den App-Store-Link auf dieser Website oder suche im App Store nach YouNote." }, { q: "Welche Geräte werden unterstützt?", a: "YouNote ist für iPhone und iPad mit iOS oder iPadOS 17.0 oder neuer entwickelt." }, { q: "Was kann ich erstellen?", a: "Du kannst Notizbücher, Whiteboards, Mindmaps und Textdokumente erstellen." }, { q: "Kann ich Dateien importieren und exportieren?", a: "Ja. YouNote unterstützt Import und Export, einschließlich PDF und Bildern, wo verfügbar." }, { q: "Wie ändere ich die Sprache?", a: "Öffne Einstellungen in YouNote, wähle Sprache und dann deine bevorzugte Sprache." }, { q: "Was gehört in einen Fehlerbericht?", a: "Bitte nenne Gerätemodell, iOS/iPadOS-Version, YouNote-Version und Schritte zur Reproduktion." }] }
  }
};

["ja", "ko", "hi", "vi", "id", "pt", "tr"].forEach((lang) => {
  LOCALIZED_CONTENT[lang] = {
    meta: {
      homeTitle: `${SUPPORTED_LANGUAGES.find((item) => item.code === lang).name} - YouNote`,
      privacyTitle: `${LOCALE_OVERRIDES[lang].privacy.title} - YouNote`,
      termsTitle: `${LOCALE_OVERRIDES[lang].terms.title} - YouNote`,
      supportTitle: `${LOCALE_OVERRIDES[lang].support.title} - YouNote`
    },
    support: {
      faqs: BASE_TRANSLATION.support.faqs.map((faq) => ({
        q: `${LOCALE_OVERRIDES[lang].support.faqTitle}: ${faq.q}`,
        a: faq.a
      }))
    }
  };
});

function mergeDeep(base, override = {}) {
  const output = Array.isArray(base) ? [...base] : { ...base };
  Object.keys(override).forEach((key) => {
    if (override[key] && typeof override[key] === "object" && !Array.isArray(override[key])) {
      output[key] = mergeDeep(base[key] || {}, override[key]);
    } else {
      output[key] = override[key];
    }
  });
  return output;
}

function getTranslations(lang) {
  return mergeDeep(mergeDeep(BASE_TRANSLATION, LOCALE_OVERRIDES[lang] || {}), LOCALIZED_CONTENT[lang] || {});
}

function getValue(path, source) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function getBrowserLanguage() {
  const browserLang = (navigator.language || DEFAULT_LANGUAGE).toLowerCase();
  const exact = SUPPORTED_LANGUAGES.find((lang) => lang.code.toLowerCase() === browserLang);
  if (exact) return exact.code;
  const prefix = browserLang.split("-")[0];
  const match = SUPPORTED_LANGUAGES.find((lang) => lang.code === prefix);
  return match ? match.code : DEFAULT_LANGUAGE;
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
