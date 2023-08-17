import {  useState } from "react"
import btns from "../btns";
import { Link } from "react-router-dom";

export default function Footer() {
  const [active, setActive] = useState(0);
  return (
    <footer>
          <div className="footer__btns">
          {btns.map((elem, i)=> <Link to={i==2 ? 'form': '/'} key={i} onClick={()=>setActive(i)} className={active == i && 'active'}> {elem} </Link> )}
          </div>

    </footer>
  )
}