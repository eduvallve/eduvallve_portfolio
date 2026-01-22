// Content for the Museu Picasso Barcelona project page

import ProjectLogo from "./Logo-Picasso-black.svg";
import Mockup02 from "./museuPicassoBcn_mockup_02.webp";

export const museuPicassoBcn = [
  // Format: ['@ComponentName', 'Content', { props }]
  [
    "@Container",
    [
      [
        "@LinkBlock",
        "Back to portfolio",
        { className: "navigation navigation--back", path: "/portfolio/" },
      ],
    ],
    { className: "grid-mobile-1-4 grid-desktop-1-12 margin-top--24" },
  ],
  [
    "@Container",
    [
      ["@HeaderBlock", "Museu Picasso de Barcelona", { label: "h1" }],
      "<b>Fictional redesign</b> of the website for the Picasso Museum in Barcelona",
      "Full website redesign based on UI/UX techniques learnt during the Master's Degree in Interaction Design and User Experience (UX), UOC.",
      [
        "@TextBlock",
        "Stack: FIGMA",
        { className: "text-highlighted text-small" },
      ],
      [
        "@TextBlock",
        "Academical project developed in 2022.",
        { className: "text-highlighted text-small" },
      ],
    ],
    { className: "grid-mobile-1-3 grid-desktop-1-9 align-vertical-center" },
  ],
  [
    "@Container",
    [
      [
        "@ImageBlock",
        "",
        {
          src: ProjectLogo,
          alt: "Image 1",
          className: "project__main-image project__main-image--bg-blue project__main-image-logo",
        },
      ],
    ],
    { className: "grid-mobile-4-4 grid-desktop-10-12" },
  ],
  ["@Container", ["<br>"], { className: "grid-mobile-1-4 grid-desktop-1-12" }],
  [
      "@ImageBlock",
      "",
      {
        src: Mockup02,
        alt: "Image 1",
        className: "project__image grid-mobile-1-4 grid-desktop-1-6",
      },
  ],
  [
    "@Container",
    [
      ["@HeaderBlock", "UI design based on UX techniques", { label: "h2" }],
      "UX phases and techniques applied into the project to reach the desired result:",
      "1. Research phase: <b>Heuristic Evaluation</b>, <b>User Personas</b>, User Journeys and Tree Testing.",
      "2. Protoyping phase: Card sorting, Sketching, Low-fidelity wireframes, High-fidelity mockups and Interactive prototype.",
      "3. Evaluation phase: Usability testing, Cognitive walkthrough, Euristic evaluation and Feedback analysis.",
      ["@Button", "View prototype in Figma", { type: "link", url: "https://www.figma.com/proto/OayvxxOwv4kcHV7nRbENXw/TFM-Edu-Vallv%C3%A9---Prototip-redisseny-web-Museu-Picasso-BCN---Amb-colors-i-imatges?content-scaling=fixed&kind=proto&node-id=14-359&page-id=14%3A268&scaling=min-zoom&starting-point-node-id=14%3A359", className: "button__secondary button--fit-content" } ],
    ],
    { className: "grid-mobile-1-4 grid-desktop-7-12 align-vertical-center" },
  ],
  ["@Container", ["<br>"], { className: "grid-mobile-1-4 grid-desktop-1-12" }],
];
