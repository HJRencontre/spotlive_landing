import { Image, Spacer } from "@nextui-org/react";

const features =
  "Spotlive propose une gamme de fonctionnalités conçues pour enrichir l'expérience culturelle de ses utilisateurs, grâce à une une personnalisation basée sur les thématiques et les programmes correspondant à leurs intérêts.";
const discoverPlaces =
  "Partez à la (re)découverte des théâtres à proximité de vous grâce à notre carte interactive ! Vous pourrez localiser les lieux et acheter des billets pour des spectacles dans votre région en toute simplicité.";
const ticketing =
  "Découvrez une sélection de tickets pour le cinéma, le théâtre et les musées à proximité. Profitez d'une expérience culturelle riche endécouvrant les trésors artistiques de votre région. Achetez vos tickets dès maintenant et plongez dans l'univers captivant de la culture locale.";
const keepInTouch =
  "Un bon plan ? Un nouvel événement ? De nouveaux lieux ? De nouvelles pièces de théâtre ? Activez vos notifications pour ne rien rater et être les premiers informés.";

export default function Features() {
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center text-center mx-auto my-auto pb-8">
        <h4 className="text-5xl font-bold">Fonctionnalités</h4>
        <p className="text-2xl">{features}</p>
      </div>
      <div className="lg:grid grid-cols-2 items-center justify-center">
        <Image
          alt="Album"
          className="max-h-[300px] lg:h-auto"
          src="mapphone.png"
        />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold card-title text-lime text-2xl">
            (Re)découvrir les lieux
          </h2>
          <p className="text-justify">{discoverPlaces}</p>
        </div>
      </div>
      <Spacer y={2} />
      <div className="flex flex-col-reverse lg:grid grid-cols-2 items-center ">
        <div className="flex flex-col justify-center">
          <h2 className="font-bold card-title text-lime text-2xl">
            Billetterie
          </h2>
          <p className="text-justify">{ticketing}</p>
        </div>
        <Image
          alt="Album"
          className="max-h-[300px] lg:h-auto"
          src="representationapp.png"
        />
      </div>
      <div className="lg:grid grid-cols-2 items-center">
        <Image
          alt="Album"
          className="max-h-[300px] lg:h-auto"
          src="appphone.png"
        />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold card-title text-lime text-2xl">
            Restez informés
          </h2>
          <p className="text-justify">{keepInTouch}</p>
        </div>
      </div>
    </>
  );
}
