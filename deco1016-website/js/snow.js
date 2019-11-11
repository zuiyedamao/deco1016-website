function snow() {
    var flake = document.createElement('div');
    flake.innerHTML = '❅';
    flake.style.cssText = 'position:absolute;color:#fff;';
    var documentHieght = window.innerHeight;
    var documentWidth = window.innerWidth;
    var millisec = 80;
    setInterval(function() {
        var startLeft = Math.random() * documentWidth;
        var endLeft = Math.random() * documentWidth;
        var flakeSize = 5 + 20 * Math.random();
        var durationTime = 4000 + 7000 * Math.random();
        var startOpacity = 0.7 + 0.3 * Math.random();
        var endOpacity = 0.2 + 0.2 * Math.random();
        var cloneFlake = flake.cloneNode(true);
        cloneFlake.style.cssText += `
                left: ${startLeft}px;
                opacity: ${startOpacity};
                font-size:${flakeSize}px;
                top:-25px;
                    transition:${durationTime}ms;
                `;

        document.body.appendChild(cloneFlake);
        setTimeout(function() {
            cloneFlake.style.cssText += `
                        left: ${endLeft}px;
                        top:${documentHieght}px;
                        opacity:${endOpacity};
                    `;
            setTimeout(function() {
                cloneFlake.remove();
            }, durationTime);
        }, 0);

    }, millisec);
}
snow();
