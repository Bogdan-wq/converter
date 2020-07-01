import currencies from "../currency-maintenance";

const initialState = {
    loading:true,
    error:false,
    course:null,
    from:"UAH",
    to:"RUB",
    labels:currencies,
    borrowInputValue:'',
    receiveInputValue:'',
}

const reducer = (state = initialState,action) => {
    switch (action.type) {

        case 'FETCH_COURSE_SUCCESS':
            return {
                ...state,
                loading: false,
                error:false,
                course:action.payload
            }

        case 'FETCH_COURSE_ERROR':
            return {
                ...state,
                loading: false,
                error: true,
                course:null,
            }
        case 'CHANGE_BORROW_INPUT_VALUE':
            return {
                ...state,
                borrowInputValue: action.payload,
            }

        case 'CHANGE_RECEIVE_INPUT_VALUE':
            return {
                ...state,
                receiveInputValue: action.payload,
            }

        case 'CHANGE_TO_CURRENCY':
            return {
                ...state,
                to: action.payload,
            }

        case 'CHANGE_FROM_CURRENCY':
            return {
                ...state,
                from: action.payload,
            }
        default:
            return state;
    }
}


export default reducer;