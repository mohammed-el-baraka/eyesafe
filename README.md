# 🛡️ EyeSafe — Sovereign Edge Computer Vision Platform

> **Vision that protects.** Real-time computer vision intelligence for industrial PPE safety compliance, factory gate matriculation & freight tracking, and academic examination integrity — powered by **100% on-premise sovereign edge AI** at a flat, transparent rate of **500 DH / camera / month**.

[![Static Badge](https://img.shields.io/badge/Deployment-100%25%20On--Premise%20Air--Gapped-10b981?style=for-the-badge&logo=shield)](https://eyesafe.ai)
[![Static Badge](https://img.shields.io/badge/Pricing-500%20DH%20%2F%20cam%20%2F%20mo-f59e0b?style=for-the-badge&logo=cashapp)](https://eyesafe.ai)
[![Static Badge](https://img.shields.io/badge/Standards-ISO%2FIEC%2042001%3A2023%20Aligned-06b6d4?style=for-the-badge&logo=security)](https://www.iso.org/sectors/it-technologies/ai)
[![Static Badge](https://img.shields.io/badge/Compliance-Moroccan%20Loi%2009--08%20%7C%20DGSSI%20%7C%20GDPR-a855f7?style=for-the-badge&logo=security)](https://eyesafe.ai)

---

## 🎯 Executive Summary & Value Proposition

Modern industrial facilities, logistics hubs, and academic institutions rely on extensive CCTV and IP surveillance infrastructure. However, traditional cloud-based video analytics introduce critical challenges:

1. **Unpredictable Cloud Ingestion Costs:** Cloud vision APIs (AWS Rekognition, Google Cloud Vision, Azure AI) charge per-frame fees that quickly scale to unsustainable amounts ($10,000–$30,000+/mo for multi-camera 24/7 facilities).
2. **Data Sovereignty Violations:** Exporting internal operational video streams off-premise breaches national data residency laws (including **Moroccan Law 09-08**, DGSSI cybersecurity directives, and GDPR).
3. **High Latency & Internet Outages:** Roundtrip cloud latency (300ms–1500ms) introduces unsafe delays and fails entirely during internet disconnects.

**EyeSafe** replaces cloud dependencies with **dedicated on-premise Sovereign Edge Nodes** connected directly to your local camera network at **500 DH / camera / month**, delivering sub-25ms inference with 100% data confidentiality.

---

## 🏛️ ISO/IEC AI Management & Governance Standards

EyeSafe aligns directly with international AI standards to ensure auditable, responsible, and compliant deployment across all enterprise environments:

### Core ISO Standards for AI Integration

- **ISO/IEC 42001:2023 (Artificial Intelligence Management System - AIMS):** The primary international certifiable standard specifying organizational AI governance, ethical controls, and continuous improvement across manufacturing, logistics, and institutional sectors.
- **ISO/IEC 23894:** Comprehensive guidance on risk management tailored for artificial intelligence projects and computer vision systems.
- **ISO/IEC 5338:** Robust lifecycle engineering processes engineered for neural network development, validation, deployment, and ongoing model monitoring.
- **ISO/IEC 23053:** Standardized framework and vocabulary for machine learning and artificial intelligence pipelines.

### Strategic Benefits of Adoption
- **Risk Mitigation:** Systematically controls threats including data bias, adversarial inputs, false alarms, and model drift.
- **Regulatory Compliance:** Aligns operations with global regulations (EU AI Act, Moroccan Law 09-08, DGSSI cybersecurity mandates).
- **Traceability & Auditability:** Structured video incident bookmarks, immutable event logs, and transparent telemetry.
- **Stakeholder Trust:** Verifiable proof of ethical, transparent, and privacy-preserving computer vision.

**Official Governance Resources:**
- [ISO Official Site — Information Technology & AI Standards](https://www.iso.org/sectors/it-technologies/ai)
- [KPMG Insights — ISO/IEC 42001 AI Governance](https://kpmg.com/ch/en/insights/artificial-intelligence/iso-iec-42001.html)
- [Software Improvement Group — ISO Standards for AI Systems](https://www.softwareimprovementgroup.com/blog/iso-standards-for-ai/)

---

## 🚀 Core Industry Verticals

```mermaid
graph TD
    A[Existing CCTV / IP Cameras (RTSP/ONVIF)] --> B[EyeSafe Local Sovereign Edge Node]
    B --> C[Module 01: VisionProtect - Industrial PPE & Safety]
    B --> D[Module 02: MatriVision - Gate Matriculation & ANPR]
    B --> E[Module 03: ExamGuard - Academic Integrity & Anti-Cheating]
    C --> F[Instant Siren / PA Alarms & HSE Audit Logs]
    D --> G[Automated Barrier Gates & SAP / ERP Manifest Matching]
    E --> H[Silent Proctor Alerts & Timestamped Audit Clips]
```

### 1. 👷 VisionProtect — Industrial Safety & PPE Auditing
- **Real-Time PPE Detection:** Sub-second detection of hard hats/helmets, high-vis reflective vests, gloves, harnesses, and safety goggles.
- **Geofencing & Danger Zones:** Instant alarms when unauthorized personnel enter heavy machinery tracks, robotic cells, or overhead crane swing zones.
- **Forklift-Pedestrian Proximity:** Collision warning between heavy plant machinery and personnel on foot.

### 2. 🚛 MatriVision — Logistics Gate & Matriculation
- **Automated License Plate Recognition (ALPR/ANPR):** Sub-second plate recognition for Moroccan and international vehicle registration formats.
- **Container & Trailer Tracking:** OCR recognition of ISO 6346 container serials, ADR placards, and trailer IDs.
- **Automated Manifest Matching:** Cross-references arriving trucks with delivery manifests to trigger barrier gates automatically and flag unauthorized non-fleet vehicles.

### 3. 🎓 ExamGuard — Academic & Examination Integrity
- **Concealed Device Detection:** Computer vision heuristics to identify smartphones, smartwatches, and unauthorized materials in test centers.
- **Suspicious Glance & Behavior Tracking:** Detects anomalous communication patterns without intrusive facial recognition.
- **Silent Proctor Dispatch:** Timestamped clip bookmarks sent directly to proctors' mobile tablets.

---

## 💰 Transparent Pricing & 3-Year ROI Model

EyeSafe offers a transparent pricing structure: **500 DH / camera / month**.

| Comparison Metric | Traditional Cloud Vision APIs | EyeSafe Sovereign Edge |
|---|---|---|
| **Monthly Pricing Model** | ~$0.0015 / frame ($5,000–$25,000+/mo) | **Fixed 500 DH / camera / month** |
| **16 Cameras (3-Year Total)** | ~$84,000+ USD (≈ 840,000 MAD) | **288,000 MAD (≈ $28,800 USD)** |
| **Net 3-Year Enterprise Savings** | Baseline Cloud Expense | **552,000+ MAD Saved (~65% reduction)** |
| **Video Data Exfiltration** | Outbound across internet | **0 MB (100% Local Physical LAN)** |
| **Inference Latency** | 300ms – 1,500ms | **< 25ms Real-Time** |
| **Regulatory & Sovereignty** | High exposure risk | **ISO/IEC 42001 & Law 09-08 Compliant** |

---

## ⚡ Technical Specifications

| Parameter | Specification |
|---|---|
| **Inference Latency** | `< 25ms` per frame (batch size 1–4) |
| **Throughput** | 16–64 concurrent RTSP camera streams per 1U Edge Node |
| **Model Architectures** | YOLOv10-X, RT-DETR, ByteTrack, PaddleOCRv4 |
| **Inference Engines** | NVIDIA TensorRT 10.x, ONNX Runtime (CUDA / OpenVINO / Apple MPS) |
| **Camera Protocols** | RTSP, RTMP, ONVIF Profile S/G/T, H.264 / H.265 |
| **Alert Integrations** | Modbus TCP / GPIO Relays, Local Webhooks, MQTT, WhatsApp/SMS API Gateway, SMTP |
| **Network Footprint** | 100% LAN operation; functions with zero internet connection |

---

## 🌐 Static Web Application

The repository contains the complete static frontend landing page ready for instant deployment to **GitHub Pages**:

- **`index.html`**: Semantic landing page with dual-scenario video player, live multi-camera sandbox, ISO/IEC 42001 standards section, ROI estimator (500 DH/cam/mo), and contact forms.
- **`styles.css`**: Dark luxury HUD design system with glassmorphism, animated scanning lines, and mobile responsive layouts.
- **`app.js`**: Client-side reactive engine featuring interactive camera feed switching, video synchronization, full French/English (`FR / EN`) bilingual switching, and 500 DH/cam rate calculator.
- **`assets/`**: Pre-configured video clips demonstrating PPE compliant vs. violation detection, along with ANPR gate and examination surveillance imagery.

### Local Development / Preview

```bash
# Option 1: Using Python 3 built-in HTTP server
python3 -m http.server 8080

# Option 2: Using Node.js npx serve
npx -y serve .

# Then open: http://localhost:8080
```

---

## 🚀 Deployment to GitHub Pages

1. Commit and push your files:
   ```bash
   git add .
   git commit -m "feat: EyeSafe sovereign computer vision platform with ISO 42001 alignment"
   git push origin main
   ```
2. In your repository on GitHub, navigate to **Settings** → **Pages**.
3. Under **Branch**, select `main` and root folder `/`, then click **Save**.

---

## 📬 Enterprise Pilot Inquiries

- 📱 **Phone / WhatsApp:** [+212 666-774426](https://wa.me/212666774426)
- 📧 **Email:** [contact@eyesafe.ai](mailto:contact@eyesafe.ai)
- 📍 **Location:** Casablanca / Benguerir, Morocco

---

## 📄 License & Intellectual Property

Copyright © 2026 EyeSafe Computer Vision. All rights reserved. Designed and developed for sovereign enterprise, industrial, and institutional environments.
