import styled from "styled-components";

export const StyledHomeExhibitions = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1144px;
  margin: 0 auto 120px auto;
  padding: 0 32px;
  > h2 {
    align-self: flex-start;
  }
  @media only screen and (max-width: 1080px){
    > h2{
      align-self: center;
    }
  } 
  @media only screen and (max-width: 768px){
    padding: 0 16px;
  }
`;
export const StyledElementsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 15px;
  margin-bottom: 40px;

  @media only screen and (max-width: 1080px){
    flex-wrap: wrap;
  } 
`;
