import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export default function Hero() {
  const whatsapp = '5521987837387';

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge">
              <Sparkles size={16} />
              Manutenção e desenvolvimento TI
            </span>
            <h1 className="hero-title">
              Tecnologia para pessoas e empresas
            </h1>
            <p className="hero-subtitle">
              Manutenção de computadores, desenvolvimento web e suporte técnico com clareza em cada etapa. 
              Soluções práticas, atendimento consultivo e prazos cumpridos.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                Orçamento via WhatsApp
                <ArrowRight size={18} />
              </a>
              <a className="btn btn-ghost" href="#servicos">
                Ver serviços
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="trust">
              <div className="trust-item">
                <Clock size={16} />
                <span>Atendimento rápido</span>
              </div>
              <div className="trust-separator">•</div>
              <div className="trust-item">
                <ShieldCheck size={16} />
                <span>Garantia nos serviços</span>
              </div>
              <div className="trust-separator">•</div>
              <div className="trust-item">
                <Sparkles size={16} />
                <span>Transparência total</span>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="hero-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card-glow" />
          <h3>Diagnóstico gratuito</h3>
          <p>Envie uma mensagem agora e receba uma avaliação inicial sem compromisso.</p>
          <a 
            className="btn btn-secondary" 
            href={`https://wa.me/${whatsapp}?text=Olá%2C%20gostaria%20de%20um%20diagnóstico`}
            target="_blank"
            rel="noreferrer"
          >
            Iniciar conversa
          </a>
        </motion.div>
      </div>
      <style>{`
        .hero {
          padding: var(--space-16) 0 var(--space-12);
          background: radial-gradient(800px 400px at 20% -10%, rgba(34,197,94,0.15), transparent 60%),
                      radial-gradient(600px 300px at 90% 0%, rgba(59,130,246,0.15), transparent 60%),
                      var(--color-bg-base);
          min-height: 80vh;
          display: flex;
          align-items: center;
        }
        .hero-grid {
          display: grid;
          gap: var(--space-12);
          align-items: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.2);
          border-radius: var(--radius-full);
          color: var(--color-accent-green);
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          margin-bottom: var(--space-6);
        }
        .hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: var(--font-weight-semibold);
          line-height: var(--line-height-tight);
          letter-spacing: -0.02em;
          margin: 0 0 var(--space-6);
          background: linear-gradient(135deg, #e5e7eb 0%, #9ca3af 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero-subtitle {
          font-size: var(--font-size-lg);
          color: var(--color-text-secondary);
          line-height: var(--line-height-normal);
          margin: 0 0 var(--space-8);
          max-width: 600px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-4);
          margin-bottom: var(--space-8);
        }
        .trust {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-4);
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        .trust-separator {
          opacity: 0.3;
        }
        .hero-card {
          position: relative;
          background: rgba(17,24,39,0.7);
          backdrop-filter: blur(12px) saturate(140%);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
          padding: var(--space-8);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }
        .card-glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(34,197,94,0.1), transparent 30%);
          animation: rotate 20s linear infinite;
          pointer-events: none;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hero-card h3 {
          position: relative;
          font-size: var(--font-size-2xl);
          margin: 0 0 var(--space-4);
          color: var(--color-text-primary);
        }
        .hero-card p {
          position: relative;
          color: var(--color-text-secondary);
          margin: 0 0 var(--space-6);
          line-height: var(--line-height-normal);
        }
        .hero-card .btn {
          position: relative;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }
        @media (max-width: 768px) {
          .hero {
            padding: var(--space-12) 0 var(--space-8);
            min-height: auto;
          }
          .trust {
            flex-direction: column;
            align-items: flex-start;
          }
          .trust-separator {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
