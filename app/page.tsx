import { PremiumSection } from "@/components/premium-section";
import { Sidebar } from "@/components/sidebar";

const sections = [
  {
    title: "Clube Premium",
    description: "Acesso antecipado a conteúdos exclusivos e mentorias em grupo.",
    cta: "Quero participar"
  },
  {
    title: "Biblioteca VIP",
    description: "Coleção de aulas e templates para acelerar os seus resultados.",
    cta: "Explorar biblioteca"
  },
  {
    title: "Comunidade Fechada",
    description: "Networking com membros premium e encontros mensais ao vivo.",
    cta: "Entrar na comunidade"
  }
];

export default function Home() {
  return (
    <main className="layout">
      <Sidebar />
      <div className="content">
        <header>
          <p className="badge">Plano Premium</p>
          <h1>Área de Membros</h1>
          <p>Gerencie sua assinatura e acompanhe os benefícios ativos.</p>
        </header>

        <div className="sections-grid">
          {sections.map((section) => (
            <PremiumSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </main>
  );
}
