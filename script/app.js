document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var messageContainer = document.getElementById("scroll");
        if (messageContainer) {
            messageContainer.style.opacity = "1";
        }
        else {
            console.error("Elemento com id 'scroll' não foi encontrado.");
        }
    }, 3000);
    setTimeout(function () {
        var nivideoElement = document.querySelector(".nivideo");
        if (nivideoElement) {
            nivideoElement.style.opacity = "1";
        }
        else {
            console.error("Elemento com classe 'nivideo' não foi encontrado.");
        }
    }, 5200);
    setTimeout(function () {
        var nivideoElement = document.querySelector(".head");
        if (nivideoElement) {
            nivideoElement.style.opacity = "1";
        }
        else {
            console.error("Elemento com classe 'nivideo' não foi encontrado.");
        }
    }, 5500);
});
