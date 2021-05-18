import React, {useEffect, useState, memo} from 'react'
import ReactCardFlip from "react-card-flip";
//import {Spin} from "antd";
import {CardItem} from "../../styledComponents";
import Loading from "../Loading";


const Index = memo((props) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (props.weather !== null && props.flipped) {
            setWeather(props.weather.data[0]);
        }
    }, [props.flipped, props.weather])

    return (

        <ReactCardFlip
            isFlipped={props.flipped}
            flipSpeedBackToFront={1.2}
            flipSpeedFrontToBack={1.2}
        >
            <CardItem
                onClick={() => props.handleClick(props.index, props.flipped, props.project)}
            >
                {props.project}
            </CardItem>
            <CardItem
                onClick={(e) => {
                    e.preventDefault();
                    props.handleClick(props.index, props.flipped)

                }}
                className="back"
            >
                {!weather ?
                    <Loading/> :
                    (<>
                        <div className="weather-degree">
                            <img
                                src={`https://meta-weather.vercel.app/static/img/weather/${weather.weather_state_abbr}.svg`}
                                alt='img'/>

                            <p>{weather.the_temp.toFixed()}<span>℃</span></p>
                        </div>
                        <div className="weather-info">
                            <p className="weather-state">{weather.weather_state_name}</p>
                            <p>Max Temp:{weather.max_temp.toFixed()}</p>
                            <p>Min Temp:{weather.min_temp.toFixed()}</p>
                            <p>Humidity:{weather.humidity.toFixed()}</p>
                            <p>Wind Speed: {weather.wind_speed.toFixed()}</p>
                        </div>
                    </>)
                }

            </CardItem>
        </ReactCardFlip>
    );
});

export default Index
