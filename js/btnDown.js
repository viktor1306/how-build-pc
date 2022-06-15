const btnGo = document.getElementById('btn_go');

let i = 0;
const scroll = () => {
    if(i < 960){
        window.scrollBy(0,10);
        i += 10;
        setTimeout(scroll, 0)
    }else{
        i = 0
    }
}

btnGo.addEventListener('click', scroll)