/*let input = document.querySelector('input');
console.log(input.value);
let paragraph = document.querySelector(p);
paragraph.textContent = input.value;

themeButton.onclick = function() {
    
};
let lili = document.querySelector('li');
lili.add(input.value)
commentForm.onsubmit = function (evt) {
    evt.preventDefault();
  
  };
let newElement = document.createElement('li');
    console.log('newElement');*/
let commentList =  document.querySelector('.comment-list');
//commentList.textContent = 'Новая строка';
//commentList.append('новый комментарий')

let commentabc = document.querySelector('.comment-abc');
let commentText = document.querySelector('.comment-user-text');

commentabc.onsubmit = function(evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('comment-user');
  newComment.textContent = '1234';
  newComment.textContent = commentText.value;
  commentText.value = '';
  commentList.append(newComment);


}