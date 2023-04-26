import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { getCookie, setCookie, datalayerArguments } from "../../utils/cookie-manager"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Cookies({ isActive, setIsActive }) {
  const { wpPage: { cookies: { cookiesGlobal: { consent: consentTab, about: aboutCookiesTab, details: detailsTab } } } } = useStaticQuery(graphql`
    query {
        wpPage(id: {eq: "cG9zdDozMw=="}) {
          cookies{
            cookiesGlobal {
              consent {
                tabContent
              }
              about {
                tabContent
              }
              details {
                cookies {
                  partName
                  workPartName
                  partDescription
                  innerParts {
                    innerPartName
                    cookieDescriptionUrl
                    innerPartCookies {
                      cookieName
                      cookieDescription
                      expireTime
                      cookieType
                    }
                  }
                }
              }
            }
          }
        }
    }
  `)

  const [activeTab, setActiveTab] = useState(0)

  const [activeCookie, setActiveCookie] = useState(() => {
    const arr = []
    detailsTab.cookies.forEach(el => {
      const isActive = el.workPartName === 'necessary'
      arr.push({ name: el.workPartName, isActive: isActive })
    })
    return arr
  })

  const changeTabs = (index) => {
    const arr = [...activeCookie]

    if (arr[index].name === "necessary") {
      return null
    }

    arr[index].isActive = !arr[index].isActive

    setActiveCookie(arr)
  }

  useEffect(() => {
    if (getCookie('necessary')) {
      datalayerArguments("consent", "default", {
        'ad_storage': getCookie('marketing'),
        'analytics_storage': getCookie('statistics'),
        'functionality_storage': getCookie('necessary'),
        'personalization_storage': getCookie('preferences'),
        'unclassified_storage': getCookie('unclassified'),
        'wait_for_update': 2500
      });
      datalayerArguments("set", "ads_data_redaction", true);
      setIsActive(false)
    } else {
      datalayerArguments("consent", "default", {
        'ad_storage': "denied",
        'analytics_storage': "denied",
        'functionality_storage': "denied",
        'personalization_storage': "denied",
        'security_storage': "granted",
        'unclassified_storage': "denied",
        'wait_for_update': 2500
      });
      datalayerArguments("set", "ads_data_redaction", true);
      setIsActive(true)
    }

    return () => {
    }
  }, [setIsActive])

  const acceptAll = () => {
    activeCookie.forEach(el => {
      setCookie(el.name, 'granted', 365)
    })
    datalayerArguments('consent', 'update', {
      'ad_storage': 'granted',
      'analytics_storage': "granted",
      'functionality_storage': "granted",
      'personalization_storage': "granted",
      'unclassified_storage': "granted",
    });

    setIsActive(false)
  }

  const acceptPart = () => {
    activeCookie.forEach(el => {
      setCookie(el.name, el.isActive ? 'granted' : 'denied', 365)
    })
    datalayerArguments('consent', 'update', {
      'ad_storage': getCookie('marketing'),
      'analytics_storage': getCookie('statistics'),
      'functionality_storage': getCookie('necessary'),
      'personalization_storage': getCookie('preferences'),
      'unclassified_storage': getCookie('unclassified'),
    });

    setIsActive(false)
  }

  const rejectAll = () => {
    activeCookie.forEach(el => {
      setCookie(el.name, 'denied', 365)
    })
    datalayerArguments('consent', 'update', {
      'ad_storage': 'denied',
      'analytics_storage': "denied",
      'functionality_storage': "denied",
      'personalization_storage': "denied",
    });

    setIsActive(false)
  }

  return (
    <>
      {isActive && (
        <>
          <Overlay />
          <Wrapper>
            <Content>
              <StaticImage className="car" quality='100' src="../../../static/images/car.png" alt='obrazek auta'/>
              <TabsControl>
                <button className={activeTab === 0 ? 'active' : 'FUXK'} tabIndex={isActive ? '0' : '-1'} onClick={() => { setActiveTab(0) }}>
                  Zgoda
                </button>
                <button className={activeTab === 1 ? 'active' : ''} tabIndex={isActive ? '0' : '-1'} onClick={() => { setActiveTab(1) }}>
                  Szczegóły
                </button>
                <button className={activeTab === 2 ? 'active' : ''} tabIndex={isActive ? '0' : '-1'} onClick={() => { setActiveTab(2) }}>
                  O cookies
                </button>
              </TabsControl>
              <TabWrapper transition={{ duration: .5 }}>
                {activeTab === 0 && (
                  <Tab>
                    <div className="content" dangerouslySetInnerHTML={{ __html: consentTab.tabContent }} />
                  </Tab>
                )}
                {activeTab === 1 && (
                  <Tab>
                    {detailsTab.cookies.map((el, index) => {
                      let count = 0
                      el.innerParts?.forEach(inEl => {
                        count += inEl.innerPartCookies.length
                      })
                      return (
                        <div key={el.partName + index} className="parts">
                          <div className="name">
                            <button
                              tabIndex={isActive ? '0' : '-1'}
                              className={activeCookie[index].isActive ? "radio active" : 'radio'}
                              onClick={() => { changeTabs(index) }}
                              aria-label={el.partName}
                            >
                              <span></span>
                            </button>
                            {el.partName} {count > 0 && `(${count})`}
                          </div>
                          <p className="description">
                            {el.partDescription}
                          </p>
                          {el.innerParts?.map((el, id) => (
                            <React.Fragment key={el.innerPartName + id}><Grid isActive={isActive} active={activeCookie[index].isActive} el={el} /></React.Fragment>
                          ))}
                        </div>
                      )
                    })}
                  </Tab>
                )}
                {activeTab === 2 && (
                  <Tab>
                    <div className="content" dangerouslySetInnerHTML={{ __html: aboutCookiesTab.tabContent }} />
                  </Tab>
                )}
              </TabWrapper>
              <Buttons>
                <button className="cta-secondary" tabIndex={isActive ? '0' : '-1'} onClick={() => { rejectAll() }}>
                  <span>Odmowa</span>
                </button>
                {activeTab === 1 ? (
                  <button className="cta-secondary" onClick={() => { acceptPart() }} tabIndex={isActive ? '0' : '-1'}>
                    <span>Zgoda na wybrane</span>
                  </button>
                ) : (
                  <button className="cta-secondary" onClick={() => { setActiveTab(1) }} tabIndex={isActive ? '0' : '-1'}>
                    <span>Ustaw preferencje</span>
                  </button>
                )}
                <button className="cta-primary allow" tabIndex={isActive ? '0' : '-1'} onClick={() => { acceptAll() }} >
                  <span>Zgoda na wszystkie</span>
                </button>
              </Buttons>
            </Content>
          </Wrapper>
        </>
      )}
    </>
  )
}

const Grid = ({ isActive, active, el: data }) => {

  const [showAll, setShowAll] = useState(false)
  let isButtonRendered = false

  return (
    <div className={active ? 'active item-wrapper' : 'item-wrapper'}>
      <p className="grid-name">{data.innerPartName}</p>
      <div className="grid">
        {data.innerPartCookies.map((el, index) => {
          if (showAll ? true : index < 2) {
            return (
              <div key={el.cookieName + index} className={showAll ? "item" : 'item no-show'}>
                <div>
                  <p className="item-name">{el.cookieName}</p>
                  <p className="item-description">{el.cookieDescription}</p>
                </div>
                <div className="item-flex">
                  <p>Data ważności: {el.expireTime}</p>
                  <p>Rodzaj: {el.cookieType}</p>
                </div>
              </div>
            )
          } else {
            if (!isButtonRendered) {
              isButtonRendered = true
              return (
                <button tabIndex={isActive && active ? '0' : '-1'} key={'button'} items={data.innerPartCookies.length} className="show-all" onClick={() => { setShowAll(true) }}>
                  Załaduj więcej
                  <span className="desctop">&nbsp;({data.innerPartCookies.length - 2})</span>
                  <span className="tablet">&nbsp;({data.innerPartCookies.length - 2})</span>
                  <span className="mobile">&nbsp;({data.innerPartCookies.length - 1})</span>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9995 26.666L15.9995 5.333" stroke="#0F3730" strokeWidth="1.5" strokeLinecap="square" />
                    <path d="M8.45278 19.1201C12.3324 19.1201 15.9995 22.5369 15.9995 26.6668" stroke="#0F3730" strokeWidth="1.5" strokeLinecap="square" />
                    <path d="M23.5462 19.1201C19.6666 19.1201 15.9995 22.5369 15.9995 26.6668" stroke="#0F3730" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                </button>
              )
            }
            return null;
          }
        })}
      </div>
    </div>
  )
}

const TabWrapper = styled.div`
    overflow: auto;
    max-height: calc(100vh - 200px - 48px - 48px - 48px - 32px);
    padding-right: 20px;
    margin-right: -20px;

    @media (max-height: 639px) {
        max-height: calc(100vh - 48px - 48px - 92px - 32px);
    }
`

const Overlay = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #888888;
    mix-blend-mode: multiply;
    z-index: 10000;
    pointer-events: none;
`

const Wrapper = styled.aside`
    position: fixed;
    z-index: 100000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 6px solid #23423D;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    background-image: url('/images/cookie-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    max-width: 940px;
    width: 100%;
    max-height: calc(100vh - 200px);
    
    .car{
      display: block;
      width: fit-content;
      margin: 0 auto 30px auto;
    }

    .content *{
      font-family: 'Roboto Condensed';
    }

    .content h2{
      font-family: 'Nocturne Serif';
      text-align: center;
      font-weight: 400;
      font-size: 48px;
      line-height: 122%;
      color: #12433A;
    }

    .description,.name, .grid-name, .content p{
      text-decoration-line: unset !important;
      font-size: clamp(16px, ${16 / 768 * 100}vw, 20px);
      line-height: 150%;
      color: #12433A;
    }

    .content p em strong, .content p strong em {
      font-family: var(--serif);
      font-weight: 600;
      font-size: clamp(16px, ${16 / 768 * 100}vw, 20px);
      font-style: normal;
    }

    .content a{
      font-family: var(--serif);
      font-weight: 600;
      font-size: clamp(16px, ${16 / 768 * 100}vw, 20px);
      text-decoration: underline;
    }

    .name, .grid-name{
      font-size: 20px;
    }

    .item-name, .item-description, .item-flex p{
      font-size: 16px;
      line-height: 150%;
      color: #12433A;
    }

    @media (max-height: 639px) {
        max-height: 100vh;
    }

    *{
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.003em;

        @media (max-width: 440px){
            font-size: 14px;
        }
    }

    .item-wrapper{
        *{
            color: #BBBBBB !important;
            transition: color .2s cubic-bezier(0.39, 0.575, 0.565, 1);
        }

        svg{
          path{
            stroke: #BBBBBB;
            transition: stroke .2s cubic-bezier(0.39, 0.575, 0.565, 1);
          }
        }

        .underline{
            background-image: linear-gradient(#BBBBBB, #BBBBBB);
        }

        &.active{
            *{
              color: #12433A !important;
            }
            svg{
              path{
                stroke: #12433A;
              }
            }
            .underline{
              background-image: linear-gradient(#12433A, #12433A);
            }
        }
    }
`

const Content = styled.div`
    width: 100%;
    max-width: 794px;
    margin: 0 auto;
    max-height: 100%;
    padding: clamp(12px, ${20 / 768 * 100}vw, 32px) ;
`

const TabsControl = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width: fit-content;
    margin: 0 auto;

    button{
        padding: 0 24px 8px 24px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 18px;
        position: relative;
        border-bottom: 2px solid #EDAC2A;

        font-family: 'Roboto Condensed';
        font-weight: 600;
        font-size: 21px;
        line-height: 162%;
        text-align: center;
        color: #0F3730;

        &.active {
          color: #EDAC2A;
          border-color: #23423D;
        }

        @media (max-width: 480px){
            font-size: 16px;
            padding: 0 16px 8px 16px;
        }
        @media (max-width: 340px){
            padding: 0 12px 8px 12px;
        }
    }
`

const Buttons = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: center;
    gap: 24px;
    align-items: center;

    @media (max-width: 640px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;

        button{
            padding: 14px 0 ;
            width: 100%;
            text-align: center;
        }

        .allow{
            grid-column-end: 3;
            grid-column-start: 1;
        }
    }
`

const Tab = styled.div`

    .content{
        display: grid;
        grid-gap: 8px;
        margin-top: 30px;
    }

    .parts{
        margin-top: 26px;
    }

    .name{
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .description{
        margin-top: 8px;
    }

    .show-all{
      font-weight: 400;
      font-size: clamp(18px, ${20 / 768 * 100}vw, 20px);
      line-height: 135%;
      color: #12433A;
      width: fit-content;
      display: flex;
      align-items: center;
      margin: 0 auto;

      grid-column-start: 1;
      grid-column-end: 3;

      span{
        font-weight: 400;
        font-size: 20px;
        line-height: 135%;
      }
    }

    .grid-name{
        margin-top: 16px;
        text-decoration-line: underline;
    }

    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        grid-gap: 16px;
        margin-top: 12px;

        @media (max-width: 640px){
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 450px){
            grid-template-columns: 1fr;
        }
    }

    .desctop{
        display: inline;

        @media (max-width: 640px) {
            display: none;
        }
    }

    .tablet{
        display: none;

        @media (max-width: 640px) {
            display: inline;
        }

        @media (max-width: 450px) {
            display: none;
        }
    }

    .mobile{
        display: none;

        @media (max-width: 450px) {
            display: inline;
        }
    }

    .item{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 640px) {
            &.no-show{
                &:nth-child(3){
                    display: none;
                }
            }
        }

        @media (max-width: 450px){
            &.no-show{
                &:nth-child(2){
                    display: none;
                }
            }
        }

        .item-name{
            margin-bottom: 4px;
        }

        .item-description{
            margin-bottom: 4px;
        }

        .item-flex{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 4px 8px;
            flex-wrap: wrap;
        }
    }

    .radio{
        width: 45px;
        height: 24px;
        border-radius: 42px;
        background-color: #90999B;
        border: none;
        position: relative;
        cursor: pointer;
        transition: background-color .2s cubic-bezier(0.47, 0, 0.745, 0.715);

        span{
            position: absolute;
            top: 4px;
            left: 4px;
            width: 16px;
            height: 16px;
            background-color: #EAF0F1;
            border-radius: 40px;
            transition: all .2s cubic-bezier(0.645, 0.045, 0.355, 1);
        }


        &.active{
            background-color: #3DA290;
            span{
                left: 25px;
                background-color: #fff;
            }
        }
    }
`