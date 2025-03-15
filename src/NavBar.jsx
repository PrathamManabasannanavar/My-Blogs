import { Link } from "react-router-dom";
import "./styles/NavBar.css"
import userPhoto from "./assets/profile_icon.png"

function NavBar(){
    return (
        <div className="NavBar">
            <div className="ProfileBox">
                <div>
                    <img src={userPhoto} alt="Hello" className="userPhoto"/>
                </div>
                <div>
                    My Blogs
                </div>
            </div>

            {/* Home, contact,  */}
            <div className="ComponentBox">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/blogs">Blogs</Link>
                </div>
                <div>
                    <Link to="/contact">Contact me</Link>
                </div>
                
            </div>
        </div>
    )
}

export default NavBar;