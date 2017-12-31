var counter = 0; // id generator
var postArray = []; //storage location of post object
var postObject = {};//post individual object

function createPost() {
  postObject = {
    text: $('#post-name').val(),
    id: counter
  };
  counter++;
};
$('.add-post').on('click', createPost); //stores the post object (on click) in postArray

function storePost() {
  postArray.push(postObject);
};

function renderPost() { //renders posts to page (on click)
  counter += 1;
  $('.row').append('<p class="post" data-id='+postObject.id+'> <button type="button" class="remove">REMOVE</button>'+postObject.text'</p>');
};
// console.log(post.postArray);

fuction onAddPostClick(){
  createPost();
  storePost();
  renderPost();
}
$('.add-post').on('click', onAddPostClick);

//my new new branch
