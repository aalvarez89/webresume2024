import { useNavigate } from "react-router-dom";
import css from '../Styles/Error404.module.scss'

import { GoArrowUpRight } from "react-icons/go";

function Error404() {
  
  const navigate = useNavigate();
  const handleNavigate = page => {
      navigate(`/${page}`)
    }

  return <div className={css.error404}>
    <div className={css.wrapper}>
      <p>4</p>
      <p>0</p>
      <p>4</p>
    </div>
    
    <div className={css.message}>The page you're trying to find doesn't exist!</div>
    
    <div className={css.homeCTA}>
        <p onClick={() => handleNavigate("")}>Take me home <span className={css.spacer}>
        <GoArrowUpRight size={36} color={css.grn} /></span>
        </p>
    </div>
  </div>
}

export default Error404