$(document).ready(function(){
    
    // Start Back to Top
    $(".btn-backtotops").hide();
    
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 500){
            $(".btn-backtotops").fadeIn(1000);
        }else{
            $(".btn-backtotops").fadeOut(1000);
        }
    })
    // End Back to Top

    
    // Start Header
    // Start nav

    // for bugger
    $('.navbuttons').click(function(){
        $('.navbuttons').toggleClass('crossxs');
    });

    // for nav
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 200){
            $('.navbar').addClass('navmenus');
        }else{
            $('.navbar').removeClass('navmenus');
        }
    });

    // End nav
    // End Header


    // Start Properties
    // for active item
    $('.propertylists').click(function(){
        $(this).addClass('activeitems').siblings().removeClass('activeitems');


        // for filter
        let getattvalue = $(this).attr('data-filter');

        if(getattvalue === 'all'){
            $('.filters').show('slide',500);
        }else{
            $('.filters').hide('slide',500);

            $('.filters').not('.' + getattvalue).hide('slide',500);

            $('.filters').filter('.' + getattvalue).show('slide',500);
        }
    });


    // For image overlay (lightbox2)
    lightbox.option({
        showImageNumberLabel: false
    });

    // End Properties


    // Start Adv Section
    $(window).scroll(function(){
        let getscrolltop = $(this).scrollTop();

        if(getscrolltop >= 900){
            $('.advimages').addClass('fromlefts');
            $('.advtexts').addClass('fromrights');
        }else{
            $('.advimages').removeClass('fromlefts');
            $('.advtexts').removeClass('fromrights');
        }
    })
    // End Adv Section


    // Start Footer Section
    const getyear = $('#getyear');
    const getfullyear = new Date().getUTCFullYear();

    getyear.text(getfullyear);
    // End Footer Section

});