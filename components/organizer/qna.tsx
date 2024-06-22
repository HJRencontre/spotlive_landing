import { Accordion, AccordionItem } from "@nextui-org/react";
import { title } from "../primitives";
export default function QnA() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
      <h1 className={title()}>F.A.Q</h1>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={<span className="text-white">Accordion 1</span>}
          className="text-white"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={<span className="text-white">Accordion 1</span>}
          className="text-white"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title={<span className="text-white">Accordion 1</span>}
          className="text-white"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </>
  );
}
