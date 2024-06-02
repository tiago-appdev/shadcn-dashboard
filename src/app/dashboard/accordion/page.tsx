import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Page() {
  const items = [
    {
      id: 'item-1',
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      id: 'item-2',
      question: 'Is it styled?',
      answer:
        "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      id: 'item-3',
      question: 'Is it animated?',
      answer:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    {
      id: 'item-4',
      question: 'Is it RTL friendly?',
      answer: "Yes. It's fully RTL friendly by default.",
    },
  ];

  return (
    <div>
      <Accordion
        type='single'
        collapsible
        className='w-full'
      >
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
