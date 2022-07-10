let BtnMobile = document.getElementById('toggle')
let BlocMobile = document.getElementById('BlocMobile')
let classes = BtnMobile.classList;

BtnMobile.addEventListener('click', function() {
    const result = classes.toggle("c");
    if (result == true) {
        BlocMobile.classList.add('BlocMobileOn')
        BtnMobile.src = "./src/close.png"
    } else {
        BlocMobile.classList.remove('BlocMobileOn')
        BtnMobile.src = "./src/menu.png"
    }
})