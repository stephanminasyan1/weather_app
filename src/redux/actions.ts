import {
    SELECTED_DATE_REQUEST,
    SELECTED_DATE_SUCCESS,
    GET_WEEK_WEATHER_DATA_REQUEST,
    GET_WEEK_WEATHER_DATA_SUCCESS,
    GET_LOCALE_WEATHER_DATA_REQUEST,
    GET_LOCALE_WEATHER_DATA_SUCCESS,
} from "./constants";

interface actionCreatorRequest {
    type: string;
}
interface actionCreatorSuccess {
    type: string;
    payload: object;
}

export const getLocaleWhetherDataRequest = (): actionCreatorRequest => ({
    type: GET_LOCALE_WEATHER_DATA_REQUEST,
});

export const getLocaleWhetherDataSuccess = (
    data: object
): actionCreatorSuccess => ({
    type: GET_LOCALE_WEATHER_DATA_SUCCESS,
    payload: data,
});

export const selectedDateRequest = (): actionCreatorRequest => ({
    type: SELECTED_DATE_REQUEST,
});

export const selectedDateSuccess = (data: object): actionCreatorSuccess => ({
    type: SELECTED_DATE_SUCCESS,
    payload: data,
});

export const getWeekWhetherDataRequest = (): actionCreatorRequest => ({
    type: GET_WEEK_WEATHER_DATA_REQUEST,
});

export const getWeekWhetherDataSuccess = (
    data: object | Array<any>
): actionCreatorSuccess => ({
    type: GET_WEEK_WEATHER_DATA_SUCCESS,
    payload: data,
});
