import { Image } from "@nextui-org/react";
import { subtitle, title } from "../primitives";

export default function TitleOrganizer() {
  return (
    <div className="lg:grid grid-cols-2 items-center h-full">
      <div>
        <h1 className={title()}>Booster votre activité avec Spotlive</h1>
        <p className={subtitle()}>
          Organisez des événements en ligne et vendez des billets en quelques
          clics.
        </p>
      </div>
      <Image
        alt="Album"
        className="max-h-[300px] lg:h-auto"
        src="appphone.png"
      />
    </div>
  );
}
