import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export default function CartContent({items, updateItemQuantity, sum, removeItem}) {
    return (
        <>
            <Table>
                <tr>
                    <th>Nazwa produktu</th>
                    <th>Cena jedn.</th>
                    <th>Ilość</th>
                    <th>Razem</th>
                    <th>Usuń</th>
                </tr>
                {items.map(el => (
                    <tr>
                        <td>
                            <div className="name">
                                <GatsbyImage className="image" image={el.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={el.featuredImage.node.altText} />
                                <div className="text">
                                    <span className="title">{el.name}</span>
                                    <span className="scale">Scala: {el.scale ? el.scale : 'nie wskazana'}</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <div className="regular" dangerouslySetInnerHTML={{ __html: el.price }} />
                                {el.onSale && <div className="discount" dangerouslySetInnerHTML={{ __html: el.regularPrice }} />}
                            </div>
                        </td>
                        <td>
                            <div className="flex quantity-calculator">
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
                        </td>
                        <td>
                            <div className="flex">
                                <div className="regular">
                                    {el.price.replace(/[^0-9]/g, '') * el.quantity}&nbsp;zł
                                </div>
                                {el.onSale && (
                                    <div className="discount">
                                        {el.regularPrice.replace(/[^0-9]/g, '') * el.quantity}&nbsp;zł
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
                ))}
            </Table>
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
        </>
    )
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  .image{
    max-width: 180px;
  }
  th{
    background: #23423D;
    border: 2px solid #23423D;
    border-right: 2px solid #fff;
    color: #fff;

    &:last-child{
      border-right: 2px solid #23423D;
    }
  }
  td{
    border: 2px solid #23423D;
    color: #23423D;
  }

  .flex{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4px;
    padding: 0 48px;
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
      }

      .scale{
        font-size: 16px;
        color: #000
      }
    }
  }
`

const Checkout = styled.div`
  margin-top: 40px;
  max-width: 520px;
  margin-left: auto;
  display: grid;
  grid-gap: 8px;

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

  > span {
      font-family: "Roboto Condensed";
      display: block;
      transform: skew(26deg);
      text-transform: uppercase;
      text-align: center;
      line-height: 1.3em;
  }

  &:hover {
      background: #23423D;
      border: 2px solid transparent;
  }

  &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
  }
`