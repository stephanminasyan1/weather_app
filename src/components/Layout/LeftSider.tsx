import React from "react";
import { connect } from "react-redux";
import { getWeatherByWeekThunk } from "../../redux/thunks";
import classes from "./Page.module.scss";
import List from "../List";

interface Props {
    Key: number | string;
    getWeekWeather(locationKey: string | number): void;
    weatherByWeek: Array<any>;
}

interface State {
    lat: string | null;
    lon: string | null;
}

interface ReduxState {
    Key: number | string;
    weatherByWeek: Array<object>;
}

class LeftSider extends React.Component<Props, State> {
    componentDidMount() {
        this.props.getWeekWeather(this.props.Key ? this.props.Key : "16889");
    }

    render() {
        return (
            <div className={classes["left-seder-wrapper"]}>
                <h2>Forecasted weather for the coming week in your region.</h2>
                <div className={classes["week-wrapper"]}>
                    <div>
                        <List list={this.props.weatherByWeek} isNight={true} />
                    </div>
                    <div>
                        <List list={this.props.weatherByWeek} isNight={false} />
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
        getWeekWeather: (key: string) => dispatch(getWeatherByWeekThunk(key)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSider);
