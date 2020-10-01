const posts = [
    {
        id:'1',
        title:'C',
        createdAt: 1000
    }, {
        id:'2',
        title:'A',
        createdAt: 5000
    }, {
        id:'3',
        title:'B',
        createdAt: 0
    },
];

const sortBy = 'title'

const sortedArray = posts.sort((a,b) => {
    if (sortBy === 'date') {
        if (a.createdAt < b.createdAt) {
            return -1;
        }
        if (a.createdAt > b.createdAt) {
            return 1;
        }

        return 0;
    } else if (sortBy === 'title') {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }

        return 0;
    }
    
    
})

console.log(sortedArray)
