import React, { Component } from 'react'
import newTicket from '../components/img/add_document.png'
import './styles/Badges.css'

export default class Badges extends Component {
    render() {
        return (
            <div>
               

											<div class="row justify-content-between mb-3">
													<div class="index card bg-light mb-3 info">
														<div class="card-header h6 bg-primary text-white">{this.props.title}</div>
															<a class="card-body link-container"  href="new">
																<div class="row align-items-center">
																		<img class='imgIndex' src={newTicket} alt={this.props.alt} />
																</div>
															</a>
													</div>
											</div>
										
                	             
            </div>


					
        )
    }
}
