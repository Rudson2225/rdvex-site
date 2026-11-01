import { useState } from 'react';
import { Phone, Mail, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const whatsapp = '5521987837387';
  const email = 'rdvex.contato@gmail.com';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-gradient">RDVEX</span>
            </div>
            <p className="brand-description">
              Tecnologia para pessoas e empresas. Manutenção de computadores, 
              desenvolvimento web e suporte técnico com excelência.
            </p>
            <div className="social-links">
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <Phone size={18} />
              </a>
              <a href={`mailto:${email}`} aria-label="E-mail">
                <Mail size={18} />
              </a>
              <a href="https://instagram.com/rdvex.tech" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div className="footer-links-group">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#servicos">Manutenção de PCs</a></li>
              <li><a href="#servicos">Desenvolvimento Web</a></li>
              <li><a href="#servicos">Suporte Técnico</a></li>
              <li><a href="#servicos">Rede e Wi-Fi</a></li>
              <li><a href="#servicos">Recuperação de Dados</a></li>
            </ul>
          </div>
          <div className="footer-links-group">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#sobre">Sobre nós</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contato</h4>
            <div className="contact-item">
              <Phone size={16} />
              <span>+55 (21) 98783-7387</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>{email}</span>
            </div>
            <div className="contact-item">
              <Instagram size={16} />
              <span>@rdvex.tech</span>
            </div>
            <a className="btn btn-primary btn-small" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
              Fale no WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="copyright">
            © {year} RDVEX. Todos os direitos reservados.
          </div>
          <div className="footer-meta">
            <span>Rio de Janeiro, Brasil</span>
            <span>•</span>
            <span>Atendimento RJ e região</span>
          </div>
        </div>
      </div>
      <button className="scroll-top" onClick={scrollToTop} aria-label="Voltar ao topo">
        <ArrowUp size={20} />
      </button>
      <style>{`
        .footer {
          background: #050708;
          border-top: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          position: relative;
        }
        .footer-main {
          padding: var(--space-12) var(--space-4);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-8);
        }
        .footer-brand {
          grid-column: 1 / -1;
        }
        @media (min-width: 1024px) {
          .footer-brand {
            grid-column: 1 / 2;
          }
        }
        .logo {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-bold);
          margin-bottom: var(--space-4);
        }
        .logo-gradient {
          background: var(--color-accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .brand-description {
          color: var(--color-text-secondary);
          line-height: var(--line-height-normal);
          margin: 0 0 var(--space-6);
          max-width: 400px;
        }
        .social-links {
          display: flex;
          gap: var(--space-4);
        }
        .social-links a {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          transition: all var(--transition-fast);
        }
        .social-links a:hover {
          background: rgba(255,255,255,0.06);
          color: var(--color-text-primary);
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-2px);
        }
        .footer-links-group h4,
        .footer-contact h4 {
          color: var(--color-text-primary);
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-semibold);
          margin: 0 0 var(--space-4);
        }
        .footer-links-group ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: var(--space-3);
        }
        .footer-links-group a {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          transition: color var(--transition-fast);
        }
        .footer-links-group a:hover {
          color: var(--color-text-primary);
          text-decoration: none;
        }
        .footer-contact {
          display: flex;
          flex-direction: column;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          margin-bottom: var(--space-3);
        }
        .btn-small {
          padding: 0.5rem 1rem;
          font-size: var(--font-size-sm);
          margin-top: var(--space-4);
          align-self: flex-start;
        }
        .footer-bottom {
          border-top: 1px solid var(--color-border);
          padding: var(--space-6) var(--space-4);
          background: rgba(255,255,255,0.01);
        }
        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-4);
          font-size: var(--font-size-sm);
        }
        .copyright {
          color: var(--color-text-muted);
        }
        .footer-meta {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          color: var(--color-text-muted);
        }
        .scroll-top {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          width: 48px;
          height: 48px;
          background: var(--color-accent-gradient);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-lg);
          transition: all var(--transition-fast);
          z-index: 100;
        }
        .scroll-top:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -4px rgba(34,197,94,0.4);
        }
        @media (max-width: 768px) {
          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
          }
          .scroll-top {
            bottom: var(--space-4);
            right: var(--space-4);
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </footer>
  );
}
