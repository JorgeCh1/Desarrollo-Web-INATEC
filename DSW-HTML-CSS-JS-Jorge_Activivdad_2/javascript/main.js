var alertaperso=document.getElementById("alertaperso");
function mostrarAlerta(){
    alertaperso.style.display='block';
}
function eliminarAlerta(){
    alertaperso.style.display='none';
}

function capturar(){
    function nuevoNombres(nombre, apellido, correo){
        this.nombre=nombre;
        this.apellido=apellido;
        this.correo=correo;
    }
    var nombreC=document.getElementById("nombre").value;
    var apellidoC=document.getElementById("apellido").value;
    var correoC=document.getElementById("correo").value;

    listaNueva = new nuevoNombres(nombreC, apellidoC, correoC);
    console.log(listaNueva)
    agregar();
}
var array= [];
function agregar(){
    array.push(listaNueva);
    console.log(array);
    document.getElementById("datatable").innerHTML += '<tbody id="tbody"><td>'+listaNueva.nombre+'</td><td>'+listaNueva.apellido+'</td><td>'+listaNueva.correo+'</td><td><button type="reset" id="btnDel" onclick="eliminar()">X</button></td></tbody>';
}

function eliminar(){
    document.getElementById("tbody").remove();
}
