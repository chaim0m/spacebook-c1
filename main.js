var counter = 0; // id generator
var postArray = []; //storage location of post object
var postObject = {};//post individual object

function createPost() {
  postObject = {
    text: $('#post-name').val(),
    id: counter
  };
};

function storePost() {
  postArray.push(postObject);
};

/*function renderPost() { //renders posts to page (on click)
  counter++;
  $('.posts').append('<p class="post" data-id='+postArray[i].postObject.id+'>'+postArray[i].postObject.text+ '</br><button type="button" class="remove">REMOVE</button></p>');
};*/
function clearPage(){
//  for (var i=0;i<postArray.length; i++){
  $('.posts').find('p').remove();
//  }
}
function renderPage(){
  clearPage();
  for (var i=0;i<postArray.length; i++){
    $('.posts').append('<p class="post" data-id='+postArray[i].id+'>'+postArray[i].text+ '</br><button type="button" class="remove">REMOVE</button></p>');
  }
}
function onAddPostClick(){
  createPost();
  storePost();
  renderPage();
};
$('.add-post').on('click', onAddPostClick);

//my new new branch
