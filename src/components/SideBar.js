import React from 'react'
import '../style/SideBar.scss'

function SideBar (props) {
  return (
    <div>
      <button className={'SideBar-'+props.color}>{props.name}</button>
    </div>
  )
}

export default SideBar
