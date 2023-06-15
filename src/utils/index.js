import Image1 from "../styles/assets/billboard1.jpg";
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
export const monetiseTitle = "How to Monetize Your Billboard";
export const testimonialTitle = "Our Clients Testimonials Excellence";
export const testimonialDescription =
  "Advert has been instrumental in driving our advertising success. Their programmatic marketplace and targeted reach solutions have allowed us to precisely target our audience and achieve impressive results. ";

export const monetiseDescription =
  "Discover the perfect solution to monetize your billboard with Advert. Our innovative platform connects billboard owners with advertisers and media agencies, enabling you to maximize your revenue effortlessly.Through our programmatic marketplace, you gain access to a vast network of advertisers seeking prime billboard spaces. Say goodbye to empty ad slots and hello to a constant stream of revenue. We handle the logistics, ensuring a seamless experience for both parties involved..";

export const advertisementDescription =
  "Discover Advert, the ultimate platform connecting advertisers with billboard owners and media agencies. Say goodbye to conventional advertising challenges and embrace our cutting-edge solution.\n\nOur programmatic marketplace empowers advertisers to execute location-based out-of-home (OOH) campaigns efficiently and at a cost-effective scale. With our advanced automation and performance-driven approach, you'll achieve unmatched results in the market.";
export const heroSectionDescription =
  "Creativity without strategy is called art, creative with strategy is called advertisement.";
export const trustSectionDescription =
  "We specialize in serving the outdoor media and digital out-of-home (DOOH) marketplace, ensuring that you reach your target audience effectively. Whether you're a business owner, marketer, or media agency, our platform empowers you to maximize your advertising efforts and achieve outstanding results.";
export const sliderImages = [
  "https://img.shgstatic.com/clutchco-static/image/scale/65x65/s3fs-public/logos/b30dd41db474bf7dc740a7c98fe24ad9.svg",
  "https://img.shgstatic.com/clutchco-static/image/scale/50x50/s3fs-public/logos/2f98dad19b700e39b0d15b1266c0a8ef.jpeg",
  "https://img.shgstatic.com/clutchco-static/image/scale/50x50/s3fs-public/logos/4f7181f723d74539be2a3ed9502d2c84.png",
  "https://img.shgstatic.com/clutchco-static/image/scale/65x65/s3fs-public/logos/8414994bc2a3e96e82559256a0b6ad95.png",
  "https://img.shgstatic.com/clutchco-static/image/scale/65x65/s3fs-public/logos/bnngwj-a_400x400.jpg",
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
        {/* {children} */}
      </div>
    </div>
  );
};

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;
export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());
export const animationDuration = 20000;
export const defaultErrorMsg = "Some Error Occurred";

export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
export const removeCookie = (cname) => {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

export const Carousel = [
  {
    status: "Occupied",
    rate: "2",
    price: "100",
    production: "production",
    width: "123",
    height: "124",
    location: "sheger",
    imageSrc: { Image1 },
    alt: "Card Image",
  },
  {
    status: "Occupied",
    rate: "5",
    price: "110",
    production: "production",
    width: "123",
    height: "124",
    location: "sheger",
    imageSrc: { Image1 },
    alt: "Card Image",
  },
  {
    status: "Occupied",
    rate: "4.5",
    price: "200",
    production: "production",
    width: "123",
    height: "124",
    location: "sheger",
    imageSrc: { Image1 },
    alt: "Card Image",
  },
  {
    status: "Occupied",
    rate: "1.5",
    price: "3000",
    production: "production",
    width: "123",
    height: "124",
    location: "sheger",
    imageSrc: { Image1 },
    alt: "Card Image",
  },
  {
    status: "Free",
    rate: "5",
    price: "1",
    production: "production",
    width: "123",
    height: "124",
    location: "sheger",
    imageSrc: { Image1 },
    alt: "Card Image",
  },
  {
    status: "Free",
    rate: "5",
    price: "100",
    production: "production",
    width: "123",
    height: "124",
    location: "sheger",
    imageSrc: { Image1 },
    alt: "Card Image",
  },
];
