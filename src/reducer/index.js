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
    courseBase:'RUB',
    courseRelatedToBase:{}
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
        case 'SET_VALUE_TO_CONVERT':
            if(!action.payload) {
                return {
                    ...state,
                    borrowInputValue:''
                }
            }
            return {
                ...state,
                borrowInputValue: parseInt(action.payload,10)
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

        case 'CALCULATE':
            if(!state.borrowInputValue) {
                return {
                    ...state,
                    receiveInputValue: '',
                }
            }
            else {
                const amountConverted = (state.course[state.to] / state.course[state.from]) * state.borrowInputValue;

                return {
                    ...state,
                    receiveInputValue: parseFloat(amountConverted.toFixed(2))
                }
            }

        case 'CALCULATE_COURSE_TO':

            const courseBasedOnUsd = Object.entries(state.course)

            const courseBasedOnChosen = courseBasedOnUsd.map((itemCurrency) => {
                const [code,rateToUsd] = itemCurrency;
                const rate = (rateToUsd / state.course[state.courseBase]).toFixed(2)

                const rateToFixed = parseFloat(rate)
                return [code,rateToFixed]
            })

            return {
                ...state,
                 courseRelatedToBase: Object.fromEntries(courseBasedOnChosen)
            }


        case 'CHANGE_COURSE_BASE':
            return {
                ...state,
                courseBase: action.payload,
            }

        case 'SWITCH_CURRENCIES':
            return {
                ...state,
                to:state.from,
                from:state.to,
            }

        default:
            return state;
    }
}


export default reducer;