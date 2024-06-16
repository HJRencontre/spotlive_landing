import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function Recommandations() {
  const recommandations = [
    {
      username: "Maevan.J",
      date: "8 juin 2024",
      avatar: "https://nextui.org/avatars/avatar-1.png",
      stars: "/5stars.png",
      content:
        "Je suis allé voir une pièce de théâtre aux Plateaux Sauvages par curiosité, et j’ai été bluffé ! Les acteurs ont livré une performance incroyable, et l’interaction avec le public a vraiment ajouté une dimension unique à l’expérience !",
    },
    {
      username: "Trisha.B",
      date: "14 mars 2024",
      avatar: "https://nextui.org/avatars/avatar-2.png",
      stars: "/5stars.png",
      content:
        "Mes amis et moi avons décidé de sortir de notre routine habituelle et d’aller voir une pièce de théâtre aux Plateaux Sauvages. La pièce était captivante, avec des acteurs qui nous ont fait passer du rire aux larmes. Après le spectacle, nous avons prolongé la soirée au bar sur place. ",
    },
    {
      username: "Hoang.Q",
      date: "12 juin 2024",
      avatar: "https://nextui.org/avatars/avatar-2.png",
      stars: "/5stars.png",
      content:
        "Avant la pièce mes amis et moi avons exploré la bibliothèque, une vraie mine d’or littéraire ! La pièce était exceptionnelle, avec des acteurs époustouflants. Après le spectacle, nous avons prolongé la soirée au bar, où l’ambiance était super conviviale!",
    },
    {
      username: "Antoine.G",
      date: "4 mai 2024",
      avatar: "https://nextui.org/avatars/avatar-2.png",
      stars: "/5stars.png",
      content:
        "J'utilise Spotlive depuis quelques semaines maintenant. L'application est simple à utiliser et m'a permis de découvrir des événements auxquels je n'aurais jamais pensé participer auparavant. Je recommande !",
    },
  ];

  return (
    <>
      <div className="text-3xl text-pink flex justify-center items-center">
        <p>Qui de mieux que nos utilisateurs pour recommencer Spotlive ?</p>
      </div>
      <div className="py-8" />
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:gap-8">
        {recommandations.map((recommandation, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              alt="5 stars"
              className="h-6 mb-4"
              src={recommandation.stars}
            />
            <Card
              key={index}
              className="w-[300px] lg:h-96 bg-white py-5 sm:h-72"
            >
              <CardHeader />
              <CardBody className="px-3 py-0 text-small text-default-400">
                <p className="text-justify">{recommandation.content}</p>
              </CardBody>

              <CardFooter className="gap-3">
                <div className="flex flex-col items-center gap-5">
                  <Image
                    alt="Avatar"
                    className="w-16 h-16 rounded-full items-start"
                    src={recommandation.avatar}
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-blueMidnight">
                      {recommandation.username}
                    </h4>
                    <h5 className="text-small tracking-tight text-default-400">
                      {recommandation.date}
                    </h5>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
