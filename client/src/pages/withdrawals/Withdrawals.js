import React from 'react'
import { CContainer, CRow, CCol, CButton } from '@coreui/react'

export const Withdrawals = () => {
  return (
    <CContainer style={{ padding: '2rem' }}>

      <CRow className="justify-content-center">
        <CCol xs="12" md="8" lg="6" className="text-center">
          <h2 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>כספים מחברת הביטוח</h2>
        </CCol>
      </CRow>


      <CRow className="justify-content-center">
        <CCol xs="12" md="8" lg="6" className="text-center">
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
            בכל שנה יותר ויותר ישראלים פודים את החיסכון הפנסיוני שלהם. <br />
            החל מהקורונה וגם בזמן המלחמה ישראלים רבים מוצאים במשיכת הכספים הפנסיונים פתרון למצב הכלכלי שנוצר.<br /><br />
            אנו בפנסיומט עוזרים ללוות בתהליך ולמשוך את הכספים הפנסיונים בצורה קלה, יעילה ומהירה!<br /><br />
            <strong>אופן התהליך:</strong><br />
            בשיחה הראשונה הנציג שלנו יסביר לכם את כל התהליך ואיך הוא מתבצע.<br />
            בסוף השיחה נאסוף מכם את המסמכים הנדרשים למשיכת הכספים.<br />
            ביצוע המשיכה והתנהלות מול חברות הביטוח – זה התפקיד שלנו! אנחנו בקשר ישיר עם כל חברות הביטוח ונעדכן אתכם בכל התקדמות בתיק.<br /><br />
            בין 5-10 ימי עסקים (תלוי בחברת הביטוח) הכסף אצלכם בחשבון הבנק!
          </p>
        </CCol>
      </CRow>


      <CRow className="justify-content-center">
        <CCol xs="12" md="8" lg="6" className="text-center">
          <CButton color="primary" size="lg">
            רוצים לשמוע עוד? השאירו פרטים!
          </CButton>
        </CCol>
      </CRow>
    </CContainer>
  )
}
