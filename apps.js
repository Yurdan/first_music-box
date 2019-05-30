import db from './posts.js'

db.myPlaylist = [];

// function create HTML element
const createElement = (tag) => {
  return  document.createElement(tag);
}

// function add element in 
const addElementTo = (element, to) => {
    to.appendChild(element);
    return element;
}

// function add class
const addClass = (elem, className) => {
    elem.classList.add(className);
}
// function add post im myPlaylist
const addToMyPlaylist = (currentId) => {
    let itemArray;
    for(let key in db) {
        itemArray = db[key]; // массив
        for (var i = 0; i < itemArray.length; i++) { //перебор массива
            let itemObj = itemArray[i]; //объект
            if (itemObj.id == +currentId && !db.myPlaylist.find(x => x.id == +currentId))
            return db.myPlaylist.push(itemObj);
          }
        }
    }
    
const createPostContainer = (obj) => {
    
  const postContainer = createElement('div');
  const postAuthor = createElement('p');
  const postDescription = createElement('p');
  const postTitle = createElement('h3');
  const postImg = createElement('img');
  const postAddButton = createElement('button');

  addClass(postContainer, 'post');
  addClass(postAuthor, 'author');
  addClass(postTitle, 'title');
  addClass(postImg, 'img');
  addClass(postAddButton, 'addToMyPlaylist');

  postAuthor.innerText = obj.author;
  postDescription.innerText = obj.description;
  postTitle.innerText = obj.title;
  postImg.setAttribute('src', obj.imgUrl);
  postAddButton.innerText = 'To playlist';
  postAddButton.id = obj.id;

  addElementTo(postTitle, postContainer);
  addElementTo(postImg, postContainer);
  addElementTo(postDescription, postContainer);
  addElementTo(postAuthor, postContainer);
  addElementTo(postAddButton, postContainer);


//   show only one post by click on img
    postImg.addEventListener('click', () => {
    mainContainer.innerHTML = '';
    addElementTo(postContainer, mainContainer);
    });

// click on button => call function add post im myPlaylist (20) 
    postAddButton.addEventListener('click', event => {
        let currentId = event.currentTarget.id;
        addToMyPlaylist(+currentId);
});

  return postContainer;
}

const renderSection = () => {
    for(let key in db) {
        renderSections(key);
    }
}
const renderSections = (key) => {
    db[key].forEach(function(item) {
        const postContainer = createPostContainer(item);
        addElementTo(postContainer, mainContainer);
    })

}
const mainContainer = createElement('section');
mainContainer.setAttribute('id', 'app');
addElementTo(mainContainer, document.body);

window.onload = () => {
    renderSection();

    const hotList = document.getElementById('hotlist');
    hotList.addEventListener('click', () => {
        mainContainer.innerHTML = '';
        renderSections('hotlist');
    })
    const homePage = document.getElementById('homePage');
    homePage.addEventListener('click', () => {
        mainContainer.innerHTML = '';
        renderSections('library');
        renderSections('hotlist');
        renderSections('playlist');
    })
    const myList = document.getElementById('myPlaylist');
    myList.addEventListener('click', () => {
        mainContainer.innerHTML = '';
        renderSections('myPlaylist');
    })

}

