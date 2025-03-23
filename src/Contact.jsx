import SpaceBox from "./SpaceBox";
import style from "./styles/Contact.module.css"
import PropTypes from 'prop-types';

function Contact(){
    return(
        <div className={style.ParentBox}>
            <SpaceBox/>   
            <div className={style.ContentBox}>
                <div className={style.DetailsBox}>
                    <KeyValueDetails platform="Email" link="xyz@gmail.com"/>
                    <KeyValueDetails platform="LinkedIn" link="https://www.linkedin.com"/>
                    <KeyValueDetails platform="Github" link="https://github.com"/>
                </div>
                
            </div>     
        </div>
    )
}

function KeyValueDetails({platform, link}){
    return(
        <div className={style.platformLink}>
            <span>
                {platform}
            </span>
            <span>
               <pre> : </pre>
            </span>
            <span>
                <a href={link}>{link}</a>
            </span>
        </div>
    )
}

KeyValueDetails.propTypes = {
    platform : PropTypes.string.isRequired,
    link : PropTypes.string.isRequired
}

export default Contact