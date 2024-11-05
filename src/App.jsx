import './App.css';

// The "App" function finally returns the content to be displayed in the web-page after calling the subsequent functions
function App() {

  return (
   <div className="App">
    <h1>React Price Card</h1>
    <OptionsFun />
   </div>
  );
}

// The "OptionsFun" function returns a div (as a flex) which contains all the display-cards
function OptionsFun(){
  // Data of each card (each option os plans)
  let optionsAre=[
    {
      name:"FREE",
      price:0,
      features:[
        "Single User",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Projects",
        "Free Subdomain",
        "Monthly Satus Reports",
      ]
    },
    {
      name:"PLUS",
      price:9,
      features:[
        "5 Users",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports"
      ]
    },
    {
      name:"PRO",
      price:49,
      features:[
        "Unlimited Users",
        "150GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Unlimited Free Subdomain",
        "Monthly Status Reports"
      ] 
    }
  ]

  return(
    <div className="optFun-div">
      {/* Mapping each dataset of "optionsAre" to the function  "DisplayCards" */}
      {optionsAre.map(opt=>(
        <DisplayCards name={opt.name} price={opt.price} features={opt.features} />
      ))}
    </div>
  )

  
}


// The "DisplayCards" function returns single display-card each time
function DisplayCards(props){
 return(
  <div className="each-card-div">

    {/* Displaying plan name */}
    <p className="opt-name-p">{props.name}</p>

    {/* Displaying price of that plan */}
    <p className="opt-price-p"><span className="opt-price-span">${props.price}</span>/month</p>

    <hr className="each-card-hr"/>

    {/* Unordered list to display the features available in that plan */}
      <ul className="features-listing-ul" type="none">
        {props.features.map(val=>{
          let x=val.split(' ');
          let val0=x[0];
          let valRem=x.slice(1,val.length).join(' ');

          return <li className="features-listing-li"><span>{val0+' '}</span>{valRem}</li>
        })}
      </ul>

    <button className="each-card-button">Button</button>
  </div>
 )

}


export default App;