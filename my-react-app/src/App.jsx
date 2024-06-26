import NavBar from './components/navbar.jsx'
import Header from './components/header.jsx'
import MainImage from './components/main_img.jsx';
import ContainerLeftRight from './components/container.jsx';
import { Helmet } from 'react-helmet';

const App = () => {
 
  return (
    <div>
      <Helmet>
        <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css?family=Oswald"
        />

      </Helmet>
      <NavBar />
      <Header />
      <MainImage />
      <ContainerLeftRight />
    </div>
    
  )
}

export default App