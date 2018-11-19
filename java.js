const flipCard= function (){
    $('front').show('rollOut');
}

const addHandlers=()=>{
    $('front').on('click',flipCard);
}

$(()=>{
    addHandlers()
})
