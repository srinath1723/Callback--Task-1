// Display countdown from 10 to 1 using callback functions
setTimeout(() => {
    document.getElementById("countdown").textContent = 10;
    setTimeout(() => {
        document.getElementById("countdown").textContent = 9;
        setTimeout(() => {
            document.getElementById("countdown").textContent = 8;
            setTimeout(() => {
                document.getElementById("countdown").textContent = 7;
                setTimeout(() => {
                    document.getElementById("countdown").textContent = 6;
                    setTimeout(() => {
                        document.getElementById("countdown").textContent = 5;
                        setTimeout(() => {
                            document.getElementById("countdown").textContent = 4;
                            setTimeout(() => {
                                document.getElementById("countdown").textContent = 3;
                                setTimeout(() => {
                                    document.getElementById("countdown").textContent = 2;
                                    setTimeout(() => {
                                        document.getElementById("countdown").textContent = 1;
                                        setTimeout(() => {
                                            const countdownElement = document.getElementById("countdown");
                                            countdownElement.innerHTML = '<div class="message">Happy Independence Day</div>';
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)


