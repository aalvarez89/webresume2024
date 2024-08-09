// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BlogPost } from './';
import css from '../Styles/Blog.module.scss'

const Blog = () => {

    const navigate = useNavigate();

    

    const handleNavigate = page => {
        navigate(`/${page}`)
    }
    
    return (
            <div className={css.blog}>
            {/* <div className="subpage blog_page"> */}
                <BlogPost />
                <div onClick={() => handleNavigate("")} className="back_button">
                    {" "}
                    &rsaquo;{" "}
                </div>
            </div>
            );
}

export default Blog;