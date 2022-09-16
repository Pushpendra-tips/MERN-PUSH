import React, { useEffect,useState } from 'react';

const Contact = () => {

    const [userData,setUserData] =useState({name:"",email:"",phone:"",message:""});
          const userContact = async()=>{
            try{
                const res = await fetch('/getdata',{
                  method:'GET',
                  headers:{
                "Content-Type":"Application/json"
                  },
                    
                });
                const data = await res.json();
              console.log(data);
              setUserData({...userData, name:data.name, email:data.email, phone:data.phone});
        if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
        }
        
            } catch (err){
        console.log(err);
        
            }
        }
        
    
    useEffect(() => {
    userContact();
    }, []);


    // we are storing data in states
const handleInputs=(e)=>{
const name = e.target.name;
const value = e.target.value;
setUserData ({...userData,[name]:value})
}

// set data to the backend
const contactForm= async (e)=>{
    e.preventDefault();
    const {name,email,phone,message} = userData;
const res = await fetch('/contact',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name,email,phone,message  
    })
});
const data = await res.json();
if(!data){
    console.log("message not send")
    }else{
    alert("message send");
    setUserData({...userData, message:""});
    }
    
}

    return (
      <>
      <div className='contact_info'>
          <div className='container-fluid'>
              <div className='row'>
                  <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>


<div className='contact_info_item d-flex justify-content-start align-items-center'>
{/* <img src='' alt='phone'/> */}
<div className='contact_info_title'>
 Phone:
</div>
<div className='contact_info_text'>
    +91 8826565917
</div>
</div>



<div className='contact_info_item d-flex justify-content-start align-items-center'>
{/* <img src='' alt='phone'/> */}
<div className='contact_info_title'>
Email: 
</div>
<div className='contact_info_text'>
    pushpendra@gmail.com
</div>
</div>


<div className='contact_info_item d-flex justify-content-start align-items-center'>
{/* <img src='' alt='phone'/> */}
<div className='contact_info_title'>
 Address:
</div>
<div className='contact_info_text'>
    Noida sector 22
</div>
</div>

                  </div>
              </div>
          </div>


<div className='contact_form'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
                <div className='contact_form_container py-5'>
<div className='contact_form_title'>
    Get in Touch
</div>

<form method='POST' id='contact_form'>
<div className='contact_form_name d-flex justify-content-between align-items-between'>

<input type="text" id="contect_form_name" value={userData.name} name="name"
placeholder="Your name" required="true" onChange={handleInputs}
 className="contact_form_name input_field"/>


<input type="email" id="contect_form_email" value={userData.email} name="email"
placeholder="Your Email" required="true" onChange={handleInputs}
 className="contact_form_email input_field"/>


<input type="number" id="contect_form_phone" onChange={handleInputs}  name="phone"
placeholder="Your phone Number" required="true"value={userData.phone}
 className="contact_form_phone input_field"/>
</div>

<div className='contact_form_text mt-5'>
    <textarea className='text_field contact_form_message' name='message'
     placeholder='Message' value={userData.message} onChange={handleInputs}
     id="" cols="30" rows="10">

    </textarea>
</div>

<div className='contact_form_button'>
    <button type='submit' onClick={contactForm} className="form-submit">send Message</button>
</div>

</form>


                </div>
            </div>
        </div>
    </div>
</div>



      </div>
      </>
    );
};

export default Contact;