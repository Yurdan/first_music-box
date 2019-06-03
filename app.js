// import db from './posts.js'

// var xhr = new XMLHttpRequest();

//     xhr.open('GET', 'http://localhost:3000/posts');

//     xhr.send();

//     xhr.onreadystatechange = function () {

//       let db = JSON.parse(xhr.responseText); // не могу получить сразу массив, почему?

//       renderSection(db);

//     }

axios.get('http://localhost:3000/posts')
    .then(function (response) {
        // handle success
        renderSections(response.data);
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })





// db.myPlaylist = [];
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

<<<<<<< HEAD
    const $postContainer = $("#postContainer");


    $("#postAuthor").text(post.author);


   $("#postDescription").text(post.description);

     $("#title").text(post.title);


    const $postImg = $("#postImg")
        .attr("src", post.imgUrl);


    $postContainer.clone().prependTo("#mainContainer");
    $postContainer.show();


    // $postImg.on('click', () => {
    //     $mainContainer.empty();
    //     ($postContainer).appendTo($mainContainer);

    // });


=======
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

>>>>>>> a9cf5dd9f5e96048336260727d4d6f4af418f10d

    return $postContainer;
}

const renderSection = () => {
    $.each(db, function (key) {
        renderSections(key);
    })
}

const renderSections = (arr) => {
    $.each(arr, function (i, item, array) {
        const $postContainer = createPostContainer(item);
        ($postContainer).appendTo($mainContainer);
    })
}

const $mainContainer = $("<section>").attr("id", "app");
($mainContainer).appendTo("body");


window.onload = () => {
    // renderSections();
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

    $("#button").on('click', () => {
       
// контейнер с карточкой 
        $.each($(".post"), function (index, $card) {
        // почему здесь ошибка   
            $card.find("#title");
       
            // $card.find("#title").css("color", "red");
        })


        // 
        // let $input = $("#input");
        // let words = $.each($input, function (i, item, array) {
        //     return item.value;
            
        // })
    })
}

    // }).on('click', () => {
    //     alert($("#title").text())

    // })
    









