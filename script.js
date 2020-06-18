setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 3500);




setTimeout( function(){
    $(document).scroll(function(){
        var bheight = $(window).height();
        var percent = 1.8;
        var hpercent = bheight * percent;
    
        if($(this).scrollTop() > hpercent)
        {   
            $('#logo').css({"position":"absolute","top":"1500px"});
        }else{
            $('#logo').css({"position":"fixed","top":"45%"});
        }
    });
    
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        const navbar = document.getElementsByTagName('nav');
        
        burger.addEventListener('click',()=>{
            //Toggle Nav
            
            nav.classList.toggle('nav-active');
            
    
            //Animate Links
            navLinks.forEach((link, index)=>{
                if(link.style.animation) {
                    link.style.animation = ''
                }else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
                }
            });
    
            //burger animation
            burger.classList.toggle('toggle');

            navbar.style.position = 'fixed'
    
        });
       
    };
    
    navSlide();
    

    
    const searchBtn = document.getElementById('search-btn');
    const search = document.getElementById('search');
    
    var i = 0;
    var message = 'eg. Painter, Engineer, Plumber';
    var speed = 100;
    var delay = 500;
    
    function searchbtn() {
        search.style.width = '80%';
        search.style.paddingLeft = '40px';
        search.style.cursor = 'text';
        search.focus();
        
        
        
        
    };
    
    setTimeout(function typeWriter() {
        if (i < message.length) {
            msg = search.getAttribute('placeholder') + message.charAt(i);
            search.setAttribute('placeholder', msg);
            i++;
            setTimeout(typeWriter, speed);
        }
    }, delay)

    searchbtn();
    typeWriter();
    
}, 500)

function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById('wrapper');
    li = document.getElementsByClassName('job');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('h3')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = 'none';
        }
    }
};

