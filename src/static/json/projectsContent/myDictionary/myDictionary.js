// Content for the My Dictionary project page

import AppIcon from "./myDictionary-v1-square.webp";
// import Mockup02 from "../museuPicassoBcn/museuPicassoBcn_mockup_02.webp";

export const myDictionary = [
  // Format: ['@ComponentName', 'Content', { props }]
  ["@Container", [""], { className: "grid-desktop-1-12" }],
  [
    "@Container",
    [
      [
        "@LinkBlock",
        "Back to portfolio",
        { className: "navigation navigation--back", path: "/portfolio/" },
      ],
    ],
    { className: "grid-desktop-1-12" },
  ],
  [
    "@Container",
    [
      ["@HeaderBlock", "My Dictionary", { label: "h1" }],
      "This WordPress translation plugin enables website owners to easily create and manage multilingual content without complexity. Built with performance in mind. Its intuitive interface makes it suitable for beginners, and advanced users.",
      "This feature is still under development. Updates will be provided soon.",
      [
        "@TextBlock",
        "Stack: WordPress, PHP, JavaScript",
        { className: "text-highlighted text-small" },
      ],
      [
        "@TextBlock",
        "Developed in 2025.",
        { className: "text-highlighted text-small" },
      ],
    ],
    { className: "grid-desktop-1-9 align-vertical-center" },
  ],
  [
    "@Container",
    [
      [
        "@ImageBlock",
        "",
        {
          src: AppIcon,
          alt: "Image 1",
          className: "project__main-image project__main-image-logo",
        },
      ],
    ],
    { className: "grid-desktop-10-12" },
  ],
  ["@Container", ["<br>"], { className: "grid-desktop-1-12" }],
//   [
//       "@ImageBlock",
//       "",
//       {
//         src: Mockup02,
//         alt: "Image 1",
//         className: "project__image grid-desktop-1-6",
//       },
//   ],
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
    { className: "grid-desktop-7-12 align-vertical-center" },
  ],
  ["@Container", ["<br>"], { className: "grid-desktop-1-12" }],
];
