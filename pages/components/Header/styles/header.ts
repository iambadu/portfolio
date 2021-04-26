import styled from "styled-components";
import colors from "../../../../utils/style/colors";
import rfs from "../../../../utils/style/rfs";

let main = "#25373D";

export const HeadWrap = styled.div`
  width: 100%;
  position: relative;
`;

// HOM HERO
export const ImgWrap = styled.div`
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  img {
    width: 100%;
    height: fit-content;
    min-height: 100vh;
  }
`;
export const HeroWrap = styled.div`
  color: ${colors.gray_9};
  z-index: 1000;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Hero = styled.div`
  max-width: 700px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 100px 0;
  overflow: hidden;
  position: relative;
`;
export const HeroIn = styled.div`
  padding: 20px 30px;
`;
export const HeroTitle = styled.h1`
  padding: 15px 0;
  font-size: ${rfs(70)};
`;
export const HeroSubText = styled.p`
  color: ${colors.gray_7};
  font-size: ${rfs(18)};
  line-height: 1.5;
  padding-bottom: 10px;
  font-weight: 500;
`;
export const LinkWrap = styled.div`
  display: flex;
  width: 100%;
`;

export const Btn = styled.button`
  a {
    padding: 15px 0;
    color: #fff;
    text-decoration: none;
    display: block;
    transition: all .4s;
  }
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  width: 50%;
  border: none;
  &:focus {
    outline: 0;
  }
`;
export const PBtn = styled(Btn)`
a:hover {
  background-color: ${colors.pink_5};
  color: #fff;
}
  background-color: ${colors.pink_7};
  color: #fff;
`;
export const SBtn = styled(Btn)`
a:hover {
  background-color: ${colors.gray_5};
  color: #fff;
}
  background-color: ${colors.gray_7};
  color: #fff;
`;

// HEADER AND NAVIGATION

export const Header = styled.div`
  background-color: ${colors.gray_8};
  z-index: 1000;
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 15px;
  align-items: center;
  color: #fff;
  max-width: 1100px;
  @media (min-width: 1450px) {
    max-width: 1400px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const MobiWrap = styled.div`
  margin-right: auto;
  @media (max-width: 480px) {
    display: flex;
    margin: 0;
    width: 100%;
    align-items: center;
  }
`;

export const Menu = styled.div`
  display: block;
  width: 35px;
  height: 30px;
  display: block;
  flex-direction: column;
  @media (min-width: 480px) {
    display: none;
  }
`;

export const NavIcon = styled.div<{ active: boolean }>`
  width: 100%;
  display: inline-block;
  height: 3px;
  background: ${({ active }) => (active ? "transparent" : "#fff")};
  transition: all 0.2s;
  position: relative;
  &::before {
    top: ${({ active }) => (active ? "0rem" : "-.6rem")};
    transform: ${({ active }) => (active ? "rotate(135deg)" : "none")};
  }
  &::after {
    top: ${({ active }) => (active ? "0rem" : "0.65rem")};
    transform: ${({ active }) => (active ? "rotate(-135deg)" : "none")};
  }
  &::before,
  &::after {
    width: 100%;
    display: inline-block;
    height: 3px;
    background: #fff;
    transition: all 0.2s;
    content: "";
    position: absolute;
    left: 0;
  }
`;

export const Logo = styled.div`
  margin-right: auto;
`;
export const Navi = styled.nav<{ active: boolean }>`
  @media (max-width: 480px) {
    display: ${({ active }) => (active ? "block" : "none")};
    width: 100%;
    text-align: center;
  }
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
  @media (max-width: 480px) {
    padding-top: 40px;
    width: 100%;
    flex-direction: column;
  }
`;

export const Item = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    padding: 5px 8px;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    @media (max-width: 480px) {
      padding: 10px;
      display: block;
      margin-bottom: 10px;
      border: 2px solid #9faccf;
    }
  }
`;

// WORK SECTION
export const Work = styled(Header)`
  padding: 20px 0;
`;
export const WorkWrap = styled(Container)`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export const WorkItem = styled(Container)`
  border-radius: 8px;
  background-color: ${colors.gray_3};
  height: 220px;
  width: 100%;
`;
