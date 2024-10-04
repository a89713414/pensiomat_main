import React from 'react';
import {
  CContainer,
  CRow,
  CCol,
} from '@coreui/react';
import { cilPhone, cilEnvelopeOpen, cilClock, cilLocationPin, cibFacebook, cibInstagram, cibLinkedin } from '@coreui/icons';
import CIcon from '@coreui/icons-react'

const AppFooter = ({ texts }) => {
  const { footer } = texts
  const { email, phone } = footer

  return (
    <footer className="footer-section">
      <CContainer fluid className="py-5 px-4 footer-wrapper">
        <CRow>
          {/* Right Side (Logo and company info) */}
          <CCol md={6} className="d-flex flex-column align-items-start">
            <div className="footer-logo">
              <img src="your-logo-url.png" alt="לוגו החברה" />
            </div>
            <div className="company-info mt-3">
              <p>
                חברת מור טקס פיננסים – היא חברה להחזרי מס לשכירים. החזר כספי מס מלא בהישג יד ובליווי צמוד.
              </p>
              <div className="google-map mt-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509712!2d35.09590831531139!3d32.9201557809691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15138c75143a50bb%3A0x991ae2f293f91c52!2z15HXl9mE16nXldmE16jXq9mE15HVol15Y!5e0!3m2!1sen!2sil!4v1696448043151!5m2!1sen!2sil"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מיקום החברה"
                />
              </div>

            </div>
          </CCol>

          {/* Left Side (Contact Info and Social Media) */}
          <CCol md={6} className="d-flex flex-column align-items-end">
            <div className="contact-info mb-3">
              <div className="contact-item">
                <CIcon icon={cilPhone} className="me-2" />
                <span>+972 123 456 789</span>
              </div>
              <div className="contact-item">
                <CIcon icon={cilEnvelopeOpen} className="me-2" />
                <span>info@yourcompany.co.il</span>
              </div>
              <div className="contact-item">
                <CIcon icon={cilClock} className="me-2" />
                <span>א'-ה': 9:00 - 18:00</span>
              </div>
              <div className="contact-item">
                <CIcon icon={cilLocationPin} className="me-2" />
                <span>כתובתך, עיר, מדינה</span>
              </div>
            </div>

            <div className="social-media mt-3">
              <CIcon icon={cibFacebook} className="social-icon" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
              <CIcon icon={cibInstagram} className="social-icon" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
              <CIcon icon={cibLinkedin} className="social-icon" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
            </div>

            <div className="footer-text mt-4">
              <p>
                המידע המוצג אינו מהווה ייעוץ/שיווק השקעות ואינו מהווה תחליף לייעוץ מס, ייעוץ משפטי ו/או תחליף לייעוץ אישי, המתחשב בנתונים ובצרכים של כל אדם. אין בשירות משום המלצה או חוות דעת ואינו בא במקום שיקול דעת עצמאי של המשתמש. אין באמור משום הבטחת תשואה או רווח ו/או הצעה לרכישת שירות. ייתכן שבמידע המוצג נפלו שיבושים ו/או שגיאות ו/או טעויות ו/או אי דיוקים אשר החברה אינה נושאת באחריות להם.
              </p>
              <p className='copyright'>&copy; כל הזכויות שמורות לחברת מור טקס פיננסים בע”מ 2023 Ⓒ</p>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </footer>
  )
}

export default React.memo(AppFooter)
