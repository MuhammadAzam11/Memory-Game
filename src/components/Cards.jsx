import React from 'react'

const Cards =({item ,id, handleClick})=>{
    const itemClass =item.stat ? " active " +item.stat : "" ;
  return (
    <div className={"card" + itemClass} onClick={()=>handleClick(id)}>
      <img src={item.img} alt=''/>
    </div>
  )
}

export default Cards
