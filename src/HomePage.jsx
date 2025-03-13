import SpaceBox from "./SpaceBox"
import "./styles/HomePage.css"

function HomePage(){
    return (
        <div className="ParentBox">
            <SpaceBox/>
            <div className="ContentBox">
                <div className="IntroBox">
                    <div className="Intro-Title">
                        Hello, I am Your_Name 👋😊
                    </div>
                    <div className="Intro-Title2">
                        Welcome to My Blogs! Here, we share insightful stories, tips, and inspiration on a variety of topics. Dive in, explore, and join the conversation!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage