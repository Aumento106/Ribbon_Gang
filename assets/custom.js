const load_more_btn = document.querySelectorAll(".view_all_btn");

const blog_cards = document.querySelectorAll(".js_load_more_articles");

function load_articles (evt){
    const target = evt.target;
    const closest = target.closest(".main-blog");
    const new_all_div = closest.querySelectorAll(".blog-articles__article");
    const has_hidden = Array.from(new_all_div).filter(node=> node.classList.contains('hidden'));
    
    if(new_all_div.length > 0){

        new_all_div.forEach((node)=>{
            if(node.classList.contains('hidden')){
                node.classList.remove('hidden');
            }
        })

        const hasHiddenAttribute = Array.from(new_all_div).some(element => element.classList.contains('hidden'));

            if (!hasHiddenAttribute) {
                target.closest('.view_all_btn').classList.add('hidden');
            }else{
                target.closest('.view_all_btn').classList.remove('hidden');
            }
        // const nodeLength = Array.from(new_all_div).find(node=> node.classList.contains('hidden').length);
        // console.log(nodeLength);
    }
}

if(load_more_btn.length > 0){
 load_more_btn.forEach((btn)=>{btn.addEventListener("click", load_articles.bind(this));
});

}
// load_more_btn.addEventListener("mouseover" , ()=>{
//     console.log("This button is clcked");
// });

// function validatePhonenumber(){
//     let phoneInput = document.getElementById('ContactPhone');
//     let errorMessage = document.getElementById('phoneError');

//     if(/[^0-9]/.test(phoneInput.value)){
//         errorMessage.style.display = 'block';
//         phoneInput.setCustomValidity('Invalid phone number');
//     }else{
//         errorMessage.style.display = 'none';
//         phoneInput.setCustomValidity('');
//     }
// }
