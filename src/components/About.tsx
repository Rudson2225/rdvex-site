import { motion } from 'framer-motion';
import { CheckCircle2, Users, Clock, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Users, text: 'Atendimento consultivo personalizado' },
    { icon: Clock, text: 'Prazos cumpridos com transparência' },
    { icon: Award, text: 'Experiência técnica comprovada' },
    { icon: CheckCircle2, text: 'Orçamento detalhado sem surpresas' },
  ];

  return (
    <section id="sobre" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Sobre a RDVEX</h2>
            <p className="about-text">
              A RDVEX nasceu para simplificar a relação entre tecnologia e pessoas. 
              Entregamos soluções práticas de informática e desenvolvimento web com foco 
              em resultado e comunicação clara.
            </p>
            <p className="about-text">
              Atendemos pessoas físicas e empresas no Rio de Janeiro e região, com 
              serviços que vão desde manutenção preventiva até desenvolvimento de 
              sistemas completos. Nossa missão é fazer a tecnologia trabalhar para você, 
              não contra você.
            </p>
            <ul className="highlights">
              {highlights.map((item, i) => (
                <motion.li 
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <item.icon size={20} />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card-header">
              <h3>Por que escolher a RDVEX?</h3>
            </div>
            <div className="card-content">
              <p>
                Experiência técnica, processos organizados e preço justo. 
                Você sabe o que está pagando e quando será entregue.
              </p>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Anos de experiência</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Satisfação garantida</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24h</div>
                  <div className="stat-label">Resposta média</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .about-section {
          background: var(--color-bg-muted);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .about-grid {
          display: grid;
          gap: var(--space-12);
          align-items: start;
        }
        .section-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-semibold);
          margin: 0 0 var(--space-6);
          background: linear-gradient(135deg, #e5e7eb 0%, #9ca3af 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .about-text {
          color: var(--color-text-secondary);
          font-size: var(--font-size-lg);
          line-height: var(--line-height-normal);
          margin: 0 0 var(--space-6);
        }
        .highlights {
          list-style: none;
          padding: 0;
          margin: var(--space-8) 0 0;
          display: grid;
          gap: var(--space-4);
        }
        .highlights li {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          color: var(--color-text-primary);
          font-weight: var(--font-weight-medium);
        }
        .highlights li svg {
          color: var(--color-accent-green);
          flex-shrink: 0;
        }
        .about-card {
          background: rgba(17,24,39,0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .card-header {
          background: linear-gradient(135deg, rgba(34,197,94,0.1), rgba(59,130,246,0.1));
          padding: var(--space-6);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .card-header h3 {
          margin: 0;
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-text-primary);
        }
        .card-content {
          padding: var(--space-6);
        }
        .card-content p {
          color: var(--color-text-secondary);
          margin: 0 0 var(--space-6);
          line-height: var(--line-height-normal);
        }
        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
          padding-top: var(--space-6);
          border-top: 1px solid var(--color-border);
        }
        .stat {
          text-align: center;
        }
        .stat-number {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-bold);
          background: var(--color-accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .stat-label {
          font-size: var(--font-size-xs);
          color: var(--color-text-muted);
          margin-top: var(--space-1);
        }
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        @media (max-width: 768px) {
          .stats {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }
          .stat {
            padding: var(--space-4);
            background: rgba(255,255,255,0.02);
            border-radius: var(--radius-md);
          }
        }
      `}</style>
    </section>
  );
}
