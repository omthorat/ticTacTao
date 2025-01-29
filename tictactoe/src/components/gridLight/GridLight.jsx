import React, { useState } from "react";
import './grid.css'

function Cell({filled,onClick,isDisabled}){
  return<button className={filled?'cell cell-active':'cell'} disabled={isDisabled} onClick={onClick} ></button>
}
const GridLight = () => {
  const [deactiveCell, setDeactiveCell]=useState(false)
  const [order,setOrder]=useState([])
 const config=[
  [1,1,1],
  [1,0,1],
  [1,1,1]
 ]
 const deactivateCells=()=>{
  setDeactiveCell(true)
  const timer=setInterval(()=>{
     setOrder((order)=>{
   const newOrder=order.slice()
   newOrder.pop()
   if(newOrder.length===0){
    clearInterval(timer)
    setDeactiveCell(false)
   }
   return newOrder
     })
     
  },300)
  
 }
 const activateCells=(index)=>{
  let newOrder=[...order,index]
  setOrder(newOrder)
  if(newOrder.length===config.flat(1).filter(Boolean).length){
    deactivateCells()
  }

 }
  return (
    <div className="grid" style={{gridTemplateColumns: `repeat(${config[0].length}, 1fr)`}}>
      {
        config.flat(1).map((value,index)=>
        {return value?<Cell key={index} filled={order.includes(index)} onClick={()=>activateCells(index)}
         isDisabled={order.includes(index) || deactiveCell} 
         />:<span/>})
      }
    </div>
  );
};

export default GridLight;
