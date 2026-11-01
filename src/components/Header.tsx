import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsapp = '5521987837387';

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="logo">
          <img src="/logo.svg" alt="RDVEX" height="32" />
        </div>
        <nav className="nav-links" aria-label="Principal">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#faq">FAQ</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="btn btn-primary" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="Fale no WhatsApp">
          <Phone size={18} />
          WhatsApp
        </a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu"
          >
            <nav className="mobile-nav">
              <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
              <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
              <a href="#depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
              <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(11,15,20,0.8);
          backdrop-filter: blur(12px) saturate(140%);
          -webkit-backdrop-filter: blur(12px) saturate(140%);
          border-bottom: 1px solid var(--color-border);
          transition: background var(--transition-fast);
        }
        .nav.scrolled {
          background: rgba(11,15,20,0.95);
          box-shadow: var(--shadow-sm);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-4);
          gap: var(--space-6);
        }
        .logo {
          font-weight: var(--font-weight-bold);
          font-size: var(--font-size-xl);
          letter-spacing: -0.02em;
        }
        .logo-gradient {
          background: var(--color-accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .nav-links {
          display: none;
          align-items: center;
          gap: var(--space-6);
        }
        .nav-links a {
          color: var(--color-text-secondary);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-sm);
          transition: color var(--transition-fast);
        }
        .nav-links a:hover {
          color: var(--color-text-primary);
          text-decoration: none;
        }
        .menu-btn {
          display: inline-flex;
          background: transparent;
          border: none;
          color: var(--color-text-primary);
          cursor: pointer;
          padding: var(--space-2);
          border-radius: var(--radius-sm);
        }
        .mobile-menu {
          overflow: hidden;
          border-top: 1px solid var(--color-border);
          background: var(--color-bg-surface);
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding: var(--space-4);
          gap: var(--space-3);
        }
        .mobile-nav a {
          color: var(--color-text-primary);
          padding: var(--space-3) 0;
          border-bottom: 1px solid var(--color-border);
        }
        @media (min-width: 1024px) {
          .nav-links { display: flex; }
          .menu-btn { display: none; }
          .mobile-menu { display: none; }
        }
      `}</style>
    </header>
  );
}
