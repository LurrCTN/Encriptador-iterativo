// obtenemos el input donde se va a introducir el texto a encriptar

let input = document.getElementById("input");

// obtenemos los botones

let encriptador = document.getElementById("encriptador");
let desencriptador = document.getElementById("desencriptador");
let copiar = document.getElementById("copiar");

// obtenemos la salida de texto

let output = document.querySelector("textarea");

// obtenemos la pantalla por defecto

let noContent = document.getElementById("no-content");

function mostrarTextarea(){
    if(input.value === ""){
        noContent.style.display = "flex";
        output.style.display = "none";
    } else {
        noContent.style.display = "none";
        output.style.display = "block";
    }
}

function encriptacion() {
    let a = "ai";
    let e = "enter";
    let i = "imes";
    let o = "ober";
    let u = "ufat";

    let array = [];

    for(let index = 0; index < input.value.length; index++){
        if(input.value[index] === "a"){
            array.push(a);
        }
        else if(input.value[index] === "e"){
            array.push(e);
        }
        else if(input.value[index] === "i"){
            array.push(i);
        }
        else if(input.value[index] === "o"){
            array.push(o);
        }
        else if(input.value[index] === "u"){
            array.push(u);
        } else {
            array.push(input.value[index]);
        }
    }

    output.value = array.join("");
    mostrarTextarea()
    return output.value
}

function desencriptacion() {

    let array = [];

    for(let index = 0; index < input.value.length; index++){
        if(input.value[index] === "a"){
            index++
            if(input.value[index] === "i"){
                array.push("a")
            }
            else {
                index = index - 1
                array.push(input.value[index])
            }
        } 
        else if(input.value[index] === "e"){
            index++
            if(input.value[index] === "n"){
                index++
                if(input.value[index] === "t"){
                    index++
                    if(input.value[index] === "e"){
                        index++
                        if(input.value[index] === "r"){
                            array.push("e")
                        } else {
                            index = index - 4
                            array.push(input.value[index])
                        }
                    } else {
                        index = index - 3
                        array.push(input.value[index])
                    }
                } else {
                    index = index - 2
                    array.push(input.value[index])
                }
            } else {
                index = index - 1
                array.push(input.value[index])
            }
        } 
        else if(input.value[index] === "i"){
            index++
            if(input.value[index] === "m"){
                index++
                if(input.value[index] === "e"){
                    index++
                    if(input.value[index] === "s"){
                        array.push("i")
                    } else {
                        index = index - 3
                        array.push(input.value[index])
                    }
                } else {
                    index = index - 2
                    array.push(input.value[index])
                }
            } else {
                index = index - 1
                array.push(input.value[index])
            }
        } 
        else if(input.value[index] === "o"){
            index++
            if(input.value[index] === "b"){
                index++
                if(input.value[index] === "e"){
                    index++
                    if(input.value[index] === "r"){
                        array.push("o")
                    } else {
                        index = index - 3
                        array.push(input.value[index])
                    }
                } else {
                    index = index - 2
                    array.push(input.value[index])
                }
            } else {
                index = index - 1
                array.push(input.value[index])
            }
        } 
        else if(input.value[index] === "u"){
            index++
            if(input.value[index] === "f"){
                index++
                if(input.value[index] === "a"){
                    index++
                    if(input.value[index] === "t"){
                        array.push("u")
                    } else {
                        index = index - 3
                        array.push(input.value[index])
                    }
                }else {
                    index = index - 2
                    array.push(input.value[index])
                }
            }else {
                index = index - 1
                array.push(input.value[index])
            }
        } else {
            array.push(input.value[index])
        }
    }

    output.value = array.join("");
    mostrarTextarea();
    return output.value;
}

function copiarTextarea() {
    output.select();
    document.execCommand("copy")
}

encriptador.onclick = encriptacion;

desencriptador.onclick = desencriptacion;

copiar.onclick = copiarTextarea