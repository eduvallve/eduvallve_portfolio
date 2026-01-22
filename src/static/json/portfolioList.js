import { museuPicassoBcn } from "./projectsContent/museuPicassoBcn/museuPicassoBcn";
import PicassoThumbnail from "../json/projectsContent/museuPicassoBcn/museuPicassoBcn_mockup_02.webp";
import { myDictionary } from "./projectsContent/myDictionary/myDictionary";
import MyDictionaryThumbnail from "../json/projectsContent/myDictionary/myDictionary-v1-rectangle.webp";
import { myCarousel } from "./projectsContent/myCarousel/myCarousel";
import MyCarouselThumbnail from "../json/projectsContent/myCarousel/myCarousel-v1-rectangle.webp";
// import { caLesTaronges } from "./projectsContent/caLesTaronges/caLesTaronges";
// import { magiPomesAlRif } from "./projectsContent/magiPomesAlRif/magiPomesAlRif";
// import { tecnoSferanow } from "./projectsContent/tecnoSferanow/tecnoSferanow";
// import { jewelsBarcelona } from "./projectsContent/jewelsBarcelona/jewelsBarcelona";
// import { iceStick } from "./projectsContent/iceStick/iceStick";

export const projects = [
  {
    slug: 1,
    title: "Jo aprenc català",
    description: "Website & ecommerce for an online Catalan language school",
    thumbnail: "#",
    timestamp: 1476525600,
  },
  {
    slug: 2,
    title: "Museu Picasso de Barcelona",
    description: "Fictional redesign of the website for the Picasso Museum in Barcelona",
    thumbnail: PicassoThumbnail,
    timestamp: 1525946400,
    content: museuPicassoBcn,
    tags: ['design', 'figma', 'uiux', 'javascript'],
  },
  {
    slug: 3,
    title: "My Dictionary",
    description: "Wordpress plugin for multilingual sites",
    thumbnail: MyDictionaryThumbnail,
    timestamp: 1525946400,
    content: myDictionary,
    tags: ['wordpress', 'plugin', 'php', 'javascript'],
  },
  {
    slug: 4,
    title: "My Carousel",
    description: "Wordpress plugin for image galleries and carousels",
    thumbnail: MyCarouselThumbnail,
    timestamp: 1759320000,
    content: myCarousel,
    tags: ['wordpress', 'plugin', 'php', 'javascript'],
  },
  {
    slug: 5,
    title: "Ca les taronges",
    description: "Website and video creation for a cake shop",
    thumbnail: "#",
    timestamp: 1525946400,
  },
  {
    slug: 6,
    title: "Magí Pomés al Rif",
    description: "Website about a postal card exhibition",
    thumbnail: "#",
    timestamp: 1525946400,
    tags: ['design', 'branding', 'react'],
  },
  {
    slug: 7,
    title: "Tecnosferanow",
    description: "To be defined",
    thumbnail: "#",
    timestamp: 1525946400,
    tags: ['design', 'branding'],
  },
  {
    slug: 8,
    title: "Blender experiments in Behance",
    description:
      "Collection of my experiments with Blender for 3D modeling and animation",
    thumbnail: "#",
    timestamp: 1525946400,
    tags: ['3d', 'blender', 'animation'],
  },
  {
    slug: 9,
    title: "Vimeo",
    description: "Collection of my video projects on Vimeo",
    thumbnail: "#",
    timestamp: 1525946400,
  },
  {
    slug: 10,
    title: "JewelsBarcelona",
    description: "Website for an online jewelry store",
    thumbnail: "#",
    timestamp: 1525946400,
  },
  {
    slug: "icestick",
    title: "Icestick",
    description: "Global branding and website for an ice cream company",
    thumbnail: "#",
    timestamp: 1759320000,
  },
];
