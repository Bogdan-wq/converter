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

const changeBorrowInput = (value) => {
    return {
        type:'CHANGE_BORROW_INPUT_VALUE',
        payload:value,
    }
}

const changeReceiveInput = (value) => {
    return {
        type:'CHANGE_RECEIVE_INPUT_VALUE',
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


export {
    fetchCourseSuccess,
    fetchCourseFail,
    changeBorrowInput,
    changeReceiveInput,
    changeFromCurrency,
    changeToCurrency,
}