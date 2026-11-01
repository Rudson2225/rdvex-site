import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Vocês atendem presencialmente ou apenas remoto?',
    answer: 'Atendemos ambos! Para manutenção, formatação e instalação fazemos visitas presenciais no Rio de Janeiro e região. Para suporte técnico, configuração de software e consultoria, oferecemos suporte remoto eficiente.'
  },
  {
    question: 'Quanto tempo leva para formatar um computador?',
    answer: 'Em média 2-4 horas, dependendo da quantidade de programas a instalar e da velocidade do equipamento. Oferecemos prioridade para casos urgentes com atendimento expresso.'
  },
  {
    question: 'Fazem recuperação de dados de HD com defeito?',
    answer: 'Sim. Avaliamos o caso e tentamos recuperar dados em laboratório. Para HDs com falha física, encaminhamos a serviços especializados parceiros com segurança e confidencialidade.'
  },
  {
    question: 'Qual o prazo para desenvolvimento de sites?',
    answer: 'Sites institucionais simples: 7-15 dias. E-commerce e sistemas personalizados: 20-45 dias. Fazemos orçamento detalhado com cronograma antes de iniciar qualquer projeto.'
  },
  {
    question: 'Oferecem garantia nos serviços?',
    answer: 'Sim! Todos os serviços têm garantia. Manutenção e formatação: 30 dias. Desenvolvimento web: suporte incluído por 3 meses após entrega. Peças com garantia do fabricante.'
  },
  {
    question: 'Atendem empresas com contrato de suporte mensal?',
    answer: 'Sim, oferecemos planos de suporte mensal para empresas com atendimento prioritário, manutenção preventiva agendada e relatórios de saúde dos sistemas.'
  },
  {
    question: 'Cobram para diagnóstico?',
    answer: 'O diagnóstico inicial é gratuito via WhatsApp. Se for necessário avaliar presencialmente ou com softwares específicos, informamos previamente o valor e pedimos autorização.'
  },
  {
    question: 'Trabalham com notebooks e desktops de todas as marcas?',
    answer: 'Sim, atendemos Dell, HP, Lenovo, Acer, Apple, customizados e qualquer outra marca. Também trabalhamos com periféricos, impressoras e dispositivos móveis.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="header-icon">
            <HelpCircle size={28} />
          </div>
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre nossos serviços de informática e desenvolvimento
          </p>
        </motion.div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              className="faq-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="faq-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>Não encontrou sua pergunta?</p>
          <a className="btn btn-primary" href="https://wa.me/5521987837387" target="_blank" rel="noreferrer">
            Fale conosco no WhatsApp
          </a>
        </motion.div>
      </div>
      <style>{`
        .faq-section {
          background: var(--color-bg-base);
        }
        .section-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }
        .header-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto var(--space-4);
          background: linear-gradient(135deg, rgba(34,197,94,0.15), rgba(59,130,246,0.15));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent-green);
          border: 1px solid rgba(255,255,255,0.06);
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
        .faq-list {
          max-width: 800px;
          margin: 0 auto var(--space-12);
        }
        .faq-item {
          background: rgba(17,24,39,0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
          margin-bottom: var(--space-4);
          overflow: hidden;
          transition: all var(--transition-normal);
        }
        .faq-item:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(17,24,39,0.8);
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
          padding: var(--space-6);
          background: transparent;
          border: none;
          color: var(--color-text-primary);
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-medium);
          text-align: left;
          cursor: pointer;
          transition: color var(--transition-fast);
        }
        .faq-question:hover {
          color: var(--color-text-primary);
        }
        .faq-question span {
          flex: 1;
          line-height: var(--line-height-snug);
        }
        .faq-question svg {
          flex-shrink: 0;
          color: var(--color-text-muted);
          transition: color var(--transition-fast);
        }
        .faq-item:hover .faq-question svg {
          color: var(--color-accent-green);
        }
        .faq-answer-wrapper {
          overflow: hidden;
        }
        .faq-answer {
          padding: 0 var(--space-6) var(--space-6);
          color: var(--color-text-secondary);
          line-height: var(--line-height-normal);
          font-size: var(--font-size-sm);
          border-top: 1px solid rgba(255,255,255,0.04);
          margin-top: 0;
          padding-top: var(--space-6);
        }
        .faq-cta {
          text-align: center;
          padding: var(--space-8);
          background: rgba(17,24,39,0.4);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
          max-width: 600px;
          margin: 0 auto;
        }
        .faq-cta p {
          color: var(--color-text-secondary);
          font-size: var(--font-size-lg);
          margin: 0 0 var(--space-4);
        }
        @media (max-width: 768px) {
          .section-title {
            font-size: var(--font-size-2xl);
          }
          .faq-question {
            padding: var(--space-4);
            font-size: var(--font-size-sm);
          }
          .faq-answer {
            padding: 0 var(--space-4) var(--space-4);
          }
        }
      `}</style>
    </section>
  );
}
