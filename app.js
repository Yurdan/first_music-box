import db from './posts.js'

db.myPlaylist = [];
// ?????? Как эту функцию  сделать короче качественее ????????
const addToMyPlaylist =(currentId) => { 
 let itemArray;
    $.each(db, function (key, value) {
itemArray = value;
$.each(itemArray, function (key, value) {

$(value).filter(function(key, value) {
if(value.id == currentId && !db.myPlaylist.find(x => x.id == currentId)) {
    return db.myPlaylist.push(value);
};
})

})
    })
}
const createPostContainer = (post) => {

    // ???писать так или создать элемент, задать текст и классы в разных колонках???
    const $postContainer = $("<div>")
        .addClass("post");

    const $postAuthor = $("<p>")
        .text(post.author)
        .addClass("author");

    const $postDescription = $("<p>")
        .text(post.description);

    const $postTitle = $("<h3>")
        .text(post.title)
        .addClass("title");

    const $postImg = $("<img>")
        .attr("src", post.imgUrl)
        .addClass("img");

    const $postAddButton = $("<button> To playlist </button>")
        .addClass("addToMyPlaylist")
        .attr("id", post.id);

    ($postTitle).appendTo($postContainer);
    ($postImg).appendTo($postContainer);
    ($postDescription).appendTo($postContainer);
    ($postAuthor).appendTo($postContainer);
    ($postAddButton).appendTo($postContainer);
    ($postContainer).appendTo("body");

    $postImg.on('click', () => {
        $mainContainer.empty();
        ($postContainer).appendTo($mainContainer);

    });

    $postAddButton.on('click', (event) => {
        const currentId = event.currentTarget.id;
        addToMyPlaylist(+currentId);
    });

    return $postContainer;
}

const renderSection = () => {
    $.each(db, function (key) {
        renderSections(key);
    })
}

const renderSections = (key) => {
    $.each(db[key], function (key, value) {
        const $postContainer = createPostContainer(value);
        ($postContainer).appendTo($mainContainer);
    })
}

const $mainContainer = $("<section>").attr("id", "app");
($mainContainer).appendTo("body");


window.onload = () => {
    renderSection();
    $("#homePage").on('click', () => {
        $mainContainer.empty();
        renderSections("library");
        renderSections("hotlist");
        renderSections("playlist");
    });
    $("#hotlist").on('click', () => {
        $mainContainer.empty();
        renderSections("hotlist");
    })
    $("#myPlaylist").on('click', () => {
        $mainContainer.empty();
        renderSections("myPlaylist");
    })


}









