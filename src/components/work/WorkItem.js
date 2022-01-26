import React from 'react'

const WorkItem = ({ item, getItemInfos }) => {
  return (
    <li className="workItem" style={{ background: item.bgColor }}
        onClick={getItemInfos}>
      <img className="" src={item.logo}
           alt={item.name}/>
      <div className="thumb" />
    </li>
  )
}

export default WorkItem