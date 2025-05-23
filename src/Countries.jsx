import React from 'react';
import  { useEffect, useState } from 'react';

const Card = ({name, flag, abbr})=>{
    return(
        <div
        style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            gap:'5px',
            border:'1px solid grey',
            borderRadius:'10px',
            width:'200px',
            height:'200px',
            textAlign:'centre'
        }}
        >
            <img src={flag} alt='flag' style={{width:'50px', height:'50px'}} />
            <h2>{name}</h2>
        </div>
);
}



const endpoint = "https://xcountries-backend.azurewebsites.net/all";

export default function Countries(){
    
    
    const [apiData, setApidata] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
    try{
    const response = await fetch(endpoint);
    const resp = await response.json();
    setApidata(resp);
    }
    catch(error){
        console.error("Error fetching data:");

    }

}
        fetchData();
    },[])
    return <div
    style={{display:'flex',
           flexWrap:'wrap',
           gap:'10px',

    }}
    >
       {apiData.map(({name, flag, abbr}) => (<Card name={name} flag={flag} abbr={abbr} />))}

    </div>;
}