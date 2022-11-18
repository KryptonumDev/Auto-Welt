import styled from "styled-components";

export const StyledScheduleActualExh = styled.section`
  width: 100%;
  max-width: 1144px;
  padding: 0 50px;
  margin: ${({ hasmargin }) => hasmargin ? "80px auto 0" : "0"};

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
    margin-top: 0;

    > h2 {
      font-size: 38px;
    }
  }

  @media only screen and (max-width: 375px) {
    > h2 {
      font-size: 34px;
    }
  }
`;

export const StyledSliderWrapper = styled.div`
  margin-top: 60px;

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media only screen and (max-width: 1065px) {
    a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      font-size: 21px;
      width: 50%;
    }
  }

  @media only screen and (max-width: 685px) {
    a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 648px) {
    a {
      width: 87%;
    }
  }

  @media only screen and (max-width: 375px) {
    margin-top: 95px;

    a {
      font-size: 15px;
    }
  }
`;
