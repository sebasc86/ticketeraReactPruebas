import React from 'react'
import newTicketImg from '../components/img/add_document.png'
import sendTicketImg from '../components/img/send.png'
import getTicketImg from '../components/img/recibido.png'
import Badges from '../components/Badges'
import Navbar from '../components/Navbar'

class Home extends React.Component {
    
    render() {
      
        return (
            <React.Fragment>
              
               <Navbar/>
               <div className="">
                <div className="container px-5 mt-4 d-flex justify-content-between">

                <Badges TicketImg={newTicketImg} title="Crear Nuevo ticket" alt="Nuevo ticket"/>
                <Badges TicketImg={sendTicketImg} title="Tickets Enviados" alt="Tickets Enviados"/>
                <Badges TicketImg={getTicketImg} title="TIckets Recibidos" alt="Tickets Recibidos"/>

                </div>
                
               </div>
               
             
            </React.Fragment>
          );
    }
    
  }
  
  export default Home