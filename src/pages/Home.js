import React from 'react'
import Navbar from '../components/Navbar'
import BadgesContainer from './BadgesContainer'


class Home extends React.Component {
    
    render() {
      
        return (
            <React.Fragment>
              
               <Navbar/>
               <BadgesContainer />
               
             
            </React.Fragment>
          );
    }
    
  }
  
  export default Home