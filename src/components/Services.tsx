import { motion } from 'framer-motion';
import { 
  Wrench, 
  Code2, 
  ShieldCheck, 
  Zap, 
  HardDrive, 
  Network, 
  Smartphone,
  Printer,
  Cloud,
  LockKeyhole,
  HardDriveUpload
} from 'lucide-react';

const services = [
  { 
    icon: Wrench, 
    title: 'Manutenção de PCs', 
    desc: 'Limpeza interna, troca de peças, upgrade e diagnóstico completo.',
    color: 'var(--color-accent-green)'
  },
  { 
    icon: Code2, 
    title: 'Desenvolvimento Web', 
    desc: 'Sites rápidos, responsivos e otimizados para conversão.',
    color: 'var(--color-accent-blue)'
  },
  { 
    icon: ShieldCheck, 
    title: 'Suporte Técnico', 
    desc: 'Suporte remoto e presencial com atendimento ágil.',
    color: 'var(--color-accent-green)'
  },
  { 
    icon: Zap, 
    title: 'Rede e Wi-Fi', 
    desc: 'Instalação e otimização de redes domésticas e empresariais.',
    color: 'var(--color-accent-blue)'
  },
  { 
    icon: HardDrive, 
    title: 'Recuperação de Dados', 
    desc: 'Recuperação de arquivos perdidos em HDs, SSDs e pendrives.',
    color: 'var(--color-accent-green)'
  },
  { 
    icon: Network, 
    title: 'Formatação e Instalação', 
    desc: 'Instalação de sistemas operacionais e softwares essenciais.',
    color: 'var(--color-accent-blue)'
  },
  { 
    icon: Smartphone, 
    title: 'Limpeza de Vírus', 
    desc: 'Remoção completa de malware, antivírus e proteção digital.',
    color: 'var(--color-accent-green)'
  },
  { 
    icon: Printer, 
    title: 'Periféricos e Impressoras', 
    desc: 'Configuração, manutenção e solução de problemas de impressão.',
    color: 'var(--color-accent-blue)'
  },
  { 
    icon: Cloud, 
    title: 'Backup em Nuvem', 
    desc: 'Configuração de backup automático e recuperação segura.',
    color: 'var(--color-accent-green)'
  },
  { 
    icon: LockKeyhole, 
    title: 'Segurança Digital', 
    desc: 'Consultoria em segurança, senhas e proteção de dados.',
    color: 'var(--color-accent-blue)'
  },
  { 
    icon: HardDriveUpload, 
    title: 'Manutenção Preventiva', 
    desc: 'Prevenção de falhas com limpeza e otimização periódica.',
    color: 'var(--color-accent-green)'
  },
  { 
    icon: Code2, 
    title: 'E-commerce', 
    desc: 'Lojas virtuais completas com checkout seguro e integração.',
    color: 'var(--color-accent-blue)'
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Serviços Completos de TI</h2>
          <p className="section-subtitle">
            Soluções de informática e tecnologia para manter seu negócio e equipamentos funcionando com excelência
          </p>
        </motion.div>
        <div className="services-grid">
          {services.map((service, i) => (
            <motion.article 
              key={service.title} 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="service-icon" style={{ color: service.color }}>
                <service.icon size={28} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
      <style>{`
        .section-title {
          font-size: var(--font-size-3xl);
          font-weight: var(--font-weight-semibold);
          text-align: center;
          margin: 0 0 var(--space-4);
          background: linear-gradient(135deg, #e5e7eb 0%, #9ca3af 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .section-subtitle {
          text-align: center;
          color: var(--color-text-secondary);
          font-size: var(--font-size-lg);
          max-width: 700px;
          margin: 0 auto var(--space-12);
          line-height: var(--line-height-normal);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: var(--space-6);
        }
        .service-card {
          background: rgba(17,24,39,0.5);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          transition: all var(--transition-normal);
          cursor: default;
        }
        .service-card:hover {
          border-color: rgba(255,255,255,0.12);
          box-shadow: 0 8px 24px -8px rgba(0,0,0,0.5);
          background: rgba(17,24,39,0.8);
        }
        .service-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .service-card h3 {
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-semibold);
          margin: 0 0 var(--space-3);
          color: var(--color-text-primary);
        }
        .service-card p {
          color: var(--color-text-secondary);
          margin: 0;
          line-height: var(--line-height-normal);
          font-size: var(--font-size-sm);
        }
        @media (max-width: 768px) {
          .services-grid {
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
