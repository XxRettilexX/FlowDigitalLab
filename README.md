# Flow Digital Lab 🌊

![Flow Digital Lab](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue) ![Vite](https://img.shields.io/badge/Vite-7.3-purple)

**Sito Vetrina (Landing Page) per Flow Digital Lab**  
Trasformiamo la tua visione in un Flusso Digitale.

---

## 📋 Descrizione

Flow Digital Lab è un sito vetrina moderno e futuristico che presenta servizi di **Web Design**, **Branding** e **Digital Strategy**. Il design si ispira al concetto di "flusso liquido digitale" con una palette colori navy profondo, accenti teal, cyan e lime green.

---

## 🎨 Design Philosophy

### Palette Colori
- **Navy Profondo** (`#0a192f`) - Background principale
- **Teal** (`#64ffda`) - Accento primario
- **Cyan** (`#00d9ff`) - Accento secondario
- **Lime Green** (`#a2ff00`) - Accento terziario
- **Off-white** (`#e6f1ff`) - Testo primario

### Stile
- ✨ Minimalista e futuristico
- 💧 Effetti "liquidi" con gradienti animati
- 🔮 Glassmorphism (effetto vetro sfumato)
- ⚡ Animazioni fluide e micro-interazioni
- 📱 Design responsivo per mobile e desktop

---

## 🛠️ Stack Tecnico

- **Framework**: React 18.3 con Functional Components
- **Linguaggio**: TypeScript con interfacce rigorose
- **Styling**: CSS Puro (NO Tailwind)
- **Routing**: React Router DOM v7
- **Icone**: Lucide React
- **Build Tool**: Vite
- **Font**: Inter (Google Fonts)

---

## 📁 Struttura del Progetto

```
FlowDigitalLab/
├── src/
│   ├── components/          # Componenti riutilizzabili
│   │   ├── Navbar.tsx/css
│   │   ├── Hero.tsx/css
│   │   ├── Services.tsx/css
│   │   ├── Manifesto.tsx/css
│   │   └── Footer.tsx/css
│   ├── pages/              # Pagine dell'applicazione
│   │   ├── HomePage.tsx
│   │   ├── ServiziPage.tsx/css
│   │   ├── ProgettiPage.tsx/css
│   │   └── ContattiPage.tsx/css
│   ├── App.tsx             # Componente principale con routing
│   ├── App.css
│   ├── main.tsx            # Entry point
│   └── index.css           # Stili globali e animazioni
├── index.html              # HTML principale con SEO meta tags
└── package.json
```

---

## 🚀 Installazione e Avvio

### Prerequisiti
- Node.js >= 16.x
- npm >= 8.x

### Setup

1. **Clona o naviga nella directory del progetto**
   ```bash
   cd FlowDigitalLab
   ```

2. **Installa le dipendenze** (se necessario)
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   Naviga su `http://localhost:5173/`

### Build per Produzione

```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`.

### Preview della Build

```bash
npm run preview
```

---

## 📄 Pagine

### 🏠 Home (`/`)
- **Hero Section**: Titolo con gradiente, sottotitolo, CTA buttons, statistiche
- **Services**: Griglia di 3 servizi (Web Design, Branding, Strategy)
- **Manifesto**: Filosofia "Flow" con quote ispirazionali

### 🛠️ Servizi (`/servizi`)
- Dettaglio completo dei servizi
- Processo di lavoro in 4 step (Discovery, Design & Development, Testing, Launch)

### 💼 Progetti (`/progetti`)
- Griglia di progetti completati
- Card interattive con immagini, categorie, descrizioni e tags
- Hover effects con overlay

### 📧 Contatti (`/contatti`)
- Form di contatto funzionale
- Informazioni di contatto (email, telefono, location)
- Orari di lavoro
- Layout a due colonne

---

## ✨ Features Principali

### Animazioni CSS Custom
- `@keyframes floating` - Effetto galleggiante
- `@keyframes pulse-glow` - Pulsazione luminosa
- `@keyframes gradient-shift` - Gradiente animato
- `@keyframes fade-in-up` - Entrata dal basso

### Glassmorphism
- Navbar con `backdrop-filter: blur()`
- Card con bordi sfumati e trasparenze

### Responsive Design
- Mobile-first approach
- Breakpoint principale: `768px`
- Menu mobile hamburger
- Grid e flexbox adattivi

### SEO Optimized
- Meta tags completi (title, description, keywords)
- Open Graph tags per social media
- Twitter Card tags
- Lingua italiana (`lang="it"`)

---

## 🎯 Prossimi Sviluppi

- [ ] Integrazione backend per form contatti
- [ ] Animazioni più avanzate con Framer Motion
- [ ] Lazy loading per immagini
- [ ] Dark/Light mode toggle
- [ ] Blog section
- [ ] Portfolio filtering
- [ ] Multilingua (IT/EN)

---

## 📝 Note Tecniche

### TypeScript
Tutte le props dei componenti sono tipizzate con interfacce:
```typescript
interface NavbarProps {}
interface HeroProps {}
// etc.
```

### CSS Architecture
- **NO CSS-in-JS**
- **NO Tailwind CSS**
- CSS puro organizzato per componente
- Variables CSS in `:root` per consistenza
- Utility classes minimali (`.gradient-text`, `.floating`, etc.)

### Performance
- Vite per build ultra-veloci
- Tree-shaking automatico
- Code splitting con React Router
- Immagini ottimizzate da Unsplash

---

## 📞 Contatti

**Flow Digital Lab**
- 📧 Email: info@flowdigitallab.com
- 📱 Telefono: +39 340 123 4567
- 🌍 Locazione: Italia

---

## 📜 Licenza

© 2026 Flow Digital Lab. Tutti i diritti riservati.

---

## 👨‍💻 Sviluppo

Creato con ❤️ usando React, TypeScript e CSS puro.

**Non fare una single page application** ✅ - Implementato routing multi-page con React Router
