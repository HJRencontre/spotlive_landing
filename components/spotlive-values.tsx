import { Image } from "@nextui-org/image";

const values =
  "Spotlive est fondé sur des valeurs essentielles d'accessibilité culturelle, permettant à chacun de plonger dans l'univers du spectacle vivant, quel que soit son niveau d'expérience. Nous valorisons l'engagement, créant des interactions dynamiques et immersives entre les spectateurs et les lieux culturels.";

export default function SpotliveValues() {
  return (
    <div className="lg:grid grid-cols-2 items-center">
      <Image alt="NextUI hero Image" src="mapsketch2.png" width={400} />
      <div>
        <h4 className="font-bold card-title text-lime text-2xl">
          Quelles sont nos valeurs ?
        </h4>
        <p className="text-justify">{values}</p>
      </div>
    </div>
  );
}
