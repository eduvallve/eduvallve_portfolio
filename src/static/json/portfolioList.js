import MuseuPicassoBcnContent from "./projectsContent/museuPicassoBcn/museuPicassoBcn";
import PicassoThumbnail from "../json/projectsContent/museuPicassoBcn/museuPicassoBcn_mockup_02.webp";
import MyDictionaryContent from "./projectsContent/myDictionary/myDictionary";
import MyDictionaryThumbnail from "../json/projectsContent/myDictionary/myDictionary-v2-square.png";
import MyCarouselContent from "./projectsContent/myCarousel/myCarousel";
import MyCarouselThumbnail from "../json/projectsContent/myCarousel/myCarousel-v2-square.png";
import CaLesTaronges from "./projectsContent/calestaronges/calestaronges";
import CaLesTarongesThumbnail from "../json/projectsContent/calestaronges/calestaronges-thumbnail-v2.png";
import MagiPomesRif from "./projectsContent/magiPomesRif/magiPomesRif";
import MagiPomesRifThumbnail from "../json/projectsContent/magiPomesRif/magiPomesRif-mockup.png";
// import { tecnoSferanow } from "./projectsContent/tecnoSferanow/tecnoSferanow";
import JewelsBcnContent from "./projectsContent/jewelsBcn/jewelsBcn";
import JewelsBcnThumbnail from "./projectsContent/jewelsBcn/jewelsBcn-mockup.png";
// import { iceStick } from "./projectsContent/iceStick/iceStick";

export const projects = [
  {
    slug: "icestick",
    title: "Icestick",
    description: "Global branding and website for an ice cream company",
    thumbnail: "#",
    timestamp: 1759363200, // October 1, 2025
  },
  {
    slug: "my-carousel",
    title: "My Carousel",
    description: "Wordpress plugin for image galleries and carousels",
    thumbnail: MyCarouselThumbnail,
    timestamp: 1752278400, // August 11, 2025
    content: MyCarouselContent,
    tags: ['wordpress', 'plugin', 'php', 'javascript', 'figma'],
  },
  // {
  //   slug: "joaprenccatala",
  //   title: "Jo aprenc català",
  //   description: "Website & ecommerce for an online Catalan language school",
  //   thumbnail: "#",
  //   timestamp: 1746835200, // July 10, 2025
  //   tags: ['design', 'wordpress', 'php', 'javascript', 'ecommerce', 'woocommerce', 'figma'],
  // },
  {
    slug: "my-dictionary",
    title: "My Dictionary",
    description: "Wordpress plugin for multilingual sites",
    thumbnail: MyDictionaryThumbnail,
    timestamp: 1730073600, // December 27, 2024
    content: MyDictionaryContent,
    tags: ['wordpress', 'plugin', 'php', 'javascript', 'figma'],
  },
  {
    slug: "museu-picasso-bcn",
    title: "Museu Picasso de Barcelona",
    description: "Fictional redesign of the website for the Picasso Museum in Barcelona",
    thumbnail: PicassoThumbnail,
    timestamp: 1655856000, // June 22, 2022
    content: MuseuPicassoBcnContent,
    tags: ['design', 'figma', 'uiux'],
  },
  {
    slug: "ca-les-taronges",
    title: "Ca les taronges",
    description: "Website and video creation for a cake shop",
    thumbnail: CaLesTarongesThumbnail,
    content: CaLesTaronges,
    timestamp: 1525946400, // May 10, 2018
    tags: ['design', 'wordpress', 'php', 'javascript', 'video', 'after effects', 'premiere pro', 'bigcartel', 'ecommerce', 'figma'],
  },
  {
    slug: "magi-pomes-rif",
    title: "Magí Pomés al Rif",
    description: "Website about a postal card exhibition",
    thumbnail: MagiPomesRifThumbnail,
    timestamp: 1525946400, // May 10, 2018
    content: MagiPomesRif,
    tags: ['design', 'branding', 'react', 'javascript', 'figma', 'css'],
  },
  {
    slug: "tecnosferanow",
    title: "Tecnosferanow",
    description: "To be defined",
    thumbnail: "#",
    timestamp: 1525946400, // May 10, 2018
    tags: ['design', 'branding'],
  },
  // {
  //   slug: "blender-behance",
  //   title: "Blender experiments in Behance",
  //   description:
  //     "Collection of my experiments with Blender for 3D modeling and animation",
  //   thumbnail: "#",
  //   timestamp: 1525946400, // May 10, 2018
  //   tags: ['3d', 'blender', 'animation'],
  // },
  // {
  //   slug: "vimeo",
  //   title: "Vimeo",
  //   description: "Collection of my video projects on Vimeo",
  //   thumbnail: "#",
  //   timestamp: 1525946400, // May 10, 2018,
  //   tags: ['video', 'editing', 'motion graphics'],
  // },
  {
    slug: "jewelsbarcelona",
    title: "JewelsBarcelona",
    description: "Website for an online jewelry store",
    thumbnail: JewelsBcnThumbnail,
    timestamp: 1525946400, // May 10, 2018
    content: JewelsBcnContent,
    tags: ['design', 'bigcartel', 'css', 'ecommerce'],
  },
];
