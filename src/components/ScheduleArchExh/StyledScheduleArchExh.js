import styled from "styled-components"

export const StyledScheduleArchExh = styled.section`
    width: 100%;
    max-width: 1144px;
    padding: 0 32px;
    margin: 120px auto 0;
    @media only screen and (max-width: 768px){
        padding: 0 16px;
    }
`
export const StyledElements = styled.div`
    margin-top: 60px;
`
export const StyledbuttonsWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media only screen and (max-width: 1065px){
        a{
          font-size: 18px;
        }
    }

    @media only screen and (max-width: 685px){
        a{
          font-size: 16px;
        }
    }

    @media only screen and (max-width: 450px) {
        flex-direction: column;
        gap: 12px;
        a{
            width: 95%;
        }
    }
    
    @media only screen and (max-width: 375px){
        a{
          font-size: 15px;
        }
    }
`
export const StyledElement = styled.div``