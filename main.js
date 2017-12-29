var counter=0;
var postArray = [];

function createPost(){
  var postObject = {
    text: $('#post-name').val(),
    id: counter
  };
  counter+=1;
  console.log(postObject.text);
  postArray.push(postObject);
  console.log(postArray);
  $('.row').append('<p class="post" data-id=postObject.id"><button type="button" class="remove">REMOVE</button>'+postObject.text+'</p>');
};
// console.log(post.postArray);

$('.add-post').on('click',createPost);
