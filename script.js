let BtnMobile = document.getElementById('toggle')
let MobileMenu = document.getElementById('mobile')

BtnMobile.addEventListener('click', function() {
    if (MobileMenu.style.display == 'none') {
        MobileMenu.style.display = 'flex';
        BtnMobile.src = "./src/close.png"
    } else {
        MobileMenu.style.display = 'none';
        BtnMobile.src = "./src/menu.png"
    }
})