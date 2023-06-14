import React from 'react';
import pp from './profile-picture.gif';


const cards =()=>{
    return (
        <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pp} className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Valleree D. Joseph</h5>
              <p className="card-text">BS Computer Science, Application Development using React.js.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
);
};
export default cards;
