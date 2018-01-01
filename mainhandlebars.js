var counter = 0; // id generator
var postArray = []; //storage location of post object
var postObject = {};//post individual object

function createPost() {
  postObject = {
    text: $('#post-name').val(),
    id: counter
  };
};
function generateId(counter) {
    Counter++;
  };


function storePost() {
  postArray.push(postObject);
};

/*function renderPost() { //renders posts to page (on click)
  counter++;
  $('.posts').append('<p class="post" data-id='+postArray[i].postObject.id+'>'+postArray[i].postObject.text+ '</br><button type="button" class="remove">REMOVE</button></p>');
};*/
function clearPage(){

  $('.posts').find('p').remove();

}
/*function renderPage(){
  clearPage();
  for (var i=0;i<postArray.length; i++){
    $('.posts').append('<p class="post" data-id='+postArray[i].id+'>'+postArray[i].text+ '</br><button type="button" class="remove">REMOVE</button></p>');
  }*/

function onAddPostClick(){
  createPost();
  storePost();
  renderPage();
};
var source = $('#spacebook-blastoff').html();
var template = Handlebars.compile(source);
var newHTML = template(postArray);

function itirateArray(){
  for (let i=0;i<postArray.length; i++){
    var newHTML = template(postArray[i]);
    $('.posts').append(newHTML);
}
};
$('.add-post').on('click', createPost);
$('.add-post').on('click', storePost);

$('.add-post').on('click', itirateArray);

//my new new branch
