import React from 'react';
import { shallow } from 'enzyme';
import { EditPostPage } from '../../components/EditPostPage';
import posts from '../fixtures/posts';

let editPost, removePost, history, wrapper;

beforeEach(() => {
    editPost = jest.fn();
    removePost = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditPostPage 
            editPost={editPost} 
            removePost={removePost} 
            history={history}
            post={posts[0]} 
        />);
})

test('Should render Edit post page component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit post', () => {
    wrapper.find('PostForm').prop('onSubmit')(posts[0]);
    expect(editPost).toHaveBeenCalledWith(posts[0].id,posts[0]);
    expect(history.push).toHaveBeenCalledWith('/dashboard');
});


test('should handle remove post', () => {
    wrapper.find('button').simulate('click')
    expect(removePost).toHaveBeenLastCalledWith({id: posts[0].id});
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
});