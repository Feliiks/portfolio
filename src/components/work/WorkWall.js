import React from 'react'
import WorkItem from './WorkItem'

const WorkWall = () => {
  const items = [
    {
      'name': 'lsvibes',
      'logo': '../images/lsvibes_logo.png',
      'bgColor': 'rgba(11, 11, 11, 1)',
      'isOnline': true,
    },
    {
      'name': 'cartejeuneffcc',
      'logo': '../images/cartejeuneffcc_logo.png',
      'bgColor': 'rgb(255,255,255)',
      'isOnline': true,
    },
    {
      'name': 'andreanaturo',
      'logo': '../images/andrea_logo.png',
      'bgColor': 'rgb(255,255,255)',
      'isOnline': true,
    },
  ]

  return (
    <div className="workWall">
      <ul className="works-list">
        {items.map((item) => (
          <WorkItem item={item} key={item.name} />
        ))}
      </ul>
    </div>
  )
}

export default WorkWall