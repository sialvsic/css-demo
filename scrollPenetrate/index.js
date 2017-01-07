/* eslint-disable */
function openModal() {
  var node = document.getElementById('modal');
  node.style.display = 'block';
  //在打开的modal的时候给body设置加上样式
  ModalHelper.afterOpen();

  var clickNode = document.getElementById('modal');
  clickNode.addEventListener('click', function() {
    //目的是当点击了蒙版的灰色区域后，模态窗口关闭
    console.log('modal click');

    //在关闭的modal的时候给body设置取现样式
    ModalHelper.beforeClose();
    node.style.display = 'none';
  });


  var modalContent = document.getElementById('modal-main-content');
  modalContent.addEventListener('click', function(event) {
    //禁止事件冒泡
    event.stopPropagation();
    console.log('modal content click');
  });

}


var ModalHelper = (function(bodyClass) {
  var scrollTop;
  return {
    afterOpen: function() {
      console.log(document.scrollingElement.scrollTop)
      //获取在打开出口的一瞬间的时候背景页面的top值
      scrollTop = document.scrollingElement.scrollTop;
      document.body.classList.add(bodyClass);
      //因为设置样式为position fixed后，是居于视口的定位，那么内容会移动到最上面，需要保存之前的位置不变，
      //此时的定位依据是top
      document.body.style.top = -scrollTop + 'px';
    },
    beforeClose: function() {
      document.body.classList.remove(bodyClass);

      //scrollTop lost after set position:fixed, restore it back.
      //在设置position：fixed之后，scrollTop的值会清0
      document.scrollingElement.scrollTop = scrollTop;
    }
  };
})('modal-open');