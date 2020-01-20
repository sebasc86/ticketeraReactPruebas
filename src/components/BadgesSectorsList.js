import React,{Component} from 'react';

export default class BadgeSectorList extends Component {
    

  render() {
    const sector = this.props.sectors
    console.log(sector)
 
    if (sector) {
      const sectorsBody = this.props.sectors.body 
      
      return (
          <React.Fragment>
          {sectorsBody.filter(sector => sector.name !== 'Telecentro').map((sector) => {
            
            return (

            <div key={sector.id} className="index card bg-light mb-3 info">
						<div className="card-header h6 bg-primary text-white">{sector.name}</div>
							<a className="card-body link-container"  href="new">
								<div className="row align-items-center">
										<img className='imgIndex' src={require(`./img/${sector.name}.png`)}alt={sector.name} />
								</div>
							</a>
					</div>


            )
          })}
        </React.Fragment>
      );
    }

    return <div></div>

    }
}