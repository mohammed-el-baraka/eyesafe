/**
 * EyeSafe Sovereign Edge Computer Vision — Main Interactive Engine
 * 100% Sovereign AI • ISO/IEC 42001:2023 Aligned • 500 DH/cam/mo
 */

// =============================================================================
// I18N Translation Dictionary (English / Français)
// =============================================================================
const i18nData = {
  en: {
    "nav.expertise": "Expertise",
    "nav.solutions": "Solutions",
    "nav.simulator": "Live Feeds",
    "nav.sovereignty": "Sovereignty",
    "nav.standards": "ISO Standards",
    "nav.calculator": "Pricing & ROI",
    "nav.contact": "Contact",
    "nav.requestPilot": "Request Pilot",

    "hero.badge": "SOVEREIGN COMPUTER VISION PLATFORM",
    "hero.title": 'Vision that <br><span class="highlight-serif">protects.</span>',
    "hero.description": "Sovereign edge computer vision solutions designed to make workplaces, industrial plants, logistics gateways, and academic environments safer, smarter, and strictly compliant — with 100% on-premise processing and transparent pricing of <strong>500 DH / camera / month</strong>.",
    "hero.ctaPrimary": "Discover our expertise",
    "hero.ctaSecondary": "Zero-Cloud Sovereign Edge",
    "hero.stat1": "Local / Sovereign Data",
    "hero.stat2": "Real-Time Edge Latency",
    "hero.stat3": "Per Camera / Month",
    "hero.scroll": "SCROLL",
    "hero.feedCompliant": "Feed A: PPE Compliant",
    "hero.feedViolation": "Feed B: Missing Helmet",
    "hero.alarmActive": "SAFETY VIOLATION DETECTED // AUDIT LOGGED",

    "strip.eyebrow": "OUR CORE CAPABILITIES",
    "strip.title": "End-to-end computer vision built for high-stakes environments",
    "strip.subtext": "EyeSafe connects directly to your existing CCTV and IP camera network, executing ultra-fast neural inferences locally on dedicated edge appliances.",

    "feat1.title": "Industrial Safety & PPE Auditing",
    "feat1.body": "Instant detection of helmets, reflective safety vests, gloves, harnesses, and safety goggles across shop floors, construction sites, and warehouses.",
    "feat1.point1": "< 25ms real-time violation alarms",
    "feat1.point2": "Restricted zone geofencing & intrusion",
    "feat1.point3": "Forklift & pedestrian collision prevention",

    "feat2.title": "Matriculation & Truck Gate Logistics",
    "feat2.body": "Automated License Plate Recognition (ALPR/ANPR), container serial decoding, and automated manifest matching to verify authorized freight entering factories.",
    "feat2.point1": "Automatic inbound/outbound vehicle logging",
    "feat2.point2": "Non-fleet & unauthorized truck alerts",
    "feat2.point3": "Automated barrier & gate access trigger",

    "feat3.title": "Academic & Examination Integrity",
    "feat3.body": "Anti-cheating vision models for exam amphitheaters and test centers. Flags concealed smartphone usage, unauthorized materials, and suspicious gaze patterns.",
    "feat3.point1": "Concealed phone & device detection",
    "feat3.point2": "Silent real-time notifications to proctors",
    "feat3.point3": "Time-stamped audit video bookmarks",

    "feat4.title": "100% On-Premise Sovereign Edge",
    "feat4.body": "Zero video streams leave your company network or national borders. Full compliance with Moroccan Law 09-08, DGSSI cybersecurity mandates, and GDPR.",
    "feat4.point1": "Zero external cloud bandwidth dependency",
    "feat4.point2": "Fixed 500 DH / camera / month pricing",
    "feat4.point3": "Compatible with standard RTSP/ONVIF cameras",

    "sim.pill": "INTERACTIVE CAMERA SUITE",
    "sim.title": "Experience EyeSafe Live Feeds",
    "sim.subtext": "Switch between simulated enterprise camera feeds to inspect real-time neural detection boxes, confidence metrics, and instant alarms.",
    "sim.tab1Title": "CAM-01: Factory Shop Floor",
    "sim.tab1Desc": "PPE Compliance & Safety Auditing",
    "sim.tab2Title": "CAM-02: Logistics Gate 02",
    "sim.tab2Desc": "ALPR Truck & Container Matriculation",
    "sim.tab3Title": "CAM-03: Exam Amphitheater",
    "sim.tab3Desc": "Anti-Cheating & Phone Detection",
    "sim.confThreshold": "Detection Confidence Threshold:",
    "sim.bounding": "Bounding Boxes",
    "sim.telemetry": "HUD Telemetry",

    "sov.pill": "DATA SOVEREIGNTY & ZERO CLOUD",
    "sov.title": "Why 100% On-Premise Changes Everything",
    "sov.subtext": "Standard cloud AI solutions stream sensitive surveillance feeds out of your facility into public clouds, racking up unpredictable per-frame bills while violating national privacy laws. EyeSafe executes 100% on the local edge.",
    "sov.cloudBadge": "TRADITIONAL CLOUD VISION (AWS/AZURE)",
    "sov.cloudTitle": "High Risk & Recurring Cloud Tax",
    "sov.c1Title": "Data Leaves the Country:",
    "sov.c1Desc": "CCTV video streams sent to external cloud servers, violating Moroccan Law 09-08 and data residency rules.",
    "sov.c2Title": "Massive Recurring Ingestion Costs:",
    "sov.c2Desc": "Per-frame API calls cost $5,000–$25,000+ monthly for multi-camera 24/7 continuous operations.",
    "sov.c3Title": "High Latency & Internet Dependency:",
    "sov.c3Desc": "300ms–1500ms delay. If internet connection drops, security and safety monitoring completely fails.",
    "sov.eyeBadge": "EYESAFE SOVEREIGN EDGE",
    "sov.eyeTitle": "100% Local, Air-Gapped & 500 DH / Camera / Mo",
    "sov.e1Title": "Zero Video Data Exfiltration:",
    "sov.e1Desc": "Streams never leave your local physical LAN. Full compliance with DGSSI, national security, and enterprise sovereignty.",
    "sov.e2Title": "Transparent & Flat 500 DH / Cam Rate:",
    "sov.e2Desc": "Simple monthly subscription per camera. Run 24/7 continuous inference without unpredictable per-frame overage charges.",
    "sov.e3Title": "Sub-25ms Real-Time Alarm Latency:",
    "sov.e3Desc": "Hardware-accelerated edge inference (TensorRT / ONNX) executes locally even in completely air-gapped environments.",

    "iso.pill": "GLOBAL AI GOVERNANCE & COMPLIANCE",
    "iso.title": "ISO/IEC 42001:2023 Certified AI Governance",
    "iso.subtext": "The primary international standard for integrating and managing artificial intelligence in industry is <strong>ISO/IEC 42001:2023</strong>. It provides a certifiable framework for establishing an Artificial Intelligence Management System (AIMS), helping organizations responsibly develop, deploy, and govern AI technologies across manufacturing, logistics, and institutional sectors.",
    "iso.s1Title": "AI Management System (AIMS)",
    "iso.s1Desc": "Specifies requirements for building, maintaining, and continually improving an organizational AI governance and management framework tailored for enterprise operations.",
    "iso.s2Title": "AI Risk Management Guidance",
    "iso.s2Desc": "Offers practical guidance on managing specific risks, failure modes, and safety hazards tied to artificial intelligence projects and operational computer vision strategies.",
    "iso.s3Title": "AI System Lifecycle Processes",
    "iso.s3Desc": "Defines robust engineering lifecycle processes specifically designed for neural network deployment, continuous verification, validation, and maintenance.",
    "iso.s4Title": "Machine Learning Framework",
    "iso.s4Desc": "Establishes a common terminology, architectural framework, and computational vocabulary for machine learning, pipeline auditing, and AI system components.",
    "iso.benefitsTitle": "Key Strategic Benefits of ISO AI Integration",
    "iso.b1Title": "Risk Mitigation:",
    "iso.b1Desc": "Systematically addresses unique threats like data bias, security flaws, false positives, and model drift in physical plants.",
    "iso.b2Title": "Regulatory Compliance:",
    "iso.b2Desc": "Aligns internal industrial processes with emerging global rules, the EU AI Act, and national data protection mandates.",
    "iso.b3Title": "Traceability & Auditing:",
    "iso.b3Desc": "Improves documentation, incident playback, and telemetry across the entire machine learning and operational pipeline.",
    "iso.b4Title": "Stakeholder Trust:",
    "iso.b4Desc": "Provides verifiable, third-party auditable proof of responsible, transparent, and ethical AI usage across all facilities.",
    "iso.refLabel": "Official Framework & Governance Resources:",

    "calc.pill": "TRANSPARENT PRICING & ROI ESTIMATOR",
    "calc.title": "Analyze Your Costs & 3-Year Cloud Savings",
    "calc.subtext": "EyeSafe offers a transparent, predictable rate of <strong>500 DH / camera / month</strong>. Compare this against traditional per-frame cloud APIs to analyze your operational savings.",
    "calc.numCams": "Active Camera Streams:",
    "calc.hours": "Daily Operating Hours:",
    "calc.fps": "Inference Sampling Rate:",
    "calc.cloudEst": "Estimated Cloud API Cost (3 Yrs):",
    "calc.cloudSub": "Based on standard $0.0015 / frame cloud vision ingestion + bandwidth",
    "calc.eyeEst": "EyeSafe Sovereign Edge Investment (3 Yrs):",
    "calc.eyeSub": "Fixed 500 DH / camera / month — unlimited 24/7 inference, zero cloud overages",
    "calc.totalSavings": "Net 3-Year Operational Savings:",

    "int.eyebrow": "INTEGRATION WORKFLOW",
    "int.title": "Plug-and-play into your existing CCTV network",
    "int.subtext": "No expensive camera replacements or proprietary rewiring. EyeSafe connects directly to your existing IP cameras via standard RTSP/ONVIF protocols.",
    "int.step1Title": "Existing IP / CCTV Cameras",
    "int.step1Desc": "Connect effortlessly to any Hikvision, Dahua, Axis, Hanwha, or generic RTSP video feed over your private local network.",
    "int.step2Title": "EyeSafe Sovereign Edge Node",
    "int.step2Desc": "Our compact edge server (NVIDIA RTX / Jetson / Local Server) processes streams with TensorRT & ONNX Runtime with zero internet exposure.",
    "int.step3Title": "Instant Alarms & Automation",
    "int.step3Desc": "Trigger physical sirens, automated gate barriers, WhatsApp/SMS supervisor alerts, and automated HSE dashboard reports.",

    "contact.pill": "PILOT DEPLOYMENT",
    "contact.title": "Deploy EyeSafe in Your Facility",
    "contact.subtext": "Ready to eliminate safety compliance blindspots, automate gate matriculation, or secure your exam facilities? Request a 14-day on-premise Proof of Concept at 500 DH / camera / month.",
    "contact.perk1": "100% On-Site Testing with Your Existing Cameras",
    "contact.perk2": "Zero Cloud Setup & Full Data Privacy Guarantee",
    "contact.perk3": "ISO/IEC 42001:2023 Compliant Governance Framework",
    "contact.perk4": "Transparent Flat Rate: 500 DH / Camera / Month",
    "contact.directTitle": "Direct Contact & Instant WhatsApp:",

    "form.heading": "Request an On-Site Pilot",
    "form.name": "Full Name *",
    "form.org": "Company / Institution *",
    "form.email": "Professional Email *",
    "form.phone": "Phone / WhatsApp *",
    "form.useCase": "Primary Use Case *",
    "form.optPpe": "Industrial Safety & PPE Detection (Helmets, Vests, Gloves)",
    "form.optLogistics": "Logistics Gate Matriculation & Truck ANPR",
    "form.optExam": "Academic Exam Integrity & Anti-Cheating",
    "form.optCustom": "Multi-Facility Custom Edge Deployment",
    "form.camEst": "Approximate Number of Cameras",
    "form.msg": "Project Details & Requirements",
    "form.submit": "Submit Pilot Request",
    "form.success": "Thank you! Your request has been received. Our team will contact you within 24 hours.",

    "footer.desc": "Sovereign Edge Computer Vision Platform for industrial safety, freight logistics, and academic integrity. 100% on-premise local inference at 500 DH / camera / month.",
    "footer.solutionsTitle": "Solutions",
    "footer.navTitle": "Governance & ROI",
    "footer.contactTitle": "Enterprise Inquiries"
  },
  fr: {
    "nav.expertise": "Expertise",
    "nav.solutions": "Solutions",
    "nav.simulator": "Flux Directs",
    "nav.sovereignty": "Souveraineté",
    "nav.standards": "Normes ISO",
    "nav.calculator": "Tarifs & ROI",
    "nav.contact": "Contact",
    "nav.requestPilot": "Demander un Pilote",

    "hero.badge": "PLATEFORME SOUVERAINE DE VISION PAR ORDINATEUR",
    "hero.title": 'Une vision qui <br><span class="highlight-serif">protège.</span>',
    "hero.description": "Solutions souveraines d'intelligence artificielle et de vision par ordinateur pour sécuriser vos usines, flux logistiques et examens — traitement 100% local, aucune fuite de données et tarif clair de <strong>500 DH / caméra / mois</strong>.",
    "hero.ctaPrimary": "Découvrir notre expertise",
    "hero.ctaSecondary": "Souveraineté Edge Zéro-Cloud",
    "hero.stat1": "Données 100% Locales",
    "hero.stat2": "Latence Edge Temps Réel",
    "hero.stat3": "Par Caméra / Mois",
    "hero.scroll": "DÉFILER",
    "hero.feedCompliant": "Flux A: Port EPI Conforme",
    "hero.feedViolation": "Flux B: Casque Manquant",
    "hero.alarmActive": "INFRACTION SÉCURITÉ DÉTECTÉE // RAPPORT ENREGISTRÉ",

    "strip.eyebrow": "NOS DOMAINES D'EXPERTISE",
    "strip.title": "Une vision artificielle de pointe pour les environnements exigeants",
    "strip.subtext": "EyeSafe se branche sur vos caméras IP existantes pour exécuter des inférences neuronales ultra-rapides directement sur serveur local dédié.",

    "feat1.title": "Sécurité Industrielle & Audit EPI",
    "feat1.body": "Détection instantanée du port de casques, gilets haute visibilité, gants, harnais et lunettes de protection dans les ateliers et chantiers.",
    "feat1.point1": "Alertes en temps réel < 25ms",
    "feat1.point2": "Zonage virtuel & intrusion en zone de danger",
    "feat1.point3": "Prévention des collisions chariots & piétons",

    "feat2.title": "Matriculation & Contrôle d'Accès Poids Lourds",
    "feat2.body": "Lecture automatique des plaques d'immatriculation (LAPI/ANPR), codes conteneurs ISO et rapprochement instantané avec les bons de livraison.",
    "feat2.point1": "Journalisation automatisée des entrées/sorties",
    "feat2.point2": "Alerte camions non autorisés ou hors flotte",
    "feat2.point3": "Ouverture automatique des barrières d'accès",

    "feat3.title": "Surveillance & Intégrité des Examens",
    "feat3.body": "Détection intelligente de la fraude académique en amphithéâtre. Identification des smartphones dissimulés et postures suspectes.",
    "feat3.point1": "Détection de téléphones portables cachés",
    "feat3.point2": "Notification silencieuse en direct aux surveillants",
    "feat3.point3": "Signets vidéo d'audit horodatés",

    "feat4.title": "Edge 100% Souverain & Sur Site",
    "feat4.body": "Aucun flux vidéo ne quitte votre réseau ni les frontières nationales. Conforme à la Loi 09-08, aux directives DGSSI et au RGPD.",
    "feat4.point1": "Indépendance totale de la bande passante internet",
    "feat4.point2": "Tarif forfaitaire de 500 DH / caméra / mois",
    "feat4.point3": "Compatible caméras RTSP/ONVIF standards",

    "sim.pill": "SUITE VIDÉO INTERACTIVE",
    "sim.title": "Expérimentez les Flux en Direct",
    "sim.subtext": "Basculez entre les caméras d'entreprise simulées pour observer la détection neuronale en temps réel, les indices de confiance et les alertes.",
    "sim.tab1Title": "CAM-01: Atelier de Production",
    "sim.tab1Desc": "Conformité EPI & Sécurité Usine",
    "sim.tab2Title": "CAM-02: Portail Logistique 02",
    "sim.tab2Desc": "Matriculation LAPI & Conteneurs",
    "sim.tab3Title": "CAM-03: Amphithéâtre d'Examen",
    "sim.tab3Desc": "Anti-Fraude & Détection Smartphones",
    "sim.confThreshold": "Seuil de Confiance de Détection:",
    "sim.bounding": "Cadres de Détection",
    "sim.telemetry": "Télémétrie HUD",

    "sov.pill": "SOUVERAINETÉ DES DONNÉES & ZÉRO CLOUD",
    "sov.title": "Pourquoi le Traitement Local Change la Donne",
    "sov.subtext": "Les solutions cloud traditionnelles exportent vos flux vidéo sensibles sur internet, générant d'énormes facturations par image tout en enfreignant la souveraineté. EyeSafe opère 100% en local.",
    "sov.cloudBadge": "VISION CLOUD TRADITIONNELLE (AWS/AZURE)",
    "sov.cloudTitle": "Risque Élevé & Rente Cloud Récurrente",
    "sov.c1Title": "Fuite des Données Hors Frontières:",
    "sov.c1Desc": "Flux vidéos transmis sur des serveurs externes, en infraction avec la Loi marocaine 09-08 et la souveraineté.",
    "sov.c2Title": "Coûts d'Ingestion Récurrents Massifs:",
    "sov.c2Desc": "Facturation par image représentant 5 000 $ à 25 000 $+ chaque mois pour des caméras 24/7.",
    "sov.c3Title": "Forte Latence & Dépendance Internet:",
    "sov.c3Desc": "Délai de 300 à 1500ms. En cas de coupure de connexion, toute la sécurité s'effondre.",
    "sov.eyeBadge": "EYESAFE EDGE SOUVERAIN",
    "sov.eyeTitle": "100% Local, Air-Gapped & 500 DH / Caméra / Mois",
    "sov.e1Title": "Zéro Exfiltration de Données:",
    "sov.e1Desc": "Les flux ne quittent jamais votre réseau local d'entreprise. Conformité totale DGSSI et souveraineté nationale.",
    "sov.e2Title": "Tarif Forfaitaire & Prédictible de 500 DH / Caméra:",
    "sov.e2Desc": "Abonnement mensuel clair par flux caméra. Inférence continue 24/7 sans surcoût d'API cloud.",
    "sov.e3Title": "Latence Réduite < 25ms:",
    "sov.e3Desc": "Inférence accélérée matériellement (TensorRT / ONNX) fonctionnant même en réseau complètement isolé.",

    "iso.pill": "GOUVERNANCE IA MONDIALE & CONFORMITÉ",
    "iso.title": "Gouvernance IA Alignée ISO/IEC 42001:2023",
    "iso.subtext": "La norme internationale de référence pour l'intégration et la gestion de l'intelligence artificielle dans l'industrie est <strong>ISO/IEC 42001:2023</strong>. Elle établit un Système de Management de l'Intelligence Artificielle (AIMS) certifiable pour déployer des technologies d'IA responsables et maîtrisées.",
    "iso.s1Title": "Système de Management de l'IA (AIMS)",
    "iso.s1Desc": "Définit les exigences organisationnelles pour concevoir, déployer et améliorer continuellement la gouvernance de l'IA en entreprise.",
    "iso.s2Title": "Gestion des Risques Liés à l'IA",
    "iso.s2Desc": "Fournit un guide méthodologique pour maîtriser les risques opérationnels et les biais propres aux modèles de vision par ordinateur.",
    "iso.s3Title": "Processus de Cycle de Vie de l'IA",
    "iso.s3Desc": "Structure les étapes d'ingénierie logicielle pour l'entraînement, la validation, le déploiement et la surveillance continue des réseaux de neurones.",
    "iso.s4Title": "Cadre Terminologique & ML",
    "iso.s4Desc": "Établit un vocabulaire normalisé et un cadre de référence partagé pour les composants d'apprentissage automatique et d'audit.",
    "iso.benefitsTitle": "Bénéfices Stratégiques de l'Adoption des Normes ISO",
    "iso.b1Title": "Maîtrise des Risques :",
    "iso.b1Desc": "Traitement systématique des failles de sécurité, de la dérive des modèles (drift) et des faux positifs en usine.",
    "iso.b2Title": "Conformité Réglementaire :",
    "iso.b2Desc": "Alignement direct avec l'EU AI Act, la Loi marocaine 09-08 et les politiques nationales de cybersécurité.",
    "iso.b3Title": "Traçabilité & Auditabilité :",
    "iso.b3Desc": "Horodatage rigoureux, documentation des décisions et conservation des preuves d'incidents sur site.",
    "iso.b4Title": "Confiance des Parties Prenantes :",
    "iso.b4Desc": "Garantie formelle et vérifiable d'un usage éthique, transparent et responsable de la vision par ordinateur.",
    "iso.refLabel": "Ressources Officielles de Gouvernance & Références :",

    "calc.pill": "ESTIMATEUR DE TARIF & ÉCONOMIES",
    "calc.title": "Analysez vos Coûts & Économies sur 3 Ans",
    "calc.subtext": "EyeSafe propose un tarif transparent et fixe de <strong>500 DH / caméra / mois</strong>. Comparez-le aux API cloud traditionnelles à la requête pour évaluer votre rentabilité.",
    "calc.numCams": "Nombre de Flux Caméras:",
    "calc.hours": "Heures d'Activité / Jour:",
    "calc.fps": "Fréquence d'Échantillonnage:",
    "calc.cloudEst": "Coût Estimé API Cloud (3 Ans):",
    "calc.cloudSub": "Basé sur 0,0015 $ / image analysée + bande passante",
    "calc.eyeEst": "Investissement EyeSafe Sovereign Edge (3 Ans):",
    "calc.eyeSub": "Tarif fixe de 500 DH / caméra / mois — inférence 24/7 illimitée",
    "calc.totalSavings": "Économies Opérationnelles Nettes sur 3 Ans:",

    "int.eyebrow": "PROCESSUS D'INTÉGRATION",
    "int.title": "Intégration Plug & Play sur vos Caméras Existantes",
    "int.subtext": "Aucun remplacement de caméra requis. EyeSafe se connecte directement à votre réseau existant via les protocoles RTSP/ONVIF standards.",
    "int.step1Title": "Caméras IP & CCTV Existantes",
    "int.step1Desc": "Connexion immédiate à tout flux vidéo Hikvision, Dahua, Axis, Hanwha ou générique sur réseau local.",
    "int.step2Title": "Boîtier Serveur Edge EyeSafe",
    "int.step2Desc": "Notre serveur compact (NVIDIA RTX / Jetson) traite les flux avec TensorRT & ONNX sans connexion internet requise.",
    "int.step3Title": "Alertes & Automatismes Immédiats",
    "int.step3Desc": "Déclenchement de gyrophares, barrières automatiques, alertes WhatsApp/SMS et tableaux de bord HSE.",

    "contact.pill": "DÉPLOIEMENT PILOTE",
    "contact.title": "Déployez EyeSafe sur votre Site",
    "contact.subtext": "Prêt à sécuriser vos équipes, automatiser vos accès camions ou fiabiliser vos examens ? Demandez un Proof of Concept (POC) de 14 jours à 500 DH / caméra / mois.",
    "contact.perk1": "Test 100% sur site avec vos caméras actuelles",
    "contact.perk2": "Zéro configuration cloud & garantie stricte de confidentialité",
    "contact.perk3": "Cadre de gouvernance aligné ISO/IEC 42001:2023",
    "contact.perk4": "Tarif forfaitaire clair : 500 DH / Caméra / Mois",
    "contact.directTitle": "Contact Direct & WhatsApp Instantané :",

    "form.heading": "Demande de Déploiement Pilote",
    "form.name": "Nom & Prénom *",
    "form.org": "Entreprise / Institution *",
    "form.email": "Email Professionnel *",
    "form.phone": "Téléphone / WhatsApp *",
    "form.useCase": "Cas d'Usage Principal *",
    "form.optPpe": "Sécurité Industrielle & Détection EPI (Casques, Gilets, Gants)",
    "form.optLogistics": "Matriculation Portail Logistique & LAPI Poids Lourds",
    "form.optExam": "Surveillance Examens Académiques & Anti-Fraude",
    "form.optCustom": "Déploiement Multi-Sites Personnalisé",
    "form.camEst": "Nombre approximatif de caméras",
    "form.msg": "Détails du projet et besoins spécifiques",
    "form.submit": "Envoyer la Demande de Pilote",
    "form.success": "Merci ! Votre demande a été bien reçue. Notre équipe vous contactera sous 24 heures.",

    "footer.desc": "Plateforme Souveraine de Vision par Ordinateur pour la sécurité industrielle, la logistique et l'intégrité académique. Inférence 100% sur site à 500 DH / caméra / mois.",
    "footer.solutionsTitle": "Solutions",
    "footer.navTitle": "Gouvernance & ROI",
    "footer.contactTitle": "Demandes Entreprise"
  }
};

// Current Language State
let currentLang = 'en';

// =============================================================================
// Language Switcher Functionality
// =============================================================================
function setLanguage(lang) {
  if (!i18nData[lang]) return;
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  // Update button active state
  const enBtn = document.getElementById('langEnBtn');
  const frBtn = document.getElementById('langFrBtn');
  if (enBtn && frBtn) {
    enBtn.classList.toggle('active', lang === 'en');
    frBtn.classList.toggle('active', lang === 'fr');
  }

  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (i18nData[lang][key]) {
      elem.innerHTML = i18nData[lang][key];
    }
  });

  // Re-calculate ROI to update currency / localized strings
  calculateSavings();

  // Save preference
  try {
    localStorage.setItem('eyesafe_lang', lang);
  } catch (e) {
    // LocalStorage fallback
  }
}

// =============================================================================
// Hero Video & CCTV Player Controller
// =============================================================================
let currentHeroFeed = 'compliant';
let isHeroPlaying = true;
let isHeroMuted = true;

function initHeroVideo() {
  const vidCompliant = document.getElementById('heroVideoCompliant');
  const vidViolation = document.getElementById('heroVideoViolation');

  if (vidCompliant && vidViolation) {
    vidCompliant.play().catch(() => {});
    vidViolation.play().catch(() => {});

    vidCompliant.addEventListener('timeupdate', () => {
      if (currentHeroFeed === 'compliant') {
        updateHudTimestamp();
      }
    });
  }

  // Fluctuate FPS
  setInterval(() => {
    const fpsElem = document.getElementById('heroFps');
    if (fpsElem) {
      const randomFps = (29.7 + Math.random() * 0.7).toFixed(1);
      fpsElem.textContent = `${randomFps} FPS`;
    }
  }, 1200);
}

function switchHeroFeed(type) {
  currentHeroFeed = type;

  const vidCompliant = document.getElementById('heroVideoCompliant');
  const vidViolation = document.getElementById('heroVideoViolation');
  const btnCompliant = document.getElementById('scenarioCompliantBtn');
  const btnViolation = document.getElementById('scenarioViolationBtn');
  const bboxCompliant = document.getElementById('bboxCompliant');
  const bboxViolation = document.getElementById('bboxViolation');
  const alertBanner = document.getElementById('violationAlertBanner');

  if (type === 'compliant') {
    if (vidCompliant) { vidCompliant.classList.add('active'); vidCompliant.currentTime = 0; vidCompliant.play().catch(() => {}); }
    if (vidViolation) { vidViolation.classList.remove('active'); }
    if (btnCompliant) btnCompliant.classList.add('active');
    if (btnViolation) btnViolation.classList.remove('active');
    if (bboxCompliant) bboxCompliant.style.display = 'flex';
    if (bboxViolation) bboxViolation.style.display = 'none';
    if (alertBanner) alertBanner.style.display = 'none';
  } else {
    if (vidViolation) { vidViolation.classList.add('active'); vidViolation.currentTime = 0; vidViolation.play().catch(() => {}); }
    if (vidCompliant) { vidCompliant.classList.remove('active'); }
    if (btnViolation) btnViolation.classList.add('active');
    if (btnCompliant) btnCompliant.classList.remove('active');
    if (bboxCompliant) bboxCompliant.style.display = 'none';
    if (bboxViolation) bboxViolation.style.display = 'flex';
    if (alertBanner) alertBanner.style.display = 'flex';
  }
}

function toggleHeroPlayback() {
  const vidCompliant = document.getElementById('heroVideoCompliant');
  const vidViolation = document.getElementById('heroVideoViolation');
  const icon = document.getElementById('playPauseIcon');

  const activeVideo = (currentHeroFeed === 'compliant') ? vidCompliant : vidViolation;

  if (activeVideo) {
    if (activeVideo.paused) {
      activeVideo.play();
      isHeroPlaying = true;
      if (icon) icon.setAttribute('data-lucide', 'pause');
    } else {
      activeVideo.pause();
      isHeroPlaying = false;
      if (icon) icon.setAttribute('data-lucide', 'play');
    }
    if (window.lucide) lucide.createIcons();
  }
}

function toggleHeroMute() {
  const vidCompliant = document.getElementById('heroVideoCompliant');
  const vidViolation = document.getElementById('heroVideoViolation');
  const icon = document.getElementById('muteIcon');

  isHeroMuted = !isHeroMuted;

  if (vidCompliant) vidCompliant.muted = isHeroMuted;
  if (vidViolation) vidViolation.muted = isHeroMuted;

  if (icon) {
    icon.setAttribute('data-lucide', isHeroMuted ? 'volume-x' : 'volume-2');
  }
  if (window.lucide) lucide.createIcons();
}

function updateHudTimestamp() {
  const stamp = document.getElementById('hudTimestamp');
  if (stamp) {
    const now = new Date();
    stamp.textContent = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
  }
}

// =============================================================================
// Interactive Live Multi-Camera Simulator
// =============================================================================
const simFeeds = {
  cam1: {
    title: 'CAM-01 // PRODUCTION WORKSHOP A',
    model: 'EyeSafe-PPE-YOLOv10',
    latency: '14.2 ms'
  },
  cam2: {
    title: 'CAM-02 // LOGISTICS GATE 02 INBOUND',
    model: 'EyeSafe-ANPR-PaddleOCR',
    latency: '18.6 ms'
  },
  cam3: {
    title: 'CAM-03 // AMPHITHEATER 03 EXAM HALL',
    model: 'EyeSafe-ExamGuard-RTDETR',
    latency: '16.4 ms'
  }
};

function switchSimFeed(feedId) {
  document.querySelectorAll('.sim-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.getElementById(`tab${feedId.charAt(0).toUpperCase() + feedId.slice(1)}`);
  if (activeTab) activeTab.classList.add('active');

  document.querySelectorAll('.sim-feed-item').forEach(item => item.classList.remove('active'));
  const activeItem = document.getElementById(`simFeed${feedId.replace('cam', '')}`);
  if (activeItem) activeItem.classList.add('active');

  const meta = simFeeds[feedId];
  if (meta) {
    const titleElem = document.getElementById('simFeedTitle');
    const modelElem = document.getElementById('simModelName');
    const latElem = document.getElementById('simLatency');
    if (titleElem) titleElem.textContent = meta.title;
    if (modelElem) modelElem.textContent = meta.model;
    if (latElem) latElem.textContent = meta.latency;
  }
}

function updateConfidence(val) {
  const display = document.getElementById('confVal');
  if (display) display.textContent = `${val}%`;
}

function toggleHudBoxes() {
  const btn = document.getElementById('toggleBoxesBtn');
  const boxes = document.querySelectorAll('.sim-overlay-box');
  if (btn) {
    btn.classList.toggle('active');
    const isActive = btn.classList.contains('active');
    boxes.forEach(b => { b.style.opacity = isActive ? '1' : '0'; });
  }
}

function toggleHudGrid() {
  const btn = document.getElementById('toggleGridBtn');
  const grid = document.querySelector('.sim-grid-lines');
  if (btn && grid) {
    btn.classList.toggle('active');
    const isActive = btn.classList.contains('active');
    grid.style.opacity = isActive ? '1' : '0';
  }
}

// =============================================================================
// Cloud vs Edge ROI Calculator (500 DH / camera / month)
// =============================================================================
function calculateSavings() {
  const camInput = document.getElementById('cameraCountInput');
  const hoursInput = document.getElementById('hoursInput');
  const fpsInput = document.getElementById('fpsInput');

  if (!camInput || !hoursInput || !fpsInput) return;

  const cameras = parseInt(camInput.value, 10);
  const hours = parseInt(hoursInput.value, 10);
  const fps = parseInt(fpsInput.value, 10);

  // Update Displays
  const camDisplay = document.getElementById('cameraCountDisplay');
  const hoursDisplay = document.getElementById('hoursDisplay');
  const fpsDisplay = document.getElementById('fpsDisplay');

  if (camDisplay) camDisplay.textContent = `${cameras} ${currentLang === 'fr' ? 'Caméras' : 'Cameras'}`;
  if (hoursDisplay) hoursDisplay.textContent = `${hours} ${currentLang === 'fr' ? 'Heures / Jour' : 'Hours / Day'}`;
  if (fpsDisplay) fpsDisplay.textContent = `${fps} FPS`;

  // Pricing Model: 500 DH / camera / month (≈ 50 USD / camera / month)
  const eyeSafeMonthlyMad = cameras * 500;
  const eyeSafe3YearMad = eyeSafeMonthlyMad * 12 * 3;
  const eyeSafe3YearUsd = Math.round(eyeSafe3YearMad / 10.1);

  // Industry Cloud Vision Video Streaming Cost (~$0.12 - $0.25 / camera-hour for cloud inference + ingress/egress)
  const totalCameraHours3Years = cameras * hours * 365 * 3;
  const cloudCostUsd = Math.round(totalCameraHours3Years * 0.12 * (fps / 10));
  const cloudCostMad = Math.round(cloudCostUsd * 10.1);

  // Net 3-Year Savings
  const netSavingsMad = Math.max(0, cloudCostMad - eyeSafe3YearMad);
  const netSavingsUsd = Math.round(netSavingsMad / 10.1);

  // Bandwidth estimation
  const bandwidthGbPerDay = (cameras * (hours * 3600) * 1.8) / (8 * 1024);
  const threeYearTb = Math.round((bandwidthGbPerDay * 365 * 3) / 1024);

  // Formatted Strings
  const formattedCloudUsd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(cloudCostUsd);
  const formattedCloudMad = new Intl.NumberFormat('fr-MA', { maximumFractionDigits: 0 }).format(cloudCostMad) + ' MAD';

  const formattedEyeMad = new Intl.NumberFormat('fr-MA', { maximumFractionDigits: 0 }).format(eyeSafe3YearMad) + ' MAD';
  const formattedEyeMonthlyMad = new Intl.NumberFormat('fr-MA', { maximumFractionDigits: 0 }).format(eyeSafeMonthlyMad) + ' DH/mo';

  const formattedNetMad = new Intl.NumberFormat('fr-MA', { maximumFractionDigits: 0 }).format(netSavingsMad) + ' MAD';
  const formattedNetUsd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(netSavingsUsd);

  const cloudElem = document.getElementById('cloudCostAmount');
  const eyeElem = document.getElementById('eyeCostAmount');
  const totalSavingsElem = document.getElementById('totalSavingsFigure');
  const bandwidthElem = document.getElementById('bandwidthSavedFigure');

  if (cloudElem) {
    cloudElem.textContent = `${formattedCloudUsd} (≈ ${formattedCloudMad})`;
  }
  if (eyeElem) {
    eyeElem.textContent = `${formattedEyeMad} (${formattedEyeMonthlyMad})`;
  }
  if (totalSavingsElem) {
    totalSavingsElem.textContent = `${formattedNetMad} ${currentLang === 'fr' ? 'économisés' : 'saved'} (≈ ${formattedNetUsd})`;
  }
  if (bandwidthElem) {
    if (currentLang === 'fr') {
      bandwidthElem.textContent = `💾 ${threeYearTb} Téraoctets de vidéos privées conservés 100% sur votre réseau local`;
    } else {
      bandwidthElem.textContent = `💾 ${threeYearTb} Terabytes of private surveillance data kept 100% on-premise`;
    }
  }
}

// =============================================================================
// Contact & Pilot Form Handling
// =============================================================================
function handleFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('clientName')?.value || '';
  const org = document.getElementById('clientOrg')?.value || '';
  const email = document.getElementById('clientEmail')?.value || '';
  const phone = document.getElementById('clientPhone')?.value || '';
  const useCase = document.getElementById('useCaseSelect')?.value || '';
  const camEst = document.getElementById('cameraEst')?.value || '';
  const msg = document.getElementById('clientMsg')?.value || '';

  const submitBtn = document.getElementById('submitFormBtn');
  const successAlert = document.getElementById('formSuccessAlert');

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;
  }

  setTimeout(() => {
    if (submitBtn) submitBtn.style.display = 'none';
    if (successAlert) successAlert.style.display = 'flex';

    console.log('Pilot Form Submitted:', { name, org, email, phone, useCase, camEst, msg });
  }, 600);
}

// =============================================================================
// Mobile Drawer & Header Scroll Effects
// =============================================================================
function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(6, 7, 9, 0.95)';
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
      } else {
        header.style.background = 'rgba(6, 7, 9, 0.82)';
        header.style.boxShadow = 'none';
      }
    }
  });
}

// =============================================================================
// DOM Ready Initialization
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  try {
    const savedLang = localStorage.getItem('eyesafe_lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLanguage(savedLang);
    }
  } catch (e) {}

  initHeroVideo();
  initNavigation();
  calculateSavings();
  updateHudTimestamp();
});
