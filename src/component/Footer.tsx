import dt from "@/lib/designToken/designTokens";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/images/footer-logo.svg";
const tokens = dt.DesignTokenVarNames;

const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(${tokens.colors.simple.imtermediategray});
  color: white;
  text-align: center;
  padding: 10px 0;

  position: relative; /* Ensure it is relative positioned */
  bottom: 0; /* Remove if it is causing issues */
`;

const FooterUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  min-height: 25px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterUl>
        <Link href="/">
          <Image alt="로고 이미지" width={100} height={40} src={logoImg} />
        </Link>
      </FooterUl>
    </FooterContainer>
  );
};

export default Footer;
