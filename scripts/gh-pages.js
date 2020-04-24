var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/fedi-todo',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/surenderlohia/fedi-todo.git', 
        user: {
          name: 'Surender Lohia',
          email: 'surender.lohia.e@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)