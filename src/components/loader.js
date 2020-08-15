import React from 'react';
import tenor from '../assets/tenor.gif'

const Loader = () =>{
  return (
    <div className="col-12 loader_outer" align="center">
      <img src={tenor} />
    </div>
  );
}

export default Loader;