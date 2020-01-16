import React from 'react'
import Badges from '../components/Badges'
import Navbar from '../components/Navbar'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                
               <Navbar/>
               <div className="container px-5 mt-5">
                <Badges title="Crear Nuevo ticket" alt="Nuevo ticket"/>
               </div>
               
             
            </React.Fragment>
          );
    }
    
  }
  
  export default Home