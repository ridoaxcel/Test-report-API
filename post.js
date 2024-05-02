const post = {  
    type : 'object',
    properties:{
        id: {type: 'number'},
        title: {type: 'string'},
        body: {type: 'string'},
        userId: {type: 'number'},
        tags: {type: 'array',
            items:{
                type:'string'
            }
        },
        reaction: {type:'number'}
    },
    required:['id','title','body','userId','tags']
}

const allPost = {  
    type : 'object',
    properties:{
        posts: {type: 'array',
            items:post
        },
        total:{type: 'number'},
        skip: {type: 'number'},
        limit: {type: 'number'},
    },
    required:['posts','total','skip','limit']
}

export {post,allPost};