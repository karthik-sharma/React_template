import LeftContainer from "./left_container.jsx"
import RightContainer from "./right_container.jsx"
import './styling/container.css';

function ContainerLeftRight(){

    return(
        <div className="container">
            <LeftContainer />
            <RightContainer />

        </div>
    )
}

export default ContainerLeftRight