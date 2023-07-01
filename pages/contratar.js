
function mostrarAlerta() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    

    if (nombre === "") {
      alert("No has ingresado tu nombre.");
    } else {
      var mensaje = "Nombre: " + nombre + "\nApellido: " + apellido + "\nEdad: " + edad;
      alert(mensaje);
    }
  }

  function validarEmail() {
    let email = document.getElementById("email").value;
    let confirmacion = prompt("Confirma tu dirección de correo electrónico:", "");

    if (email === confirmacion) {
      alert("¡El email ha sido confirmado correctamente!");
    } else {
      alert("El email y la confirmación no coinciden. Inténtalo de nuevo.");
      validarEmail();
    }
  }



  function calcularPrecio(precioPrincipal) {
    let iva = 0.21;
    let descuento = 0.05;
    
    let precioConIVA = precioPrincipal * (1 + iva);
    let precioConDescuento = precioConIVA * (1 - descuento);
    
    // Crear el mensaje de explicación
    let mensaje = "El precio principal es: " + precioPrincipal +
                  "\n\nSe aplica un 21% de IVA: " + (precioPrincipal * iva) +
                  "\n\nDespués de agregar el IVA, el precio es: " + precioConIVA +
                  "\n\nSe aplica un descuento invernal del 5%: " + (precioConIVA * descuento) +
                  "\n\nEl precio final con descuento es: " + precioConDescuento;
    
    // Mostrar el mensaje en un cuadro de alerta
    alert(mensaje);
  }   

  
  const comprarProductos = () => {
    let producto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = true
  
    do {
       producto = prompt('¿Cual servicio deseas comprar Mes de prueba, 3 meses, 6 meses, 1 año, 2 años, 3 años?')
       cantidad = parseInt(prompt('¿Cuántos quieres comprar?'))
  
      let cantidadValidada = validarCantidad(cantidad)
  
      switch (producto) {
        case 'Mes de prueba':
          precio = 57475
          break;
        case '3 meses':
          precio = 114950
          break;
        case '6 meses':
          precio = 172425
          break;
          case '1 año':
          precio = 344850
          break;
          case '2 años':
          precio = 689700
          break;
          case '3 años':
          precio = 1034550
          break;
        default:
          alert('Alguno de los datos ingresados no es correcto')
          precio = 0
          cantidadValidada = 0
      }
  
      subtotal += precio * cantidadValidada
  
      seguirComprando = confirm('¿Deseas seguir comprando?')
    } while (seguirComprando);
  
    return subtotal
  }

  const validarCantidad = (cantidad) => {
    // Validar si el usuario ingresa un número negativo o no ingresa un número válido
    while (Number.isNaN(cantidad) || cantidad <= 0) {
      alert('Debes ingresar una cantidad válida!')
      cantidad = parseInt(prompt('¿Cuántos quieres comprar?'))
    }
  
    return cantidad
  }

  const calcularTotal = () => {
    let total = comprarProductos()
    alert('El total de tu compra es: ' + total)
  }
  