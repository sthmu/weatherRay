export default function WeatherItem(props){
    return (
        <div className="col col-lg-3 h5 col-6 pb-5 ">
        <h6>{props.name}</h6> <br /> {props.value} 
        </div>
    )
}