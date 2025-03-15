import styles from "./styles/Blogs.module.css"
import SpaceBox from "./SpaceBox"
import jsonData from "./assets/Blogs.json"
// import { useState } from "react"


function Blogs(){
    // const [scrollPos, setScrollPos] = useState(0)

    return (
        <>
            <SpaceBox/>
            <div className={styles.BlogsTitle}>
                My Blogs
            </div>
            <hr className={styles.hrLine}/>
            <div className={styles.BlogsBox}>
                {jsonData.map((blog, index) => {
                    return(
                    <div key={blog.id} className={styles.ContentBox}>
                        <div className={styles.TitleBox}>
                            {index+1}. {blog.title}
                        </div>
                        <div className={styles.descriptionBox}>
                            <p className={styles.elements}>{blog.content}</p>
                            <div className={styles.elements}>
                                Date: {blog.date}
                            </div>
                            <div className={styles.elements}>
                                <a href={blog.url} target="_main">View Paper</a>
                            </div>
                        </div>

                    </div>
                    )
                })}
            </div>


        </>
    )
}

export default Blogs