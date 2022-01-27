import React, { useState } from 'react'
import works from '../../assets/works.json'
import WorkItem from './WorkItem'
import WorkTitle from '../animations/WorkTitle'
import WorkParaph from '../animations/WorkParaph'
import ItemInfos from './ItemInfos'

function WorkContent () {
  const [displayItemInfos, setDisplayItemInfos] = useState(false)
  const [infos, setInfos] = useState({})

  const getItemInfos = (item) => {
    setDisplayItemInfos(true)
    setInfos(works[item])
  }

  const closeItemInfos = () => {
    setDisplayItemInfos(false)
    setInfos({})
  }

  const list = Object.keys(works).map(item => (
    <WorkItem
      item={works[item]}
      key={item}
      getItemInfos={() => getItemInfos(item)}
    />
  ))

  return (
    <div className="workContent">
      <div className="workBox">
        <WorkTitle/>
        <WorkParaph/>
      </div>
      <div className="workWall">
        { displayItemInfos ?
          <ItemInfos
            closeItemInfos={closeItemInfos}
            infos={infos}
          /> : null
        }
        <ul className="works-list">
          { list }
        </ul>
      </div>
    </div>
  )
}

export default WorkContent