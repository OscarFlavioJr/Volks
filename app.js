document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var scrollElement = document.getElementById("scroll");
        if (scrollElement) {
            scrollElement.style.opacity = "1";
        }
        else {
            console.error("Elemento com ID 'scroll' não encontrado.");
        }
    }, 3000);
    setTimeout(function () {
        var nivideoElement = document.querySelector(".nivideo");
        if (nivideoElement) {
            nivideoElement.style.opacity = "1";
        }
        else {
            console.error("Elemento com classe 'nivideo' não encontrado.");
        }
    }, 5200);
    setTimeout(function () {
        var headElement = document.querySelector(".head");
        if (headElement) {
            headElement.style.opacity = "1";
        }
        else {
            console.error("Elemento com classe 'head' não encontrado.");
        }
    }, 5500);
    var logoElement = document.querySelector(".logo");
    var modelosSection = document.getElementById("carros");
    if (!logoElement || !modelosSection) {
        console.error("Elementos necessários não foram encontrados.");
        return;
    }
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                logoElement.style.visibility = "hidden";
                logoElement.style.opacity = "0";
            }
            else {
                logoElement.style.visibility = "visible";
                logoElement.style.opacity = "1";
            }
        });
    }, {
        root: null,
        threshold: 0.5,
    });
    observer.observe(modelosSection);
});
document.addEventListener("DOMContentLoaded", function () {
    var botao = document.getElementById("menu");
    var modal = document.getElementById("modal");
    var fechar = document.querySelector(".fechar");
    botao.onclick = function () {
        modal.style.left = "0";
    };
    fechar.onclick = function () {
        modal.style.left = "-500px";
    };
});
