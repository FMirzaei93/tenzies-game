const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "414px",
  tablet: "720px",
  laptop: "1024px",
  laptopL: "1366px",
  desktop: "1440px",
  bigScreen: "2560px",
};

const devices = {
  tiny: `max-width: ${sizes.mobileS}`,
  mobileS: `min-width: ${sizes.mobileS}`,
  mobileM: `min-width: ${sizes.mobileM}`,
  mobileL: `min-width: ${sizes.mobileL}`,
  tablet: `min-width: ${sizes.tablet}`,
  laptop: `min-width: ${sizes.laptop}`,
  laptopL: `min-width: ${sizes.laptopL}`,
  desktop: `min-width: ${sizes.desktop}`,
  bigScreen: `min-width: ${sizes.bigScreen}`,

  // mobileL: `max-width: ${sizes.mobileL}`,
  // mobileM: `max-width: ${sizes.mobileM}`,
  // mobileS: `max-width: ${sizes.mobileS}`,
  // desktop: `min-width: ${sizes.desktop}`,
};

export default devices;
