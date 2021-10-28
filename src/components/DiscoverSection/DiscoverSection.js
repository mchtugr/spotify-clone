import React from 'react'
import VerticalCard from '../cards/VerticalCard'
import './DiscoverSection.css'

const DiscoverSection = ({ title, data, isArtist }) => {
  return (
    <div className='discover-section'>
      <div className='discover-section-header'>
        <h2>{title}</h2>
        <div className='discover-see-all'>HEPSINI GOR</div>
      </div>
      <div className='discover-section-card-container'>
        {data.list.map((item) => (
          <React.Fragment key={item.id}>
            <VerticalCard data={item} isArtist={isArtist} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default DiscoverSection
