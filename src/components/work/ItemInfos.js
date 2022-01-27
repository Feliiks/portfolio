import React, { useEffect, useRef } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'

const ItemInfos = ({ closeItemInfos, infos }) => {
  const itemComponent = useRef()

  useEffect(() => {
    let component = itemComponent.current
    component.style.visibility = 'visible'
    component.style.opacity = 1

    return () => {
      component.style.visibility = 'hidden'
      component.style.opacity = 0
    }
  })

  return (
    <div className="item-infos" ref={itemComponent}>
      <AiFillCloseSquare className="exit" onClick={closeItemInfos}/>
      <div className="image">
        <img src={infos['image']} alt="decoration"/>
      </div>
      <div className="infos-list">
        <ul>
          <li className="item"><u>Project:</u><br /> {infos["name"]}</li>
          <li className="item"><u>Organisation:</u><br /> {infos["organisation"]}</li>
          <li className="item"><u>Description:</u><br /> {infos["description"]}</li>
          <li className="item"><u>Technologies:</u><br /> {infos["technologies"]}</li>
          <li className="item"><u>Leader:</u><br /> {infos["projectLeader"]}</li>
          <li className="item"><u>Developers:</u><br /> {infos["developers"]}</li>
        </ul>
      </div>
    </div>
  )
}

export default ItemInfos