import React from 'react';
import ProfileImg from '../Arash_Zakeresfahani.png';


function NoteCard(){
  return(
	<a className="card" style={{width: "18rem", color: "inherit", textDecoration: "none"}} href="#">
	  <img className="card-img-top" src={ProfileImg} alt="Card image cap"/>
	  <div className="card-body">
	    <h5 className="card-title">Card title</h5>
	    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	    <a href="#" className="btn btn-primary">Read More</a>
	  </div>
	  <div class="card-footer">
	      <small class="text-muted">Last updated 3 mins ago</small>
	  </div>
	</a>

  );
}

export default NoteCard;



