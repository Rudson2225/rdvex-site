import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marina Silva',
    role: 'Dona de Pet Shop',
    company: 'Pet Amigos',
    content: 'A RDVEX reformulou nosso site e aumentou as vendas em 40%. Atendimento excelente e prazos cumpridos.',
    rating: 5,
    avatar: 'MS'
  },
  {
    name: 'Carlos Mendes',
    role: 'Empresário',
    company: 'Mendes Serviços',
    content: 'Resolvem qualquer problema de informática rapidamente. Suporte remoto eficiente e preço justo.',
    rating: 5,
    avatar: 'CM'
  },
  {
    name: 'Ana Paula Costa',
    role: 'Autônoma',
    company: '',
    content: 'Meu computador estava lento e vírus não saíam. Em poucas horas estava novo. Super recomendo!',
    rating: 5,
    avatar: 'AP'
  },
  {
    name: 'Roberto Lima',
    role: 'Gerente',
    company: 'Lima & Cia',
    content: 'Implementaram sistema de gestão para nossa oficina. Profissionais competentes e sempre disponíveis.',
    rating: 5,
    avatar: 'RL'
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section testimonials-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">
            Depoimentos reais de quem confia na RDVEX para seus projetos de TI
          </p>
        </motion.div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, i) => (
            <motion.article
              key={testimonial.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <div className="testimonial-header">
                <div className="avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}{testimonial.company ? ` • ${testimonial.company}` : ''}</p>
                </div>
                <Quote className="quote-icon" size={20} />
              </div>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote>{testimonial.content}</blockquote>
            </motion.article>
          ))}
        </div>
      </div>
      <style>{`
        .testimonials-section {
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
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--space-6);
        }
        .testimonial-card {
          background: rgba(17,24,39,0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          transition: all var(--transition-normal);
        }
        .testimonial-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(17,24,39,0.8);
          transform: translateY(-2px);
        }
        .testimonial-header {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          margin-bottom: var(--space-4);
        }
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-accent-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: var(--font-weight-bold);
          color: white;
          flex-shrink: 0;
        }
        .testimonial-info h3 {
          margin: 0;
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-semibold);
          color: var(--color-text-primary);
        }
        .testimonial-info p {
          margin: 0;
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }
        .quote-icon {
          color: var(--color-accent-green);
          opacity: 0.3;
          margin-left: auto;
        }
        .rating {
          display: flex;
          gap: var(--space-1);
          color: var(--color-warning);
          margin-bottom: var(--space-4);
        }
        blockquote {
          margin: 0;
          color: var(--color-text-secondary);
          font-size: var(--font-size-base);
          line-height: var(--line-height-normal);
          font-style: italic;
          position: relative;
        }
        blockquote::before {
          content: '"';
          color: var(--color-accent-green);
          font-size: 2rem;
          opacity: 0.3;
          position: absolute;
          left: -10px;
          top: -10px;
        }
        @media (max-width: 768px) {
          .testimonials-grid {
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
