$(document).ready(function () {
    var s = 0;
    var m = 1;
    var h = 0;
    $('#second').text('00');
    $('#minute').text('00');
    $('#hour').text('00');
    $('#start').click(function () {
        setTimeout(start_watch,0);
        var stop = setInterval(start_watch,1000);
        $('#stop').click(function(){
            clearInterval(stop);
        })
    })

    function start_watch() {
        console.log('click')
        s++;
        if (s <= 9) {
            $('#second').text("0" + s);
        } else if (s >= 9 && s <= 59) {
            $('#second').html(s);
        } else if (m <= 9) {
            s = -1;
            start_watch();
            $('#minute').html("0" + m);
            $('#second').text("0" + s);
            m++;
        } else if (m >= 9 && m <= 59) {
            s = -1;
            start_watch();
            $('#minute').html(m);
            $('#second').text("0" + s);
            m++;
        }
        else {
            s = -1;
            m = 1;
            h++;
            start_watch();
            $('#minute').text('00');
            $('#hour').text("0" + h);
            $('#second').text('00');
        }
    }

    $('#reset').click(function () {
        location.reload();
    })
});
