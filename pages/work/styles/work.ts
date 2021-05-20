import styled from "styled-components";
import colors from "../../../utils/style/colors";
import rfs from "../../../utils/style/rfs";

export const Title = styled.h2`
  font-size: ${rfs(45)};
  font-weight: bold;
  margin: 1.5rem auto;
  background-color: #ff00ff;
  background-image: linear-gradient(45deg, #ff00ff, #0044FF);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const TitleWrap = styled.section`
  background-color: ${colors.gray_2};
`;

export const WorkTWrap = styled.div`
  border-left: 8px solid ${colors.pink_6};
`;
export const WorkText = styled.p`
  padding: 25px 12px;
  margin-bottom: 10px;
`;

export const WorkImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const WorkListItem = styled.li`
  background-color: ${colors.gray_8};
  margin: 15px 0;
  border-radius: 4px;
  padding: 10px 0 10px 35px;
  position: relative;
  &::before {
    position: absolute;
    content: "◉";
    color: ${colors.pink_6};
    width: 1rem;
    top: 10px;
    left: 10px;
    height: 1rem;
  }
`;
export const WorkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 15px;
`;
export const SideWrap = styled.div`
  padding: 40px 0;
`;
export const SectWrp = styled.div`
  width: 100%;
  background-color: ${colors.gray_9};
  color: #fff;
  padding-bottom: 45px;
`;

export const WorkBtn = styled.a`
  display: inline-block;
  margin: 0 10px;
  border-radius: 3px;
  background-color: ${colors.pink_6};
  color: #fff;
  outline: 0;
  padding: 12px 30px;
  border: 0;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: ${colors.pink_9};
  }
`;
