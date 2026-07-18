# AML Investigation & Response Copilot
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

# 👨‍💻 Author

**ANSMET**

Built for the **NitroStack MCP Hackathon**.

---

# 📜 License

This project is developed for educational and hackathon purposes.
