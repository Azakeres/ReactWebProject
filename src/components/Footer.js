import React from 'react';


function Footer(){
  return(
<footer className="page-footer font-small darken-3">

  <div className="container">

    <div className="row mt-4">

      <div className="col-md-12 mt-5">
        <div className="flex-center mt-5">
          <a className="fb-ic" href="https://www.facebook.com/arash.zaker" style={{color: "inherit"}}>
            <i className="fab fa-facebook-f mr-4 fa-2x"> </i>
          </a>
          <a className="tw-ic" href="https://twitter.com/ArashZaker" style={{color: "inherit"}} >
            <i className="fab fa-twitter mr-4 fa-2x"> </i>
          </a>
          <a className="li-ic" href="https://www.linkedin.com/in/arash-zakeresfahani-05247017a/" style={{color: "inherit"}}>
            <i className="fab fa-linkedin-in mr-4 fa-2x"> </i>
          </a>
          <a className="ins-ic" href="https://www.instagram.com/arashzaker/" style={{color: "inherit"}}>
            <i className="fab fa-instagram mr-4 fa-2x"> </i>
          </a>
        </div>
      </div>

    </div>

  </div>
      <div className="text-center pr-3 pt-2">

      <h6>azakeres@iu.edu</h6>

      </div>
</footer>
  );
}

export default Footer;