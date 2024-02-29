export default function WeatherItem(props){


    return (
        <div className="col col-lg-2 h5 col-6 pb-4 pt-3 title rounded mx-2">
        
        <h6>{props.name}</h6> <br /> {props.value} 
        </div>
    )
}