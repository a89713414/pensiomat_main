import React from 'react'
import { CFooter } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeClosed, cilPhone } from '@coreui/icons'

const AppFooter = ({ texts }) => {
  const { footer } = texts
  const { email, phone } = footer

  return (
    <CFooter className="px-4">
      <div>
        <CIcon icon={cilEnvelopeClosed} className="me-2" />
        <a href={`mailto:${email.text}`} className="ms-1">
          {email.text}
        </a>
      </div>
      <div className="ms-auto">
        <CIcon icon={cilPhone} className="me-2" />
        <a href={`tel:${phone.text}`} className="me-1">
          {phone.text}
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
