import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react"
import { useCart } from "react-use-cart";
import styled from "styled-components";
import Logo from "../../images/Logo.svg";
import LogoMobile from "../../images/LogoMobile.svg";


export default function Header() {

  const { allWcCategory } = useStaticQuery(
    graphql`
      query header {
        allWcCategory(filter: {count: {gt: 0}}) {
          nodes {
            name
            slug
          }
        }
      }
    `
  )

  const leftSideLink = [
    {
      name: 'Kolekcje modeli',
      link: '/kolekcje-modeli/'
    },
    {
      name: 'Sklep',
      link: '/sklep/',
      subArray: allWcCategory.nodes.map(el => {
        return {
          name: el.name,
          link: `/sklep/${el.slug}`
        }
      })
    },
    {
      name: 'O mnie',
      link: '/o-mnie/'
    },
    {
      name: 'Oferta',
      link: '/oferta/'
    }
  ]

  const rightSideLink = [
    {
      name: 'terminarz',
      link: '/terminarz/'
    },
    {
      name: 'Blog',
      link: '/artykuly/'
    },
    {
      name: 'Kontakt',
      link: '/kontakt/'
    }
  ]


  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const { totalItems } = useCart()
  return (
    <>
      <Wrapper>
        <Container>
          <LeftSide>
            <button onClick={handleOpenMenu} className={isOpen ? "active mobile-burger mobile" : "mobile-burger mobile"}>
              <span />
              <span />
              <span />
            </button>
            {leftSideLink.map((item, index) => (
              <li>
                <Link activeClassName="active" to={item.link} className="desctop">
                  {item.name}
                  {item.subArray && (
                    <>
                      <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 9L8.5 2L1.5 9" stroke="#FEFDFB" stroke-width="2" stroke-linecap="square" />
                      </svg>
                      <ul className="sub-arr">
                        {item.subArray.map((subItem, index) => (
                          <li>
                            <Link activeClassName="active" to={subItem.link}>
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                </Link>
              </li>
            ))}
          </LeftSide>
          <Link to="/" aria-label="przejdz do strony głównej">
            <Logo className='desctop logo' />
            <LogoMobile className='mobile logo' />
          </Link>
          <RightSide>
            {rightSideLink.map((item, index) => (
              <li>
                <Link activeClassName="active" to={item.link} className="desctop">
                  {item.name}
                </Link>
              </li>
            ))}
            <Link onClick={() => setIsOpen(false)} className="cart" to='/koszyk/'>
              <StaticImage className="desctop" src="./../../../static/images/cart-button-white.png" alt='koszyk zakupowy' />
              <StaticImage className="mobile" src="./../../../static/images/cart-button-green.png" alt='koszyk zakupowy' />
              <span>{totalItems}</span>
            </Link>
          </RightSide>
          <MobileMenu className={isOpen ? 'active' : ''}>
            <div className="grid">
              {leftSideLink.map((item, index) => (
                <li>
                  <Link onClick={() => setIsOpen(false)} activeClassName="active" to={item.link} >
                    {item.name}
                    {item.subArray && (
                      <>
                        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.5 9L8.5 2L1.5 9" stroke="#FEFDFB" stroke-width="2" stroke-linecap="square" />
                        </svg>
                        <ul className="sub-arr">
                          {item.subArray.map((subItem, index) => (
                            <li>
                              <Link activeClassName="active" to={subItem.link}>
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                  </Link>
                </li>
              ))}
              {rightSideLink.map((item, index) => (
                <li>
                  <Link onClick={() => setIsOpen(false)} activeClassName="active" to={item.link} >
                    {item.name}
                  </Link>
                </li>
              ))}
            </div>
          </MobileMenu>
          <Overlay onClick={() => setIsOpen(false)} className={isOpen ? 'active' : ''} />
        </Container>
      </Wrapper>
    </>
  )
}

const Overlay = styled.div`
  position: fixed;
  z-index: 198;
  inset: 0;
  background-color: #00000062;
  opacity: 0;
  transition: opacity .3s ease-out;
  pointer-events: none;

  &.active{
    pointer-events: all;
    opacity: 1;
  }
`

const MobileMenu = styled.div`
  position: fixed;
  z-index: 201;
  top: 10px;
  left: 0;
  bottom: 0;
  right: 72px;
  padding-top: clamp(62px, ${99 / 1024 * 100}vw, 99px);
  padding-left: 42px;
  padding-right: 26px;
  background-color: #233532;
  max-width: 350px;
  transform: translateX(-100%);
  transition: transform .3s ease-out;

  &.active{
    transform: translateX(0);
  }

  .grid{
    display: grid;
    gap: 16px;
    height: fit-content;
    overflow: auto;
    max-height: calc(100vh - clamp(62px, ${99 / 1024 * 100}vw, 99px) - 10px);
    padding-bottom: 40px;
  }

  a{
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FEFDFB;
    text-decoration: none;
  }

  svg{
    margin-left: 50px;
    margin-bottom: 2px;
    transform: rotateZ(180deg);
  }

  .sub-arr{
    padding-left: 12px;
    display: grid;
    gap: 16px;
    height: fit-content;
    margin-top: 16px;
  }
`

const Wrapper = styled.header`
  background-color: #FAF6EE;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 200;

  @media (max-width: 1024px) {
    padding: 10px 32px;
  }
  
  @media (max-width: 767px){
    position: fixed;
    right: 0;
    left: 0;
  }

  .logo{
    height: clamp(52px, ${89 / 1024 * 100}vw, 89px);
  }

  .mobile-burger{
    width: 70px;
    height: 38px;
    background-color: #23423D;
    position: relative;
    border: none;
    z-index: 202;
    clip-path: polygon(0 0, calc(100% - 27px) 0, 100% 100%, 0% 100%) ;

    &.active{
    }

    span{
      position: absolute;
      left: 8px;
      border: 1px solid #EDAC2A;
      &:nth-child(1){
      top: 11px;
        width: 27px;
      }
      &:nth-child(2){
        top: 19px;
        width: 32px;
      }
      &:nth-child(3){
        top: 27px;
        width: 38px;
      }

    }
  }

  li{
    list-style: none;
  }
  .mobile{
    display: none;
  }

  @media (max-width: 1024px) {
    
    .desctop{
      display: none;
    }

    .mobile{
      display: block;
    }
  }
`

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
`

const DesctopNav = styled.ul`
  background-color: #23423D;
  width: 100%;
  height: 48px;
  @media (max-width: 1024px) {
    background-color: transparent;
  }

  .mobile{
    display: none;
  }

  @media (max-width: 1024px) {
    background-color: transparent;
    
    .desctop{
      display: none;
    }

    .mobile{
      display: block;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

   a{
    color: #fff;
    text-transform: capitalize;
    text-decoration: none;
    transition: color .3s ease-out;

    &:hover{
      color: #EDAC2A;
    }

    &.active{
      font-weight: 700;
      color: #EDAC2A;
    }
  }

  svg{
    margin-left: 8px;
  }

  .cart{
    position: relative;
    @media (max-width: 1024px) {
      margin-right: 5px;
    }
    span{
      position: absolute;
      right: -10px;
      bottom: -2px;
      background: #EDAC2A;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #23423D;
      font-weight: 600;
    }
  }

  li{
    position: relative;

    a{
      height: 48px;
      display: flex;
      align-items: center;
    }

    .sub-arr{
      transition: opacity .3s ease-out;
      opacity: 0;
      pointer-events: none;
      width: 250px;
      top: calc(100% - 2px);
      position: absolute;
      background: #FAF7F1;
      border: 2px solid #23423D;
      padding: 16px;
      li{
        a{
          color: #000000;
          height: auto;
          margin-top: 10px;
          text-transform: none;
          font-weight: 400 !important;
        }
          
        &:first-child a{
          margin-top: 0;
        }
      }
    }

    svg{
      transition: transform .3s ease-out;
    }

    &:hover{
      .sub-arr{
        opacity: 1;
        pointer-events: all;
      }
      svg{
        transform: rotateZ(180deg);
      }
    }
  }

`

const LeftSide = styled(DesctopNav)`
  padding: 0 clamp(36px, ${66 / 1440 * 100}vw, 66px) 0 28px;
  position: relative;
  
  @media (max-width: 1024px){
    padding-left: 0;
    padding-right: 16px;
  }

  &::after{
    content: '';
    position: absolute;
    right: -1px;
    top: -1px;
    bottom: -1px;
    clip-path: polygon(calc(100% - 27px) 0, 100% 100%, 100% 0);
    background-color: #FAF6EE;
    width: 36px;
    @media (max-width: 1024px){
      display: none;
    }
  }
`

const RightSide = styled(DesctopNav)`
  padding: 0 28px 0 clamp(36px, ${66 / 1440 * 100}vw, 66px);
  position: relative;

  @media (max-width: 1024px){
    padding-right: 0;
    padding-left: 16px;
  }

  &::after{
    content: '';
    position: absolute;
    left: -1px;
    top: -1px;
    bottom: -1px;
    clip-path: polygon(0 0, 0% 100%, 27px 0);
    background-color: #FAF6EE;
    width: 36px;
    @media (max-width: 1024px){
      display: none;
    }
  }
`