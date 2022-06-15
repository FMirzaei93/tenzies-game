const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
  bigScreen: "2560px",
};

const devices = {
  // mobileS: `(min-width: ${sizes.mobileS})`,
  // mobileM: `(min-width: ${sizes.mobileM})`,
  // mobileL: `(min-width: ${sizes.mobileL})`,
  // tablet: `(min-width: ${sizes.tablet})`,
  // laptop: `(min-width: ${sizes.laptop})`,
  // laptopL: `(min-width: ${sizes.laptopL})`,
  // desktop: `(min-width: ${sizes.desktop})`,
  mobileL: `max-width: ${sizes.mobileL}`,
  mobileM: `max-width: ${sizes.mobileM}`,
  mobileS: `max-width: ${sizes.mobileS}`,
  desktop: `min-width: ${sizes.desktop}`,
};

export default devices;
