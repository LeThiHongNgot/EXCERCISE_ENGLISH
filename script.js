//sử dụng thư viện jQuery Ripples
$('#ripple').ripples({
        resolution: 512, //đô phân giải của hiệu ứng sống
        dropRadius: 20, //bán kính của những giọt nước
        perturbance: 0.04 //mức độ biến đổi của giọt nước
    })
    //bọt nước
function createBubble() {
    const section = document.querySelector('section'); // Fix typo here
    const createElement = document.createElement('span');
    var size = Math.random() * 20 + 20; // Fix typo here
    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);
    setTimeout(() => {
        createElement.remove();
    }, 4000);
}
setInterval(createBubble, 100);