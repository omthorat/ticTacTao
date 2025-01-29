import { useEffect, useState } from 'react'
import './progress.css'

const ProgressBar=({value})=>{
    const [progressBar,setProgressBar]=useState(value)
    // console.log(value)
    useEffect(()=>{
        setProgressBar(Math.min(100,Math.max(value,0)))
    },[value])
    return(<>
         <div className="progress">
            <span className="progressValue" style={{color:progressBar>49?'white':'black'}}>{progressBar}</span>
            <div className='progressbar' style={{ width:`${progressBar}%`}}></div>
         </div>
        </>)
}
export default ProgressBar