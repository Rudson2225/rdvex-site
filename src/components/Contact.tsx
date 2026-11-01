import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const whatsapp = '5521987837387';
  const email = 'rdvex.contato@gmail.com';
  const instagram = '@rdvex.tech';

  return (
    <section id="contato" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Fale com a gente</h2>
          <p className="section-subtitle">
            Entre em contato para orçamento gratuito ou tirar dúvidas
          </p>
        </motion.div>
        <div className="contact-grid">
          <motion.div
            className="contact-card primary"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-icon">
              <MessageCircle size={24} />
            </div>
            <h3>WhatsApp</h3>
            <p className="contact-value">+55 (21) 98783-7387</p>
            <p className="contact-desc">Resposta em até 2 horas úteis</p>
            <a 
              className="btn btn-primary" 
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir WhatsApp
            </a>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <h3>E-mail</h3>
            <p className="contact-value">{email}</p>
            <p className="contact-desc">Para orçamentos detalhados</p>
            <a 
              className="btn btn-secondary" 
              href={`mailto:${email}`}
            >
              Enviar e-mail
            </a>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-icon">
              <Instagram size={24} />
            </div>
            <h3>Instagram</h3>
            <p className="contact-value">{instagram}</p>
            <p className="contact-desc">Acompanhe nossos trabalhos</p>
            <a 
              className="btn btn-secondary" 
              href="https://instagram.com/rdvex.tech"
              target="_blank"
              rel="noreferrer"
            >
              Seguir no Instagram
            </a>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact-icon">
              <MapPin size={24} />
            </div>
            <h3>Atendimento</h3>
            <p className="contact-value">Rio de Janeiro e região</p>
            <div className="contact-hours">
              <Clock size={16} />
              <span>Seg-Sex: 9h às 18h</span>
            </div>
            <p className="contact-desc">Visita técnica sob agendamento</p>
          </motion.div>
        </div>
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="info-item">
            <Phone size={18} />
            <span>Atendimento rápido e consultivo</span>
          </div>
          <div className="info-item">
            <Clock size={18} />
            <span>Resposta em até 2 horas úteis</span>
          </div>
          <div className="info-item">
            <MapPin size={18} />
            <span>Atendemos RJ e região metropolitana</span>
          </div>
        </motion.div>
      </div>
      <style>{`
        .contact-section {
          background: var(--color-bg-muted);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
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
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-6);
          margin-bottom: var(--space-12);
        }
        .contact-card {
          background: rgba(17,24,39,0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
          padding: var(--space-8);
          text-align: center;
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .contact-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(17,24,39,0.8);
          transform: translateY(-2px);
        }
        .contact-card.primary {
          background: linear-gradient(135deg, rgba(34,197,94,0.1), rgba(59,130,246,0.1));
          border-color: rgba(34,197,94,0.2);
        }
        .contact-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto var(--space-4);
          background: rgba(255,255,255,0.03);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent-green);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .contact-card h3 {
          margin: 0 0 var(--space-3);
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-text-primary);
        }
        .contact-value {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-medium);
          color: var(--color-text-primary);
          margin: 0 0 var(--space-2);
        }
        .contact-desc {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          margin: 0 0 var(--space-6);
          flex-grow: 1;
        }
        .contact-hours {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          margin: var(--space-2) 0;
        }
        .contact-card .btn {
          width: 100%;
          justify-content: center;
        }
        .contact-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: var(--space-6);
          padding: var(--space-6);
          background: rgba(17,24,39,0.4);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
        }
        @media (max-width: 768px) {
          .section-title {
            font-size: var(--font-size-2xl);
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-info {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
