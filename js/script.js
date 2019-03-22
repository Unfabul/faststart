let scrollTop = document.querySelector('.scroll');
let advantages = document.querySelector('.advantages');
let main = document.querySelector('.main');
let mainLogo = document.querySelector('.main-header-logo');
let h1 = document.querySelector('h1');
let mainP = document.querySelector('.main-header-block-text p');
let mainButtons = document.querySelector('.main-header-block-text-buttons');
let mainForm = document.querySelector('.main-header-block-form');
let aboutUsBlock = document.querySelector('.about-us-block');
let aboutUsImg = document.querySelector('.about-us-block img');
let aboutUsText = document.querySelector('.about-us-block-text');
let advantagesContainer = document.querySelector('.advantages-block-container');
let advantagesImg = document.querySelector('.advantages-block-container-img');
let advantagesIcons = document.querySelectorAll('.advantage-block i');
let aboutAdv = document.querySelector('.about-adv-block');
let aboutAdvText = document.querySelector('.about-adv-block-text');
let aboutAdvImg = document.querySelector('.about-adv-block img');
let contactUsH2 = document.querySelector('.contact-us-block h2');
let contactUsP = document.querySelector('.contact-us-block p');
let contactUsA = document.querySelector('.contact-us-block-button');
let blocksHeader = document.querySelectorAll('.blocks-header');
let blocksHeaderLine = document.querySelectorAll('.blocks-header-line');
let costBlock = document.querySelector('.cost-block-price');
let blockPrice = document.querySelectorAll('.block-price');
let clientsBlock = document.querySelector('.clients-block-clients');
let clients = document.querySelectorAll('.client');
let reviewsBlock = document.querySelector('.reviews-block');
let reviewsBlockMain = document.querySelector('.reviews-block-main');
let contactBlock = document.querySelector('.contact-block');
let contactText = document.querySelector('.contact-block-text');
let contactFormInput = document.querySelectorAll('.contact-block-form input');
let contactFormTextarea = document.querySelector('.contact-block-form textarea');
let contactFormButton = document.querySelector('.contact-block-form button');
let socialBlock = document.querySelector('.social-block');
let socialBlockA = document.querySelectorAll('.social-block a');
let slider = document.querySelector('.slider');
let sliderSlide = document.querySelectorAll('.slide');
let sliderBullets = document.querySelectorAll('.bullet');
let fixedMenu = document.querySelector('.section');
let menuItems = document.querySelectorAll('.menu-item');
let menuItemsId = document.querySelectorAll('.menu-items');

// Прелоадер
$(window).on('load', function(){
    $('.preloader').delay(500).fadeOut('slow');
});

setTimeout(func, 500);
function func(){
    document.body.style.overflow = 'visible';
    mainLogo.classList.add('anim');
    h1.classList.add('anim');
    mainP.classList.add('anim');
    mainButtons.classList.add('anim');
    mainForm.classList.add('anim');
}


// Плавный скролл наверх
$('.scroll').click(function(){
    $("html, body").animate({
        scrollTop:0
    }, 1000);

    return false;
});

//Событие скролл (Анимация вылетов)
window.addEventListener('scroll', function(){
    if( advantages.getBoundingClientRect().top <  window.innerHeight / 1.1 ){
        scrollTop.style.display = 'block';
    }else{
        scrollTop.style.display = 'none';
    }

    if( aboutUsBlock.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
        aboutUsImg.classList.add('anim');
        aboutUsText.classList.add('anim');
    }

    if( advantagesContainer.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
        advantagesImg.classList.add('anim');
    }

    let advantageIconsI = 0;
    advantagesIcons.forEach(function(advantagesIconsEl, index){
        if( !advantagesIconsEl.classList.contains('anim') ){
            if( advantagesIconsEl.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
                advantagesIconsEl.classList.add('anim');
                advantagesIconsEl.style.animationDelay = advantageIconsI / 5 + 's';
                advantageIconsI++;
            }
        }
    });
    
    if( aboutAdv.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
        aboutAdvText.classList.add('anim');
        aboutAdvImg.classList.add('anim');
    }
    
    if( contactUsH2.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
        contactUsH2.classList.add('anim');
    }

    if( contactUsP.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
        contactUsP.classList.add('anim');
    }

    if( contactUsA.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
        contactUsA.classList.add('anim');
    }
    
    blocksHeader.forEach(function(blocksHeaderEl, index){
        if( blocksHeaderEl.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
            blocksHeaderEl.classList.add('anim');
        }
    });

    blocksHeaderLine.forEach(function(blocksHeaderLineEl, index){
        if( blocksHeaderLineEl.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
            blocksHeaderLineEl.classList.add('anim');
        }
    });

    let blockPriceI = 0;
    blockPrice.forEach(function(blockPriceEl, index){
        if( !blockPriceEl.classList.contains('anim') ){
            if( costBlock.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
                blockPriceEl.classList.add('anim');
                blockPriceEl.style.animationDelay = blockPriceI / 5 + 's';
                blockPriceI++;
            }
        }
    });

    let clientsI = 0;
    clients.forEach(function(clientsEl, index){
        if( !clientsEl.classList.contains('anim') ){
            if( clientsBlock.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
                clientsEl.classList.add('anim');
                clientsEl.style.animationDelay = clientsI / 5 + 's';
                clientsI++;
            }
        }
    });

    if( reviewsBlock.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
        reviewsBlockMain.classList.add('anim');
    }

    if( contactBlock.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
        contactText.classList.add('anim');
        contactFormInput.forEach(function(contactFormInputEl, index){
            contactFormInputEl.classList.add('anim');
        });
        contactFormTextarea.classList.add('anim');
    }

    // contactFormInput.forEach(function(contactFormInputEl, index){
    //     if( contactFormInputEl.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
    //         contactFormInputEl.classList.add('anim');
    //     }
    // });

    // if( contactFormTextarea.getBoundingClientRect().top <  window.innerHeight / 1 ){
    //     contactFormTextarea.classList.add('anim');
    // }

    if( contactFormButton.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
        contactFormButton.classList.add('anim');
    }

    let socialBlockAI = 0;
    socialBlockA.forEach(function(socialBlockAEl, index){
        if( !socialBlockAEl.classList.contains('anim') ){
            if( socialBlock.getBoundingClientRect().top <  window.innerHeight / 1.05 ){
                socialBlockAEl.classList.add('anim');
                socialBlockAEl.style.animationDelay = socialBlockAI / 5 + 's';
                socialBlockAI++;
            }
        }
    });
});

// let menuIndex = 0;
// let arr = [];
// window.addEventListener('scroll', function(){

// menuItems.forEach(function(menuItemsEl, index){
    
//         if(menuItemsEl.getBoundingClientRect().top <  window.innerHeight / 1.05){
//             // menuIndex++;
            
//             arr.push(index);
//             menuIndex = arr[0];
//             // arr = [];
//             console.log(menuIndex);
//             // menuItemsId.forEach(function(menuItemsIdEl, index){
//             //     menuItemsIdEl[menuIndex].classList.add('active');
//             // });
//         }
//     });
// });

// Слайдер
sliderBullets.forEach(function(sliderBulletsEl, index){

    sliderBulletsEl.addEventListener('click', function(){
        sliderBullets.forEach(function(sliderBulletsActiveEl, index){
            sliderBulletsActiveEl.classList.remove('active');
        });
        this.classList.add('active');

        if(window.innerWidth > 1200){
            slider.style.transform = 'translate(-'+ 925*index + 'px)';
        }else if( window.innerWidth <= 1200 && window.innerWidth > 992 ){
            slider.style.transform = 'translate(-'+ 778*index + 'px)';
        }else if( window.innerWidth <= 992 && window.innerWidth > 600){
            slider.style.transform = 'translate(-'+ 595*index + 'px)';
        }else if(window.innerWidth <= 600){
            slider.style.transform = 'translate(-'+ 365*index + 'px)';
        }
    });
});

// Фиксация меню
let fixedMenuBottom = fixedMenu.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function(){
    if(fixedMenu.classList.contains('fixed') && window.pageYOffset < fixedMenuBottom){
        fixedMenu.classList.remove('fixed');
    }else if(window.pageYOffset > fixedMenuBottom){
        fixedMenu.classList.add('fixed');
    }
};

// Скролл от пунктов меню
let $page = $('html, body');
let $menuItem = $('a[href*="#"]');
$menuItem.click(function(){
    $(this).each(function(){
        $menuItem.removeClass('active');
    });

    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    $(this).addClass('active');
    
    return false;
});

// Скролл от кнопок
$(".about-main").click(function(){

    $page.animate({
        scrollTop: $("#about").offset().top
    }, 1000);

    return false;
});

$(".about-cost").click(function(){

    $page.animate({
        scrollTop: $("#cost").offset().top
    }, 1000);

    return false;
});

$(".about-advantages").click(function(){

    $page.animate({
        scrollTop: $("#adv").offset().top
    }, 1000);

    return false;
});

$(".about-cont-us").click(function(){

    $page.animate({
        scrollTop: $("#cont-us").offset().top
    }, 1000);

    return false;
});

$(".cost-button").click(function(){

    $page.animate({
        scrollTop: $("#cont-us").offset().top
    }, 1000);

    return false;
});

// Форма
let form = document.querySelectorAll('form');
form.forEach(function(formEl, index){
    formEl.addEventListener('submit', function(e){
        e.preventDefault();

        let path = '/handlers/lead_handler.php?';

        for(let i = 0; i < this.elements.length; i++){
            path += `${this.elements[i].name}=${this.elements[i].value}&`;
        }

        let xhr = new XMLHttpRequest();
        xhr.open('get', path);
        xhr.send();

        xhr.addEventListener('load', ()=>{
            document.querySelector('.success-state').innerHTML = xhr.responseText;
            document.querySelector('.popup').style.display = 'flex';
        });
    });
});

// Закрытие попапа
let closePopup = document.querySelector('.popup-close-button');
let popup = document.querySelector('.popup');

closePopup.addEventListener('click', ()=>{
    popup.style.display = 'none';
});

$(window).keyup(function(e){
    if( e.keyCode == 27 ){
        $(popup).css('display', 'none');;
    }
});

// Бургер
let sectionMenuNav = document.querySelector('.section-menu-nav');
let burger = document.querySelector('.section-menu-button');

burger.addEventListener('click', function(){
    if(this.classList.contains('open')){
        this.classList.remove('open');
        // sectionMenuNav.style.display = 'none';
        sectionMenuNav.classList.remove('anim');
    }else{
        this.classList.add('open');
        // sectionMenuNav.style.display = 'flex';
        sectionMenuNav.classList.add('anim');
    }
});



// Добавление active элементу меню при попадании на определенный блок
let lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 50,
    topMenuItems = topMenu.find("a"),

    scrollItems = topMenuItems.map(function(){
    let item = $($(this).attr("href"));
    if (item.length){
        return item;
    }
});

$(window).scroll(function(){
    let fromTop = $(this).scrollTop() + topMenuHeight;

    let cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
        return this;
    });

    cur = cur[cur.length - 1];
    let id = cur && cur.length ? cur[0].id : "";
  
    if (lastId !== id) {
        lastId = id;

        topMenuItems.removeClass("active");
        topMenuItems.filter("[href='#" + id + "']").addClass("active");
    }
});

