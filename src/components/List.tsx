import React from "react";
import classes from "./Layout/Page.module.scss";
import moment from "moment";
import night from "../assets/img/night.png";
import day from "../assets/img/day.png";
import moon from "../assets/img/moon.png";
import sunny from "../assets/img/sunny.svg";
import { fahrenheitToCelsius } from "../utils";

interface Props {
    list: Array<any>;
    isNight: boolean;
}

interface State {}

export default class List extends React.Component<Props, State> {
    render() {
        const { isNight } = this.props;
        return (
            <div className={`${classes["left-sider-list-wrapper"]}`}>
                <ul
                    style={{
                        height: 350,
                        overflowY: "scroll",
                        backgroundImage: `url(${isNight ? night : day})`,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    className={`${classes["left-sider-list"]} ${
                        isNight
                            ? classes["list-item-night"]
                            : classes["list-item-day"]
                    }`}
                >
                    {this.props.list?.length > 0 &&
                        this.props.list.map(item => {
                            return (
                                <li
                                    className={`${classes["list-item"]}`}
                                    key={new Date(`${item.Date}`).getTime()}
                                >
                                    <div>
                                        <div
                                            className={`${classes["list-item-day-wrapper"]}`}
                                        >
                                            <span
                                                className={`${classes["list-item-img-wrapper"]}`}
                                            >
                                                <img
                                                    src={isNight ? moon : sunny}
                                                    alt={
                                                        isNight
                                                            ? "Night:"
                                                            : "Day:"
                                                    }
                                                />
                                            </span>
                                            <span
                                                className={`${classes["list-item-day-txt-wrapper"]}`}
                                            >
                                                {isNight
                                                    ? item?.Night?.IconPhrase
                                                    : item?.Day?.IconPhrase}
                                            </span>
                                        </div>
                                        <div
                                            className={`${classes["list-item-day-info"]}`}
                                        >
                                            <div
                                                className={`${classes["list-item-day-info-item"]}`}
                                            >
                                                Temperature:
                                                {fahrenheitToCelsius(
                                                    item.Temperature.Maximum
                                                        .Value,
                                                    item.Temperature.Minimum
                                                        .Value
                                                )}
                                            </div>
                                            <div
                                                className={`${classes["list-item-day-info-item"]}`}
                                            >
                                                Precipitation:
                                                {item.HasPrecipitation
                                                    ? "Yes"
                                                    : "No"}
                                            </div>
                                            <div
                                                className={`${classes["list-item-day-info-item"]}`}
                                            >
                                                {isNight
                                                    ? item?.Night
                                                          ?.HasPrecipitation
                                                    : item?.Day
                                                          ?.HasPrecipitation}
                                            </div>
                                            <div
                                                className={`${classes["list-item-day-info-item"]}`}
                                            >
                                                {moment(`${item.Date}`).format(
                                                    "lll"
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
}
