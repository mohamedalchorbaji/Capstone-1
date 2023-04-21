var text = "Welcome to SurfMo!";
    var i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("welcome").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 1000);