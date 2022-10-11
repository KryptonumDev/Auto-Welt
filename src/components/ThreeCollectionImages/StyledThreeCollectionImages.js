import styled from "styled-components";

export const StyledThreeCollectionImages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 120px;

  @media only screen and (max-width: 768px){
    margin-top: 50px;
  }
  @media only screen and (max-width: 488px){
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
export const StyledImageWrapper = styled.div`
  width: 33.33%;
  max-width: 343px;
  @media only screen and (max-width: 488px){
    width: 100%;
    max-width: unset;
    .gatsby-image-wrapper-constrained{
      display: block;
    }
  }
`;
