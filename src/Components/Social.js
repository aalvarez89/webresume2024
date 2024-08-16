import { GoArrowUpRight } from "react-icons/go";

import css from '../Styles/Social.module.scss'

const Social = () => {


    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    const openMailClient = e => {
        window.location.href = 'mailto:hikweizar@gmail.com?subject=Kweizar Collab - Write your name here!';
        e.preventDefault();
      };
    
    return (
        <div className={css.social}>            

            <div className={css.title}>
                <div>LET'S <span className={css.accent}>PARTNER UP</span></div>
                <div className={css.titleBot}>AND COLLABORATE</div>
            </div>

            <div className={css.mediaLinks}>
                <div className={css.linkGrid} onClick={() => openInNewTab("https://dev.to/aalvarez89")} >
                    <div className={css.network}>
                        dev.to
                    </div>
                    <div className={css.tag}>
                        @aalvarez89
                    </div>
                    <div>
                        <GoArrowUpRight />
                    </div>
                </div>

                <div className={css.linkGrid} onClick={() => openInNewTab("https://www.linkedin.com/in/andrewealvarez/")} >
                    <div className={css.network}>
                        linkedin
                    </div>
                    <div className={css.tag}>
                        @andrewealvarez
                    </div>
                    <div>
                        <GoArrowUpRight />
                    </div>
                </div>

                <div className={css.linkGrid} onClick={() => openInNewTab("https://github.com/aalvarez89")} >
                    <div className={css.network}>
                        github
                    </div>
                    <div className={css.tag}>
                        @aalvarez89
                    </div>
                    <div>
                        <GoArrowUpRight />
                    </div>
                </div>

                <div className={`${css.linkGrid}`} onClick={(e) => openMailClient(e)} > 
                    <div className={css.network}>
                        email
                    </div>
                    <div className={css.tag}>
                    hikweizar@gmail.com
                    </div>
                    <div>
                        <GoArrowUpRight />
                    </div>
                </div>

                <div className={css.disclaimer}>
                    ALL CONTENTS OF THIS WEBSITE ARE THE PROPERTY OF ANDREW ALVAREZ. NO PART OF THIS SITE, INCLUDING ALL
                    TEXT AND IMAGES, MAY BE REPRODUCED IN ANY FORM WITHOUT THE PRIOR WRITTEN CONSENT OF ANDREW ALVAREZ
                    <div className={css.copyright}>
                        ©2024 BY ANDREW ALVAREZ.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social;