// import { useRef, useState } from "react";

const BlogPost = (props) => {
  const data = [
    {
      title: "How to be a Hackerman",
      url: "https://dev.to/aalvarez89/how-to-be-a-hackerman-hmj",
      date: "11/1/2021",
      tags: ["linux", "hack", "terminal"]
    },
    {
      title: "Async Components, FileReader, and Angular",
      url:
        "https://dev.to/aalvarez89/async-components-filereader-and-angular-1fdd",
      date: "12/3/2020",
      tags: ["async", "i/o", "js"]
    }
  ];

  return (
    <>
      {data.map((d) => (
        <div className="blog-post">
          <a href={d.url} target="_blank" rel="noreferrer">
            <div className="blog-post-title">{d.title}</div>
            <div className="blog-post-metadata">
              <div className="blog-post-date">{d.date}</div>
              <div className="blog-post-tags">
                {d.tags.map((t) => (
                  <div className="tag">#{t}</div>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default BlogPost;
