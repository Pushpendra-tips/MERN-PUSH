import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <>
           <div id="notfound">
               <div class="notfound">
                   <div class="notfound-404">
                       <h1>404</h1>
                   </div>
                   <h2>We are sorry, page not found!</h2>
                   <NavLink to="/">Back to HomePage</NavLink>
               </div>
               </div> 
        </>
    );
};

export default Errorpage;