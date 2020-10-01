import postsSelector from '../../selectors/posts';
import posts from '../fixtures/posts';
import { filters, altFilters } from '../fixtures/filters';


test('should sort posts by date', () => {
    const selectedPosts = postsSelector(posts, filters);
    expect(selectedPosts).toEqual([posts[1],posts[0],posts[2]])
});


test('should sort posts by title', () => {
    const selectedPosts = postsSelector(posts, { text:'', sortBy:'title'});
    expect(selectedPosts).toEqual([posts[1],posts[2],posts[0]])
});


test("should select only posts with 'm' ", () => {
    const selectedPosts = postsSelector(posts, {text: 'm'});
    expect(selectedPosts).toEqual([posts[1],posts[2]])
});