import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import { faqFakeData } from "@/constant/faqData";

const Faq = () => {
  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-2 md:px-4 xl:px-0">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {faqFakeData?.map(({ title, desc }) => (
              <AccordionItem
                value={title}
                key={title}
                className="shadow-sm bg-white  mb-2.5 last:mb-0 px-5 rounded-[7px] border-0 border-amber-50"
              >
                <AccordionTrigger className="text-base sm:text-md  font-semibold flex items-center ">
                 { title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-start tracking-wide text-sm text-gray-600  space-y-1 leading-snug sm:leading-relaxed">
                    {desc}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
      </div>
    </header>
  );
};

export default Faq;