import React from 'react'
import Navbar from '../components/Navbar'
import Tickets from '../components/Tickets'


export default class TicketsContainer extends React.Component {
    state = {
      loading: true,
      error: null,
      data: undefined,
    }
    
    componentDidMount() {
      let url = `http://127.0.0.1:3005/user`;

      fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          loading: true,
          data: response
        })
      })
      .catch( (error) => {
        this.setState({
          loading: false,
          error: error
        })
      })
    }
    
    
    render() {
        const sectorId = this.props.match.params
        
        return (
            <React.Fragment>

               <Navbar/>
               <Tickets users={this.state.data} sector={sectorId}/>
               
            </React.Fragment>
          );
    }
    
  }