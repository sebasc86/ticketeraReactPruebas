import React from 'react'
import logo from '../components/img/telecentroLogo.png'
import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
              
              <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
								<div className="container">
								
									<a className="navbar-brand px-2 px-md-4" href="">
										<img className="imgHeader" src={logo} alt="Telecentro Logo"/>
									</a>
								
									<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
											<span className="navbar-toggler-icon"></span>
									</button>
									<div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav mr-auto">
										
                    </ul>
										<ul class="navbar-nav ml-auto px-3">
										<li class="nav-item active">
											<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#">Features</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#">Pricing</a>
											</li>
										</ul>
								
									</div>
								</div>
              </nav>

            </React.Fragment>
          );
    }
    
  }
  
  export default Navbar
  