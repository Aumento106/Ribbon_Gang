async function udpateProgressbar() {
    if (window.location.pathname == `${routes.cart_url}`) {
        await fetch(`${routes.cart_url}?section_id=main-cart-items`)
            .then((response) => response.text())
            .then((responseText) => {
                const html = new DOMParser().parseFromString(responseText, 'text/html');
                // console.log(html);
                const shipping_bar_wrapper = html.querySelector('.shipping-bar-wrapper');
                if (shipping_bar_wrapper) {
                    const updatedWidth = shipping_bar_wrapper.querySelector('.shipping-bar')?.querySelector('span')?.getAttribute('style');
                    const updatedText = shipping_bar_wrapper?.querySelector('.shipping-bar-text');
                    const AllProductProgressBar = document.querySelectorAll('.product-shipping-bar');
                    const AllProductTexts = document.querySelectorAll('.shipping-bar-text');
                    if (AllProductProgressBar.length > 0) {
                        AllProductProgressBar.forEach(progressbar => {
                            const innerProgress = progressbar?.querySelector('span');
                            if (innerProgress) innerProgress.setAttribute('style', updatedWidth);
                        })
                    }
                    if (AllProductTexts.length > 0) {
                        AllProductTexts.forEach(text => {
                            text.innerHTML = updatedText.innerHTML;
                        })
                    }
                }
            })
    } else {
        await fetch(`${routes.cart_url}?section_id=cart-drawer`)
            .then((response) => response.text())
            .then((responseText) => {
                const html = new DOMParser().parseFromString(responseText, 'text/html');
                const shipping_bar_wrapper = html.querySelector('.shipping-bar-wrapper');
                if (shipping_bar_wrapper) {
                    const updatedWidth = shipping_bar_wrapper.querySelector('.shipping-bar')?.querySelector('span')?.getAttribute('style');
                    const AllProductProgressBar = document.querySelectorAll('.product-shipping-bar');
                    if (AllProductProgressBar.length > 0) {
                        AllProductProgressBar.forEach(progressbar => {
                            const innerProgress = progressbar?.querySelector('span');
                            if (innerProgress) innerProgress.setAttribute('style', updatedWidth);
                        })
                    }
                }
            })
    }
}



const load_more_btn = document.querySelectorAll(".view_all_btn");

const blog_cards = document.querySelectorAll(".js_load_more_articles");

function load_articles(evt) {
    const target = evt.target;
    const closest = target.closest(".main-blog");
    const new_all_div = closest.querySelectorAll(".blog-articles__article");
    const has_hidden = Array.from(new_all_div).filter(node => node.classList.contains('hidden'));

    if (new_all_div.length > 0) {

        new_all_div.forEach((node) => {
            if (node.classList.contains('hidden')) {
                node.classList.remove('hidden');
            }
        })

        const hasHiddenAttribute = Array.from(new_all_div).some(element => element.classList.contains('hidden'));

        if (!hasHiddenAttribute) {
            target.closest('.view_all_btn').classList.add('hidden');
        } else {
            target.closest('.view_all_btn').classList.remove('hidden');
        }
        // const nodeLength = Array.from(new_all_div).find(node=> node.classList.contains('hidden').length);
        // console.log(nodeLength);
    }
}

if (load_more_btn.length > 0) {
    load_more_btn.forEach((btn) => {
        btn.addEventListener("click", load_articles.bind(this));
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

/*
const variantOptions = document.querySelectorAll('.product-variant-options input[type="radio"]');
const targetDiv = document.querySelectorAll(".quantity-left-txt");
const atrDiv = document.querySelectorAll(".attribute_class");



variantOptions.forEach(function(input) {
    input.addEventListener("change", function() {
        setTimeout(function() {
            atrDiv.forEach(function(div) {
                const attributeValue1 = div.getAttribute("inventorey_managment");
                const product_qut = div.getAttribute("product_qut");
                console.log(attributeValue1); 
                console.log(product_qut); 
            });
        }, 2000);
    });
});
*/

// function attachVariantRadioEventListeners() {
//     const variantOptions = document.querySelectorAll('.product-variant-options input[type="radio"]');

//     setTimeout(function() {
//     variantOptions.forEach(radio => {
//       radio.addEventListener('change', function() {
//         console.log('radio button clicked');
//         const inventoryStatusElement = document.querySelector('.product-inventory-status');

//         // Refresh the content of the inventory status element
//         if (inventoryStatusElement) {

//                 console.log('HTML updated')
//                 const availableInventory = document.querySelector('span.inventory');

//         }
//       });
//     });
// }, 2000);
//   }

//   // Mutation observer to watch for changes in the .product__info-container
//   const observer = new MutationObserver(() => {
//     // Re-attach event listeners after HTML change in the container
//     attachVariantRadioEventListeners();
//   });

//   // Start observing changes within .product__info-container
//   const productInfoContainer = document.querySelector('.product__info-container');
//   if (productInfoContainer) {
//     observer.observe(productInfoContainer, { childList: true, subtree: true });
//   }

//   // Initial attachment of event listeners
//   attachVariantRadioEventListeners();



document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.product_list_swiper', {
        slidesPerView: 1,
        initialSlide: 0,
        spaceBetween: 16,
        grabCursor: true,
        loop: false
    });

    new Swiper('.section-custom-slideshow-slider .slideshow', {
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 500,
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    new Swiper('.custom-image-with-text-slider', {
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 500,
        centeredSlides: false,
        grabCursor: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    new Swiper('.cart-product_list_swiper', {
        slidesPerView: 1,
        initialSlide: 0,
        spaceBetween: 24,
        grabCursor: true,
        loop: false,
        breakpoints: {
            '1366': {
                slidesPerView: 1.5,
            }
        },
    });

    new Swiper('.custom-slider-show', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        grabCursor: true,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    new Swiper('.project-popup-image-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        grabCursor: true,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

// ---------- Homepage Hotspot area popup -----------
document.addEventListener('click', (event) => {
    if (event.target.closest('.hotspot-icon')) {
        const blockId = event.target.closest('.hotspot-icon').getAttribute('data-block-id');
        const popup = document.getElementById(`popup-${blockId}`);

        document.querySelectorAll('.hotspot-product-list-main').forEach(p => {
            p.classList.remove('active');
            document.body.classList.remove('popup-overflow-hidden');
        });

        if (popup) {
            popup.classList.add('active');
            document.body.classList.add('popup-overflow-hidden');
        }
    }

    if (event.target.closest('.hotspot-product-list-main .close-btn')) {
        const popup = event.target.closest('.hotspot-product-list-main');
        if (popup) {
            popup.classList.remove('active');
            document.body.classList.remove('popup-overflow-hidden');
        }
    }
});

// ------- Projects Page Popup ----------
document.addEventListener('click', (event) => {
    if (event.target.closest('.collage__item')) {
        const blockId = event.target.closest('.collage__item').getAttribute('data-block-id');
        const popup = document.getElementById(`project-popup-${blockId}`);

        document.querySelectorAll('.projects-popup-main').forEach(p => {
            p.classList.remove('active');
            document.body.classList.remove('popup-overflow-hidden');
        });

        if (popup) {
            popup.classList.add('active');
            document.body.classList.add('popup-overflow-hidden');
        }
    }

    if (event.target.closest('.projects-popup-main .close-btn')) {
        const popup = event.target.closest('.projects-popup-main');
        if (popup) {
            popup.classList.remove('active');
            document.body.classList.remove('popup-overflow-hidden');
        }
    }
});

// ------- Product Detail Page Tabbing Section ---------
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    if (tabs.length > 0) {
        tabs[0].classList.add('active');
        contents[0].classList.add('active');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
        });
    });
});


document.querySelectorAll('.sub-header-menu-main .header__submenu li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const submenu = item.querySelector('.sub-header-menu-main .header__submenu li .list-unstyled');
    if (submenu) submenu.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    const submenu = item.querySelector('.sub-header-menu-main .header__submenu li .list-unstyled');
    if (submenu) submenu.style.display = 'none';
  });
});


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    function replaceTextInElement(el, oldWord, newWord) {
      if (el.children.length === 0 && el.innerHTML.includes(oldWord)) {
        el.innerHTML = el.innerHTML.replace(new RegExp(oldWord, 'g'), newWord);
      } else {
        for (let child of el.children) {
          replaceTextInElement(child, oldWord, newWord);
        }
      }
    }

    replaceTextInElement(document.body, "®", "<sup>®</sup>");
    replaceTextInElement(document.body, "™", "<sup>™</sup>");
  }, 1000); // Delay for 1 second
});
