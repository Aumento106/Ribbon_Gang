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
            // if(node.classList.contains('hidden'))
        })

    }
}

if(load_more_btn.length > 0){
 load_more_btn.forEach((btn)=>{btn.addEventListener("click", load_articles.bind(this));
});

}
load_more_btn.addEventListener("mouseover" , ()=>{
    console.log("This button is clcked");
});