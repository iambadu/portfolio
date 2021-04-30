import styled from 'styled-components';
import colors from '../../../../utils/style/colors';


export const Header = styled.div`
  background-color: ${colors.gray_8};
  z-index: 1000;
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto ;
  padding: 15px;
  align-items: center;
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