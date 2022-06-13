import React from "react";
import dialogboxStyles from "./styles.module.css";

const ReactDialogBox = ({
  modalWidth,
  headerFontSize,
  headerBackgroundColor,
  headerTextColor,
  headerHeight,
  headerText,
  closeButtonColor,
  bodyBackgroundColor,
  bodyTextColor,
  bodyFontSize,
  bodyHeight,
  bodyText,
  children,
  closeBox,
}) => {
  return (
    <div>
      <div className={dialogboxStyles.overlay}></div>
      <div
        className={dialogboxStyles.modal}
        style={{
          width: modalWidth,
        }}
      >
        <header
          className={dialogboxStyles.modal__header}
          style={{
            backgroundColor: headerBackgroundColor,
            color: headerTextColor,
            height: headerHeight,
            fontSize: headerFontSize,
          }}
        >
          <h4>{headerText}</h4>
          <button
            onClick={closeBox}
            className={dialogboxStyles.close_button}
            style={{
              color: closeButtonColor,
            }}
          >
            &times;
          </button>
        </header>
        <main
          className={dialogboxStyles.modal__main}
          style={{
            backgroundColor: bodyBackgroundColor,
            color: bodyTextColor,
            height: bodyHeight,
            fontSize: bodyFontSize,
          }}
        >
          {bodyText}
          {children}
        </main>
      </div>
    </div>
  );
};

export default ReactDialogBox;
