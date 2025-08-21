# SafeRide – Web App (PWA)

**SafeRide** is a **Vanilla JavaScript Progressive Web App (PWA)** designed to improve commuter safety in South Africa and beyond.  
It allows users to **report incidents**, **raise SOS alerts**, and **view danger hotspots on a live map**, easing tensions between ride-hailing services (Uber/Bolt) and traditional taxis.

Built with **HTML, CSS, JavaScript, and Firebase**, the app is lightweight, mobile-first, and works offline once installed as a PWA.

---

## Features
- **SOS / Panic Button** – Instantly notify trusted contacts and authorities.  
- **Live Hotspot Map** – Displays unsafe areas using Google Maps API.  
- **Incident Reporting** – Submit reports (violence, harassment, unsafe zones).  
- **Push Notifications** – Receive alerts near hotspots or new incidents.  
- **Community Data Sharing** – Collective reports strengthen the safety network.  
- **Progressive Web App (PWA)** – Works across devices, installable like a native app.  

---

## Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6)  
- **Backend:** Firebase (Firestore, Authentication, Cloud Messaging)  
- **Hosting:** Firebase Hosting  
- **Maps Integration:** Google Maps JavaScript API  

---

## Architecture
- **HTML/CSS** → Provides structure and responsive styling.  
- **JavaScript (ES6)** → Handles UI interactivity, data fetching, and PWA logic.  
- **Firebase Firestore** → Real-time database for reports and hotspots.  
- **Firebase Auth** → User authentication (email, phone, or Google login).  
- **Firebase Cloud Messaging** → Push alerts and SOS notifications.  
- **Google Maps API** → Dynamic map with hotspot overlays.  

---

## UML & Wireframes
- **Use Case Diagram** → Passenger, Driver, Security Staff roles.  
- **Class Diagram** → User, Report, Hotspot, SOSAlert objects.  
- **Sequence Diagram** → SOS alert workflow (trigger → database → notify).  
- **Wireframes** → Responsive layouts (dark theme + bright accents).  

---

## Getting Started

### 1️Clone the repo
```bash
git clone https://github.com/your-username/saferide-alert.git
cd saferide-alert
