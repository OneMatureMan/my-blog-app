// get visible posts
export default (posts, { text, sortBy }) => {
    return posts.filter(({ title }) => title.toLowerCase().includes(text.toLowerCase()))
            .sort((a,b) => {
                if (sortBy === 'date') {
                    if (a.createdAt < b.createdAt) {
                        return 1;
                    }
                    if (a.createdAt > b.createdAt) {
                        return -1;
                    }
                    return 0;
                } else if (sortBy === 'title') {
                    
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    }
                    
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                }            
            })
}