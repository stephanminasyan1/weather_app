import React from "react";
import { connect } from "react-redux";
import { getWeatherLocaleDataThunk } from "../../redux/thunks";
import classes from "./Page.module.scss";
import moon from "../../assets/img/moon.png";
import sunny from "../../assets/img/sunny.svg";
import { fahrenheitToCelsius } from "../../utils";
import moment from "moment";

interface Props {
    getWeatherLocaleData(date: object): void;
    Key: number | string;
    weatherByWeek: Array<any>;
}

interface State {
    lat: string | null;
    lon: string | null;
}

interface ReduxState {
    Key: number | string;
    weatherByWeek: Array<any>;
}

class RightSider extends React.Component<Props, State> {
    componentDidMount() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        const success = (pos: object | any) => {
            const crd = pos.coords;

            this.setState(
                {
                    lat: crd.latitude,
                    lon: crd.longitude,
                },
                () => {
                    this.props.getWeatherLocaleData({
                        lat: crd.latitude,
                        lon: crd.longitude,
                    });
                }
            );
        };

        const error = (err: object | any) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        };

        navigator.geolocation.getCurrentPosition(success, error, options);
    }

    render() {
        const item = this.props.weatherByWeek[0];
        return (
            <div className={`${classes["item-today-wrapper"]}`}>
                <div>
                    <h2>Today</h2>
                </div>
                <div>
                    <div className={`${classes["item-today-txt-wrapper"]}`}>
                        <div className={`${classes["item-today-txt-item"]}`}>
                            During day fills{" "}
                        </div>
                        <div
                            className={`${classes["list-item-day-txt-wrapper"]}`}
                        >
                            {`${item?.Day?.IconPhrase}`.toLocaleLowerCase()}
                        </div>
                        <div>
                            <img
                                style={{ width: 20, height: 20 }}
                                src={sunny}
                                alt={"Day"}
                            />
                        </div>
                    </div>
                    <div className={`${classes["item-today-txt-wrapper"]}`}>
                        <div className={`${classes["item-today-txt-item"]}`}>
                            During night fills{" "}
                        </div>

                        <div
                            className={`${classes["list-item-day-txt-wrapper"]}`}
                        >
                            {`${item?.Night?.IconPhrase}`.toLocaleLowerCase()}
                        </div>
                        <div>
                            <img
                                style={{ width: 20, height: 20 }}
                                src={moon}
                                alt={"Night"}
                            />
                        </div>
                    </div>
                </div>
                <div className={classes["item-today-tmp-info"]}>
                    <div className={classes["item-today-tmp-info-item"]}>
                        Temperature:
                        {fahrenheitToCelsius(
                            item?.Temperature?.Maximum?.Value,
                            item?.Temperature?.Minimum?.Value
                        )}
                    </div>
                    <div className={classes["item-today-tmp-info-item"]}>
                        Precipitation:
                        {item?.HasPrecipitation ? "Yes" : "No"}
                    </div>
                    <div className={classes["item-today-tmp-info-item"]}>
                        {item?.Date
                            ? moment(`${item?.Date}`).format("lll")
                            : null}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: ReduxState) => {
    const {
        Key,
        weatherByWeek,
    }: {
        Key: string | number | null;
        weatherByWeek: Array<object>;
    } = state;
    return { Key, weatherByWeek };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getWeatherLocaleData: (date: object) =>
            dispatch(getWeatherLocaleDataThunk(date)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSider);
