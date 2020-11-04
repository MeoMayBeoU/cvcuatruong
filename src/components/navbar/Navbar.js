import React, { Component } from 'react';
//import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {
	render() {
		return (
			<>
				<nav className='light-pink darken-9'>
					<div className='container'>
						<div className='nav-wrapper'>
							<Link to='/' className='brand-logo'>
							<i class="far fa-address-card"></i>
							</Link>
							<Link to='/' data-target='side-nav' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</Link>
							<ul className='right hide-on-med-and-down'>
								<li>
									<Link to='/'>
										<i class='fas fa-home'></i> HOME
									</Link>
								</li>
								<li>
									<Link to='/skills'>
										<i class="fab fa-accusoft"></i> SKILLS
									</Link>
								</li>
								<li>
									<Link to='/experiences'>
										<i class="fas fa-chess"></i> EXPERIENCES
									</Link>
								</li>
								<li>
									<Link to='/educations'>
										<i class='fas fa-graduation-cap'></i> EDUCATIONS
									</Link>
								</li>
								<li>
									<Link to='/portfolios'>
										<i class='fas fa-address-card'></i> PORTFOLIOS
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<ul className='sidenav' id='side-nav'>
					<li>
						<Link to='/'>
							<i class='fas fa-home'></i> Home
						</Link>
					</li>
					<li>
						<Link to='/skills'>
							<i class='fas fa-copy'></i> Skills
						</Link>
					</li>
					<li>
						<Link to='/experiences'>
							<i class='fas fa-id-badge'></i> Experiences
						</Link>
					</li>
					<li>
						<Link to='/educations'>
							<i class='fas fa-graduation-cap'></i> Educations
						</Link>
					</li>
					<li>
						<Link to='/portfolios'>
							<i class='fas fa-address-card'></i> Portfolios
						</Link>
					</li>
				</ul>
			</>
		);
	}
}
