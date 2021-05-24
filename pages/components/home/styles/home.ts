import styled from "styled-components";
import Link from "next/link";

import colors from "../../../../utils/style/colors";
import rfs from "../../../../utils/style/rfs";

let main = "#25373D";

export const HeadWrap = styled.div`
  width: 100%;
  position: relative;
  /* background-color: ${colors.gray_8}; */
`;

// HOM HERO
export const ImgWrap = styled.div`
  background-color: ${colors.gray_8};
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: fit-content;
    @media (min-width: 1399px) {
      height: 80vh;
    }
    min-height: 90vh;
  }
`;
export const HeroWrap = styled.div`
  height: calc(90vh - 70px);
  @media (min-width: 1399px) {
    height: 70vh;
  }

  color: ${colors.gray_9};
  z-index: 1000;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Hero = styled.div`
  @media (min-width: 1399px) {
    max-width: 900px;
  }
  max-width: 700px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  margin-top: -50px;
  overflow: hidden;
  margin: 0 15px;

  position: relative;
`;
export const HeroIn = styled.div`
  padding: 20px 30px;
  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;
export const HeroTitle = styled.h1`
  padding: 15px 0;
  font-size: ${rfs(70)};
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;
export const HeroSubText = styled.p`
  color: ${colors.gray_7};
  font-size: ${rfs(18)};
  /* line-height: 1.5; */
  padding-bottom: 10px;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  @media (min-width: 1399px) {
    font-size: 24px;
  }
`;
export const LinkWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0 15px 15px;
  }
  width: 100%;
`;

export const Btn = styled.button`
  a {
    padding: 15px 0;
    color: #fff;
    text-decoration: none;
    display: block;
    transition: all 0.2s;
  }
  padding:0;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  width: 50%;
  border: none;
  &:focus {
    outline: 0;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin-top: 10px;
  }
`;
export const PBtn = styled(Btn)`
  a:hover {
    background-color: ${colors.pink_6};
    color: #fff;
  }
  background-color: ${colors.pink_7};
  color: #fff;
`;
export const SBtn = styled(Btn)`
  a:hover {
    background-color: ${colors.gray_6};
    color: #fff;
  }
  background-color: ${colors.gray_7};
  color: #fff;
`;

// HEADER AND NAVIGATION

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
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

export const Header = styled.div`
  background-color: ${colors.gray_8};
  z-index: 1000;
  position: relative;
  width: 100%;
`;

//@SKILLS SECTION

export const Skills = styled.div`
  background-color: ${colors.gray_3};
  color: ${colors.gray_8};
  padding: 35px 0;
`;

export const SkillWrap = styled.div`
  display: flex;
  max-width: 700px;
  margin: 20px auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const SkillItem = styled.div`
  &:hover {
    transform: scale(1.2);
  }
  transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
  display: flex;
  /* min-width:100px; */
  flex-wrap: nowrap;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    bottom: 0;
    left: 0;
    transform: translate(-50%, -50%);
  }
  p {
    display: inline-block;
    background-color: #fff;
    padding: 0;
    border-radius: 3px;
    font-weight: 500;
    padding: 5px 18px 5px 35px;
  }
  border-radius: 3px;
  margin: 5px 18px;
  overflow: visible;
  width: fit-content;
`;

// @
//  SECTION
export const Work = styled(Header)`
  padding: 40px 0;
  color: #fff;
`;

export const SectionTitle = styled.h2`
  font-size: ${rfs(45)};
  text-align: left;
  font-weight: 300;
  padding-top: 15px;
`;
export const TitleWrap = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1100px;
  @media (min-width: 1450px) {
    max-width: 1400px;
  }
  @media (max-width: 480px) {
  }
`;
export const SectionText = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
`;
export const WorkWrap = styled(Container)`
  display: grid;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    a:first-child {
      grid-area: span 1 !important;
    }
  }
  grid-template-columns: 0.7fr 0.7fr 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  a:first-child {
    grid-area: span 2 / span 2;
  }

  /* @media (min-width: 1450px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  } */
`;
export const WorkItem = styled.div`
  &:hover {
    opacity: 0.7;
  }
  transition: all 0.2s;
  border-radius: 8px;
  background-color: ${colors.gray_3};
  width: 100%;
  height: fit-content;
  overflow: hidden;
  img {
    display: block;
    object-fit: cover;
    width: 100%;
  }
`;

// @ABOUT ME SECTION
export const Aboutme = styled.div`
  padding: 25px 0;
  width: 100%;
  background-color: #fff;
  color: ${colors.gray_8};
`;

export const SectionWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Section = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const AboutImg = styled.div`
  padding: 25px 0;
  height: fit-content;
  display: flex;
  justify-content: center;
  svg {
    width: 50%;
    height: auto;
  }
`;

export const SocialWrp = styled.div`
  padding: 15px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const LinkedIn = styled.a`
  border-radius: 3px;
  font-size: 14px;
  display: inline-flex;
  font-weight: bold;
  color: #fff;
  align-items: center;
  background: #0288d1;
  position: relative;
  padding: 5px 15px;
  /* height: 32px; */
  vertical-align: middle;
  padding-left: 38px;
  margin-right: 10px;
  &:before {
    background: url("/img/linkedin.png") center center no-repeat;
    background-size: 32px;
    position: absolute;
    left: 0;
    content: "";
    width: 42px;
    height: 32px;
  }
`;

export const Git = styled(LinkedIn)`
  background: #fff !important;
  color: #3a3a3a !important;
  padding: 5px 15px;
  padding-left: 38px;
  border: 1px solid #a7a7a7 !important;
  &:before {
    background: url("/img/github.png") center center no-repeat !important;
    background-size: 32px !important;
  }
`;

export const Email = styled.span`
display:inline-block;
border-radius:3px;
background: #333;
a {
color: #fff;
width:100%;
}
padding: 5px 20px;
`;