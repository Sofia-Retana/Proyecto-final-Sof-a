function toggleSection() {
    var textoOculto = document.getElementById("textoOculto");
    if (textoOculto.style.display === "block") {
        textoOculto.style.display = "none";
        document.getElementById("readMore").textContent = "Leer más";
    } else {
        textoOculto.style.display = "block";
        document.getElementById("readMore").textContent = "Leer menos";
    }
}

function buttons(type) {
    var likesElement = document.getElementById( "likes");
    var travelsElement = document.getElementById( "travels");
    var petsElement = document.getElementById( "pets");
    var typeElement = document.getElementById("type");

    var hobbieBtnElement = document.getElementById( "hobbieBtn");
    var viajeBtnElement = document.getElementById( "viajeBtn");
    var mascotaBtnElement = document.getElementById( "mascotaBtn");
    var todoBtnElement = document.getElementById("todoBtn")

    switch (type) {
        case "likes":
            travelsElement.style.display = "none";
            petsElement.style.display = "none";
            likesElement.style.display = "block";
            typeElement.style.display ="block";

           
            break;

            case "pets":
            travelsElement.style.display = "none";
            petsElement.style.display = "block";
            likesElement.style.display = "none";
            typeElement.style.display ="block";
            
           
            break;

            case "travels":
            travelsElement.style.display = "block";
            petsElement.style.display = "none";
            likesElement.style.display = "none";
            typeElement.style.display ="block";
            
           
            break;

            case "type":
            travelsElement.style.display = "block";
            petsElement.style.display = "block";
            likesElement.style.display = "block";
            typeElement.style.display ="block";
                
            
             break;
    
        default:
            break;
    }
}
