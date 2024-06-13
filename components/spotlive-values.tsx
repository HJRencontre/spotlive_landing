import { Image } from "@nextui-org/image";

export default function SpotliveValues() {
  return (
    <div className="lg:grid grid-cols-2 items-center gap-[170px]">
      <Image
        alt="NextUI hero Image"
        src="mapsketch2.png"
        className="lg:w-196"
      />
      <div>
        <h4 className="font-bold card-title text-lime text-2xl">
          Quelles sont nos valeurs ?
        </h4>
        <p className="text-justify">
          Spotlive est fondé sur des valeurs essentielles d'accessibilité
          culturelle, permettant à chacun de plonger dans l'univers du spectacle
          vivant, quel que soit son niveau d'expérience. Nous valorisons
          l'engagement, créant des interactions dynamiques et immersives entre
          les spectateurs et les lieux culturels.
        </p>
      </div>
    </div>
  );
}
