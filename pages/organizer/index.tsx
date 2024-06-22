import QnA from "@/components/organizer/qna";
import TitleOrganizer from "@/components/organizer/title";
import DefaultLayout from "@/layouts/default";
import { Growth } from "@/public/growth";
import { InlineWidget } from "react-calendly";

export default function OrganiserPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center min-h-screen gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center">
          <TitleOrganizer />
        </div>
        <div className="lg:grid grid-cols-2 items-center">
          <Growth className="w-96" />
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
          <Growth className="w-96" />
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
          <Growth className="w-96" />
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
        <div className="w-full h-full">
          <h2 className="font-bold card-title text-2xl text-center">
            Rencontrons-nous
          </h2>
          <InlineWidget url="https://calendly.com/h-jrencontre/30min" />
        </div>
        <QnA />
      </section>
    </DefaultLayout>
  );
}
