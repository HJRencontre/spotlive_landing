import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/react";

import Avatars from "./avatars";

const description =
  "Le Théâtre du Rond-Point, à Paris, est un haut lieu de la création contemporaine, connu pour sa programmation audacieuse. Il est dédié aux auteurs vivants et propose une trentaine de spectacles par an. En plus de ses spectacles innovants, il abrite un restaurant, offrant une expérience culturelle et gastronomique complète.";

export default function TrendingNow() {
  return (
    <>
      <h4 className="font-bold card-title lg:text-6xl text-3xl">À la une</h4>
      <div className="lg:grid grid-cols-2 gap-[170px]">
        <div>
          <div>
            <div className="flex justify-between my-10">
              <div className="flex gap-3 items-center">
                <Avatars />
                <p>...</p>
              </div>
              <p className="text-2xl">5€</p>
            </div>
            <h5 className="text-4xl">Théâtre du Rond-Point</h5>
            <Spacer y={2} />
            <p className="text-justify">{description}</p>
          </div>
        </div>
        <Image alt="NextUI hero Image" src="theaters.png" />
      </div>
    </>
  );
}
