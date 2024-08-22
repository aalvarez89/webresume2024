import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GlobalSiteContext, siteActionTypes } from '../Store/GlobalSiteContext';

import resumePdf from '../Assets/AndrewResume2024_ln.pdf'
import css from '../Styles/Shell.module.scss'

const Shell = () => {
    const { globalSiteState, globalSiteDispatch } = useContext(GlobalSiteContext);

    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const [ currentTab, setCurrentTab ] = useState('home');

    const handleNavigate = (page, currentTab) => {
        if (currentTab === 'home') {

            globalSiteDispatch({ type: siteActionTypes.SET_OPENTITLE, payload: !globalSiteState.openTitle})
            } else {
                globalSiteDispatch({ type: siteActionTypes.SET_OPENTITLE, payload: false})
                navigate(`/${page}`)
        }
    }

    const getCtaStyle = tab => {

        switch (tab) {
            case 'portfolio': return css.ctaRed;
            case 'social': return css.ctaOrn;
            case 'blog': return css.ctaBlu;
        
            default: return css.ctaGrn;
        }
    }

    useEffect(() => {
        setCurrentTab(pathname.slice(1) || 'home')
        
    }, [pathname, location])
    
    return (
        <>
            <div className={css.shell} >
                <div className={`${css.main} ${ !globalSiteState.openTitle ? css.openTitle : ''}`} onClick={() => handleNavigate('', currentTab) }><span className={`${css.brackets} ${ !globalSiteState.openTitle ? css.neutral : ''}`}>&#123;</span>&nbsp; I'M ANDREW &nbsp;<span className={`${css.brackets} ${ !globalSiteState.openTitle ? css.neutral : ''}`}>&#125;</span></div>
                <div className={`${css.resume} ${getCtaStyle(currentTab)}`}>
                    <Link to={resumePdf} target='_blank' download>RESUME</Link>
                </div>
                
            </div>
        </>
    )
}

export default Shell;