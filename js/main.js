$(function(){
    var dr = $('#divy');
    divy.forEach(function(obj,idx){
        dr.append('<h4>'+obj.name+'</h4><p>Datum: '+obj.date+'</p><p>Civilizace: '+obj.civilization+'</p><p>Zachované: '+obj.preserved+'</p><p>Zánik: '
        +obj.death+'</p>');
    });

    $('#divy h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#f0ad4b'});
        } else {
            $(this).css({'background-color':'#484848'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });


    var dn = $('#nove-divy');
    nove.forEach(function(obj,idx){
        dn.append('<h4>'+obj.name+'</h4><p>Datum: '+obj.state+'</p><p>Stát: '+obj.date+'</p>');
    });

    $('#nove-divy h4').click(function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#f0ad4b'});
        } else {
            $(this).css({'background-color':'#484848'});
        }
        $(this).nextUntil('h4').toggle(1000);
    });


    var e = 0;
    window.setInterval(function(){
        $('#zajim p').text(zajimavosti[e].text);
        e<zajimavosti.length-1 ? e++ : e=0; 
    }, 5000);
})


