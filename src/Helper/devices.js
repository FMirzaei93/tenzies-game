const sizes = {
  longsL: "800px",
  longsU: "900px",
  mobiles: "599px",
  mobileS: "319px",
  mobileM: "374px",
  mobileL: "413px",
  tabletM: "719px",
  tabletL: "1023px",
  laptop: "1365px",
  desktop: "1450px",
  bigScreen: "2559px",
};

const devices = {
  longsL: `min-height: ${sizes.longsL}`,
  longsU: `max-height: ${sizes.longsU}`,
  mobiles: `max-width: ${sizes.mobiles}`,
  mobileS: `min-width: ${sizes.mobileS}`,
  mobileM: `min-width: ${sizes.mobileM}`,
  mobileL: `min-width: ${sizes.mobileL}`,
  tabletM: `min-width: ${sizes.tabletM}`,
  tabletL: `min-width: ${sizes.tabletL}`,
  laptop: `min-width: ${sizes.laptop}`,
  desktop: `min-width: ${sizes.desktop}`,
  bigScreen: `min-width: ${sizes.bigScreen}`,
};

export default devices;
