const links = [
  "Visão geral",
  "Conteúdos",
  "Assinaturas",
  "Preferências",
  "Suporte"
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar__title">Voilà Beatriz</h1>
      <nav>
        <ul className="sidebar__list">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="sidebar__link">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
