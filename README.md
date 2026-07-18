<img width="1883" height="912" alt="Screenshot 2026-07-18 133848" src="https://github.com/user-attachments/assets/c2c74aa8-5437-464f-8d38-dbbf235bb256" /># AML Investigation & Response Copilot
### AI-Powered Compliance Assistant using MCP & NitroStack

> An intelligent AML (Anti-Money Laundering) Investigation Copilot built using **NitroStack**, **Model Context Protocol (MCP)**, and **Agentic AI** to automate customer due diligence, sanctions screening, adverse media analysis, risk assessment, and Enhanced Due Diligence (EDD) report generation.

---

##  Problem Statement

Financial institutions spend significant time performing manual AML investigations. Compliance officers must:

- Screen customers against sanctions lists
- Search adverse media sources
- Assess AML risk
- Generate Enhanced Due Diligence (EDD) reports

These tasks are repetitive, time-consuming, and prone to inconsistencies.

Our solution automates the entire investigation workflow using MCP tools orchestrated through NitroStack.

---

# ✨ Features

-  Customer Investigation using a single MCP Tool
-  Sanctions Screening
-  Adverse Media Search
-  AML Risk Scoring
-  Enhanced Due Diligence (EDD) Report Generation
-  AI-powered Investigation Workflow
-  React Frontend Dashboard
-  NitroStack MCP Server
-  Modular Tool Architecture

---

# 🏗️ System Architecture

```
                    React Frontend
                           │
                           ▼
                Customer Investigation Form
                           │
                           ▼
                  NitroStack MCP Server
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
 Sanctions Tool     Adverse Media Tool    Risk Tool
        └──────────────────┼──────────────────┘
                           ▼
                 EDD Report Generator
                           ▼
               Investigation Response
                           ▼
                 Compliance Dashboard
```

---

# 🧰 Tech Stack

### Frontend

- React
- TypeScript
- HTML/CSS

### Backend

- Node.js
- Express
- TypeScript

### AI Framework

- NitroStack
- Model Context Protocol (MCP)

### Libraries

- Zod
- CORS
- dotenv

---

# 📂 Project Structure

```
aml-edd-copilot-nitro
│
├── src
│   ├── modules
│   │   ├── sanctions
│   │   ├── adverse-media
│   │   ├── risk
│   │   ├── edd
│   │   └── investigation
│   │
│   ├── services
│   │   └── investigation.service.ts
│   │
│   ├── widgets
│   │   └── React Frontend
│   │
│   └── app.module.ts
│
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone Repository

```bash
git clone https://github.com/<YOUR_USERNAME>/aml-edd-copilot-nitro.git

cd aml-edd-copilot-nitro
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Run Development Server

```bash
npm run dev
```

---

## 4. Production Build

```bash
npm run build
```

---

## 5. Start Production Server

```bash
npm run start:prod
```

---

# 🧠 Available MCP Tools

| Tool | Description |
|------|-------------|
| `screen_sanctions` | Screens customer against sanctions database |
| `search_adverse_media` | Searches for negative media coverage |
| `calculate_risk` | Calculates AML Risk Score |
| `generate_edd_report` | Generates Enhanced Due Diligence Report |
| `investigate_customer` | Executes complete AML investigation workflow |

---

# 🔄 Investigation Workflow

```
Customer Name
        │
        ▼
Sanctions Screening
        │
        ▼
Adverse Media Search
        │
        ▼
AML Risk Assessment
        │
        ▼
EDD Report Generation
        │
        ▼
Final Investigation Report
```

---

# 📋 Sample Request

```
Customer Name:
John Doe

Country:
India
```

---

# 📄 Sample Response

```
Customer : John Doe
Country  : India

Sanctions
-----------
Match Found : YES
Confidence  : 92%

Adverse Media
-------------
Reuters
Entity linked to sanctions investigation

Risk Assessment
---------------
Risk Score : 90/100

Risk Level : HIGH

Recommendation
--------------
Immediate Enhanced Due Diligence (EDD)

Final Decision
--------------
HIGH RISK CUSTOMER
```

---

# 🎯 Use Cases

- Banking Compliance
- Customer Onboarding
- KYC Verification
- AML Monitoring
- Financial Crime Investigation
- Regulatory Compliance

---

# 🔮 Future Enhancements

- Integration with real sanctions databases
- Live adverse media APIs
- Transaction monitoring
- Suspicious Activity Report (SAR) generation
- Explainable AI for risk decisions
- Downloadable PDF reports
- Audit trail and investigation history
- Multi-language support

---
# REACT DASHBOARD
<img width="1883" height="912" alt="Screenshot 2026-07-18 133848" src="https://github.com/user-attachments/assets/c3fa5f64-5e03-41e6-bab4-527135b1484b" />
<img width="1882" height="702" alt="Screenshot 2026-07-18 133902" src="https://github.com/user-attachments/assets/899946fd-8574-454c-a761-459fbefc4a88" />

# NITROSTUDIO
<img width="1241" height="955" alt="Screenshot 2026-07-18 134056" src="https://github.com/user-attachments/assets/bbb929dd-f2b3-4f28-9a15-e859d69d5f02" />
<img width="1267" height="982" alt="Screenshot 2026-07-18 134124" src="https://github.com/user-attachments/assets/790961ab-72de-4070-bbad-799e49a12d81" />

<img width="1180" height="963" alt="Screenshot 2026-07-18 134132" src="https://github.com/user-attachments/assets/c2c2a8f1-6e80-4adf-96b8-fd661ad885de" />



# 👨‍💻 Author

**ANSMET**

Built for the **NitroStack MCP Hackathon**.

---

# 📜 License

This project is developed for educational and hackathon purposes.
