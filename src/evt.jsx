import './App.css';






function Evt(props) {
  const addtofav = async ()=>{
 var title = props.title
 var image = props.image
 var link = props.link
 console.log(title)

    const events ={title,link,image}
  
      const response = await fetch('/favEvents',{
          method:"POST",
          body :JSON.stringify(events),//convert to json from object
          headers:{
              'Content-Type':'application/json'
          }
      })
      const json = await response.json()
      if (!response.ok){
          console.log(json.error)
          
      }
      if (response.ok){
          
          
          console.log("new workou added")
      }
     }

   


  return (
    <div className="evt">
    <div > <img className='starimg' src={props.image} alt="Italian Trulli"/> </div>
<h3 className='startitle'>{props.title}</h3>
<h3 className='stardescription'>{props.description}</h3>
<p>{props.start+"to"+props.end}</p>
<p>{props.tag}</p>



<a href={props.link}><button className="registerbtn" >register</button></a>


<button className="favobtn" onClick={()=>addtofav()} >favourite</button>
     
  
     </div>
    
  );
  }

export default Evt;
