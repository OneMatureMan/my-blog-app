const filtersDefaultState = {
    text: '',
    sortBy: 'date'
}

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_BY_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_TITLE':
            return {
                ...state,
                sortBy: 'title'
            };
        default:
            return state;
    };
};

export default filtersReducer;