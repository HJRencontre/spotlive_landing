import { Avatar } from "@nextui-org/avatar";
import Avatars from "@/components/trending-now/avatars";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";

export default function TrendingNow() {
  return (
    <>
      <h1>À la une</h1>
        <div className="flex">
          <div className="flex items-start">
            <div>
              <Avatars />
              <h5>Théâtre du Rond-Point</h5>
              <p className="text-justify">
                Le Théâtre du Rond-Point, à Paris, est un haut lieu de la création contemporaine, connu pour sa programmation audacieuse. Il est dédié aux auteurs vivants et propose une trentaine de spectacles par an.
                En plus de ses spectacles innovants, il abrite un restaurant, offrant une expérience culturelle et gastronomique complète.
              </p>
            </div>
            <p>
              5€
            </p>
          </div>
          <Image
            width={300}
            alt="NextUI hero Image"
            src="theaters.png" />
        </div>
    </>
  );
}