import './styling/mimg.css';
import jane from './images/jane.jpg'

function MainImage(){

    return(
        <div className="img-container">
            <img src={jane} className="jane-img"/>
            <div className="img-txt">
                <h2>Jane's</h2>
                <h1>FASHION BLOG</h1>
                <button className="sub-btn">SUBCRIBE</button>
            </div>
        </div>
    )
}

export default MainImage