# Deploy Gratuito RDVEX

## Opções gratuitas

1. **GitHub Pages** - Grátis, custom domain opcional
2. **Netlify** - Grátis, drag & drop dist/
3. **Vercel** - Grátis, deploy automático
4. **Cloudflare Pages** - Grátis, muito rápido

## GitHub Pages - Passo a passo rápido

```bash
cd /mnt/ssd-extra/projetos/RDVEX
git init
git add .
git commit -m "RDVEX site"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/rdvex-site.git
git push -u origin main
```

No GitHub: Settings > Pages > Deploy from branch main / root

## Netlify - Mais simples

1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `dist/`
3. Pronto! URL tipo rdvex-site.netlify.app

## Vercel

```bash
npm i -g vercel
vercel --prod
```

