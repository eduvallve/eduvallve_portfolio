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
      "A fast, user-friendly WordPress plugin for effortless multilingual content management. Focused on performance and usability. Project in continuous development.",
      [
        "@TextBlock",
        "Stack: WordPress, PHP, JavaScript",
        { className: "text-highlighted text-small" },
      ],
      [
        "@TextBlock",
        "Developed in <b>2025</b>",
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
  ["@Container", [
    ["@HeaderBlock", "Purpose", { label: "h2" }],
    "<b>User-friendly WordPress plugin</b> for <b>multilingual content</b>",
    ["@ImageBlock", "", { src: AppIcon, alt: "My Carousel purpose", className: "image--boxed image--size-small image--aligned-centered" }],
  ], { className: "grid-mobile-1-2 grid-desktop-1-3" }],
  ["@Container", [
    ["@ImageBlock", "", { src: AppIcon, alt: "My Carousel role", className: "image--boxed image--size-small image--aligned-centered" }],
    ["@HeaderBlock", "My role", { label: "h2" }],
    "<b>Lead Developer</b>: Architecture, <b>database</b> design, performance optimization and WordPress <b>hooks</b> integration",
  ], { className: "grid-mobile-3-4 grid-desktop-4-6" }],
  ["@Container", [
    ["@HeaderBlock", "Challenges", { label: "h2" }],
    "<b>Wordpress hooks</b>, database structure, <b>SEO</b> optimization",
    ["@ImageBlock", "", { src: AppIcon, alt: "My Carousel role", className: "image--boxed image--size-small image--aligned-centered" }],
  ], { className: "grid-mobile-1-2 grid-desktop-7-9" }],
  ["@Container", [
    ["@ImageBlock", "", { src: AppIcon, alt: "My Carousel role", className: "image--boxed image--size-small image--aligned-centered" }],
    ["@HeaderBlock", "Results", { label: "h2" }],
    "Project in development. Updates will be provided soon.",
  ], { className: "grid-mobile-3-4 grid-desktop-10-12" }],
  ["@Container", ["<br>"], { className: "grid-mobile-1-4 grid-desktop-1-12" }],
  [
    "@Carousel",
    [
      [
        "@Slide",
        [
          ["@HeaderBlock", "Slide 1 — Intro", { label: "h3" }],
          ["@ImageBlock", "", { src: "https://picsum.photos/900/600?random=2", alt: "Slide 1 mockup", className: "image--boxed image--size-medium image--aligned-centered" }],
          ["@TextBlock", "A short intro slide demonstrating layout and basic content.", { className: "text-small" }]
        ],
        { className: "carousel__slide carousel__slide--1" }
      ],
      [
        "@Slide",
        [
          ["@HeaderBlock", "Slide 2 — Features", { label: "h3" }],
          ["@ImageBlock", "", { src: "https://picsum.photos/900/600?random=2", alt: "Slide 2 mockup", className: "image--boxed image--size-medium image--aligned-centered" }],
          ["@TextBlock", "Highlights: responsive behavior, touch support, and smooth transitions.", { className: "text-small" }]
        ],
        { className: "carousel__slide carousel__slide--2" }
      ],
      [
        "@Slide",
        [
          ["@HeaderBlock", "Slide 3 — Call to Action", { label: "h3" }],
          ["@ImageBlock", "", { src: "https://picsum.photos/900/600?random=2", alt: "Slide 3 mockup", className: "image--boxed image--size-medium image--aligned-centered" }],
          ["@TextBlock", "Final slide with a mock CTA and brief summary.", { className: "text-small" }]
        ],
        { className: "carousel__slide carousel__slide--3" }
      ]
    ],
    { className: "grid-mobile-1-4 grid-desktop-1-6" }
  ],
  ["@Container", ["<br>"], { className: "grid-mobile-1-4 grid-desktop-1-12" }],
];
