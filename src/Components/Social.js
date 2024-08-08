// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import css from '../Styles/Social.module.scss'

const Social = () => {

    const navigate = useNavigate();

    

    const handleNavigate = page => {
        navigate(`/${page}`)
    }
    
    return (
        <div className={css.social}>

            {/* <div>
                <img
                    className="github_logo"
                    alt="github logo"
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
            </div> */}

            <div className={css.mediaLinks}>
                <div>
                    <div>
                        dev.to
                    </div>
                    <div>
                        url
                    </div>
                </div>

                <div>
                    <div>
                        linkedin
                    </div>
                    <div>
                        url
                    </div>
                </div>

                <div>
                    <div>
                        github
                    </div>
                    <div>
                        url
                    </div>
                </div>

                <div>
                    <div>
                        email
                    </div>
                    <div>
                        url
                    </div>
                </div>

            </div>
            <div className={css.disclaimer}>
            ALL CONTENTS OF THIS WEBSITE ARE THE PROPERTY OF ANDREW ALVAREZ. NO PART OF THIS SITE, INCLUDING ALL
            TEXT AND IMAGES, MAY BE REPRODUCED IN ANY FORM WITHOUT THE PRIOR WRITTEN CONSENT OF ANDREW ALVAREZ
            ©2024 BY ANDREW ALVAREZ.
            </div>

            <div onClick={() => handleNavigate("")} className="back_button">
                {" "}
                &rsaquo;{" "}
            </div>
        </div>
    )
}

export default Social;