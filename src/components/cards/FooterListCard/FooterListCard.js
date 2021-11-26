import React from 'react'
import { useTranslation } from 'react-i18next'

import './footer-list-card.scss'

const FooterListCard = ({ data }) => {
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'footer' })

  return (
    <div className='footer-list-card-container'>
      <dl>
        <dt>{t(`${data.title.replace(' ', '_').toLowerCase()}.title`)}</dt>
        {data.contents.map((item, i) => (
          <dd key={i}>
            <a href={item.link}>
              {/* REPLACED SPACE WITH UNDERSCORE TO WORK WITH I18NEXT */}
              {t(
                `${data.title
                  .replace(' ', '_')
                  .toLowerCase()}.contents.${i}.title`
              )}
            </a>
          </dd>
        ))}
      </dl>
    </div>
  )
}

export default FooterListCard
