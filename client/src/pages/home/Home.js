import React from 'react'
import { Form } from '../../components/index'
import { CContainer, CRow, CCol } from '@coreui/react'
import { Card } from '../../components/index'
import arrow from '../../assets/svg-icons/arrow.svg'
import { Title } from '../../components/index'

export const Home = ({ texts, direction }) => {
  const {
    cardsData,
    cardsButtonTitle,
    whyUsTitle,
    whyUsContent,
    customersRecommendTitle,
    customersRecommendSubTitle,
    customersRecommendContent,
    customersRecommendImges,
  } = texts.home

  return (
    <CContainer fluid className="p-0">
      <CContainer className="pt-5 pb-5 text-center home_header_wrapper" fluid style={{ backgroundColor: "#061A28" }}>
        <h1 className='white_header'>החזר מס לשכירים</h1>
        <h1 className='trans_header'>מגיע לך את הכסף שלך<br /> בחזרה!</h1>
        <p >
          בדקו עכשיו בצורה קלה, נוחה, בטוחה<br />וללא דאגות אם מגיע לכם החזרי מס
        </p>
        <button>לבדיקת זכאות להחזר מס ללא עלות</button>
      </CContainer>


      <CContainer className="pt-5">
        <Title
          title={texts?.home.subTitle}
          size="display-5"
          subtitle={texts?.home.subTitleText}
        />
        <CRow className="justify-content-center">
          {cardsData.map((card) => (
            <CCol
              xs={12}
              sm={12}
              md={6}
              lg={3}
              key={card.title}
              className="mb-4 d-flex justify-content-center"
            >
              <Card
                title={card.title}
                to={card.to}
                buttonTitle={cardsButtonTitle}
                icon={card.icon}
              />
            </CCol>
          ))}
        </CRow>
      </CContainer>




      <CContainer
        fluid
        className="why_us_wrapper text-center d-flex flex-column align-items-center"
      >
        <CRow>
          <CCol>
            <h2 className="why_us_title">{whyUsTitle}</h2>
          </CCol>
        </CRow>
        <CRow className="w-100 justify-content-center">
          {whyUsContent.map((v) => (
            <CCol key={v.text} xs={6} sm={6} md={3} lg={3} className="text-center">
              <img src={v.imgSrc} />
              <div className="image-text">{v.text}</div>
            </CCol>
          ))}
        </CRow>
      </CContainer>

    </CContainer>
  )
}
