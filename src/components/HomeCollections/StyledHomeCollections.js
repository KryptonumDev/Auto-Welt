import styled from "styled-components";
import RecInfoWithButton from "../RecInfoWithButton/RecInfoWithButton";

export const StyledHomeCollections = styled.section`
  width: 100%;
  padding-right: 23px;
  margin-bottom: 120px;

  @media only screen and (max-width: 768px) {
    padding-right: 0;
  }
`;
export const StyledImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  @media only screen and (max-width: 936px) {
    margin-bottom: 260px;
  }
  @media only screen and (max-width: 674px) {
    justify-content: center;
  }
  @media only screen and (max-width: 587px) {
    margin-bottom: 166px;
  }
`;
export const StyledImage = styled.div`
  position: absolute;
  bottom: -135px;
  right: -200px;
  width: 900px;
  height: 489px;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 1100px) {
    right: -300px;
  }

  @media only screen and (max-width: 936px) {
    width: 620px;
    height: 350px;
    right: -150px;
    bottom: -350px;
  }
  @media only screen and (max-width: 580px) {
    width: 402px;
    bottom: -350px;
  }
  @media only screen and (max-width: 375px) {
    right: -120px;
  }
`;

export const StyledContentWrapper = styled.div`
  margin-top: 72px;
`;
export const StyledInfoWrapper = styled(RecInfoWithButton)`
  background-color: red;
  margin-top: 200px;
  @media only screen and (max-width: 936px) {
    transform: translateX(-32px);
    background-color: red;
  }
`;
