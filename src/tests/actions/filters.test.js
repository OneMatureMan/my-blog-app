const { filterByText, sortByDate, sortByTitle } = require("../../actions/filters");

test('should setup filter by text action', () => {
    const action = filterByText('apple');
    expect(action).toEqual({
        type: 'FILTER_BY_TEXT',
        text: 'apple'
    })
});

test('should set sorting to be by title', () => {
    const action = sortByTitle()
    expect(action).toEqual({
        type: 'SORT_BY_TITLE'
    })
})

test('should set sorting to be by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})