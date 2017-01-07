/* eslint-disable */
function openModal() {
  var node = document.getElementById('modal');
  node.style.display = 'block';

  var clickNode = document.getElementById('modal');
  clickNode.addEventListener('click', function() {
    //目的是当点击了蒙版的灰色区域后，模态窗口关闭
    console.log('modal click');
    node.style.display = 'none';
  });


  var modalContent = document.getElementById('modal-main-content');
  modalContent.addEventListener('click', function(event) {
    //禁止事件冒泡
    event.stopPropagation();

    console.log('modal content click');
  });
}