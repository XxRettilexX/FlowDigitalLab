# 🔧 Guida allo Sviluppo - Flow Digital Lab

Questo documento fornisce linee guida per lo sviluppo e l'estensione del progetto Flow Digital Lab.

---

## 📐 Architettura del Progetto

### Principi di Design

1. **Separation of Concerns**
   - Ogni componente ha il proprio file TypeScript (`.tsx`) e CSS (`.css`)
   - Le pagine sono composte da componenti riutilizzabili
   - La logica di routing è centralizzata in `App.tsx`

2. **TypeScript First**
   - Tutte le props devono avere interfacce TypeScript
   - Evitare l'uso di `any`
   - Utilizzare tipi espliciti per stati e parametri

3. **CSS Puro**
   - **NO Tailwind CSS**
   - Utilizzare CSS Variables definite in `index.css`
   - Naming convention: BEM-inspired (`.component-element--modifier`)
   - Animazioni CSS personalizzate

---

## 🎨 Sistema di Design

### CSS Variables (`:root`)

```css
/* Colori */
--navy-deep: #0a192f;
--teal: #64ffda;
--cyan: #00d9ff;
--lime-green: #a2ff00;
--off-white: #e6f1ff;
--text-secondary: #8892b0;

/* Gradienti */
--gradient-primary: linear-gradient(135deg, var(--teal) 0%, var(--cyan) 50%, var(--lime-green) 100%);
--gradient-accent: linear-gradient(90deg, var(--teal) 0%, var(--lime-green) 100%);

/* Spacing */
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 4rem;
--spacing-xl: 6rem;
```

### Utility Classes

```css
.gradient-text      /* Testo con gradiente animato */
.floating           /* Animazione galleggiante */
.pulse-glow         /* Pulsazione luminosa */
.container          /* Container centrato max-width 1200px */
```

### Componenti Base

Ogni componente segue questo pattern:

```typescript
import React from 'react';
import './ComponentName.css';

interface ComponentNameProps {
  // Props tipizzate
}

const ComponentName: React.FC<ComponentNameProps> = (props) => {
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

---

## 🔄 Aggiungere una Nuova Pagina

### Step 1: Creare il componente della pagina

**File**: `src/pages/NuovaPaginaPage.tsx`

```typescript
import React from 'react';
import './NuovaPaginaPage.css';

interface NuovaPaginaPageProps {}

const NuovaPaginaPage: React.FC<NuovaPaginaPageProps> = () => {
  return (
    <div className="nuova-pagina-page">
      <section className="nuova-pagina-hero">
        <div className="container">
          <h1 className="page-title">
            Titolo <span className="gradient-text">Pagina</span>
          </h1>
          <p className="page-subtitle">Sottotitolo della pagina</p>
        </div>
      </section>
      {/* Altri contenuti */}
    </div>
  );
};

export default NuovaPaginaPage;
```

### Step 2: Creare il CSS della pagina

**File**: `src/pages/NuovaPaginaPage.css`

```css
.nuova-pagina-page {
  min-height: 100vh;
}

.nuova-pagina-hero {
  padding: 10rem 0 6rem;
  text-align: center;
  background: radial-gradient(ellipse at top, rgba(100, 255, 218, 0.1) 0%, transparent 60%);
}

/* Altri stili... */
```

### Step 3: Aggiungere la route in `App.tsx`

```typescript
import NuovaPaginaPage from './pages/NuovaPaginaPage';

// Dentro il componente Routes:
<Route path="/nuova-pagina" element={<NuovaPaginaPage />} />
```

### Step 4: Aggiornare la Navbar

In `src/components/Navbar.tsx`, aggiungere il link nel `navLinks` array:

```typescript
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Servizi', path: '/servizi' },
  { name: 'Progetti', path: '/progetti' },
  { name: 'Nuova Pagina', path: '/nuova-pagina' }, // ← NUOVO
  { name: 'Contatti', path: '/contatti' },
];
```

---

## ➕ Aggiungere un Nuovo Componente

### Pattern Standard

1. Creare `src/components/NuovoComponente.tsx`
2. Creare `src/components/NuovoComponente.css`
3. Definire l'interfaccia TypeScript per le props
4. Esportare il componente
5. Importarlo dove necessario

### Esempio: Componente Testimonianze

**NuovoComponente.tsx**:
```typescript
import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, avatar }) => {
  return (
    <div className="testimonial-card">
      <Quote size={32} className="testimonial-icon" />
      <p className="testimonial-content">{content}</p>
      <div className="testimonial-author">
        {avatar && <img src={avatar} alt={name} className="testimonial-avatar" />}
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
```

---

## 🎨 Aggiungere Animazioni CSS

### Keyframe Animation Pattern

1. Definire l'animazione in `src/index.css` (globale) o nel CSS del componente (locale)

```css
@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

2. Applicare l'animazione:

```css
.elemento {
  animation: slide-in-right 0.6s ease;
}
```

### Animazioni Esistenti

- `floating` - Movimento verticale dolce
- `pulse-glow` - Pulsazione con box-shadow luminoso
- `gradient-shift` - Gradiente che si muove
- `fade-in-up` - Entrata dal basso con dissolvenza
- `scroll-pulse` - Per indicatori di scroll

---

## 📱 Responsive Design

### Breakpoint Standard

```css
/* Mobile First - da 0px a 768px */
.elemento {
  /* Stili base mobile */
}

/* Tablet e Desktop - da 768px in su */
@media (max-width: 768px) {
  .elemento {
    /* Stili desktop/tablet */
  }
}
```

### Grid Responsive Pattern

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

---

## 🔧 Testing

### Verificare TypeScript

```bash
npx tsc --noEmit
```

### Lint (se configurato)

```bash
npm run lint
```

### Build di Test

```bash
npm run build
npm run preview
```

---

## 🚀 Deploy

### Preparazione al Deploy

1. **Verifica le immagini**
   - Ottimizzare tutte le immagini
   - Utilizzare formati moderni (WebP, AVIF)

2. **Minify CSS**
   - Vite lo fa automaticamente con `npm run build`

3. **Verifica SEO**
   - Controllare meta tags in `index.html`
   - Verificare `robots.txt` (se necessario)
   - Creare `sitemap.xml` (opzionale)

### Opzioni di Deploy

- **Vercel**: `npm install -g vercel` → `vercel`
- **Netlify**: Drag & drop della cartella `dist/`
- **GitHub Pages**: Configurare `vite.config.ts` con `base: '/repo-name/'`

---

## 📚 Risorse

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vite.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 🐛 Troubleshooting

### Il server non parte
```bash
# Cancellare node_modules e reinstallare
rm -rf node_modules package-lock.json
npm install
```

### Errori TypeScript strani
```bash
# Pulire cache TypeScript
npx tsc --build --clean
```

### Hot Reload non funziona
- Verificare che il file sia salvato correttamente
- Riavviare il dev server (`Ctrl+C` poi `npm run dev`)

---

## ✅ Checklist Pre-Commit

- [ ] Nessun errore TypeScript (`npx tsc --noEmit`)
- [ ] Nessun `console.log()` dimenticato
- [ ] Codice formattato correttamente
- [ ] Interfacce TypeScript definite per nuove props
- [ ] CSS responsive testato
- [ ] Animazioni fluide senza scatti
- [ ] Icone importate da `lucide-react`
- [ ] Naming convention rispettato

---

Buon sviluppo! 🚀
