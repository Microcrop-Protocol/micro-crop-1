export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What is MicroCrop and who is it for?",
    answer:
      "MicroCrop is a B2B infrastructure platform that enables insurance companies, agricultural cooperatives, agri-lenders, MFIs, and NGOs worldwide to offer parametric crop and livestock insurance to farmers and pastoralists. We provide the technology stack — you bring the distribution. Our flagship markets are in Africa, with the platform designed to scale to any market exposed to climate risk.",
  },
  {
    question: "How does the partner onboarding process work?",
    answer:
      "Our team sets up your organization on the platform, provisions your dedicated coverage infrastructure, and configures your white-label environment. From there, you can add staff accounts, import farmers (individually or in bulk with KYC), and define your coverage parameters. Most partners are operational within weeks.",
  },
  {
    question: "How are payouts triggered?",
    answer:
      "Payouts are index-triggered, not based on individual claims. For crops, triggers track drought and flood conditions. For livestock, they track forage and vegetation health. When an index crosses a predefined threshold, payouts process automatically — no field visits, no manual claims to file.",
  },
  {
    question: "What does the pricing model look like?",
    answer:
      "MicroCrop charges a simple platform fee on premiums, collected automatically. Partners set their own premium pricing for farmers. There are no hidden fees — the revenue model is fully transparent and independently verifiable. Contact us for details on pricing.",
  },
  {
    question: "Can we integrate MicroCrop with our existing systems?",
    answer:
      "Yes. MicroCrop is API-first with a RESTful API for custom frontend integrations. You can build on top of our infrastructure using your own interfaces, or use our ready-made dashboards. We also support CSV exports for compliance and reporting needs.",
  },
];
