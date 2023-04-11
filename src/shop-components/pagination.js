import React, { useMemo } from "react"
import styled from "styled-components"

export default function Pagination({ currentPage, itemCount, changeCurrentPage }) {

  const pagesCount = useMemo(() => {
    let count = itemCount - 10
    return (Math.ceil(count / 9)) + 1
  }, [itemCount])

  const buttons = useMemo(() => {
    let arr = []
    for (let i = 0; i < pagesCount; i++) {
      arr.push(i + 1)
    }
    return arr
  }, [pagesCount])

  if (itemCount < 11) {
    return null
  }

  return (
    <Wrapper>
      <Button disabled={currentPage <= 1} onClick={() => { changeCurrentPage(currentPage - 1) }} className={'arrow left'} >
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 3L3 16L17 29" stroke="#EDAC2A" strokeWidth="3" strokeLinecap="square" />
        </svg>
      </Button>
      <div className="center">
        {itemCount < 51 ? (
          <>
            {buttons.map(el => (
              <Button onClick={() => { changeCurrentPage(el) }} active={currentPage === el} >
                <span>{el}</span>
              </Button>
            ))}
          </>
        ) : (
          <>
            {currentPage > 3
              && <Button onClick={() => { changeCurrentPage(1) }} >
                <span>{1}</span>
              </Button>
            }
            {currentPage > 4
              && <Button className="not" as='button' disabled>
                <span>...</span>
              </Button>
            }

            {buttons.map((el, index) => {
              if (currentPage < 4 && (index < 6)) { // first 4 pages
                return (
                  <Button onClick={() => { changeCurrentPage(el) }} active={currentPage === el}>
                    <span>{el}</span>
                  </Button>
                )
              }
              if (currentPage > pagesCount - 3 && (index > pagesCount - 7)) { // last 4 pages
                return (
                  <Button onClick={() => { changeCurrentPage(el) }} active={currentPage === el}>
                    <span>{el}</span>
                  </Button>
                )
              }
              if (index >= currentPage - 3 && index <= currentPage + 1) {
                return (
                  <Button onClick={() => { changeCurrentPage(el) }} active={currentPage === el}>
                    <span>{el}</span>
                  </Button>
                )
              }
              return null
            })}

            {(currentPage === 1 || pagesCount - currentPage > 3)
              && <Button className="not" as='button' disabled>
                <span>...</span>
              </Button>
            }
            {(currentPage === 1 || pagesCount - currentPage > 2)
              && (
                <Button onClick={() => { changeCurrentPage(pagesCount) }}>
                  <span>{pagesCount}</span>
                </Button>
              )}
          </>
        )}
      </div>
      <Button disabled={currentPage >= pagesCount} onClick={() => { changeCurrentPage(currentPage + 1) }} className={'arrow right'}>
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 29L17 16L3 3" stroke="#EDAC2A" strokeWidth="3" strokeLinecap="square" />
        </svg>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-top: clamp(32px, ${48 / 768 * 100}vw, 64px);

    .center{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;

      @media (max-width: 380px) {
        gap: 20px;
      }

    }

    @media (max-width: 540px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 
      'content content'
      'left right';

      .left{
        grid-area: left;
        width: fit-content;
        margin-left: auto;
        margin-right: 50px;
      }

      .right{
        grid-area: right;
        width: fit-content;
        margin-right: auto;
        margin-left: 50px;
      }

      .center{
        grid-area: content;
      }
    }
`

const Button = styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    background-color: transparent;

    &.not{
        cursor: default;
    }

    &:hover{
        &::before{
            opacity: .3;
        }
    }

    :focus-visible {
        outline-offset: 0;
    }

    &:disabled{
    }

    span{
        position: relative;
        z-index: 10;
        font-family: 'Nocturne Serif';
        font-style: normal;
        font-weight: 400;
        font-size: ${props => props.active ? '40px' : '28px'};
        line-height: 34px;
        font-feature-settings: 'pnum' on, 'onum' on;
        color: ${props => props.active ? '#EDAC2A' : '#000000'}; 

        @media (max-width: 360px){
          font-size: ${props => props.active ? '36px' : '24px'};
        }
    }

    &.arrow{
      background: #23423D;
      padding: 10px;

      span{
      }
    }
`