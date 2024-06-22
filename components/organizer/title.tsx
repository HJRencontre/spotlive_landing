import { subtitle, title } from "../primitives";

export default function TitleOrganizer() {
  return (
    <div>
      <h1 className={title()}>Booster votre activité avec Spotlive</h1>
      <p className={subtitle()}>
        Organisez des événements en ligne et vendez des billets en quelques
        clics.
      </p>
    </div>
  );
}
