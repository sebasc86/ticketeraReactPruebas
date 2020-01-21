import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class BadgeSectorList extends Component {
    

  render() {
    const sector = this.props.sectors
   //
 
    if (sector) {
      const sectorsBody = this.props.sectors.body 
      
      return (
          <React.Fragment>
          {sectorsBody.filter(sector => sector.name !== 'Telecentro').map((sector) => {
            
            return (

            <div key={sector.id} className="index card bg-light mb-3 info">
                <div className="card-header h6 bg-primary text-white">{sector.name}</div>
                <div className="card-body">
                  <Link className="card-link" to={`/ticket/${sector.user_id}`}>
                    <div className="img-container d-flex align-items-center ">
                        <img className="imgIndexSectors mx-auto d-block" src={require(`./img/${sector.name}.png`)}alt={sector.name} />
                    </div>
                  </Link>
                </div>
                
					</div>


            )
          })}
        </React.Fragment>
      );
    }

    return <div></div>

    }
}