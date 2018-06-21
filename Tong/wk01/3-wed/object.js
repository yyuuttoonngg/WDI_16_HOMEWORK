console.log('objects homework');

//The recipe card
var favoriteRecipe ={
    title: 'Vanilla icecream',
    servings: 2,
    ingredients:['thick cream','milk','vanilla bean','egg','sugar']  
};
console.log ('-' + favoriteRecipe.title);
console.log('-' + 'Serves: ' + favoriteRecipe.servings);

//three different ways to disply the favoriteRecipe.ingredients array
for (var i=0; i<favoriteRecipe.ingredients.length; i++){
    console.log('-' + favoriteRecipe.ingredients[i]);
}
favoriteRecipe.ingredients.forEach(function(a){console.log('.' + a)});

console.log(favoriteRecipe.ingredients.join('\n'));


//The Reading List
var bookArray = [
    {
        title: 'book1',
        author: 'author1',
        read: true
    },
    {
        title: 'book2',
        author: 'author2',
        read: false
    }

];
for (var i=0; i<bookArray.length; i++) {
    var bookInfo ='"' + bookArray[i].title +'"' + ' by '+ bookArray[i].author;
    if (bookArray[i].read ){
        console.log('You already read ' + bookInfo);
    } else {
        console.log('You still need to read ' + bookInfo);
    }
}

// The movie database
var favoriteMovie = {
    title: 'Big Movie',
    duration: 96,
    stars: ['Mr big head','the crazy guy','the pink pig']
};

function printMovieInfo(movie){  //adding parameter of function-- movie
    var info =movie.title + ' lasts for ' +movie.duration + ' minutes. Stars: ' +movie.stars.join(', ');
    return (info + '.');

}
console.log(printMovieInfo(favoriteMovie));

