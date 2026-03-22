const solutions = [
  {
    name: "Mentoria Ativo Criativo",
    subtitle: "Estruture sua comunicação e se posicione com clareza",
    description:
      "Mentoria estratégica para empresárias e líderes que querem transformar ideias em posicionamento sólido. Aqui você organiza seu pensamento, define sua mensagem e constrói uma comunicação que sustenta o seu negócio.",
    cta: "Aplicar para mentoria"
  },
  {
    name: "Diagnóstico de Comunicação",
    subtitle: "Descubra o que está travando seu posicionamento",
    description:
      "Um diagnóstico direto para identificar falhas na sua comunicação. Você sai com clareza, direcionamento e próximos passos para ajustar sua presença e gerar resultado.",
    cta: "Agendar diagnóstico"
  },
  {
    name: "Estratégia de Conteúdo",
    subtitle: "Transforme ideias em conteúdo com intenção",
    description:
      "Plano estruturado para parar de postar no improviso. Você entende o que falar, como falar e como transformar conteúdo em posicionamento e venda.",
    cta: "Acessar estratégia"
  }
];

export default function Home() {
  return (
    <main className="landing">
      <section className="fold fold-hero">
        <div className="hero-content">
          <p className="kicker">Ativação estratégica de comunicação</p>
          <h1>
            Ative seu ativo criativo
            <br />
            e transforme sua comunicação em posicionamento
          </h1>
          <p>
            Para empreendedoras, empresárias e líderes que sabem que têm ideias — mas ainda
            não transformaram isso em algo sólido.
          </p>
          <p className="highlight">👉 Seu DNA criativo é o seu maior ativo</p>
          <button>Ativar meu DNA criativo</button>
        </div>
        <div className="hero-visual" aria-label="Foto principal de Beatriz" />
      </section>

      <section className="fold fold-break">
        <h2>O problema não é falta de ideia</h2>
        <p>Você não precisa de mais conteúdo. Nem de mais estratégia solta.</p>
        <p className="highlight">Você precisa de direção.</p>
        <p>
          Porque ideias sem estrutura não constroem posicionamento. E comunicação sem clareza
          não sustenta negócio.
        </p>
      </section>

      <section className="fold fold-about">
        <div className="about-visual" aria-label="Foto lifestyle e autoridade" />
        <div>
          <h2>
            Eu não ensino criatividade
            <br />
            Eu estruturo como ela vira comunicação, posicionamento e negócio
          </h2>
          <p>Empreendo há mais de 10 anos.</p>
          <p>
            Já construí e atuei em negócios de diferentes mercados — da moda à beleza, da
            comunicação à tecnologia.
          </p>
          <p>
            Hoje, atuo como Diretora Executiva de Operações na DTL Group, empresa internacional
            com base em Portugal.
          </p>
          <p>
            Ao longo da minha trajetória, eu percebi um padrão: empreendedoras e líderes com
            potencial… mas com a comunicação desalinhada. Ideias boas… mal executadas.
          </p>
          <p className="highlight">
            👉 o problema nunca foi falta de criatividade<br />foi falta de direção criativa
          </p>
          <p>
            Hoje, atuo no desenvolvimento estratégico da comunicação de empresárias e líderes.
          </p>
          <p>
            Porque no final: não é sobre ter ideias, é sobre saber o que fazer com elas.
          </p>
        </div>
      </section>

      <section className="fold fold-concept">
        <h2>
          Criatividade não é dom
          <br />é ativo
        </h2>
        <p>Um ativo que, quando ativado:</p>
        <ul>
          <li>organiza seu pensamento</li>
          <li>direciona sua comunicação</li>
          <li>fortalece seu posicionamento</li>
        </ul>
        <p className="highlight">👉 Seu DNA criativo é o seu maior ativo</p>
      </section>

      <section className="fold fold-turn">
        <h2>Seu maior ativo não é o que você faz</h2>
        <p>é como você cria</p>
      </section>

      <section className="fold fold-ai">
        <div>
          <p className="kicker">IA Memorável (em breve)</p>
          <h2>Você não precisa de mais uma IA genérica. Você precisa de direção.</h2>
          <p>
            A IA Memorável é uma plataforma com agentes especializados que funcionam como
            extensão do meu cérebro estratégico.
          </p>
          <ul>
            <li>organiza ideias</li>
            <li>estrutura comunicação</li>
            <li>transforma pensamento em conteúdo</li>
          </ul>
          <p className="highlight">👉 com clareza e intenção</p>
          <button>Entrar para lista de espera</button>
        </div>
        <div className="ai-visual" aria-label="Elemento visual tecnológico de IA" />
      </section>

      <section className="fold fold-solutions">
        <h2>Soluções para transformar sua comunicação em posicionamento e resultado</h2>
        <p>
          Você não precisa de mais conteúdo.
          <br />
          Você precisa de estrutura, direção e execução.
        </p>
        <div className="cards-grid">
          {solutions.map((solution, index) => (
            <article className="solution-card" key={solution.name}>
              <div className="solution-image" aria-hidden="true">
                <span>{`0${index + 1}`}</span>
              </div>
              <h3>{solution.name}</h3>
              <h4>{solution.subtitle}</h4>
              <p>{solution.description}</p>
              <button>{solution.cta}</button>
            </article>
          ))}
        </div>
      </section>

      <section className="fold fold-community">
        <h2>The Creative Club</h2>
        <p>
          Um espaço para mulheres que decidiram parar de travar e começar a criar com
          consistência.
        </p>
        <ul>
          <li>troca estratégica</li>
          <li>direcionamento real</li>
          <li>ativação contínua</li>
        </ul>
        <button>Entrar para a comunidade</button>
      </section>

      <section className="fold fold-method">
        <h2>Método Ativo Criativo (em breve)</h2>
        <p>Sistema que estrutura:</p>
        <ul>
          <li>ativação</li>
          <li>clareza</li>
          <li>expressão</li>
          <li>materialização</li>
        </ul>
      </section>

      <section className="fold fold-conversion">
        <h2>Diga adeus ao bloqueio criativo</h2>
        <p>
          Pare de ter ideias que não saem do papel e comunicação que não representa seu nível.
        </p>
        <p className="highlight">
          👉 você não precisa criar mais<br />você precisa criar com direção
        </p>
      </section>

      <section className="fold fold-final-cta">
        <h2>
          Seu DNA criativo já existe
          <br />Só precisa ser ativado
        </h2>
        <button>Começar minha ativação</button>
      </section>

      <footer className="footer">
        <div>
          <h2>voila Beatriz</h2>
          <p>2026</p>
          <p>Comunicação não é sobre aparecer. É sobre ser lembrada.</p>
        </div>
        <div>
          <h3>Contato</h3>
          <p>E-mail</p>
          <p>WhatsApp</p>
          <p>Suporte</p>
        </div>
        <p className="signature">
          Eu transformo ideias soltas
          <br />
          em comunicação, posicionamento e estratégia.
        </p>
      </footer>
    </main>
  );
}
