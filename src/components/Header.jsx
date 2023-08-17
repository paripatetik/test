import { useContext } from "react"
import { AppContext } from "../App"


export default function Header() {
  const {setActualImg, actualImg, data} = useContext(AppContext);

  return (
    <header className="header">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.188 18.813H4.374M23.625 18.813h-3.063M18.375 21a2.188 2.188 0 1 0 0-4.375 2.188 2.188 0 0 0 0 4.375ZM9.188 9.188H4.375M23.625 9.188H13.562M11.375 11.375a2.188 2.188 0 1 0 0-4.375 2.188 2.188 0 0 0 0 4.375Z"/></svg>
        </button>
        <div className="header__pagination">
          {data[0].img.map((e,i)=> <button className={actualImg == i ? "header__btn active": "header__btn"} key={i} onClick={()=> setActualImg(i)}/> )}
        </div>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.147 12.25a7.853 7.853 0 1 1 15.706 0v0c0 3.916.82 6.19 1.542 7.438A.875.875 0 0 1 22.641 21H5.359a.875.875 0 0 1-.754-1.313c.722-1.246 1.542-3.521 1.542-7.437ZM10.5 21v.875a3.5 3.5 0 1 0 7 0V21M20.06 2.625a11.484 11.484 0 0 1 4.156 4.605M3.784 7.23a11.484 11.484 0 0 1 4.157-4.605"/></svg>
        </button>
    </header>
  )
}