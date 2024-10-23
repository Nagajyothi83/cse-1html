setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hours.style.transform =' rotate(${hrotation}deg);
    minutes.style.transform = 'rotate(${mrotation}deg)';
    seconds.style.transform = 'rotate(${srotation}deg)';
    
    function updateTime() {
        const timeElement = document.getElementById('timeDisplay');
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Format time to add leading zero
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Display the time in HH:MM:SS format
        timeElement.textContent = hours + ':' + minutes + ':' + seconds;
    }
    setInterval(updateTime, 1000);
    updateTime();
},1000);
