$(function () {
    $('.menu_btn').on('click', function() {
        $('.side_bar').addClass('active')
        $('.menu_btn').css({
            visibility: 'hidden',
        })
    });
    $('.close_btn').on('click', function () {
        $('.side_bar').removeClass('active')
        $('.menu_btn').css({
            visibility: 'visible',
        })
    });
    $('#search_btn').on('click',function () {
        $('.search').slideUp()
    })
    $(window).on('load', function(){
        $('#lodeing_container').slideUp(1000);
    })

});
