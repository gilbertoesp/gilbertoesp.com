export interface Resource {
  id: string;
  title: string;
  source: string;
  note: string;
  link: string;
}

export const material: { label: string; items: Resource[] }[] = [
  {
    label: "Papers",
    items: [
      // {
      //   id: "attention-is-all-you-need",
      //   title: "Attention Is All You Need",
      //   source: "Vaswani et al. · 2017",
      //   note: "The Transformer paper.",
      //   link: "https://arxiv.org/abs/1706.03762",
      // },
    ],
  },
  {
    label: "Books",
    items: [
      {
        id: "thinking-fast-slow",
        title: "Thinking, Fast and Slow",
        source: "Daniel Kahneman · Book",
        note: "The best mental model for understanding why data needs context and why intuition often misleads us.",
        link: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
      },
      {
        id: "visual-display",
        title: "The Visual Display of Quantitative Information",
        source: "Edward Tufte · Book",
        note: "Foundational for anyone who wants to communicate data clearly. Charts are arguments — make them honest ones.",
        link: "https://www.amazon.com/Visual-Display-Quantitative-Information/dp/0961392142",
      },
      {
        id: "shape-up",
        title: "Shape Up",
        source: "Ryan Singer / Basecamp · Free online",
        note: "A practical framework for scoping and shipping work without infinite backlogs. Applies beyond software teams.",
        link: "https://basecamp.com/shapeup",
      },
      {
        id: "everybody-lies",
        title: "Everybody Lies",
        source: "Seth Stephens-Davidowitz · Book",
        note: "What search data reveals that surveys never could. A reminder that the question you ask determines the answer you get.",
        link: "https://www.amazon.com/Everybody-Lies-Surprising-Connect-Search/dp/0062390856",
      },
    ],
  },
  {
    label: "Other sources",
    items: [
      {
        id: "beauty-of-data-viz",
        title: "The Beauty of Data Visualization",
        source: "David McCandless · TED · 18 min",
        note: "A compelling case that good visualization is not decoration — it's a form of knowledge compression.",
        link: "https://www.ted.com/talks/david_mccandless_the_beauty_of_data_visualization",
      },
      {
        id: "misleading-graph",
        title: "How to Spot a Misleading Graph",
        source: "Lea Gaslowitz · TED-Ed · 5 min",
        note: "Short and essential. The ability to read charts critically is a core business literacy skill most people never develop.",
        link: "https://ed.ted.com/lessons/how-to-spot-a-misleading-graph-lea-gaslowitz",
      },
      {
        id: "humane-representation",
        title: "The Humane Representation of Thought",
        source: "Bret Victor · 54 min",
        note: "A challenging and inspiring talk about how the tools we use shape what thoughts we can have. Relevant to anyone building with data.",
        link: "https://vimeo.com/115154289",
      },
    ],
  },
];
