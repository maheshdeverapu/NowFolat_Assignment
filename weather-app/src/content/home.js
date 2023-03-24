import React,{ useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GetWeatherDetails } from "../component2/actions";
import { useNavigate, Link } from 'react-router-dom';
import "./home.css"

const Home =(GetWeatherDetails)=>{
const [data,setData] = useState({});
const navigate = useNavigate;
    
            
            useEffect(()=>{
                navigator.geolocation.getCurrentPosition((success)=>{
                        const {latitude,longitude} =success.coords
                      
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0d038ed3980cf2432f78d78a92010698&units=metric`)
                    .then(res=>res.json())
                    .then((response)=>{
                            console.log({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                            setData({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                           
                        })           
                })
                    },[])
                  
     

         return(
            <div className="home_content">
                <div>
                    <h2>Weather Application</h2>
                </div>
                <div>
                   search
                </div>
                <div className="weather_data" onClick={()=>{GetWeatherDetails({action:"GET_WEATHER_SUCCESS",weatherData:data.name}); navigate("/detailWeather")}}>
                    <p>current Weather in {data.name}</p>
                    <p>temp:{data.temp}°C</p>
                    <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt={data.description}></img>
                    <p>{data.description}</p>
                    <p>Humidity:{data.humidity}%</p>
                    <p>Wind :{data.speed}km/hr</p>
                    <p>feels_like:{data.feels_like}</p>
                </div>
                <div>
                    <h3>Favorite Locations</h3>
                </div>
            </div>
         ) 
    //      <div className="home-screen">
    //      <Link to="/search">
    //      <div className="search-button">
    //        <button>Search By Location</button>
    //    </div>
    //      </Link>
    //    <div className="current-weather" onClick={()=>{setSelectedLocation(currentWeather.name); navigate("/details")}}>
    //      {/* Display the current weather data */}
    //      {currentWeather && (
    //        <>
    //          <h2>Current Weather in {currentWeather.name}</h2>
    //          <img src={`http://openweathermap.org/img/wn/${currentWeather.icon}.png`} alt={currentWeather.description} />
    //          <p>Current Location: {currentWeather.name}</p>
    //          <p>{currentWeather.description}</p>
    //          <p>Temperature: {currentWeather.temp}°C</p>
    //          <p>Feels like: {currentWeather.feels_like}°C</p>
    //          <p>Humidity: {currentWeather.humidity}%</p>
    //          <p>Wind Speed: {currentWeather.speed} km/h</p>
    //        </>
    //      )}
    //    </div>
 
    //    <div className="favorite-locations">
    //      <h2>Favorite Locations</h2>
    //      {/* Display the favorite locations list */}
    //      <ul>
    //        {favoriteLocations && favoriteLocations.map(location => (
    //          <div className='each-fav-location'>
    //          <li onClick={()=>{setSelectedLocation(location); navigate("/details")}} key={location}>{location}</li>
    //          <button onClick={() => removeFavoriteLocation(location)}>Remove</button>
    //          </div>
 
    //        ))}
    //      </ul>
    //    </div>
    //  </div>
    



}

const mapStateToProps = state => ({
  weatherData: state
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ GetWeatherDetails }, dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps )(Home);


