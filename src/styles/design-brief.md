# RDVEX Digital & Tech Solutions — Design Brief

**Projeto:** Site institucional moderno  
**Contexto:** Serviço de informática e TI completo no Rio de Janeiro, Brasil  
**Data:** 01 Nov 2026  
**Escopo:** Identidade visual, design system e diretrizes de implementação frontend

---

## 1. Visão e Tom

RDVEX comunica tecnologia confiável, moderna e acessível. A identidade equilibra profissionalismo técnico com proximidade local. Visual dark premium, alto contraste, foco em legibilidade e performance.

Princípios:
- Clareza técnica
- Consistência sistemática
- Acessibilidade WCAG AA mínima
- Performance-first

---

## 2. Paleta de Cores

### Tema Escuro Base
Aplicação principal para site institucional.

```css
--color-bg-base: #0b0f14;      /* Fundo principal */
--color-bg-surface: #111827;   /* Cards, sidebars, menus */
--color-bg-elevated: #1f2937;  /* Hover, inputs */
--color-text-primary: #e5e7eb; /* Texto principal */
--color-text-secondary: #9ca3af; /* Texto secundário */
--color-text-muted: #6b7280;   /* Placeholders, meta */
--color-border: #1f2937;       /* Bordas suaves */
--color-border-strong: #374151;
```

### Acentos de Marca
Gradiente principal: Verde → Azul

```css
--color-accent-green: #22c55e;  /* Sucesso, CTAs secundários */
--color-accent-blue: #3b82f6;   /* Primário, links */
--color-accent-gradient: linear-gradient(135deg, #22c55e 0%, #3b82f6 100%);
```

### Semânticos
```css
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;
--color-info: #3b82f6;
```

### Neutros
Escala 50-900 baseada em slate/gray para superfícies e texto.

Contraste validado:
- Texto primário #e5e7eb sobre #0b0f14 ≈ 15:1
- Texto secundário #9ca3af sobre #111827 ≈ 7.2:1
- Acento verde sobre fundo escuro ≈ 7.8:1
- Acento azul sobre fundo escuro ≈ 6.5:1

Todos atendem WCAG AA.

---

## 3. Tipografia

**Fonte principal:** Inter

Import via Google Fonts ou self-host:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Tokens:
```css
--font-family-primary: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
--font-family-mono:  'JetBrains Mono', ui-monospace, monospace;

--font-size-xs: 0.75rem;   /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-base: 1rem;    /* 16px */
--font-size-lg: 1.125rem;  /* 18px */
--font-size-xl: 1.25rem;   /* 20px */
--font-size-2xl: 1.5rem;   /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem;  /* 36px */

--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

--line-height-tight: 1.2;
--line-height-snug: 1.4;
--line-height-normal: 1.6;
```

Uso:
- Títulos: semibold 600, tracking -0.01em
- Corpo: regular 400
- Destaques técnicos: mono 400

Hierarchy exemplo:
```css
h1 { font-size: var(--font-size-4xl); font-weight: var(--font-weight-semibold); line-height: var(--line-height-tight); }
h2 { font-size: var(--font-size-3xl); font-weight: var(--font-weight-semibold); }
body { font-size: var(--font-size-base); font-weight: var(--font-weight-regular); line-height: var(--line-height-normal); }
```

---

## 4. Logo Conceito

### Logotipo textual RDVEX
- Wordmark em Inter Semibold, tracking -0.02em
- Monograma R como marca distintiva: R customizado com gradiente verde→azul
- Versões: colorida, monocromática branca, monocromática verde

### Aplicações
- Header: monograma R + RDVEX
- Footer: wordmark completo
- Favicons: monograma R em quadrado #0b0f14 com gradiente interno

Regras de clear space: altura do R x 1.5 ao redor.

---

## 5. Diretrizes de Uso

### Grid e Espaçamento
Base 8px grid

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

### Bordas e Raio
```css
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.75rem;   /* 12px */
--radius-lg: 1rem;      /* 16px */
--radius-full: 9999px;
```

### Sombras suaves
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.25);
--shadow-md: 0 4px 12px -2px rgb(0 0 0 / 0.4);
--shadow-lg: 0 10px 30px -10px rgb(0 0 0 / 0.5);
--shadow-glow-green: 0 0 30px rgb(34 197 94 / 0.25);
```

### Transições
```css
--transition-fast: 150ms ease;
--transition-normal: 250ms ease;
--transition-slow: 400ms ease;
```

---

## 6. Componentes Visuais

### Hero com Gradiente
Seção inicial com fundo #0b0f14, overlay de gradiente sutil verde→azul, headline grande, CTA primário.

```css
.hero {
  background: radial-gradient(800px 400px at 20% -10%, rgba(34,197,94,0.15), transparent 60%),
              radial-gradient(600px 300px at 90% 0%, rgba(59,130,246,0.15), transparent 60%),
              var(--color-bg-base);
}
```

### Cards com Glassmorphism Leve
```css
.card {
  background: rgba(17,24,39,0.7);
  backdrop-filter: blur(12px) saturate(140%);
  -webkit-backdrop-filter: blur(12px) saturate(140%);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--space-6);
}
```

### Botões

**Primário**
- Fundo gradiente verde→azul
- Texto branco
- Hover: brilho suave + translateY(-1px)

**Secundário**
- Fundo transparente, borda #374151
- Texto #e5e7eb
- Hover: fundo #1f2937

**Ghost**
- Sem fundo, texto #9ca3af
- Hover: texto #e5e7eb

Tokens:
```css
.btn { padding: 0.75rem 1.25rem; border-radius: var(--radius-md); font-weight: 500; transition: var(--transition-fast); }
.btn--primary { background: var(--color-accent-gradient); color: white; }
.btn--secondary { background: transparent; border: 1px solid var(--color-border-strong); color: var(--color-text-primary); }
.btn--ghost { background: transparent; color: var(--color-text-secondary); }
```

### Form e Inputs
- Fundo #0b0f14, borda #374151, foco com anel azul #3b82f6 40%
- Label em texto secundário, input em texto primário

### Navegação
Header fixo com backdrop blur, logo esquerda, menu central, CTA direita.

---

## 7. Ícones

Biblioteca: lucide-react

Estilo: outline, stroke 2px, tamanho base 20px
Cores: texto secundário por padrão, acento para ações.

Exemplo de uso:
```tsx
import { Monitor, ShieldCheck, Zap, Phone, Mail } from 'lucide-react';
```

Pairings sugeridos:
- Serviços: Monitor, Cpu, HardDrive, ShieldCheck
- Contato: Phone, Mail, MapPin
- Social/CTA: ArrowRight, Zap

---

## 8. CSS Variables - Implementação Completa

```css
/* design-tokens.css */
:root {
  /* Cores de fundo */
  --color-bg-base: #0b0f14;
  --color-bg-surface: #111827;
  --color-bg-elevated: #1f2937;
  --color-bg-muted: #0f172a;

  /* Texto */
  --color-text-primary: #e5e7eb;
  --color-text-secondary: #9ca3af;
  --color-text-muted: #6b7280;

  /* Bordas */
  --color-border: #1f2937;
  --color-border-strong: #374151;

  /* Acentos */
  --color-accent-green: #22c55e;
  --color-accent-blue: #3b82f6;
  --color-accent-gradient: linear-gradient(135deg, #22c55e 0%, #3b82f6 100%);

  /* Semânticos */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;

  /* Tipografia */
  --font-family-primary: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 1.2;
  --line-height-snug: 1.4;
  --line-height-normal: 1.6;

  /* Espaçamento 8px grid */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Raio */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;

  /* Sombras */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.25);
  --shadow-md: 0 4px 12px -2px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 30px -10px rgb(0 0 0 / 0.5);

  /* Transições */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
}

/* Base */
* { box-sizing: border-box; }
body {
  background: var(--color-bg-base);
  color: var(--color-text-primary);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  -webkit-font-smoothing: antialiased;
}

a { color: var(--color-accent-blue); text-decoration: none; }
a:hover { text-decoration: underline; }

/* Card Glass */
.card {
  background: rgba(17,24,39,0.7);
  backdrop-filter: blur(12px) saturate(140%);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--space-6);
}

/* Botões */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-fast);
  border: none;
  cursor: pointer;
}
.btn--primary {
  background: var(--color-accent-gradient);
  color: white;
}
.btn--primary:hover { filter: brightness(1.08); transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn--secondary {
  background: transparent;
  border: 1px solid var(--color-border-strong);
  color: var(--color-text-primary);
}
.btn--ghost {
  background: transparent;
  color: var(--color-text-secondary);
}

/* Focus acessível */
:focus-visible {
  outline: 2px solid var(--color-accent-blue);
  outline-offset: 2px;
}
```

---

## 9. Checklist de Implementação Frontend

- [ ] Importar Inter via Google Fonts
- [ ] Criar `src/styles/tokens.css` com variáveis acima
- [ ] Definir tema dark como padrão, sem toggle inicial
- [ ] Componentes base: Button, Card, Input, Navbar, Hero
- [ ] Usar lucide-react para todos os ícones
- [ ] Garantir contraste mínimo 4.5:1
- [ ] Touch targets ≥44px
- [ ] Testar reduz motion e prefers-color-scheme

---

**Responsável Design:** UI Designer RDVEX  
**Status:** Pronto para implementação  
**Próximos passos:** Criar componentes React baseados nestes tokens e aplicar em pages/ Home, Serviços, Sobre, Contato.
