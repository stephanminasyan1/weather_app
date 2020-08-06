import {
    getWeekWhetherDataRequest,
    getWeekWhetherDataSuccess,
    getLocaleWhetherDataRequest,
    getLocaleWhetherDataSuccess,
} from "./actions";
import api from "../services/axiosEndpoints";

export const getWeatherLocaleDataThunk = (date: any) => async (
    dispatch: any
) => {
    try {
        dispatch(getLocaleWhetherDataRequest());
        const response = await api.getLocaleData(date.lat, date.lon).get();
        dispatch(getLocaleWhetherDataSuccess(response.data));
    } catch (error) {
        console.log("catch err", error);
        if (
            error.response &&
            error.response.data &&
            error.response.data.message
        ) {
            console.log(error.response);
        } else if (error.message) {
            console.log(error.message);
        } else {
            console.log("Something went wrong");
        }
    }
};

export const getWeatherByWeekThunk = (locationKey: string) => async (
    dispatch: any
) => {
    try {
        dispatch(getWeekWhetherDataRequest());
        const response = await api.getWeather(locationKey).get();
        dispatch(getWeekWhetherDataSuccess(response.data.DailyForecasts));
    } catch (error) {
        console.log("catch err", error);
        if (
            error.response &&
            error.response.data &&
            error.response.data.message
        ) {
            console.log(error.response);
        } else if (error.message) {
            console.log(error.message);
        } else {
            console.log("Something went wrong");
        }
    }
};
