import './App.css';

function Header(props) {
  return (
    <div className="header">

     <div className ="container">
     <div className="item1"><h1>whats up!</h1></div>
  <div className="item2"><button>add</button></div>
  <div className="item3"><button onclick={ props.changevisa }>star</button></div>
  
     </div>
    </div>
  );
}

export default Header;
