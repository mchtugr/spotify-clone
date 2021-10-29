import React from 'react'
import { useTranslation } from 'react-i18next'
import './FooterListCard.css'
const FooterListCard = ({ data }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'footer' })
  console.log(data.contents)
  return (
    <div className='footer-list-card-container'>
      <dl>
        <dt>{t(`${data.title.replace(' ', '_').toLowerCase()}.title`)}</dt>
        {data.contents.map((item, i) => (
          <dd key={i}>
            <a href={item.link}>
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
