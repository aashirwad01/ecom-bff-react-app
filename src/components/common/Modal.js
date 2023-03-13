import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const CardModalWrapper = styled.div((props) => ({
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: "10",
  background: "rgba(255,255,255,0.55)",
}));

export default function ModalComponent({ children, backgroundColor }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return ReactDom.createPortal(
      <>
        <CardModalWrapper backgroundColor={backgroundColor}>
          {children}
        </CardModalWrapper>
      </>,
      document.getElementById("portal")
    );
  } else {
    return null;
  }
}
