import React from 'react';
import { shallow } from 'enzyme';
import { AddPostPage } from '../../components/AddPostPage';
import posts from '../fixtures/posts';

let addPost, history, wrapper;

beforeEach(() => {
    addPost = jest.fn();
    history = { push : jest.fn()};
    wrapper = shallow(<AddPostPage addPost={addPost} history={history} />)
})

test('should load Add post page component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit correctly', () => {
    wrapper.find('PostForm').prop('onSubmit')(posts[0]);
    expect(addPost).toHaveBeenLastCalledWith(posts[0]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
})