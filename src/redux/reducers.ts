import {
    SELECTED_DATE_REQUEST,
    SELECTED_DATE_SUCCESS,
    GET_WEEK_WEATHER_DATA_REQUEST,
    GET_WEEK_WEATHER_DATA_SUCCESS,
    GET_LOCALE_WEATHER_DATA_REQUEST,
    GET_LOCALE_WEATHER_DATA_SUCCESS,
} from "./constants";

const initialState = {
    gettingLocaleData: false,
    weatherLocaleData: {},
    gettingBySelectedDate: false,
    weatherByDate: {},
    gettingByWeek: false,
    weatherByWeek: [],
};

interface actionCreator {
    type: string;
    payload: object | Array<any>;
}

export default function weatherReducer(
    state = initialState,
    action: actionCreator
): any {
    switch (action.type) {
        case GET_LOCALE_WEATHER_DATA_REQUEST:
            return {
                ...state,
                gettingLocaleData: false,
            };
        case GET_LOCALE_WEATHER_DATA_SUCCESS:
            return {
                ...state,
                gettingLocaleData: true,
                weatherLocaleData: { ...action.payload },
            };
        case SELECTED_DATE_REQUEST:
            return {
                ...state,
                gettingBySelectedDate: true,
            };
        case SELECTED_DATE_SUCCESS:
            return {
                ...state,
                gettingBySelectedDate: false,
                weatherByDate: { ...action.payload },
            };
        case GET_WEEK_WEATHER_DATA_REQUEST:
            return {
                ...state,
                gettingByWeek: false,
            };
        case GET_WEEK_WEATHER_DATA_SUCCESS:
            return {
                ...state,
                gettingByWeek: true,
                weatherByWeek: [...action.payload],
            };

        default:
            return state;
    }
}
