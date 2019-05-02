$(function(){
    $('h2').text('Sedm divů světa');

    $('.a').on('click',function(){
        $('.a').attr({'style':'fill:rgba(255,0,0);'});
        $(this).attr({'style':'fill:#0b6623;stroke:#0b6623;stroke-width:10'});
        $('#text h2').text($(this).data('nazev'));
        $('#text p').text($(this).data('popis'));
        $('#text img').attr('src',$(this).data('img'));
    });
    

});