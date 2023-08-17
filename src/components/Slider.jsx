import { AppContext } from "../App";
import { useContext } from "react";

export default function Slider() {
    const {data, actualImg} = useContext(AppContext);
   
  return (

        <div className="slider">
            <div className="slider__list" style={{ transform: `translateX(-${actualImg * 100}%)` }}>
                {data[0].img.map((e, i)=> <div className="slider__slide" key={i}>
                    <img src={e}/>
                </div>)}
            </div>
        </div>

  )
}