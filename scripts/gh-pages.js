var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/fedi-todo',
    () => {
        console.log('Deploy Complete!')
    }
)