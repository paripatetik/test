import { useContext, } from "react"
import { AppContext } from "../App"


export default function Info() {
  const {data} = useContext(AppContext);
 

  return (
          <div className="info">
            <div className="info__title">{data[0].name}, {data[0].age}</div>
            <div className="info__tags">
              {data[0].tags.map((elem, i) => <span className="info__tag" key={i}>{elem}</span> )}
            </div>
            <p>{data[0].desc}</p>
          </div>
  )
}