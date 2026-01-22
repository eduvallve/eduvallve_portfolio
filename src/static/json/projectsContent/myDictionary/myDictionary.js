// Content for the My Dictionary project page

import AppIcon from "./myDictionary-v1-square.webp";
// import Mockup02 from "../museuPicassoBcn/museuPicassoBcn_mockup_02.webp";

export const myDictionary = [
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
    { className: "grid-mobile-1-3 grid-desktop-1-9 align-vertical-center" },
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
    { className: "grid-mobile-4-4 grid-desktop-10-12" },
  ],
  ["@Container", ["<br>"], { className: "grid-mobile-1-4 grid-desktop-1-12" }],
  ["@Container", ["<br>"], { className: "grid-mobile-1-4 grid-desktop-1-12" }],
];
