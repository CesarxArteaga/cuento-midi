$( document ).ready(function() {
   
    var playing = 0; 

    $(function() {
        //single book
        //$("button").draggable()
        $('#mybook').booklet({
            manual: true,
            width:  900,
        height: 550,
            arrows: true
        });
    });

    $('button').on('click', function () { 
        var obj = $('#audio')[0]
        if(playing == 0){
            obj.play();
            playing=1;
        }else{
            obj.pause();
            playing=0;
        }
         
    });

});