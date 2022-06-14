import React from "react";
import die1 from "../../assets/images/die1.png";
import die2 from "../../assets/images/die2.png";
import die3 from "../../assets/images/die3.png";
import die4 from "../../assets/images/die4.png";
import die5 from "../../assets/images/die5.png";
import die6 from "../../assets/images/die6.png";
import { DieFace } from "./Die.elements";

export default function Die(props) {
  const [bgImage, setBgImage] = React.useState(die1);

  React.useEffect(function () {
    dieImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = {
    backgroundColor: props.isHeld ? "#59E391" : "",
    backgroundImage: "url(" + bgImage + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  function dieImg() {
    switch (props.value) {
      case 1:
        return setBgImage(die1);

      case 2:
        return setBgImage(die2);

      case 3:
        return setBgImage(die3);

      case 4:
        return setBgImage(die4);

      case 5:
        return setBgImage(die5);

      case 6:
        return setBgImage(die6);

      default:
        return setBgImage(die1);
    }
  }

  return <DieFace style={style} onClick={props.clickHandler}></DieFace>;
}
