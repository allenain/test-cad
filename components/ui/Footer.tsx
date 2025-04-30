import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

const WhiteWrap = styled.div`
  margin-top: auto;
  padding: 20px;
  text-align: center;
  background-color: white;
  p {
    font-size: 24px;
    font-weight: 600;
  }
`;

const BlackWrap = styled.div`
  margin-top: auto;
  padding: 20px;
  text-align: center;
  background-color: var(--dark);
`;

const Footer = ({ black }: { black?: boolean }) => {
  return (
    <FooterWrap>
      <WhiteWrap>
        <p>Some Company 2024</p>
      </WhiteWrap>
      {black && <BlackWrap />}
    </FooterWrap>
  );
};

export default Footer;
