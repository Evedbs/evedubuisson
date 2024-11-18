import littleLemonLogo from "../assets/drawingLemon.jpg";
import soon from "../assets/soon.jpg";
// import screenshot from "../assets/screenshot.png";
import sweetRecipes from "../assets/sweetRecipes.svg";

export const PROJECTS = [
  {
    title: "The Little Lemon",
    subtitle: "Showcase website for a restaurant",
    image: littleLemonLogo,
    href: "https://lillemonrestaurant.netlify.app/",
    enabled: true,
  },
  {
    title: "Sweet Recipes",
    subtitle: "A recipe listing website",
    image: sweetRecipes,
    href: "https://sweetrecipes.vercel.app",
    enabled: true,
  },
  {
    title: "Social Media",
    subtitle: "An application to discuss about current events",
    image: soon,
    enabled: false,
  },
];
