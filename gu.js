$(document).ready(function() {
    let timer;
    let seconds = 0;
    let running = false;

    function formatTime(sec) {
        let hrs = Math.floor(sec / 3600);
        let mins = Math.floor((sec % 3600) / 60);
        let secs = sec % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function updateDisplay() {
        $('#display').text(formatTime(seconds));
    }

    $('#start').click(function() {
        if (!running) {
            timer = setInterval(function() {
                seconds++;
                updateDisplay();
            }, 1000);
            running = true;
        }
    });

    $('#stop').click(function() {
        if (running) {
            clearInterval(timer);
            running = false;
        }
    });

    $('#reset').click(function() {
        clearInterval(timer);
        running = false;
        seconds = 0;
        updateDisplay();
    });
});
