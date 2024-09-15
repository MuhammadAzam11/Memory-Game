import React, { useState } from 'react'
import Cards from './Cards'
import { aa, bb, cc, dd, ee, ff, gg, hh } from './img'
const Card=() => {
    const [items, setItmes] = useState([
        { id: 1, img: aa, stat: "" },
        { id: 1, img: aa, stat: "" },
        { id: 2, img: bb, stat: "" },
        { id: 2, img: bb, stat: "" },
        { id: 3, img: cc, stat: "" },
        { id: 3, img: cc, stat: "" },
        { id: 4, img: dd, stat: "" },
        { id: 4, img: dd, stat: "" },
        { id: 5, img: ee, stat: "" },
        { id: 5, img: ee, stat: "" },
        { id: 6, img: ff, stat: "" },
        { id: 6, img: ff, stat: "" },
        { id: 7, img: gg, stat: "" },
        { id: 7, img: gg, stat: "" },
        { id: 8, img: hh, stat: "" },
        { id: 8, img: hh, stat: "" }
    ].sort(() =>Math.random() - 0.5))
    const [prev,setPrev]=useState(-1)
    function check(current){
        if(items [current].id == items[prev].id){
            items[current].stat="correct"
            items[prev].stat= "correct"
            setItmes([...items])
            setPrev(-1)
        }else{
            items[current].stat="wrong"
            items[prev].stat="wrong"
            setItmes([...items])
            setTimeout(()=>{
                items[current].stat=""
                items[prev].stat=""
                setItmes([...items])
                setPrev(-1)
            },1000)
        }
    }
    function handleClick(id){
        if(prev === -1){
            items[id].stat= "active"
            setPrev(id)
        }else{
            check(id )
        }
        
    }
    return (
        <div className='container'>
            {items.map((item , index) => (
                <Cards key={index} item={item} id={index} handleClick={handleClick} />
            ))}

        </div>
    )
}

export default Card
