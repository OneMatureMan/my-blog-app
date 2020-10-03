import React from 'react';
import { shallow } from 'enzyme';
import { EditPostPage } from '../../components/EditPostPage';
import posts from '../fixtures/posts';

let startEditPost, startRemovePost, history, wrapper;

beforeEach(() => {
    startEditPost = jest.fn();
    startRemovePost = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditPostPage 
            startEditPost={startEditPost} 
            startRemovePost={startRemovePost} 
            history={history}
            post={posts[0]} 
        />);
})

test('Should render Edit post page component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle start edit post', () => {
    wrapper.find('PostForm').prop('onSubmit')(posts[0]);
    expect(startEditPost).toHaveBeenCalledWith(posts[0].id,posts[0]);
    expect(history.push).toHaveBeenCalledWith('/dashboard');
});


test('should handle start remove post', () => {
    wrapper.find('button').simulate('click')
    expect(startRemovePost).toHaveBeenLastCalledWith({id: posts[0].id});
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});