//Initiates the  states that will be set when user makes searches
const initialState = {
    courses: {
        text: '',
        coursedata: [],
        loading: false,
        error: false
    },
    grades: {
        gradedata: [],
        loading: false,
        error: false
    }, 
    toggle: {
        filter: false,
        modal: false
    },
    filter: {
        // semester: '',
        fclicked: false,
        sclicked: false,
    },
    sort: {
        sortby: '',
        orderby: '1',
    }
}

export default initialState;
