$(function(){

    //Fixed Header
    let header=$("#header");
    let headerH=header.height();
    let scrollPos=$(window).scrollTop();
    let nav=$("#nav");


    $(window).on("scroll load resize", function (){
        headerH=header.height();
        scrollPos=$(this).scrollTop();

        if(scrollPos>headerH){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    });

    //Smooth Scroll
    $("[data-scroll]").on("click", function (event){
        event.preventDefault();
        
        let elementId=$(this).data("scroll");
        let elementOffset=$(elementId).offset().top;
        
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 1500);
        // console.log(elementOffset);

    });
    
    //Nav Toggle
    $("#navToggle").on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
        
    });
    
    //Intro: https://kenwheeler.github.io/slick/
    
    let slider=$("#intro__slider");
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots:true
    });
    
    
    //Works
    
    let filter=$("[data-filter]");
    
    filter.on("click", function(event){
        event.preventDefault();
        
        let cat=$(this).data('filter');
        
        if(cat =='all'){
            $("[data-cat]").removeClass('hide');
        } else{
            $("[data-cat]").each(function(){
            
            let workCat=$(this).data('cat');
            
            
        if(workCat != cat){
            $(this).addClass('hide');
        } else{
            $(this).removeClass('hide');
        }
        });
        }
    });
    
    
    //Modals
    
    let modalCall=$("[data-modal]");
    let modalClose=$("[data-close]");
    
    modalCall.on("click", function(event){
        event.preventDefault();
        
        let $this=$(this);
        let modalId= $this.data('modal');
        
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
    });
    
    modalClose.on("click", function(event){
        event.preventDefault();
        
        let $this=$(this);
        let modalParent= $this.parents('.modal');
        
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    });
    
    $(".modal").on("click", function(){
    
       $(this).removeClass('show');
       $("body").removeClass('no-scroll');
    });
    
    $(".modal__dialog").on("click", function(event){
        event.stopPropagation();
    });
});