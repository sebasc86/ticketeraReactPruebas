import React, { Component } from 'react';
import newTicketImg from '../components/img/add_document.png'
import sendTicketImg from '../components/img/send.png'
import getTicketImg from '../components/img/recibido.png'
import Badges from '../components/Badges'
import BadgesSectorsList from '../components/BadgesSectorsList'

export default class BadgeSectorContainer extends Component {

  state = {
    loading: true,
    error: null,
    data: undefined,
  }
  
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })
    await fetch('http://localhost:3005/sector')
        .then(response => response.json())
        .then(data => {
          const datas = data
          
          this.setState({
            data: datas,
            loading: false,
          })
          
        })
        .catch(e => {
          this.setState({
            loading: false,
            error: e
          })
        })
  }

  // componentDidMount() {
  //   this.fetchData()
  //   this.internvalId = setInterval(this.fetchData, 100000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.internvalId )
  // }
  

  render() {
    
      return (
         
        <div className="class-name">
         
         
              <div className="container mt-5 px-5">
                <div className="card-columns px-5 mt-4 justify-content-between">

                <Badges TicketImg={newTicketImg} title="Crear Nuevo ticket" alt="Nuevo ticket"/>
                <Badges TicketImg={sendTicketImg} title="Tickets Enviados" alt="Tickets Enviados"/>
                <Badges TicketImg={getTicketImg} title="TIckets Recibidos" alt="Tickets Recibidos" />
                

                </div>
                <div className="card-columns px-5 mt-4 justify-content-between">
                  <BadgesSectorsList sectors={this.state.data}/>
                </div>
                
               </div>
            
             
              
            
               
        </div>
        );
    }
}