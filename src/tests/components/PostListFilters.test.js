import React from 'react';
import { shallow } from 'enzyme';
import { PostListFilters } from '../../components/PostListFilters';
import { filters, altFilters } from '../fixtures/filters';

let wrapper, filterByText, sortByDate, sortByTitle;

beforeEach(() => {
    filterByText = jest.fn();
    sortByDate = jest.fn();
    sortByTitle = jest.fn();
    wrapper = shallow(<PostListFilters 
        filters={filters} 
        filterByText={filterByText} 
        sortByDate={sortByDate} 
        sortByTitle={sortByTitle} 
    />);
})

test('Should render Post List Filters component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('text should be empty string', () => {
    const text = wrapper.find('input').prop('value')
    expect(text).toBe('')
});

test('text should be Farsh (alt filters)', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const text = wrapper.find('input').prop('value')
    expect(text).toBe('Farsh')
});

test('should change text to something different', () => {
    const value = 'different';
    wrapper.find('input').simulate('change', {
        target: { value}
    })
    expect(filterByText).toHaveBeenLastCalledWith('different');
});

test('should change sort by date to sort by title', () => {
    const value = 'title';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByTitle).toHaveBeenCalled();
})


test('should change sort by title to sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});