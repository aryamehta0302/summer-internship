# Summer Internship Projects

Repository containing internship deliverables, software services, and business intelligence reports.

---

## 📁 Repository Overview

| Project / Deliverable | Type | Description |
| :--- | :--- | :--- |
| [**`whatsapp-cloud-api/`**](./whatsapp-cloud-api/) | Backend Service (Node.js/Express) | REST API microservice integrating Meta's WhatsApp Cloud API (Graph API v25.0) to send automated messages. |
| **`Hospital Management Report.pbix`** | Business Intelligence (Power BI) | Interactive analytics dashboard analyzing hospital performance, patient admissions, department efficiency, and resource utilization. |

---

## 1. 💬 WhatsApp Cloud API Integration (`whatsapp-cloud-api/`)

A Node.js & Express service that wraps Meta's WhatsApp Cloud API, providing clean endpoints for external clients to send WhatsApp text notifications.

### Key Highlights:
- **Architecture**: Express.js server acting as an API gateway relaying requests to Meta Graph API `v25.0`.
- **Endpoints**:
  - `GET /` — Health check
  - `POST /send-message` — Send text message payload `{ number, message }`
- **Security**: Environment variable isolation (`.env`) for Access Tokens and Phone Number IDs.
- **Testing**: Pre-configured verification script `test_api.js` for automated testing.

### Quick Start:
```bash
cd whatsapp-cloud-api
npm install
cp .env.example .env
# Edit .env with your Meta credentials
npm start
```
*For detailed API documentation, request/response formats, and sequence diagrams, refer to [whatsapp-cloud-api/README.md](./whatsapp-cloud-api/README.md).*

---

## 2. 🏥 Hospital Management Report (`Hospital Management Report.pbix`)

A Power BI analytical reporting model designed to provide actionable healthcare operational intelligence.

### Key Highlights:
- **Executive KPI Dashboard**: Total admissions, bed occupancy rates, average length of stay (ALOS), and patient mortality rates.
- **Departmental Analytics**: Patient throughput and capacity utilization across Emergency, ICU, Inpatient, and Outpatient departments.
- **Financial & Resource Management**: Cost per patient, billing summaries, doctor/nurse-to-patient allocation ratios.
- **Time-Series Analysis**: Monthly and seasonal trends in hospital admissions and emergency room surges.

### How to Open:
1. Ensure [Microsoft Power BI Desktop](https://powerbi.microsoft.com/desktop/) is installed.
2. Double-click or open `Hospital Management Report.pbix`.

---

## 🛠️ Tech Stack & Tools

- **Backend Development**: Node.js, Express.js, Axios, CORS, Dotenv
- **APIs**: Meta WhatsApp Cloud API (Graph API v25.0)
- **Analytics & BI**: Microsoft Power BI Desktop, DAX, Data Modeling
- **Version Control**: Git, GitHub

---

## 👤 Author

- **Arya Mehta**
- GitHub: [@aryamehta0302](https://github.com/aryamehta0302)
