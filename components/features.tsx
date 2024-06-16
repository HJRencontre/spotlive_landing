import { Spacer } from "@nextui-org/spacer";
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
      <div>
        <h4>Fonctionnalités</h4>
        <Spacer y={10} />
        <p>{features}</p>
      </div>
      <div className="lg:grid grid-cols-2 items-center">
        <figure>
          <img
            alt="Album"
            src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/emplacement.png"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold card-title text-lime text-2xl">
            (Re)découvrir les lieux
          </h2>
          <p className="text-justify">{discoverPlaces}</p>
        </div>
      </div>
      <div className="lg:grid grid-cols-2 items-center">
        <div className="card-body">
          <h2 className="font-bold card-title text-lime text-2xl">
            Billetterie
          </h2>
          <p className="text-justify">{ticketing}</p>
        </div>
        <figure>
          <img
            alt="Album"
            src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/billetterie.png"
          />
        </figure>
      </div>
      <div className="lg:grid grid-cols-2 items-center">
        <figure>
          <img
            alt="Album"
            src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/keepintouch.png"
          />
        </figure>
        <div className="card-body flex flex-col justify-center">
          <h2 className="font-bold card-title text-lime text-2xl">
            Restez informés
          </h2>
          <p className="text-justify">{keepInTouch}</p>
        </div>
      </div>
    </>
  );
}
