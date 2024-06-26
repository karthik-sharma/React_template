import avatar_girl2 from './images/avatar_girl2.jpg'
import spider from './images/spider.jpeg'
import batman from './images/batman.jpeg'
import Iron_Man from './images/Iron_Man.webp'
import hulk from './images/hulk.jpeg'
import black_widow from './images/black_widow.jpeg'
import './styling/right-cont.css';


function RightContainer(){

    return(
        <div className="container-right">
                <div className="right-img">
                    <img src={avatar_girl2}/>
                </div>
                <div className="content">
                    <h3>My Name</h3>
                    <p>Just me, myself and I, exploring the universe 
                        <br></br>
                        of uknownment. I have a heart of 
                        love and a interest of
                        <br></br> 
                        lorem ipsum and mauris neque quam blog. I want to 
                        <br></br>
                        share my world with you.
                    </p>
                </div>
                <div className="posts-container">
                    <h2 className="p-posts">Popular Posts</h2>
                </div>
                <div className="li-posts">
                    <ul className="user-posts">
                        <li>
                            <img src={spider} width="50px" height="60px"/>
                            <div className="text-container">
                                <h4>Spider Man</h4>
                                <p>The man with web</p>
                            </div>
                        </li>
                        <li>
                            <img src={batman} width="50px" height="60px"/>
                            <div className="text-container">
                                <h4>BatMan</h4>
                                <p>The real super hero</p>
                            </div>
                        </li>
                        <li>
                            <img src={hulk} width="50px" height="60px"/>
                            <div className="text-container">
                                <h4>Hulk</h4>
                                <p>The big guy</p>
                            </div>
                        </li>
                        <li>
                            <img src={Iron_Man} width="50px" height="60px"/>
                            <div className="text-container">
                                <h4>Iron Man</h4>
                                <p>The Leagend</p>
                            </div>
                        </li>
                        <li>
                            <img src={black_widow} width="50px" height="60px"/>
                            <div className="text-container">
                                <h4>Black Widow</h4>
                                <p>Beauty with Brains</p>
                            </div>
                        </li>
                    </ul>                        
                </div>
                    
            </div>
    )
}

export default RightContainer