const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "414px",
  tabletM: "720px",
  tabletL: "1024px",
  laptop: "1366px",
  desktop: "1440px",
  bigScreen: "2559px",
};

const devices = {
  tiny: `max-width: ${sizes.mobileS}`,
  mobileS: `min-width: ${sizes.mobileS}`,
  mobileM: `min-width: ${sizes.mobileM}`,
  mobileL: `min-width: ${sizes.mobileL}`,
  tabletM: `min-width: ${sizes.tabletM}`,
  tabletL: `min-width: ${sizes.tabletL}`,
  laptop: `min-width: ${sizes.laptop}`,
  desktop: `min-width: ${sizes.desktop}`,
  bigScreen: `min-width: ${sizes.bigScreen}`,

  // mobileL: `max-width: ${sizes.mobileL}`,
  // mobileM: `max-width: ${sizes.mobileM}`,
  // mobileS: `max-width: ${sizes.mobileS}`,
  // desktop: `min-width: ${sizes.desktop}`,
};

export default devices;
