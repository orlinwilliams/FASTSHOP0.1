$(window).scroll(function(){
    if( $('#navPrincipal').offset().top >50){
        $('#navPrincipal').addClass('top-nav-collapse')
    }
    else{
        $('#navPrincipal').removeClass('top-nav-collapse')
    }
})