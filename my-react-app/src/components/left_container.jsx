import girl_hat from './images/girl_hat.jpg'
import React, {useState} from 'react';
import './styling/left-cont.css';

function LeftContainer(){

    const [likes, setLikes] = useState(0);

    const upgrade = (e) => {
        const newLikes = likes+1
        setLikes(newLikes)
        const buttonContent = e.target.textContent;
        const baseText = buttonContent.split('(')[0]; 
        e.target.textContent = `${baseText}(${newLikes})`
    };

    return(
        <div className="container-left">
                <div className="header-class-he">
                    <h3>TITLE HEADING</h3>
                    <p>description</p>
                </div>
                <div className="image-class-he">
                    <img src={girl_hat} className="hat-img"/>
                    <p className="data">
                        More Hats! I am crazy about hats these days. Some text about this blog entry. Fashion 
                        fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. 
                        Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan 
                        tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt 
                        sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida 
                        diam non fringilla.
                        <br></br>
                        Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco.
                    </p>
                </div>
                <button onClick={(e) => upgrade(e)} className="btn-like">✅ Likes</button>
                <button className="btn-reply">Replies</button>
            </div>
    )
}

export default LeftContainer