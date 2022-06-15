const btnGo = document.getElementById('btn_go');

let i = 0;
const scroll = () => {
    if(i < 3200){
        window.scrollBy(0,15);
        i += 15;
        setTimeout(scroll, 0)
    }else{
        i = 0
    }
}

btnGo.addEventListener('click', scroll)