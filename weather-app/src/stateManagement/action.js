import { BASE_URL } from "../apiConstrants";
export const GetWeatherDetails = (location = "hyderabad") => async dispatch => {
    debugger
  dispatch({ type: GET_WEATHER.PENDING });
  useEffect(()=>{
        fetch(BASE_URL)
        .then(res=>res.json())
        .then((response)=>{
                // console.log({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                setData({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                dispatch({ type: GET_WEATHER.SUCCESS, payload: response.data })         
            })           
            .catch(err => {
              console.log(err.response, err);
              dispatch({ type: GET_WEATHER.REJECTED, payload: err.response });
            });
          },[]) 
    };
