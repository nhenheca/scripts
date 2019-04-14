    console.log("Se quiser associar novos edificios faça scroll down e click no botão RESET: localStorage.removeItem(\"reload\"); ");

    /*butao----------------*/
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "RESET";
    document.body.appendChild(btn);
    btn.onclick = function () {
        localStorage.removeItem("reload");
         location.reload();
    };

    if(localStorage.getItem("reload")!="t"){
        var arrayEdificiosNiveis = [];

        console.log("Edificio Principal - Main\nQuartel - barracks\nIgreija - church_f\nFerreiro - smith\nPraça - place\nEstátua - statue\nMercado - market\nBosque - wood\nPoço - stone\nMina - iron\nFazenda - farm\nArmazem - storage\nEsconderijo - hide\nMuralha - wall\nEstabulo - stable\nOficina - garage\nTorre de Vigia - watchtower\nAcademia - snob\n");
        alert("Pressione: Ctrl+Shift+J");

        var edificiosAux = prompt("Digite o nome dos Edificios", "ex: iron wood stone market");
        var arrayEdificios = edificiosAux.split(" ");

        // storing our array as a string
        localStorage.setItem("arrayEdificiosNiveis", JSON.stringify(arrayEdificiosNiveis));
        localStorage.setItem("arrayEdificios", JSON.stringify(arrayEdificios));
    }
    var retrievedEdificiosNiveis = localStorage.getItem("arrayEdificiosNiveis");
    var arrayEdificiosNiveis1 = JSON.parse(retrievedEdificiosNiveis);

    var retrievedEdificios = localStorage.getItem("arrayEdificios");
    var arrayEdificios1 = JSON.parse(retrievedEdificios);

    function myFunction() {
        for(let i=0;i<arrayEdificios1.length;i++){
            var construtor = document.getElementById("main_buildrow_"+arrayEdificios1[i]).children[0].children[3].textContent;
            var arrayEdificiosNiveisAux = construtor.split(" ");
            arrayEdificiosNiveis1.push(parseInt(arrayEdificiosNiveisAux[1]));
        }

        var indexMenor = arrayEdificiosNiveis1.indexOf(Math.min.apply(null, arrayEdificiosNiveis1));
        console.log(indexMenor);
        var butao = document.getElementById("main_buildrow_"+arrayEdificios1[indexMenor]).children[6].children[1];
        if(butao.style.display != "none"){
            butao.click();
        }
    }
console.log(arrayEdificiosNiveis1,arrayEdificios1);
    window.setInterval(function(){
        localStorage.setItem("reload", "t");
        myFunction();
        location.reload();
    }, 10000);