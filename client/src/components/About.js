import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import logo from "../images/logo.jpg";
import warpspd from "../images/warpspd.png";

const About = () => {
const [userData,serUserData] =useState({});
const history = useHistory();
    const callAboutPage = async()=>{
        try{
            const res = await fetch('/about',{
              method:'GET',
              headers:{
                  Accept:"Application/json",
                  "Content-Type":"Application/json"
              },
              credentials:"include"  
            });
            const data = await res.json();
          console.log(data);
          serUserData(data);
    if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
    }
    
        } catch (err){
    console.log(err);
    history.push("/login");
        }
    }
    

useEffect(() => {
   callAboutPage();
}, []);

    return (
       <>
       <div className='container emp-profile'>
           <form method='POST'>
               <div className='row'>
                   <div className='col-md-4'>
                       <img src={userData.name === "Reeta1" ? logo:warpspd } alt="logo"/>
                   </div>

                   <div className='col-md-6'>
                       <div className='profile-head'>
                           <h5>{userData.name}</h5>
                           <h6>Web Developer</h6>
                           <p className='profile-rating mt-3 mb-5'>
RANKING: <span>1/10</span>

                           </p>


<ul className="nav nav-tabs" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="home-tab" data-toggle="tab"
     href="#home" role="tab">About</a>
  </li>
  <li className="nav-item">
  <a className="nav-link active" id="profile-tab" data-toggle="tab"
     href="#profile" role="tab">Timeline</a>
  </li>
 
</ul>
 </div>
 </div>


<div className='col-md-2'>
<input type="submit" className='profile-edit-btn' name='btnAddMore' value="Edit Profile"/>
</div>
</div>

<div className='row'>
    <div className='col-md-4'>
     <div className="profile-work">
         <p> Work Link</p>
         <a href='https://www.youtube.com/' target='_blank'> Youtube </a> <br/>
         <a href='https://www.youtube.com/' target='_blank'> Instargram </a> <br/>
         <a href='https://www.youtube.com/' target='_blank'> Web Developer </a><br/>
         <a href='https://www.youtube.com/' target='_blank'> Figma </a> <br/>
         <a href='https://www.youtube.com/' target='_blank'> Software Engeer </a> <br/>
         </div>  
    </div>


    <div className='col-md-8 pl-5 about-info'>
<div className='tab-content profile-tab' id='myTabContent'>
<div className="tab-pane fade show active" id='home' role="tabpanel" aria-labelledby="home-tab">

<div className='row'>
<div className='col-md-6'>
<label>User ID</label>
<p>55115222533</p>
</div>
</div>

<div className='row'>
<div className='col-md-6'>
<label>Name</label>
<p>{userData.name}</p>
</div>
</div>

<div className='row'>
<div className='col-md-6'>
<label>Email</label>
<p>{userData.email}</p>
</div>
</div>

<div className='row'>
<div className='col-md-6'>
<label>Phone</label>
<p>{userData.phone}</p>
</div>
</div>

<div className='row'>
<div className='col-md-6'>
<label>Profession</label>
<p>{userData.work}</p>
</div>
</div>



</div>

</div>
         </div>


</div>

           </form>
       </div>
       </>
    );
};

export default About;