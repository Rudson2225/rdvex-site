import { motion } from 'framer-motion';
import { ExternalLink, Code, ShoppingCart, Building, Globe } from 'lucide-react';

const projects = [
  {
    icon: Globe,
    title: '『𝕽𝕯』ᴰᵉᵛ Portfolio',
    description: 'Portfolio pessoal com projetos de backend, APIs REST e arquitetura de software. Veja os trabalhos reais do desenvolvedor.',
    category: 'Portfolio Pessoal',
    tag: 'HTML + CSS + JS',
    url: 'https://rudson2225.github.io/'
  },
  {
    icon: Code,
    title: 'DevHub API',
    description: 'API REST de gerenciamento de projetos com ASP.NET Core, PostgreSQL, Entity Framework Core, JWT e Clean Architecture.',
    category: 'Backend API',
    tag: 'C# .NET',
    url: 'https://github.com/Rudson2225/devhub-api'
  },
  {
    icon: ShoppingCart,
    title: 'Minecraft Launcher',
    description: 'Launcher multiplataforma para rede de servidores Minecraft com instalação e atualização de modpacks.',
    category: 'Desktop App',
    tag: 'C# .NET',
    url: 'https://github.com/Rudson2225'
  },
  {
    icon: Building,
    title: 'IA e Robótica Experimental',
    description: 'Projetos com IA local, automação e hardware usando Raspberry Pi, ESP32 e Arduino.',
    category: 'IoT / Hardware',
    tag: 'Python / ESP32',
    url: 'https://github.com/Rudson2225'
  },
  {
    icon: Globe,
    title: 'Site Institucional Corporativo',
    description: 'Desenvolvimento de site moderno para escritório de advocacia com área de membros',
    category: 'Desenvolvimento Web',
    tag: 'React + Next.js'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce de Moda',
    description: 'Loja virtual completa com integração de pagamentos e gestão de estoque',
    category: 'E-commerce',
    tag: 'Shopify + Custom'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Portfolio de Projetos</h2>
          <p className="section-subtitle">
            Alguns dos projetos de desenvolvimento web e sistemas que já realizamos
          </p>
        </motion.div>
        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  <project.icon size={24} />
                </div>
                <span className="project-tag">{project.tag}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                {project.url ? (
                  <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Ver projeto ${project.title}`}>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button className="project-link" aria-label={`Ver projeto ${project.title}`}>
                    <ExternalLink size={16} />
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>Tem um projeto em mente?</p>
          <a className="btn btn-primary" href="https://wa.me/5521987837387" target="_blank" rel="noreferrer">
            Vamos conversar
          </a>
        </motion.div>
      </div>
      <style>{`
        .portfolio-section {
          background: var(--color-bg-base);
        }
        .section-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }
        .section-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-semibold);
          margin: 0 0 var(--space-4);
          background: linear-gradient(135deg, #e5e7eb 0%, #9ca3af 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .section-subtitle {
          color: var(--color-text-secondary);
          font-size: var(--font-size-lg);
          max-width: 600px;
          margin: 0 auto;
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--space-6);
          margin-bottom: var(--space-12);
        }
        .project-card {
          background: rgba(17,24,39,0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(17,24,39,0.8);
          box-shadow: var(--shadow-md);
        }
        .project-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: var(--space-4);
        }
        .project-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, rgba(34,197,94,0.15), rgba(59,130,246,0.15));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent-green);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .project-tag {
          font-size: var(--font-size-xs);
          color: var(--color-text-muted);
          background: rgba(255,255,255,0.03);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .project-card h3 {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          margin: 0 0 var(--space-3);
          color: var(--color-text-primary);
        }
        .project-card p {
          color: var(--color-text-secondary);
          margin: 0 0 var(--space-6);
          line-height: var(--line-height-normal);
          flex-grow: 1;
          font-size: var(--font-size-sm);
        }
        .project-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: var(--space-4);
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: auto;
        }
        .project-category {
          font-size: var(--font-size-xs);
          color: var(--color-text-muted);
          font-weight: var(--font-weight-medium);
        }
        .project-link {
          background: transparent;
          border: none;
          color: var(--color-text-secondary);
          cursor: pointer;
          padding: var(--space-2);
          border-radius: var(--radius-sm);
          transition: color var(--transition-fast);
        }
        .project-link:hover {
          color: var(--color-accent-blue);
        }
        .portfolio-cta {
          text-align: center;
          padding: var(--space-8);
          background: rgba(17,24,39,0.4);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
        }
        .portfolio-cta p {
          color: var(--color-text-secondary);
          font-size: var(--font-size-lg);
          margin: 0 0 var(--space-4);
        }
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: var(--font-size-2xl);
          }
        }
      `}</style>
    </section>
  );
}
