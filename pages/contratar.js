function mostrarAlerta() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;

  if (nombre === "") {
      alert("No has ingresado tu nombre.");
  } else {
      let mensaje = "Nombre: " + nombre + "\nApellido: " + apellido + "\nEdad: " + edad;
      alert(mensaje);

      
      let datosPersonales = {
          nombre: nombre,
          apellido: apellido,
          edad: edad
      };
      sessionStorage.setItem('DatosPersonales', JSON.stringify(datosPersonales));
  }
}









function registrar() {
  const edadInput = document.getElementById('edad');
  const edad = parseInt(edadInput.value);

  if (edad < 18) {
    alert('Lo siento, debes tener al menos 18 años para registrarte.');
  } else {
    const horaDeRegistro = new Date().toISOString();
    sessionStorage.setItem('horaDeRegistro', horaDeRegistro);
    alert('¡Registro exitoso! Tu información ha sido guardada.');
  }
}








function validarEmail() {
  let email = document.getElementById("email").value;
  let confirmacion = prompt("Confirma tu dirección de correo electrónico:", "");

  if (email === confirmacion) {
      alert("¡El email ha sido confirmado correctamente!");

      
      sessionStorage.setItem('EmailCliente', email);
  } else {
      alert("El email y la confirmación no coinciden. Inténtalo de nuevo.");
      validarEmail();
  }
}









const generarContrasena = (longitud) => {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let contrasena = '';

  for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      contrasena += caracteres.charAt(indice);
  }

  return contrasena;
}

const longitudContrasena = 10;

const mostrarContrasena = () => {
  const contrasenaAleatoria = generarContrasena(longitudContrasena);
  alert("Su contraseña es: " + contrasenaAleatoria );

 
  localStorage.setItem('Contraseña', contrasenaAleatoria);
}

window.addEventListener('DOMContentLoaded', () => {
  
});


  

  



function generarid() {
  const edadInput = document.getElementById('edad');
  const edad = parseInt(edadInput.value);

  if (!isNaN(edad)) {
  
    const personaId = RandomId();

    alert(`Este es su ID personal: ${personaId}`);

    localStorage.setItem('personalId', personaId);
  } else {
    alert('Por favor, ingrese una edad válida.');
  }
}

const RandomId = () => {
  return Math.floor(Math.random() * Date.now()).toString(36);
};


  


 



  function comprarProductos() {
    let productoId = 0;
    let productoSeleccionado = null;

    while (!productoSeleccionado) {
      productoId = parseInt(prompt(
        "¿Qué producto desea comprar, ingrese el numero?:\n" +
        "1: Mes de prueba ($50000)\n" +
        "2: Tres meses ($100000)\n" +
        "3: Seis meses ($150000)\n" +
        "4: Un año ($300000)\n" +
        "5: Dos años ($600000)\n" +
        "6: Tres años ($900000)"
      ));

      productoSeleccionado = productos.find(producto => producto.id === productoId);
    }

    let cantidadProducto = 0;
    while (!cantidadProducto || cantidadProducto === 0) {
      cantidadProducto = parseInt(prompt("Producto elegido: " + productoSeleccionado.nombre + "\nIntroduzca la cantidad deseada (sólo números):"));
    }

    const pedido = new Pedido(productoSeleccionado.nombre, productoSeleccionado.precio, cantidadProducto);

  

    return pedido;
  }

  class Pedido {
    constructor(producto, precio, cantidad) {
      this.producto = producto;
      this.precio = precio;
      this.cantidad = cantidad;
      this.descuento = 0;
      this.subTotal = 0;
      this.total = 0;
    }

    calcularSubTotal() {
      this.subTotal = this.precio * this.cantidad;
    }

    calcularIva() {
      return this.subTotal * 0.21;
    }

    calcularDescuento() {
      this.descuento = this.subTotal * 0.05;
    }

    calcularTotal() {
      this.total = this.subTotal - this.descuento+ this.calcularIva();
    }
  }

  const productos = [
    { id: 1, nombre: "Mes de prueba", precio: 50000 },
    { id: 2, nombre: "tres meses", precio: 100000 },
    { id: 3, nombre: "Seis meses", precio: 150000 },
    { id: 4, nombre: "Un año", precio: 300000 },
    { id: 5, nombre: "Dos años", precio: 600000 },
    { id: 6, nombre: "Tres años", precio: 900000 }
  ];
  // for (const producto of productos) {
  //   console.log(producto.nombre);
  // }
  // for (const producto of productos) {
  //   console.log(producto.id);
  // }
  // for (const producto of productos) {
  //   console.log(producto.precio);
  // }

  function realizarPedido() {
    const pedido = comprarProductos();
    

    pedido.calcularSubTotal();
    pedido.calcularDescuento();
    pedido.calcularTotal();

    alert(`Detalle del pedido:
- ${pedido.producto} x ${pedido.cantidad}: $${pedido.subTotal}
- IVA 21%: $${pedido.calcularIva()}
- Descuento invernal: $${pedido.descuento}
Total = $${pedido.total}`);

sessionStorage.setItem('Compra', JSON.stringify(pedido));
  }

// localStorage.removeItem('');
// localStorage.clear()





  const container = document.querySelector('.form')
  form.addEventListener('click', (e) => {
    console.log(e.target);
  })
//   const getTaskStorage = () => {
//     const tasksStorage = JSON.parse(sessionStorage.getItem('DatosPersonales'))
//     return tasksStorage
// }

// const getTasks = () => {
//   if (localStorage.getItem('DatosPersonales')) {
//       tasks = getTaskStorage()
//       showTasks(tasks)
//   }
// }
  
// document.addEventListener('DOMContentLoaded', DatosPersonales)

