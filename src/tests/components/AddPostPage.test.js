import React from 'react';
import { shallow } from 'enzyme';
import { AddPostPage } from '../../components/AddPostPage';
import posts from '../fixtures/posts';

let startAddPost, history, wrapper;

beforeEach(() => {
    startAddPost = jest.fn();
    history = { push : jest.fn()};
    wrapper = shallow(<AddPostPage startAddPost={startAddPost} history={history} />)
})

test('should load Add post page component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit correctly', () => {
    wrapper.find('PostForm').prop('onSubmit')(posts[0]);
    expect(startAddPost).toHaveBeenLastCalledWith(posts[0]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
})