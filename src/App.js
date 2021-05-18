import "antd/dist/antd.css";
import {fetchApi} from "./api/FetchApi";
import Index from "./component/Card";
import {Card as CardContent, Col, Row} from "antd";
import {useEffect, useState} from "react";
import {cities} from "./constants";
import {Body, CardGroup, Header} from "./styledComponents";
import Local from "./utils/Local";


function App() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [weather, setWeather] = useState(null);
    const [flipStatus, setFlipStatus] = useState(cities.map(() => false));
    const [load, setLoad] = useState(false);

    useEffect(() => {
        if (selectedCategory !== "") {
            fetchApi(selectedCategory).then((res) => {
                setLoad(false);
                setWeather(res);
                //saving locally for 30 mins
                Local.set(selectedCategory, res, 1000 * 60 * 30);
            });
        }
    }, [selectedCategory]);

    function handleClick(index, flipped, city) {
        const newFlipStatus = cities.map(() => false);
        if (flipped === true) {
            setFlipStatus(newFlipStatus);
        } else {
            setWeather(null);
            setLoad(true);
            const reg = city.replace(/[^\w ]/g, " ").trim();

            newFlipStatus[index] = !flipStatus[index];
            setFlipStatus(newFlipStatus);
            if (!Local.get(reg)) {
                setSelectedCategory(reg);
            } else {
                setWeather(Local.get(reg));
            }
        }
    }

    return (
        <Body>
            <Header>AZ Weather Exercise</Header>
            <CardGroup>
                <Row gutter={16}>
                    {cities.map((card, index) => {
                        return (
                            <Col key={index} span={8} style={{padding: "0"}}>
                                <CardContent bordered={false} style={{background: "none"}}>
                                    <Index
                                        key={index}
                                        project={card}
                                        handleClick={handleClick}
                                        index={index}
                                        flipped={flipStatus[index]}
                                        load={load}
                                        weather={weather}
                                    />
                                </CardContent>
                            </Col>
                        );
                    })}
                </Row>
            </CardGroup>
        </Body>
    );
}

export default App;
