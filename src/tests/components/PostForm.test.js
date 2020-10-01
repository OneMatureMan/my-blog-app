import React from 'react';
import { shallow } from 'enzyme';
import PostForm from '../../components/PostForm';
import posts from '../fixtures/posts';

test('should render Post form component correctly', () => {
    const wrapper = shallow(<PostForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should submit form with data', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<PostForm post={posts[0]} onSubmit={onSubmit} />);
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    });
    expect(onSubmit).toHaveBeenCalledWith({title:posts[0].title, body:posts[0].body})
});


test('should set title on change', () => {
    const value = 'title'
    const wrapper = shallow(<PostForm />);
    wrapper.find('input').simulate('change', {
        target : { value }
    });
    expect(wrapper.state('title')).toBe('title')
});

test('should set body on change', () => {
    const value = 'body'
    const wrapper = shallow(<PostForm />);
    wrapper.find('textarea').simulate('change', {
        target : { value }
    });
    expect(wrapper.state('body')).toBe('body');
});