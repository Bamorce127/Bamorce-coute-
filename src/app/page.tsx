const principles = [
  { title: "Vous pouvez parler librement", text: "Racontez ce que vous traversez, à votre rythme et selon le niveau de confidentialité qui vous convient." },
  { title: "Une communauté encadrée", text: "Les témoignages destinés au public sont soumis à une modération humaine avant publication." },
  { title: "Votre sécurité compte", text: "Bamorce Écoute aide à trouver des ressources, mais ne remplace pas les secours ni un professionnel de santé." }
];

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="/" aria-label="Bamorce Écoute, accueil"><span className="brand-mark">B</span><span>Bamorce <strong>Écoute</strong></span></a>
        <nav aria-label="Navigation principale"><a href="#comment-ca-marche">Comment ça marche</a><a href="#confidentialite">Confidentialité</a><a className="nav-cta" href="#commencer">Se confier</a></nav>
      </header>
      <section className="hero">
        <div className="eyebrow"><span className="status-dot" /> UN ESPACE POUR ÊTRE ENTENDU</div>
        <h1>Parlez.<br/><em>Nous vous écoutons.</em></h1>
        <p className="hero-copy">Vous n'avez pas à tout porter seul. Exprimez ce que vous traversez dans un espace pensé pour l'écoute, la dignité et le respect de votre vie privée.</p>
        <div className="hero-actions" id="commencer"><a className="button button-primary" href="#comment-ca-marche">Je veux me confier <span aria-hidden="true">→</span></a><a className="button button-secondary" href="#confidentialite">Comprendre la confidentialité</a></div>
        <p className="hero-note"><span aria-hidden="true">◇</span> Pas de jugement. Pas de publication automatique.</p>
        <div className="hero-art" aria-hidden="true"><div className="sun"></div><div className="arch arch-one"></div><div className="arch arch-two"></div><div className="art-caption">Un espace sûr<br/>pour déposer ses mots.</div></div>
      </section>
      <section className="principles" id="comment-ca-marche"><div className="section-kicker">NOTRE ENGAGEMENT</div><h2>Un peu d'espace.<br/><em>Beaucoup d'humanité.</em></h2><div className="principle-grid">{principles.map((item, index) => <article className="principle-card" key={item.title}><span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section className="privacy-strip" id="confidentialite"><div><div className="section-kicker">CONFIDENTIALITÉ AVANT TOUT</div><h2>Votre histoire vous appartient.</h2></div><p>Vous pourrez choisir entre un témoignage anonyme, un pseudonyme ou un dossier privé. Rien ne doit être publié sans validation humaine.</p></section>
      <footer><a className="brand" href="/"><span className="brand-mark">B</span><span>Bamorce <strong>Écoute</strong></span></a><p>Un espace d'écoute communautaire, pas un service d'urgence.</p><span>© {new Date().getFullYear()} Bamorce Écoute</span></footer>
    </main>
  );
}
