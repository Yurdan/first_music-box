import db from './posts.js'

db.myPlaylist = [];
// ?????? Как эту функцию  сделать короче качественее ????????
const addToMyPlaylist = (currentId) => {
    let itemArray;
    $.each(db, function (key, value) {
        itemArray = value;
        $.each(itemArray, function (key, value) {

            $(value).filter(function (key, value) {
                if (value.id == currentId && !db.myPlaylist.find(x => x.id == currentId)) {
                    return db.myPlaylist.push(value);
                };
            })

        })
    })
}
const createPostContainer = (post) => {

    // ???писать так или создать элемент, задать текст и классы в разных колонках???
    let $postContainer = $("<div>").addClass("post");

    $("<p>").text(post.author)
        .addClass("author").appendTo($postContainer);

    $("<img>").attr("src", post.imgUrl)
        .addClass("img").on('click', () => {
            $mainContainer.empty();
            ($postContainer).appendTo($mainContainer).appendTo($postContainer);
            $postContainer.appendTo("body");
        }).appendTo($postContainer);

    $("<p>").text(post.description).appendTo($postContainer);

    $("<h3>").text(post.title)
        .addClass("title").appendTo($postContainer);

    $("<button> To playlist </button>")
        .addClass("addToMyPlaylist")
        .attr("id", post.id).on('click', (event) => {
            const currentId = event.currentTarget.id;
            addToMyPlaylist(+currentId);
        }).appendTo($postContainer);


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









