// Content for the My Dictionary project page

import AppIcon from "./myCarousel-v1-square.webp";
import PurposeImage from "./myCarousel-purpose-square.svg";
import RoleImage from "./myCarousel-role-square.svg";
import ChallengesImage from "./myCarousel-challenges-square.svg";
import ResultsImage from "./myCarousel-results-square.svg";
// import Mockup02 from "../museuPicassoBcn/museuPicassoBcn_mockup_02.webp";

export const myCarousel = [
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
      ["@HeaderBlock", "My Carousel", { label: "h1" }],
      "A <b>WordPress carousel plugin</b> built with <b>SwiperJS</b> for creating <b>responsive, customizable sliders</b> with smooth animations and touch interactions.",
      "Status: <b>Under development</b>",
      [
        "@TextBlock",
        "Stack: <b>WordPress, PHP, JavaScript, SwiperJS</b>",
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
    "<b>User-friendly WordPress plugin</b> for <b>responsive carousels</b>",
    ["@ImageBlock", "", { src: PurposeImage, alt: "My Carousel purpose", className: "image--boxed image--size-small image--aligned-centered" }],
  ], { className: "grid-mobile-1-2 grid-desktop-1-3" }],
  ["@Container", [
    ["@ImageBlock", "", { src: RoleImage, alt: "My Carousel role", className: "image--boxed image--size-small image--aligned-centered" }],
    ["@HeaderBlock", "My role", { label: "h2" }],
    "<b>Lead Developer</b>: Architecture, <b>SwiperJS integration</b>, and performance optimization",
  ], { className: "grid-mobile-3-4 grid-desktop-4-6" }],
  ["@Container", [
    ["@HeaderBlock", "Challenges", { label: "h2" }],
    "<b>WordPress integration</b>, theme compatibility, and <b>intuitive UI design</b>",
    ["@ImageBlock", "", { src: ChallengesImage, alt: "My Carousel role", className: "image--boxed image--size-small image--aligned-centered" }],
  ], { className: "grid-mobile-1-2 grid-desktop-7-9" }],
  ["@Container", [
    ["@ImageBlock", "", { src: ResultsImage, alt: "My Carousel role", className: "image--boxed image--size-small image--aligned-centered" }],
    ["@HeaderBlock", "Results", { label: "h2" }],
    "<b>Smooth animations</b>, touch interactions, and <b>full customization</b>",
  ], { className: "grid-mobile-3-4 grid-desktop-10-12" }],
  ["@Container", ["<br>"], { className: "grid-mobile-1-4 grid-desktop-1-12" }],
];
