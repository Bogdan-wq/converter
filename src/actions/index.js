const fetchCourseSuccess = (course) => {
    return {
        type:'FETCH_COURSE_SUCCESS',
        payload:course,
    }
}

const fetchCourseFail = () => {
    return {
        type:'FETCH_COURSE_ERROR',
    }
}

const setValueToConvert = (value) => {
    return {
        type:'SET_VALUE_TO_CONVERT',
        payload:value,
    }
}


const changeToCurrency = (currency) => {
    return {
        type:'CHANGE_TO_CURRENCY',
        payload:currency,
    }
}

const changeFromCurrency = (currency) => {
    return {
        type:'CHANGE_FROM_CURRENCY',
        payload:currency,
    }
}

const switchCurrencies = () => {
    return {
        type:'SWITCH_CURRENCIES'
    }
}

const calculate = () => {
    return {
        type:'CALCULATE',
    }
}

const calculateCourseTo = () => {
    return {
        type:'CALCULATE_COURSE_TO'
    }
}

const changeCourseBase = (currency) => {
    return {
        type:'CHANGE_COURSE_BASE',
        payload:currency,
    }
}

export {
    fetchCourseSuccess,
    fetchCourseFail,
    setValueToConvert,
    changeFromCurrency,
    changeToCurrency,
    switchCurrencies,
    calculate,
    calculateCourseTo,
    changeCourseBase,
}