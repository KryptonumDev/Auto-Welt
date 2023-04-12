import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function CartContent({ items, updateItemQuantity, sum, removeItem }) {
  return (
    <Wrapper>
      <Table>
        <tr>
          <th>Nazwa produktu</th>
          <th>Cena jedn.</th>
          <th>Ilość</th>
          <th>Razem</th>
          <th>Usuń</th>
        </tr>
        {items.map(el => {
          let scale = null
          el.attributes.every(el => {
            if (el.name === 'Skala') {
              scale = el.options[0]
              return false
            }
            return true
          })

          return (
            <tr>
              <td>
                <Link className="name-wrapper" to={`/sklep/${el.categories[0].slug}/${el.slug}`}>
                  <div className="name">
                    <GatsbyImage className="image" image={el.images[0].localFile.childImageSharp.gatsbyImageData} alt={el.images[0].alt} />
                    <div className="text">
                      <span className="title">{el.name}</span>
                      {scale && <span className="scale">Skala: {scale}</span>}
                    </div>
                  </div>
                </Link>
              </td>
              <td>
                <div className="flex">
                  <div className={el.on_sale ? "colored regular" : "regular"} >
                    {el.price}&nbsp;zł
                  </div>
                  {el.on_sale
                    && <div className="discount" >
                      {el.regular_price}&nbsp;zł
                    </div>}
                </div>
              </td>
              <td>
                <div className="flex quantity-calculator">
                  <button disabled={el.quantity <= 1} onClick={() => { updateItemQuantity(el.id, (el.quantity > 1 ? el.quantity - 1 : 1)) }} className="minus">
                    <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 0V2H0V0H14Z" fill="#23423D" />
                    </svg>
                  </button>
                  <div className="quantity">
                    {el.quantity}
                  </div>
                  <button onClick={() => { updateItemQuantity(el.id, el.quantity + 1) }} className="plus">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.7243 4.98047V7.01953H0V4.98047H11.7243ZM7.12129 0V12.4219H4.64493V0H7.12129Z" fill="#23423D" />
                    </svg>
                  </button>
                </div>
              </td>
              <td>
                <div className="flex">
                  <div className="regular">
                    {el.price.replace(/[^0-9]/g, '') * el.quantity}&nbsp;zł
                  </div>
                  {el.on_sale && (
                    <div className="discount">
                      {el.regular_price.replace(/[^0-9]/g, '') * el.quantity}&nbsp;zł
                    </div>
                  )}
                </div>
              </td>
              <td>
                <div className="flex cube">
                  <button onClick={() => { removeItem(el.id) }}>
                    <StaticImage src='./../../static/images/kosz.png' alt='kosz' />
                  </button>
                </div>
              </td>
            </tr>
          )
        })}
      </Table>
      {items.map(el => {
        let scale = null
        el.attributes.every(el => {
          if (el.name === 'Skala') {
            scale = el.options[0]
            return false
          }
          return true
        })

        return (
          <MobileTable>
            <div>
              <span>
                Produkt
              </span>
              <div>
                <Link className="name-wrapper" to={`/sklep/${el.categories[0].slug}/${el.slug}`}>
                  <GatsbyImage className="image" image={el.images[0].localFile.childImageSharp.gatsbyImageData} alt={el.images[0].altText} />
                  <div className="text">
                    <span className="title">{el.name}</span>
                    {scale && <span className="scale">Skala: {scale}</span>}
                  </div>
                </Link>
              </div>
            </div>
            <div >
              <span>
                Cena jedn.
              </span>
              <div className="param">
                <div className={el.on_sale ? "colored regular" : "regular"} >
                  {el.price}&nbsp;zł
                </div>
                {el.on_sale
                  && <div className="discount" >
                    {el.regular_price}&nbsp;zł
                  </div>}
              </div>
            </div>
            <div >
              <span>
                Ilość
              </span>
              <div className="param ">
                <div className="quantity-calculator">
                  <button onClick={() => { updateItemQuantity(el.id, el.quantity - 1) }} className="minus">
                    <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 0V2H0V0H14Z" fill="#23423D" />
                    </svg>
                  </button>
                  <div className="quantity">
                    {el.quantity}
                  </div>
                  <button onClick={() => { updateItemQuantity(el.id, el.quantity + 1) }} className="plus">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.7243 4.98047V7.01953H0V4.98047H11.7243ZM7.12129 0V12.4219H4.64493V0H7.12129Z" fill="#23423D" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div >
              <span>
                Razem
              </span>
              <div className="param">
                <div className="regular">
                  {el.price.replace(/[^0-9]/g, '') * el.quantity}&nbsp;zł
                </div>
                {el.on_sale && (
                  <div className="discount">
                    {el.regular_price.replace(/[^0-9]/g, '') * el.quantity}&nbsp;zł
                  </div>
                )}
              </div>
            </div>
            <div >
              <span>
                Usuń
              </span>
              <div className="param">
                <button onClick={() => { removeItem(el.id) }}>
                  <StaticImage src='./../../static/images/kosz.png' alt='kosz' />
                </button>
              </div>
            </div>
          </MobileTable>
        )
      })}

      <Checkout>
        <div>
          <span>
            Wartość zamówienia:
          </span>
          <span>
            {sum}&nbsp;zł
          </span>
        </div>
        <div>
          <span>
            Dostawa:
          </span>
          <span>
            od&nbsp;10&nbsp;zł
          </span>
        </div>
        <div>
          <span>
            Razem:
          </span>
          <span>
            {sum + 10}&nbsp;zł
          </span>
        </div>
      </Checkout>
      <Button state={{ sum: sum }} to='/zamowienie/'>
        <span>
          REALIZUJ ZAMÓWIENIE
        </span>
      </Button>
    </Wrapper>
  )
}

const MobileTable = styled.div`
  display: none;
  border: 2px solid #23423D;
  width: fit-content;
  max-width: 480px;
  width: 100%;

  @media (max-width: 680px) {
    display: block;
  }

  > div{
    display: flex;
    > span{
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: #23423D;
      width: 68px;
      padding: 0 4px;
      text-align: center;
      border-bottom: 2px solid #FEFDFB;
    }

    &:last-child{
      > span{
        border: 2px solid #23423D;
      }
    }

    > div{
      border-bottom: 2px solid #23423D;
      width: 100%;

      div{
        width: fit-content;
        margin: 0 auto;

        &.discount{
          margin-top: 6px;
        }
      }

      &.param{
        padding: 14px 8px;
      }

      .quantity-calculator{
        width: fit-content;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      button{
        margin: 0 auto;
        border: none;
        background-color: transparent;
        display: block;
      }

      .image{
        width: 100%;
      }

      .text{
        padding: 24px 8px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        text-align: center;

        .title{
          font-family: 'Nocturne Serif';
          font-size: 24px;
          color: #23423D;
        }

        .scale{
          font-size: 16px;
          color: #000
        }
      }
    }
  }
`

const Wrapper = styled.section`

  .flex{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4px;
    padding: 0 48px;

    @media (max-width: 1024px) {
      padding: 0 24px;
    }

    &.cube{
      margin: 0 24px;
      padding: 0;
      button{
        width: 50px;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }

  .quantity-calculator{
    flex-direction: unset;
    gap: 0;

    button, div{
      background-color: unset;
      border-radius: unset;
      border: 2px solid #EDAC2A;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .minus{
      width: 36px;
      height: 42px;
      cursor: pointer;
      border-right: unset;
    }

    .quantity{
      height: 42px;
      width: 42px;
      font-size: 24px;
    }

    .plus{
      width: 36px;
      height: 42px;
      background-color: #EDAC2A;
      cursor: pointer;
      border-left: unset;
    }
  }

  .regular{
    font-size: 24px;
    font-family: 'Nocturne Serif';

    &.colored{
      background: #23423D;
      color: #EDAC2A;
      padding: 2px;
    }
  }

  .discount{
    font-size: 18px;
    font-family: 'Nocturne Serif';
    position: relative;

    &::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #EDAC2A;
      left: 0;
      bottom: 0;
      transform: rotateZ(-20deg);
      transform-origin: 0 100%;
    }
  }

  .name-wrapper{
    text-decoration: none;
  }

  .name{
    display: flex;
    align-items: center;

    .text{
      display: grid;
      align-items: center;
      grid-gap: 8px;
      margin: 0 20px;
      height: fit-content;

      .title{
        font-family: 'Nocturne Serif';
        font-size: 24px;
        color: #23423D;
      }

      .scale{
        font-size: 16px;
        color: #000
      }
    }

    .image{
      max-width: 180px;
    }
    
    @media (max-width: 864px) {
      display: block;

      .image{
        max-width: unset;
        max-height: 165px;
        width: 100%;
      }

      .text{
        margin: 10px;
      }
    }
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th{
    background: #23423D;
    border: 2px solid #23423D;
    border-right: 2px solid #fff;
    color: #fff;
    padding: 4px 0;

    &:last-child{
      border-right: 2px solid #23423D;
    }
  }
  td{
    border: 2px solid #23423D;
    color: #23423D;
  }
  @media (max-width: 680px) {
    display: none;
  }
  
`

const Checkout = styled.div`
  margin-top: 40px;
  max-width: 520px;
  margin-left: auto;
  display: grid;
  grid-gap: 8px;

  @media (max-width: 680px) {
    max-width: 480px;
    margin-left: 0;
  }


  div{
    display: flex;
    justify-content: space-between;
    
    span{
      font-size: 24px;
      font-weight: 500;
      line-height: 124%;
    }

    &:last-child{
      span{
        font-size: 28px;
      }
    }
  }
`

const Button = styled(Link)`
  max-width: 340px;
  width: 100%;
  margin: 20px 0 30px auto;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px solid transparent;
  outline: 0;
  background: #23423D;
  color: #fff;
  height: 44px;
  transform: skew(-26deg);
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  flex: none;
  min-height: unset;
  transition: background 250ms linear;
  text-decoration: unset;

  > span {
      font-family: "Roboto Condensed";
      display: block;
      transform: skew(26deg);
      text-transform: uppercase;
      text-align: center;
      line-height: 1.3em;
  }

  &:hover {
      background: #1D2B29;
      border: 2px solid transparent;
  }

  &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
  }

  @media (max-width: 680px){
    margin-left: 0;
  }
`