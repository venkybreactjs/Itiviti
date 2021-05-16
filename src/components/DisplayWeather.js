import React from 'react'

function DisplayWeather(props) {
    console.log("hi", props);
    const { data } = props;
    //console.log(data.message);
    //console.log(data.forecast.forecastday[0].hour[0].time);
    var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    return (
        <div>
            {
                data.cod !== 404 ? (
                    <React.Fragment>
                        <div>
                            <span>
                                {data.location.name} . Weather
                </span>&nbsp;
                <span>
                                As of {new Date().toLocaleDateString()}
                            </span>
                            <h1>{data.current.temp_c}
                                <sup>o</sup></h1>
                        </div>
                        <table style={{ margin: 'auto' }} border="2">
                            <tr>
                                <td>Hour</td>&nbsp;
                                <td>
                                    <span>
                                        {time}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>High / Low</td>&nbsp;
                                <td>
                                    <span>
                                        {Math.floor(data.current.temp_c)}/{""}
                                        {Math.floor(data.current.temp_c)}<sup>o</sup> C
                        </span>
                                </td>
                            </tr>
                            <tr>
                                <td>Humidity</td>&nbsp;
                                <td>
                                    <span>
                                        {Math.floor(data.current.humidity)}
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </React.Fragment>
                )
                    : <div>
                        <h2>{data.message}</h2>
                    </div>
            }
        </div>
    )
}

export default DisplayWeather;
