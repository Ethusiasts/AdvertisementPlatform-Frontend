export const navMenus = [
  ["Home", "home"],
  ["About us", "about"],
  ["Services", "services"],
  ["Pricing", "pricing"],
  ["Contact", "contact"],
];

export const selectOptionsSignUp = [
  { value: "customer", label: "Customer" },
  { value: "landowner", label: " Landowner" },
];
export const heroSectionTitle = "Advertising your brands";
export const trustSectionTitle = "Trusted by content creators across the world";
export const advertisementTitle = "For Advertisers";
export const monetiseTitle = "How to Monetize Your Site";
export const testimonialTitle = "Our Clients Testimonials Excellence";
export const testimonialDescription =
  "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

export const monetiseDescription =
  "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

export const advertisementDescription =
  "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

export const heroSectionDescription =
  "Creativity without strategy is called art, creative with strategy is called advertisement";
export const trustSectionDescription =
  "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
export const sliderImages = [
  "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
  "https://www.freepnglogos.com/uploads/tut-wuri-handayani-png-logo/lambang-logo-logo-depdiknas-wuri-handayani-10.png",
  "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
  "https://banner2.cleanpng.com/20171218/f41/apple-logo-png-5a37e212dfda18.3311147015136117949169.jpg",
  "https://png2.cleanpng.com/sh/c18d3d5c614a9a980b41f02eaec11c2e/L0KzQYm3U8MxN6poj5H0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tfxwb5Cygd9qZ3Wwg7nokvlvb15rhNN9LXTog7rujr1qdqR5edl7YX2wRbLphcBnOpc5UacBMUOxRIq8VcY6PGE2TaQ7NEC4QYeAU8AxPF91htk=/kisspng-computer-icons-logo-image-sharing-flat-design-instagram-5abe0f2f495613.4955694015224051673004.png",
];

export const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;
export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());
export const animationDuration = 20000;
export const defaultErrorMsg = "Some Error Occurred";
