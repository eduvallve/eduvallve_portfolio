
import AppIcon from "./myCarousel-v1-square.webp";
import HandDrawnArrowBrokenLine from "../../../images/arrow-handdrawn-broken-line.svg";

export const myCarousel = [
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
      "A <b>WordPress carousel plugin</b> built with <b>SwiperJS</b> for creating <b>responsive, mobile-friendly, and customizable sliders</b> with <b>fast performance</b>, smooth animations, and <b>touch interactions</b>.",
      "Status: Under development",
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
  ["@Container", [""], { className: "grid-mobile-1-4 grid-desktop-1-12" }],
  ["@Container", [
    ["@HeaderBlock", "💡 Purpose", { label: "h2", className: "text-highlighted" }],
    "<b>User-friendly WordPress plugin</b> for <b>responsive carousels</b>",
  ], { className: "grid-mobile-1-2 grid-desktop-1-3" }],
  ["@Container", [
    ["@HeaderBlock", "👨🏻‍💻 My role: full-stack", { label: "h2", className: "text-highlighted" }],
    "Back-end architecture, Front-end development & QA testing</b>",
  ], { className: "grid-mobile-3-4 grid-desktop-4-6" }],
  ["@Container", [
    ["@HeaderBlock", "💪🏼 Challenges", { label: "h2", className: "text-highlighted" }],
    "<b>WordPress integration</b>, <b>theme compatibility</b>, and <b>intuitive UI design</b>",
  ], { className: "grid-mobile-1-2 grid-desktop-7-9" }],
  ["@Container", [
    ["@HeaderBlock", "☑️ Results", { label: "h2", className: "text-highlighted" }],
    "<b>Smooth animations</b>, <b>touch interactions</b>, and <b>full customization</b>",
  ], { className: "grid-mobile-3-4 grid-desktop-10-12" }],
  ["@Container", [
    "",
    ["@ImageBlock", "", { src: HandDrawnArrowBrokenLine, alt: "Pointing arrow to demo carousel", label: "This is a live demo of one SwiperJS carousel in action.", className: "image__svg--show-alt hidden--desktop text-small", style: { width: "60px", height: "auto", fill: "#83c2c1", color: "#83c2c1", "--rotation-angle": "155deg" } }],
  ], { className: "grid-mobile-1-4 grid-desktop-1-12" }],
  ["@Carousel", [], { className: "grid-mobile-1-4 grid-desktop-1-6 carousel--default" }],
  ["@Container", [
    ["@HeaderBlock", "Functional result", { label: "h2" }],
    "The carousel plugin offers a seamless way to showcase images and content with customizable options for transitions, navigation, and responsiveness:",
    "<ol><li><b>Smooth slide transitions</b> and <b>touch/swipe support for mobile devices</b>.</li><li><b>Customizable navigation</b> and <b>pagination</b>.</li><li><b>Responsive design adapting to various screen sizes</b>.</li><li><b>Easy integration with WordPress via shortcode</b>.</li></ol>",
    ["@ImageBlock", "", { src: HandDrawnArrowBrokenLine, alt: "Pointing arrow to demo carousel", label: "This is a live demo of one SwiperJS carousel in action.", className: "image__svg--show-alt hidden--mobile text-small", style: { width: "60px", height: "auto", fill: "#83c2c1", color: "#83c2c1", "--rotation-angle": "-45deg" } }],
  ], { className: "grid-mobile-1-4 grid-desktop-7-12 align-vertical-center" }],
  ["@Container", [""], { className: "grid-mobile-1-4 grid-desktop-1-12" }],
  ["@Container", [
    ["@HeaderBlock", "Transparent back-office", { label: "h2" }],
    "The plugin includes a user-friendly back-office interface for easy management of carousel settings and content:",
    "<ol><li><b>Intuitive UI</b> for creating and managing carousels.</li><li>Minimal field requirements.</li><li>Full CSS customization.</li></ol>",
  ], { className: "grid-mobile-1-4 grid-desktop-1-6 align-vertical-center" }],
  [
    "@ImageBlock",
    "",
    {
      src: "https://picsum.photos/900/600?random=2",
      alt: "Image 1",
      className: "grid-mobile-1-4 grid-desktop-7-12",
    },
  ],
  ["@Container", [""], { className: "grid-mobile-1-4 grid-desktop-1-12" }],
];
