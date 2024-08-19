// import { useRef, useState } from "react";
import { IoIosTimer } from "react-icons/io";

import css from '../Styles/Blog.module.scss'

import hackermanHero from '../Assets/hackerman2.png'
import filereadHero from '../Assets/Gemini_Generated_Image_ik05i0ik05i0ik05.jpg'


const BlogPost = (props) => {
  const posts = [
    {
      title: "How to be a Hackerman",
      url: "https://dev.to/aalvarez89/how-to-be-a-hackerman-hmj",
      date: "11/1/2021",
      readingTime: '6-8',
      banner: hackermanHero,
      tags: ["linux", "hack", "terminal"]
    },
    {
      title: "Async Components, FileReader, and Angular",
      url:
        "https://dev.to/aalvarez89/async-components-filereader-and-angular-1fdd",
      date: "12/3/2020",
      readingTime: '5',
      banner: filereadHero,
      tags: ["async", "i/o", "js"]
    }
  ];

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className={css.blog}>

      <div className={css.postsWrapper}>
        {posts.map((p, i) => (
          <div className={css.post} key={i} onClick={() => openInNewTab(p.url)}>
            <div className={css.postTop}>
              <div className={css.title}>{p.title.toUpperCase()}</div>

              <div className={css.metadata}>
                <button className={css.postCTA}>Read More</button>
                
                <div className={css.date}>{p.date}</div>

                <div className={css.readingTime}><IoIosTimer />{p.readingTime}</div>
              </div>

            </div>

            <div className={css.postBot}>
              <img alt="post-description" src={p.banner} className={css.postBanner}></img>

              
              <div className={css.tagsContainer}>
                {p.tags.map((t, i) => (
                  <div key={i} className={css.tag}>#{t}</div>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default BlogPost;
