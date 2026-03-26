function saludar(){
    var nombre = document.getElementById("nombre").value;
    var mensaje = "Hola " + nombre;
    document.getElementById("mensaje").innerText = mensaje;
}