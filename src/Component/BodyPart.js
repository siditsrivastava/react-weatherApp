import React, { useState } from "react";
import Images from "../Component/Icon1.png"
import Imag  from "../Component/Icon2.svg"

const BodyPart = () => {
  const [city, setCity] = useState({
    country: "" ,
  });

  const [weather, setWeather] = useState(["23"]);
  const [firstweather, setfirstWeather] = useState(["23"]);
  const [secondweather, setSecondWeather] = useState(["23"]);
  const [thirdweather, setThirdWeather] = useState(["23"]);
  const [fourthweather, setFourthWeather] = useState(["23"]);
  const [fifthweather, setFifthWeather] = useState(["23"]);
  const [sixthweather, setSixthWeather] = useState(["23"]);
  const [weatherimg, setWeatherimg] = useState([]);
 
  const handlerChanger = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "country") {
      setCity({ ...city, country: value });
    }

  };
  async function weatherData(e) {
    e.preventDefault();

    if (city.country == "") {
      alert("Please Enter Your City");
    }else {
      const apiData = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city.country}&appid=896cc9fe1e3155ff029cdf9f42b2f15a&units=metric`
      )
        .then((res) => res.json())
        .then((apiData) => apiData);

      const newApi = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${apiData.coord.lat}&lon=${apiData.coord.lon}&appid=6e0f95cbb6ce20c0f753187b40c3f42a&units=metric`
      )
        .then((resapi) => resapi.json())
        .then((newApi) => newApi);

      setWeather(newApi.current.temp);
      setfirstWeather(newApi.daily[0].temp.day);
      setSecondWeather(newApi.daily[1].temp.day);
      setThirdWeather(newApi.daily[2].temp.day);
      setFourthWeather(newApi.daily[3].temp.day);
      setFifthWeather(newApi.daily[4].temp.day);
      setSixthWeather(newApi.daily[5].temp.day);

      // let icon =("http://openweathermap.org/img/wn/" + `${newApi.current.weather[0].icon}` + ".png")
      
    }
  }

  const month = [ "januray" ," Feberary"," March" , "April" ,"May" , "August", "september" , "Octobar" ,"Novembar" , "Decembar"]
  const days= ["Sunday" , "Monday" , "Tuesday" , " Wednesday" , "Thursaday", " Friday" , "Saturday"]
  const week = [
    {
      id: 1,
      days:days[((new Date().getDay() + 1) % 14)%7],
      newWeather: Math.floor(firstweather),
      
    },
    {
      id: 2,
      days:days[((new Date().getDay() + 2) % 14)%7],
      newWeather: Math.floor(secondweather),
    },
    {
      id: 3,
      days: days[((new Date().getDay() + 3 ) % 14)%7],
      newWeather:Math.floor(thirdweather)
    },
    {
      id: 4,
      days:days[((new Date().getDay()+4) % 14)%7],
      newWeather:Math.floor(fourthweather)
    },
    {
      id: 5,
      days:days[((new Date().getDay()+5) % 14)%7],
      newWeather:Math.floor(fifthweather)
    },
    {
      id: 6,
      days: days[((new Date().getDay() + 6) % 14)%7],
      newWeather:Math.floor(sixthweather)
    },
    ];

  
  return (
    <>
      <div className="container-fluid d-flex topbar ">
        <div className="container mt-5  d-flex search-div">
          <input
            className="form-control"
            autoComplete="off"
            type="search"
            name="country"
            placeholder=" Type your location... "
            onChange={(e) => handlerChanger(e)}
          />
          <button
            type="submit"
            onClick={(e) => weatherData(e)}
            className="btn btn-info"
          >
            Find
          </button>
        </div>
      </div>

      <div className="container-fluid section">
        <div className="container sub-section">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 p-0 ">
              <div className="mon-top d-flex ">
                <div className="today-day">{days[(new Date().getDay())]}</div>
                <div className="d-flex">
                  <div id="today-month">{month[(new Date().getMonth())]}</div>
                  <span>
                    <div id="date" className="px-1">
                      {new Date().getDate()}
                    </div>
                  </span>
                </div>
              </div>
              <div className="mon-weather">
                <h2 className="para">{city.country}</h2>
                <div className="d-flex">
                  <p className="result">{Math.floor(weather)}</p>
                  <span>
                    <p>
                      <sup>o</sup>c 
                    <img src={Images} alt="Img1" style={{ width:"60px", marginLeft:"40px"}} />

                    </p></span>
                </div>
                <br/>
                <p style={{ fontSize: "20px", color: "grey", }}>
                  18 <sup>o</sup>c
                </p>
                <br/>
                
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 p-0 d-flex">
              {week.map((week) => (
                <div className="tues-weather pt-3 " key={week.id}>
                  <h6>{week.days}</h6>
                  <img src={Imag} alt="img" />
                  <h4>
                    {week.newWeather}<sup>o</sup>c
                  </h4>
                  <p className="pt-5">
                    18<sup>o</sup>c
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyPart;
