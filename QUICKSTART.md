# 🚀 Quick Start Guide - Flow Digital Lab

## ⚡ Comandi Rapidi

### Sviluppo
```bash
npm run dev
```
Apri http://localhost:5173 nel browser

### Build Produzione
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Type Check
```bash
npx tsc --noEmit
```

---

## 📂 Navigazione Progetto

### Pagine Disponibili
- **Home**: http://localhost:5173/
- **Servizi**: http://localhost:5173/servizi
- **Progetti**: http://localhost:5173/progetti
- **Contatti**: http://localhost:5173/contatti

---

## 🎨 Personalizzazione Veloce

### Cambiare Colori
Modifica `src/index.css`:
```css
:root {
  --navy-deep: #0a192f;     /* Background */
  --teal: #64ffda;          /* Accento principale */
  --cyan: #00d9ff;          /* Accento secondario */
  --lime-green: #a2ff00;    /* Accento terziario */
}
```

### Modificare Testi Hero
File: `src/components/Hero.tsx`
```typescript
<h1 className="hero-title">
  Trasformiamo la tua visione<br />
  in un <span className="gradient-text">Flusso</span> Digitale.
</h1>
```

### Aggiungere un Servizio
File: `src/components/Services.tsx`
```typescript
const services = [
  {
    icon: <Code size={40} />,
    title: 'Nuovo Servizio',
    description: 'Descrizione...',
    features: ['Feature 1', 'Feature 2']
  }
];
```

---

## 🆘 Troubleshooting

### Il server non parte?
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Errori TypeScript strani?
```bash
npx tsc --build --clean
npx tsc --noEmit
```

### Hot reload non funziona?
Riavvia il dev server:
- Premi `Ctrl+C`
- Poi `npm run dev`

---

## 📱 Test Responsive

### Chrome DevTools
1. `F12` per aprire DevTools
2. `Ctrl+Shift+M` per Device Toolbar
3. Testa su iPhone, iPad, Desktop

### Breakpoint
- Mobile: 0-768px
- Desktop: 768px+

---

## 🎯 Prossimi Step

1. ✅ Personalizza testi e immagini
2. ✅ Aggiungi il tuo logo
3. ✅ Configura backend per form contatti
4. ✅ Deploy su Vercel/Netlify
5. ✅ Configura dominio personalizzato
6. ✅ Aggiungi Google Analytics

---

## 📧 Contatti da Aggiornare

File: `src/components/Footer.tsx` e `src/pages/ContattiPage.tsx`

```typescript
// Cambia questi valori
<a href="mailto:TUA_EMAIL@example.com">
<a href="tel:+39TUO_NUMERO">
```

---

## 🌐 Deploy Rapido

### Vercel (Raccomandato)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

Buon lavoro! 🚀
