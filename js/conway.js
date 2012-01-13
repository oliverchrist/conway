$(document).ready(function(){
    $('td').click(function(){
        $(this).toggleClass('live');
    });
    $('#count').click(function(){
        $('td').neighbours();
    });
    $('#tick').click(function(){
        $('td').tick();
    });
    $('#step').click(function(){
        avsTickStart = new Date();
        step();
    });
    var auto;
    $('#auto').click(function(){
        avsTickStart = new Date();
        auto = window.setInterval("step()", 0);
    });
    $('#stop').click(function(){
        window.clearInterval(auto);
    });
});

var avsTickStart = 0;
var avsTickCounter = 0;
function step(){
    var curTickStart = new Date();
    $('td').neighbours();
    $('td').tick();
    var curTickEnd = new Date();
    $('#tickDuration').text(curTickEnd - curTickStart);
    $('#avsTickDuration').text((curTickEnd - avsTickStart)/++avsTickCounter);
}

$.fn.neighbours = function(){
    $(this).each(function(){
        var row = $(this).parent().index();
        var col = $(this).index();
        var nbs = 0;
        var nbx;
        var nby;
        for(x = -1; x < 2; x++){
            for(y = -1; y < 2; y++){
                nbx = col + x;
                nby = row + y;
                //console.log(nbx + ', ' + nby);
                if(nbx >= 0 && nbx < gridWidth && nby >= 0 && nby < gridHeight && !(nby == row && nbx == col)){
                    if($('table').find('tr').eq(nby).find('td').eq(nbx).hasClass('live')){
                        nbs++;
                    }
                } 
            }
        }
        $(this).text(nbs);
    });
}

$.fn.tick = function(){
    $(this).each(function(){
        var nbs = $(this).text();
        var live = $(this).hasClass('live');
        var dead = !live;
        // 1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
        if(nbs < 2){
            $(this).removeClass('live');
        }
        // 2. Any live cell with two or three live neighbours lives on to the next generation.
        // nichts zu tun
        // 3. Any live cell with more than three live neighbours dies, as if by overcrowding.
        if(live && nbs > 3){
            $(this).removeClass('live');
        }
        // 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        if(dead && nbs == 3){
            $(this).addClass('live');
        }
    });
}
