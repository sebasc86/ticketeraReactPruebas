import React, { Component } from 'react'

import './styles/Badges.css'

export default class Badges extends Component {
	render() {
        return (
					<React.Fragment>

								
					<div className="index card bg-light mb-3 info">
						<div className="card-header h6 bg-primary text-white">{this.props.title}</div>
							<a className="card-body link-container"  href="new">
								<div className="row align-items-center">
										<img className='imgIndex' src={this.props.TicketImg} alt={this.props.alt} />
								</div>
							</a>
					</div>

						
						
					</React.Fragment>

					
        )
    }
}
