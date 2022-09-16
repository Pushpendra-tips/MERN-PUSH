import React,{useState,useEffect} from 'react';

const Home = () => {
    const [username,setUserName] =useState('');
    const [show, setShow] = useState(false);
    
    const userHomePage = async()=>{
      try{
          const res = await fetch('/getdata',{
            method:'GET',
            headers:{
          "Content-Type":"Application/json"
            },
              
          });
          const data = await res.json();
        console.log(data);
        setUserName(data.name);
        setShow(true)
  
      } catch (err){
  console.log(err);
  
      }
  }
  

useEffect(() => {
userHomePage();
}, []);

    return (
        <div>
            <p className='pt-5'>WELCOME :- {username}</p>
            <h1>{show ? 'Happy to see  u back' : 'We Are The MERN Developer'}</h1>
        </div>
    );
};

export default Home;