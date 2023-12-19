import { useState,useEffect } from "react";
import Event from '../Event'
import Evt from '../evt'
import { useReducer } from "react";
import '../App.css';
import Favpage from "../Favpages"





var  favlist=[]
function Home() {
  const [state, setstate] = useState('all')
  const [visa, setvisa] = useState(false)
  const [cart, setcart] = useReducer(  x => x + 1, 0);
  const [addvisa, setaddvisa] = useState(false)
  const[events,setEvents]= useState(null)
  const[favEvents,setFavEvents]= useState(null)
  const [title,setTitle] = useState('')
  const [startd,setStartd] = useState('')
  const [endd,setEndd] = useState('')
  const [description,setDescription] = useState('')
  const [link    ,setLink] = useState('')
  const [image,setImage] = useState('')
  const [tags,setTags] = useState('')

  useEffect( ()=>{
    const fetchWorkouts  = async ()=>{
    const response = await fetch ('/events')
    const json = await response.json()
    
    if(response.ok){
    setEvents(json)
    }
    }
    
    fetchWorkouts()
    })


    useEffect( ()=>{
      const fetchWorkouts  = async ()=>{
      const response = await fetch ('/favevents')
      const json = await response.json()
      
      if(response.ok){
      setFavEvents(json)
      }
      }
      
      fetchWorkouts()
      })


    const handleSubmit= async (e)=>{
      
      e.preventDefault()
      
      const events ={title,startd,endd,description,link,image,tags}
  
      const response = await fetch('/events',{
          method:"POST",
          body :JSON.stringify(events),//convert to json from object
          headers:{
              'Content-Type':'application/json'
          }
      })
      const json = await response.json()
      if (!response.ok){
          console.log(json.error)
          console.log(title,startd,endd,description,link,image,tags)
      }
      if (response.ok){
          setTitle("")
          setDescription("")
          setImage("")
          setTags("")
          setLink("")
          setStartd("")
          setEndd("")
          
          console.log("new workou added")
      }
     }






   async function addtofav(id){///////////////////////////////////
    
    
  }

  async function deletefav(id){
    var del = favlist.filter((item)=>{ var value =item[0]
      return value.id !==id
    })
    favlist =del

    await setcart()
    
  }
   
  return (
    <div className="App">


    
     <div className="header">

<div className ="container">
<div className="item1"><h1>whats up!</h1></div>
<div className="item2"><button className='addbutton'  onClick={()=>setaddvisa(true)}>  add</button></div>

<div className='item3'><button  className='favbutton' onClick={()=>setvisa(true)}>fav</button></div>

</div>
</div>

     <div className=" filterdiv"><button className='filterbtn' onClick= { ()=> setstate("all")} >All</button>
    <button className='filterbtn' onClick= { ()=> setstate("compsci")}>compsci</button>
    <button  className='filterbtn' onClick= { ()=> setstate("finance")}>finance</button>
    <button className='filterbtn'  onClick= { ()=> setstate("business")}>business</button>
    <button className='filterbtn'  onClick= {()=> setstate("hotel")}>hotel</button></div>
     
    <div className= {"favpage " + (visa ? 'show' : 'hidden')}>
        <h1 className="favourite">favourite </h1>
        <button   className ="cross" onClick= { ()=> setvisa(false)} >X</button>
        
        {   favEvents && favEvents.map((item)=>{ 
          

          return <Favpage 
   id = {item._id}
     title ={item.title}
     image={item.image}
     link={item.link }
    delete = {deletefav}
     />
        },[cart])}

</div>


<div className= {"addpage " + (addvisa ? 'show' : 'hidden')}>
        <h1>ADD NEW </h1>
        <button   className ="cross" onClick= { ()=> setaddvisa(false)} >X</button>

        <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input type="text" placeholder="title" id ="titleinput" onChange={(e)=>setTitle(e.target.value)  } value ={title} ></input>
        <p>description</p>
        <textarea type="textarea" placeholder="description" id ="dicinput" onChange={(e)=>setDescription(e.target.value)   } value ={description}></textarea>
        <p>startdate</p>
        <input type="date"  placeholder="startdate" id ="stdinput" onChange={(e)=>setStartd(e.target.value)  } value ={startd}></input>
        <p>end date</p>
        <input type="date" placeholder="enddate" id ="eninput" onChange={(e)=>setEndd(e.target.value)  }value ={endd}></input>
        <p>department</p>
        <select name="cars" id="dept" onChange={(e)=>setTags(e.target.value)  } value={tags}>
        <option ></option>
    <option value="compsci">compsci</option>
    <option value="finance">finance</option>
    <option value="business">business</option>
    <option value="hotel">hotel</option>
  </select>
  <p>google forms link</p>
  <input type="url"  placeholder="form url" id="url" onChange={(e)=>setLink(e.target.value)  }value ={link}></input>
  <p>image url</p>
  <input type="url"  placeholder="img url" id ="img" onChange={(e)=>setImage(e.target.value)  }value ={image}></input>
  <button >submit</button></form>
        
       

</div>
<div className="starpage">
{ events && events.filter((item) =>{ 
      if(state === "all") 
      {return  item}
      else{return  state === item.tags }
    }).map((item,index)=>{
return<Evt 
    id = {item._id}
     title ={item.title}
     image={item.image} 
     description={item.description}
     link={item.link}
     start={item.startd}
     end={item.endd}
     tag={item.tags}
     addtofav = {addtofav}
     />
    },[cart])}</div>
     
    
    </div>
  );
}

export default Home;
