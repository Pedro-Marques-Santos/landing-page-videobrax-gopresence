import "./IntroCard.scss";

export function IntroCard() {
  return (
    <section className="intro-card" aria-label="Mensagem de destaque">
      <div className="intro-card__container">
        <div className="intro-card__content">
          <p className="intro-card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            laoreet risus neque, id convallis nisl euismod sed. Nullam neque
            nisl, blandit sed porta non.
          </p>
        </div>
      </div>
    </section>
  );
}
