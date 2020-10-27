(()=>{
    let icon;
    const input = document.querySelector('input');
    function deletePostIt(event){
        const parentDiv = event.target.parentElement;
        parentDiv.remove();
    }
    function postIt(key){
        const userValue = key.target.value;
        if(key.key === 'Enter'){
            const post = document.querySelector('.post-zone');
            post.innerHTML += `<div class = "post-it"><p>${userValue}</p><i class="fa fa-times" aria-hidden="true"></i></div>`;
            input.value = '';
            icon = document.getElementsByClassName('fa');
            for(let i = 0; i < icon.length ; i++){
                icon[i].addEventListener('click',deletePostIt);
            }
        } 
    }
    function run(){
        input.addEventListener('keydown',postIt);
    }
    run();
})();