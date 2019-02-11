/* eslint-disable */
function openModalV1() {
    const node = document.getElementById('modal-V1-shadow');
    node.style.display = 'block';

    const modalContent = document.getElementsByClassName('modal-V1-wrapper');
    modalContent[0].addEventListener('click', function(event) {
        console.log('modal content click');

        //禁止事件冒泡
        event.stopPropagation();
    });
}

function closeModalV1() {
    const node = document.getElementById('modal-V1-shadow');

    node.style.display = 'none';
}


function openModalV2() {
    const node = document.getElementById('modal-V2-shadow');
    node.style.display = 'flex';

    const modalContent = document.getElementsByClassName('modal-V2-content');
    modalContent[0].addEventListener('click', function(event) {
        console.log('modal content click');

        //禁止事件冒泡
        event.stopPropagation();
    });
}

function closeModalV2() {
    const node = document.getElementById('modal-V2-shadow');
    node.style.display = 'none';
}

function openModalV3() {
    const node = document.getElementById('modal-V3-shadow');
    node.style.display = 'block';

    const modalContent = document.getElementsByClassName('modal-V3-content');
    modalContent[0].addEventListener('click', function(event) {
        console.log('modal content click');

        //禁止事件冒泡
        event.stopPropagation();
    });
}

function closeModalV3() {
    const node = document.getElementById('modal-V3-shadow');
    node.style.display = 'none';
}

function openModalV4() {
    const node = document.getElementById('modal-V4-shadow');
    node.style.display = 'flex';

    const modalContent = document.getElementsByClassName('modal-V4-content');
    modalContent[0].addEventListener('click', function(event) {
        console.log('modal content click');

        //禁止事件冒泡
        event.stopPropagation();
    });
}

function closeModalV4() {
    const node = document.getElementById('modal-V4-shadow');
    node.style.display = 'none';
}

function openModalV5() {
    const node = document.getElementById('modal-V5-shadow');
    node.style.display = 'flex';

    const modalContent = document.getElementsByClassName('modal-V5-content');
    modalContent[0].addEventListener('click', function(event) {
        console.log('modal content click');

        //禁止事件冒泡
        event.stopPropagation();
    });
}

function closeModalV5() {
    const node = document.getElementById('modal-V5-shadow');
    node.style.display = 'none';
}

function openModalV6() {
    const node = document.getElementById('modal-V6-overlay');
    node.style.display = 'flex';

    const modalContent = document.getElementsByClassName('modal-V6-content');
    modalContent[0].addEventListener('click', function(event) {
        console.log('modal content click');

        //禁止事件冒泡
        event.stopPropagation();
    });
}

function closeModalV6() {
    const node = document.getElementById('modal-V6-overlay');
    node.style.display = 'none';
}
