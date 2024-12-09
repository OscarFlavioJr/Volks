if (window.innerWidth <= 767) {
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
            console.error("Elementos necessários para controle do logotipo não foram encontrados.");
            return;
        }
        var logoHidden = false;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    if (!logoHidden) {
                        logoElement.style.visibility = "hidden";
                        logoElement.style.opacity = "0";
                        logoHidden = true;
                    }
                }
                else {
                    if (logoHidden) {
                        logoElement.style.visibility = "hidden";
                        logoElement.style.opacity = "0";
                    }
                }
            });
        }, {
            root: null,
            threshold: 0.5,
        });
        observer.observe(modelosSection);
        var botao = document.getElementById("menu");
        var modal = document.getElementById("modal");
        var fechar = document.querySelector(".fechar");
        if (botao && modal && fechar) {
            botao.onclick = function () {
                modal.style.left = "0";
            };
            fechar.onclick = function () {
                modal.style.left = "-5000px";
            };
        }
        else {
            console.error("Elementos necessários para o menu lateral não foram encontrados.");
        }
        var modelos = document.getElementById("modelos");
        var voltar = document.querySelector(".voltar");
        var carros = document.querySelector(".mc");
        if (modelos && voltar && carros) {
            carros.onclick = function () {
                modelos.style.left = "0";
            };
            voltar.onclick = function () {
                modelos.style.left = "-5000px";
            };
        }
        else {
            console.error("Algum elemento necessário para o menu de modelos não foi encontrado no DOM.");
        }
    });
    var searchInput_1 = document.getElementById("search-input");
    var searchButton = document.getElementById("search-button");
    var resultParagraph_1 = document.getElementById("result");
    function handleSearch() {
        var query = searchInput_1.value.trim();
        if (!query) {
            resultParagraph_1.textContent =
                "Por favor, insira um termo para pesquisar.";
            resultParagraph_1.style.color = "red";
            return;
        }
        resultParagraph_1.textContent = "Voc\u00EA pesquisou: \"".concat(query, "\"");
        resultParagraph_1.style.color = "green";
        console.log("Buscando por: ".concat(query));
    }
    searchButton.addEventListener("click", handleSearch);
}
if (window.innerWidth > 1024) {
    var botao = document.getElementById("menu");
    var modal_1 = document.getElementById("modal");
    var fechar = document.querySelector(".fechar");
    var modelos_1 = document.getElementById("modelos");
    var voltar = document.querySelector(".voltar");
    var carros = document.querySelector(".mc");
    if (botao && modal_1) {
        botao.onclick = function () {
            modal_1.style.left = "0";
        };
        fechar.onclick = function () {
            modal_1.style.left = "-5000px";
            if (modelos_1) {
                modelos_1.style.left = "-5000px";
            }
        };
    }
    else {
        console.error("Elementos necessários para o menu lateral não foram encontrados.");
    }
    if (modelos_1 && voltar && carros) {
        carros.onclick = function () {
            modelos_1.style.left = "20%";
        };
        voltar.onclick = function () {
            modelos_1.style.left = "-5000px";
        };
    }
    else {
        console.error("Algum elemento necessário para o menu de modelos não foi encontrado no DOM.");
    }
}
