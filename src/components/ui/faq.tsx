import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import Container from "./container";

export const FAQ = ({ children, className }) => {
  return (
    <Container effect="none" className={cn("flex flex-row h-96", className)}>
      <div className="flex-1 h-96">
        <img src="/family.jpg" alt="" className="h-full" />
      </div>
      {children}
    </Container>
  );
};

export function SingleFaq({
  title,
  description,
}: {
  title?: string;
  description?: void;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col justify-center items-center gap-2"
    >
      <AccordionItem value="item-1" className="w-full ">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent className="h-44 overflow-y-auto pretty-scroll">
          <div className="flex flex-col gap-2 my-2">{description}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
