var texto = document.getElementById("ingreso");
        var mostrar = document.getElementById("mostrar");
        var copiar = document.getElementById("copiar");
        var encriptado = "";
        var desencriptado = "";


        
        function encriptar(){
            encriptado = texto.value.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
            mostrar.value = encriptado;
            texto.value = "";
        }
        
        function desencriptar(){
            desencriptado = texto.value.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
            mostrar.value = desencriptado;
            texto.value = "";
        }
        
        copiar.addEventListener("click", function(e){
          mostrar.select();
          document.execCommand("copy");
        });

        var button_encriptar = document.getElementById("encriptar");
        var button_desencriptar = document.getElementById("desencriptar");
        button_encriptar.onclick = encriptar;
        button_desencriptar.onclick = desencriptar;