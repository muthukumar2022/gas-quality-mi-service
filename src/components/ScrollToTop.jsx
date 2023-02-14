import React, { useState } from "react";
import styled from "styled-components";
import gaslogo from "../assets/gaslogo.jpeg";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
export default function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <>
      <ToTop onClick={toTop} scrollState={scrollState}>
        {/* <img
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
          src={gaslogo}
          alt=""
        /> */}
        <WhatsappShareButton>
          <a
            href="https://wa.me/918124948359"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon size={80} round={true} />
          </a>
        </WhatsappShareButton>
      </ToTop>
    </>
  );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1rem;
  right: 2rem;
  img {
    height: 1.5rem;
  }
  border-radius: 2rem;
  // background-color: #1900ff39;
  padding: 1rem;
`;
