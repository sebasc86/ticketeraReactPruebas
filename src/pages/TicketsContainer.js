import React from 'react'
import Navbar from '../components/Navbar'
import Tickets from '../components/Tickets'


export default class TicketsContainer extends React.Component {
    
    render() {
      
        return (
            <React.Fragment>
              
               <Navbar/>
               <Tickets />
               
             
            </React.Fragment>
          );
    }
    
  }