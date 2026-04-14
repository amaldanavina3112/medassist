# 💊 MedAssist — Medicine Reminder & Tracker

A beautiful, mobile-first medicine reminder app built with React + Vite + Firebase.

---

## ✨ Features

- 🔐 **Authentication** — Patient & Family caregiver accounts
- 💊 **Medicine Management** — Add, edit, delete medicines with full details
- 📅 **Daily Timeline** — Morning / Afternoon / Evening / Night schedule view
- ✅ **Intake Tracking** — Mark medicines as Taken / Missed / Skipped
- 📆 **Calendar History** — Visual monthly calendar with color-coded intake dots
- 📦 **Stock Tracking** — Real-time inventory with low-stock alerts
- 👨‍👩‍👧 **Family Dashboard** — Caregivers can monitor patient activity
- 📱 **PWA** — Installable on mobile like a native app
- 🔔 **Notifications** — Browser notification permission support

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn

### 2. Install dependencies
```bash
cd medassist
npm install
```

### 3. Set up Firebase

Go to [Firebase Console](https://console.firebase.google.com) → Project `medassist-fd155`:

**Enable Authentication:**
1. Authentication → Sign-in method → Email/Password → Enable

**Enable Firestore:**
1. Firestore Database → Create database → Start in test mode (then apply rules below)

**Apply Firestore Security Rules:**
Go to Firestore → Rules tab, paste:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
      match /medicines/{medId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
      match /intakeLogs/{logId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

### 4. Run the app
```bash
npm run dev
```
Open http://localhost:5173

### 5. Build for production
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
medassist/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── pill-icon.svg          # App icon
├── src/
│   ├── components/
│   │   ├── AddMedicineModal.jsx  # Slide-up modal to add medicines
│   │   ├── BottomNav.jsx         # Fixed bottom navigation bar
│   │   ├── DateStrip.jsx         # Horizontal scrollable date selector
│   │   ├── Loader.jsx            # Full-screen loading spinner
│   │   └── MedicineCard.jsx      # Card with status & action buttons
│   ├── context/
│   │   └── AuthContext.jsx       # Firebase auth state + user profile
│   ├── pages/
│   │   ├── CalendarPage.jsx      # Monthly calendar with intake history
│   │   ├── FamilyDashboard.jsx   # Caregiver view of patient activity
│   │   ├── Home.jsx              # Main daily schedule dashboard
│   │   ├── Login.jsx             # Email/password login
│   │   ├── ProfilePage.jsx       # User settings and logout
│   │   ├── Signup.jsx            # Patient or Family signup
│   │   └── StockPage.jsx         # Inventory management
│   ├── services/
│   │   ├── authService.js        # Firebase auth operations
│   │   └── medicineService.js    # Firestore CRUD for medicines & logs
│   ├── App.jsx                   # Router + AuthProvider wrapper
│   ├── firebase.js               # Firebase init (db + auth exports)
│   ├── index.css                 # Global styles + CSS variables
│   └── main.jsx                  # React entry point
├── firestore.rules               # Security rules to deploy
├── index.html                    # HTML shell
├── package.json
└── vite.config.js                # Vite + PWA plugin config
```

---

## 🗄️ Firestore Data Structure

```
users/
  {userId}/
    name, email, role, createdAt, linkedPatientEmail
    medicines/
      {medId}/
        name, type, dosage, purpose, times[], totalTablets,
        remainingTablets, numberOfDays, createdAt
    intakeLogs/
      {medId}_{date}_{timeSlot}/
        medId, date, timeSlot, status, updatedAt
```

---

## 👤 User Roles

| Role    | Can Do                                                     |
|---------|------------------------------------------------------------|
| Patient | Add medicines, mark intake, view calendar, check stock     |
| Family  | Search patient by email, view their schedule & status      |

---

## 📱 PWA Installation

On mobile (Chrome/Safari):
1. Open the app in browser
2. Tap "Add to Home Screen" / install prompt
3. App launches like a native app

---

## 🎨 Design System

| Token              | Value                        |
|--------------------|------------------------------|
| Primary color      | Pink (#f9a8d4 → #ec4899)     |
| Secondary          | Blue (#93c5fd → #3b82f6)     |
| Success            | Green (#86efac → #22c55e)    |
| Warning            | Orange (#fb923c)             |
| Danger             | Red (#f87171 → #ef4444)      |
| Font — body        | Nunito                       |
| Font — headings    | Quicksand                    |
| Border radius      | 10px / 16px / 24px / 32px    |

---

## 🔧 Troubleshooting

**Firebase permission denied errors:**
→ Make sure Firestore rules are applied (see step 3)

**"Email already in use":**
→ That email is registered. Use login instead.

**PWA not installing:**
→ Must be served over HTTPS in production (Vite preview or deploy to Firebase Hosting / Vercel)

**Family can't find patient:**
→ The patient must have signed up with role = "patient" and that exact email

---

## 🚢 Deploy to Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # select medassist-fd155 project
npm run build
firebase deploy
```

---

## 📄 License
MIT — Free to use and modify.
