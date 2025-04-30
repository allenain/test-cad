import styled from "styled-components";
import ContactButton from "@/components/ui/ContactButton";

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px 20px 30px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 768px) {
    padding: 20px;
    gap: 10px;
  }
`;
const Logo = styled.a`
  font-size: 20px;
  font-weight: 600;
  color: var(--dark);
  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Logo href={"/"}>Some Company</Logo>
      <ContactButton href="/contacts">Contact us</ContactButton>
    </HeaderWrap>
  );
};

export default Header;
