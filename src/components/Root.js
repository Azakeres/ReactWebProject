import React from 'react';
import Navbar from './Navbar.js';

function Root() {
		return(
			<div>
			<div>
			<Navbar />
			</div>
			<div>
			{this.props.children}
			</div>
			</div>


			);
	
}

export default Root;