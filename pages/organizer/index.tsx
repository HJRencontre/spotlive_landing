import QnA from "@/components/organizer/qna";
import TitleOrganizer from "@/components/organizer/title";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/react";
import { PopupButton } from "react-calendly";

export default function OrganiserPage() {
  const inovativePlatform = {
    title: "Une plateforme innovante",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  };

  const stayInformed = "Restez informés";
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center min-h-screen gap-4 py-8 md:py-10">
        <TitleOrganizer />
        <div className="lg:grid grid-cols-2 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="font-bold card-title text-2xl">
              {inovativePlatform.title}
            </h2>
            <p className="text-justify text-white">
              {inovativePlatform.description}
            </p>
          </div>
        </div>
        <div className="lg:grid grid-cols-2 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="font-bold card-title text-2xl">Restez informés</h2>
            <p className="text-justify text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              cupiditate temporibus unde, recusandae optio omnis asperiores
              saepe commodi perspiciatis iste adipisci amet facilis debitis.
              Enim, eveniet officia. Officiis, maiores enim.
            </p>
          </div>
        </div>
        <div className="lg:grid grid-cols-2 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="font-bold card-title text-2xl">Restez informés</h2>
            <p className="text-justify text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              cupiditate temporibus unde, recusandae optio omnis asperiores
              saepe commodi perspiciatis iste adipisci amet facilis debitis.
              Enim, eveniet officia. Officiis, maiores enim.
            </p>
          </div>
        </div>
        <Spacer y={20} />
        <div className="lg:grid grid-cols-2 gap-2 items-center justify-center">
          <h2 className="font-bold text-5xl text-center">Rencontrons-nous</h2>
          <div className="flex items-center justify-center">
            <Button
              radius="full"
              className="bg-lime items-center justify-center"
            >
              <PopupButton
                url="https://calendly.com/h-jrencontre/30min"
                rootElement={document.getElementById("root") ?? document.body}
                text="Prendre rendez vous avec nos équipes"
              />
            </Button>
          </div>
        </div>
        <Spacer y={20} />
        <QnA />
      </section>
    </DefaultLayout>
  );
}
