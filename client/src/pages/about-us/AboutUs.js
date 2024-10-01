import React from 'react';
import { CContainer, CRow, CCol } from '@coreui/react';

const aboutUsData = [
  {
    title: "למה אנחנו:",
    description: [
      "מקצועיות - צוות המומחים שלנו עם ותק של שנים בתחום הפנסיה ישמחו לעמוד לשירותכם.",
      "הגינות - תשלום על בסיס הצלחה בלבד, לא גובים כלל תשלום מראש.",
      "עובדים בשבילך - אנחנו מנהלים את כל התהליך עבורכם! הצוות שלנו מטפל בהכל מא' ועד ת'.",
      "שירות - הצוותים שלנו עובדים מבוקר ועד לילה כדי לתת לך את השירות הטוב ביותר!"
    ]
  },
  {
    title: "חברת פנסיומט",
    description: [
      "חברת פנסיומט עובדת משנת 2019 ועזרה כבר לעשרות אלפי ישראלים את כספיהם במהירות ויעילות.",
      "צוות המומחים שלנו עם נסיון של שנים בתחום הפיננסים והביטוח ויעמדו לשירותכם בכל זמן."
    ]
  }
];

export const AboutUs = ({ texts, direction }) => {
  return (
    <CContainer style={{ padding: '2rem' }}>


      {aboutUsData.map((section, index) => (
        <React.Fragment key={index}>
          <CRow className="justify-content-center">
            <CCol xs="12" md="8" lg="6" className="text-center">
              <h4>{section.title}</h4>
              <ul style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {section.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CCol>
          </CRow>
          {index < aboutUsData.length - 1 && (
            <CRow className="justify-content-center" style={{ margin: '1rem 0' }}>
              <CCol xs="auto">
                <hr style={{ width: '100%', height: '2px', backgroundColor: '#ccc' }} />
              </CCol>
            </CRow>
          )}
        </React.Fragment>
      ))}
    </CContainer>
  );
};
