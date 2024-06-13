import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

export default function Recommandations() {
  const recommandations = [
    {
      username: "Maevan.J",
      date: "8 juin 2024",
      avatar: "https://nextui.org/avatars/avatar-1.png",
      content:
        "Je suis allé voir une pièce de théâtre aux Plateaux Sauvages par curiosité, et j’ai été bluffé ! Les acteurs ont livré une performance incroyable, et l’interaction avec le public a vraiment ajouté une dimension unique à l’expérience !",
    },
    {
      username: "Trisha.B",
      date: "14 mars 2024",
      avatar: "https://nextui.org/avatars/avatar-2.png",
      content:
        "Mes amis et moi avons décidé de sortir de notre routine habituelle et d’aller voir une pièce de théâtre aux Plateaux Sauvages. La pièce était captivante, avec des acteurs qui nous ont fait passer du rire aux larmes. Après le spectacle, nous avons prolongé la soirée au bar sur place. ",
    },
    {
      username: "Hoang.Q",
      date: "12 juin 2024",
      avatar: "https://nextui.org/avatars/avatar-2.png",
      content:
        "Avant la pièce mes amis et moi avons exploré la bibliothèque, une vraie mine d’or littéraire ! La pièce était exceptionnelle, avec des acteurs époustouflants. Après le spectacle, nous avons prolongé la soirée au bar, où l’ambiance était super conviviale. Une soirée parfaite du début à la fin !",
    },
    {
      username: "Antoine.G",
      date: "4 mai 2024",
      avatar: "https://nextui.org/avatars/avatar-2.png",
      content:
        "J'utilise Spotlive depuis quelques semaines maintenant. L'application est simple à utiliser et m'a permis de découvrir des événements auxquels je n'aurais jamais pensé participer auparavant. Je recommande !",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:gap-8">
      {recommandations.map((recommandation, index) => (
        <Card key={index} className="w-[300px] h-72">
          <CardHeader></CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p className="text-justify">{recommandation.content}</p>
          </CardBody>
          <CardFooter className="gap-3">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src={recommandation.avatar}
            />
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  {recommandation.username}
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  {recommandation.date}
                </h5>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
