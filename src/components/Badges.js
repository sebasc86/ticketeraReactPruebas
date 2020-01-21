import React, { Component } from 'react'

import './styles/Badges.css'

export default class Badges extends Component {
	render() {
        return (
					<React.Fragment>

								
					<div className="index card bg-light mb-3 info">
						<div className="card-header h6 bg-primary text-white">{this.props.title}</div>
							<div className="card-body">
								<a className="card-link"  href="new">
									<div className="img-container d-flex align-items-center">
											<img className='imgIndexBadges mx-auto d-block' src={this.props.TicketImg} alt={this.props.alt} />
									</div>
								</a>
							</div>
						
					</div>

						
						
					</React.Fragment>

					
        )
    }
}
