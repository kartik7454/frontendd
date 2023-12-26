import './App.css';



function Favpage (props) {
  
 const deleteevent = async()=>{
  const response = await fetch ('https://jngfh.onrender.com/favEvents/' + props.id,{
    method:'DELETE'
})

if (response.ok){
    console.log("deleted")
}
}
 
  
   
   
  return (<div  className="favepage ">
  <div clssName="bhuuu" > <img className="favpageimg"  src={props.image} alt="Italian Trulli"/> </div>
  <div className="favepagetitle"><h1 >{props.title}</h1></div>
  
  
  <a    href={props.link}><button  classname="favregisterbtn">register</button></a> 


  
  <button  className="favdelbtn"onClick={()=>deleteevent()}>x</button>
  </div>
  

 

 
  
  
  
  );
}

export default Favpage;
