
const SET_DATES="SET_DATES"
const SET_SELECTED_DAY = "SET_SELECTED_DAY"
const SET_AVAILABLE_TIMES="SET_AVAILABLE_TIMES"
const SET_SELECTED_DATE_TIME = "SET_SELECTED_DATE_TIME"


const defaultState = {
    dates:[],//даты с возможными временами
    selectedDay:"",//выбранный день
    availableTimes:[],//возможные времена
    selectedDateTime:{}//выбранная дата
}

export default function timeReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_DATES:
            return{
                ...state,
                dates:action.payload
            }
        case SET_SELECTED_DAY:
            return {
                ...state,
                selectedDay: action.payload
            }
        case SET_AVAILABLE_TIMES:
            return {
                ...state,
                availableTimes: action.payload
            }
        case SET_SELECTED_DATE_TIME:
            return{
                ...state,
                selectedDateTime:action.payload
            }
        
        default:
            return state
    }
}

export const setDates = dates => ({type: SET_DATES, payload: dates})
export const setSelectedDay = selectedDay => ({type: SET_SELECTED_DAY, payload: selectedDay})
export const setAvailableTimes = availableTimes => ({type: SET_AVAILABLE_TIMES, payload: availableTimes})
export const setSelectedDateTime = selectedDateTime => ({type: SET_SELECTED_DATE_TIME, payload: selectedDateTime})

