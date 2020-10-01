import filtersReducer from '../../reducers/filters';


test('should set up default filter values', () => {
    const result = filtersReducer(undefined, {type: '@@INIT'});
    expect(result).toEqual({
        text: '',
        sortBy: 'date'
    });
});

test('should filter text by a value', () => {
    const action = {
        type: 'FILTER_BY_TEXT',
        text: 'apple'
    }
    const result = filtersReducer(undefined,action);
    expect(result).toEqual({
        text: 'apple',
        sortBy: 'date'
    })
})

test('should change sort by value to title', () => {
    const state = filtersReducer(undefined,{ type: 'SORT_BY_TITLE' });
    expect(state.sortBy).toBe('title')
});

test('should change sort by value to date', () => {
    const currentState = {
        text: '',
        sortBy: 'title'
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
});