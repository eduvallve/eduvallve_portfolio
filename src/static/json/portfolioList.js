import MuseuPicassoBcnContent from "./projectsContent/museuPicassoBcn/museuPicassoBcn";
import PicassoThumbnail from "../json/projectsContent/museuPicassoBcn/museuPicassoBcn_mockup_02.webp";
import MyDictionaryContent from "./projectsContent/myDictionary/myDictionary";
import MyDictionaryThumbnail from "../json/projectsContent/myDictionary/myDictionary-v2-square.png";
import MyCarouselContent from "./projectsContent/myCarousel/myCarousel";
import MyCarouselThumbnail from "../json/projectsContent/myCarousel/myCarousel-v2-square.png";
// import { caLesTaronges } from "./projectsContent/caLesTaronges/caLesTaronges";
import MagiPomesRif from "./projectsContent/magiPomesRif/magiPomesRif";
import MagiPomesRifThumbnail from "../json/projectsContent/magiPomesRif/magiPomesRif-mockup.png";
// import { tecnoSferanow } from "./projectsContent/tecnoSferanow/tecnoSferanow";
// import { jewelsBarcelona } from "./projectsContent/jewelsBarcelona/jewelsBarcelona";
// import { iceStick } from "./projectsContent/iceStick/iceStick";

export const projects = [
  {
    slug: "joaprenccatala",
    title: "Jo aprenc català",
    description: "Website & ecommerce for an online Catalan language school",
    thumbnail: "#",
    timestamp: 1476525600, // October 15, 2016
  },
  {
    slug: "my-carousel",
    title: "My Carousel",
    description: "Wordpress plugin for image galleries and carousels",
    thumbnail: MyCarouselThumbnail,
    timestamp: 1759320000, // February 29, 2024
    content: MyCarouselContent,
    tags: ['wordpress', 'plugin', 'php', 'javascript'],
  },
  {
    slug: "icestick",
    title: "Icestick",
    description: "Global branding and website for an ice cream company",
    thumbnail: "#",
    timestamp: 1759320000, // February 29, 2024
  },
  {
    slug: "museu-picasso-bcn",
    title: "Museu Picasso de Barcelona",
    description: "Fictional redesign of the website for the Picasso Museum in Barcelona",
    thumbnail: PicassoThumbnail,
    timestamp: 1525946400, // May 10, 2018
    content: MuseuPicassoBcnContent,
    tags: ['design', 'figma', 'uiux', 'javascript'],
  },
  {
    slug: "my-dictionary",
    title: "My Dictionary",
    description: "Wordpress plugin for multilingual sites",
    thumbnail: MyDictionaryThumbnail,
    timestamp: 1525946400, // May 10, 2018
    content: MyDictionaryContent,
    tags: ['wordpress', 'plugin', 'php', 'javascript'],
  },
  {
    slug: "ca-les-taronges",
    title: "Ca les taronges",
    description: "Website and video creation for a cake shop",
    thumbnail: "#",
    timestamp: 1525946400, // May 10, 2018
  },
  {
    slug: "magi-pomes-rif",
    title: "Magí Pomés al Rif",
    description: "Website about a postal card exhibition",
    thumbnail: MagiPomesRifThumbnail,
    timestamp: 1525946400, // May 10, 2018
    content: MagiPomesRif,
    tags: ['design', 'branding', 'react'],
  },
  {
    slug: "tecnosferanow",
    title: "Tecnosferanow",
    description: "To be defined",
    thumbnail: "#",
    timestamp: 1525946400, // May 10, 2018
    tags: ['design', 'branding'],
  },
  {
    slug: "blender-behance",
    title: "Blender experiments in Behance",
    description:
      "Collection of my experiments with Blender for 3D modeling and animation",
    thumbnail: "#",
    timestamp: 1525946400, // May 10, 2018
    tags: ['3d', 'blender', 'animation'],
  },
  {
    slug: "vimeo",
    title: "Vimeo",
    description: "Collection of my video projects on Vimeo",
    thumbnail: "#",
    timestamp: 1525946400, // May 10, 2018
  },
  {
    slug: "jewelsbarcelona",
    title: "JewelsBarcelona",
    description: "Website for an online jewelry store",
    thumbnail: "#",
    timestamp: 1525946400, // May 10, 2018
  },
];
