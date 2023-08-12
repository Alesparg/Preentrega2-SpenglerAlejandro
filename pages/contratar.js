const btn2 = document.getElementById('mostrarBtn');

btn2.addEventListener('click', function() {
  setTimeout(mostrarAlerta, 4000); //
});

function mostrarAlerta() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;

  if (nombre === "") {
    Swal.fire("Error", "No has ingresado tu nombre.", "error");
  } else {
    let mensaje = "Nombre: " + nombre + "\nApellido: " + apellido + "\nEdad: " + edad;
    Swal.fire("Los datos que ingresaste son los siguientes", mensaje, "info");
  }
}
















const btn3 = document.getElementById('mostrarBtn');

btn3.addEventListener('click', function() {
  setTimeout(() => {
    registrar();
  }, 20000); // Llama a la función registrar después de 20 segundos
});

function registrar() {
  const edadInput = document.getElementById('edad');
  const edad = parseInt(edadInput.value);

  if (edad < 18) {
    Swal.fire({
      icon: 'error',
      title: 'Registro Fallido',
      text: 'Lo siento, debes tener al menos 18 años para registrarte.',
      showConfirmButton: true,
      confirmButtonText: 'OK',
      customClass: {
        container: 'custom-swal-container' // Clase CSS personalizada para ajustar el tamaño
      }
    });
  } else {
    const horaDeRegistro = new Date().toISOString();
    sessionStorage.setItem('horaDeRegistro', horaDeRegistro);

    
  }
}












const btnValidarEmail = document.getElementById('mostrarBtn');

btnValidarEmail.addEventListener('click', function() {
  setTimeout(validarEmail, 10000);
});

function validarEmail() {
  Swal.fire({
    title: 'Confirma tu dirección de correo electrónico:',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    showLoaderOnConfirm: true,
    preConfirm: (confirmacion) => {
      return new Promise((resolve) => {
        let email = document.getElementById("email").value;
        if (email === confirmacion) {
          sessionStorage.setItem('EmailCliente', email);
          resolve('¡El email ha sido confirmado correctamente!');
        } else {
          resolve('El email y la confirmación no coinciden. Inténtalo de nuevo.');
        }
      });
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.value === '¡El email ha sido confirmado correctamente!') {
      Swal.fire('Exito', result.value, 'info');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Cancelado', 'La confirmación ha sido cancelada', 'error');
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Los correos electrónicos no coinciden. ¿Deseas volver a intentar?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((retryResult) => {
        if (retryResult.isConfirmed) {
          validarEmail(); // Volver a mostrar el diálogo de confirmación
        }
      });
    }
  });
}










function guardarPais() {
  const selectPais = document.getElementById("pais");
  const paisSeleccionado = selectPais.value;
  if (paisSeleccionado) {
      
      sessionStorage.setItem("paisSeleccionado", paisSeleccionado);
  }
}









function guardarSeleccion() {
  const selectElement = document.getElementById('tipo de empresa');
  const selectedOption = selectElement.value;
  
  sessionStorage.setItem('tipoEmpresa', selectedOption);
}









function generarid() {
  const edadInput = document.getElementById('edad');
  const edad = parseInt(edadInput.value);
  
  if (!isNaN(edad)) {
    const personaId = RandomId();

    Swal.fire({
      icon: 'info',
      title: 'ID Personal Generado',
      text: `Este es su ID personal: ${personaId}`,
      showConfirmButton: true, 
      timerProgressBar: true
    });

    localStorage.setItem('personalId', personaId);

    
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingrese una edad válida.',
      confirmButtonText: 'OK'
    });
  }
}

const RandomId = () => {
  return Math.floor(Math.random() * Date.now()).toString(36);
};


const btn = document.getElementById("mostrarBtn");

document.getElementById("registroForm")
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Cargando...';

   const serviceID = 'default_service';
   const templateID = 'template_1egaog8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      console.log('Sent!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});









var iva = 0.21;
var descuento = 0.05;

function calcularPrecio(precioPrincipal) {
  var precioConIVA = precioPrincipal * (1 + iva);
  var precioConDescuento = precioConIVA * (1 - descuento);

  // Crear el mensaje de explicación
  var mensaje = "El precio principal es: " + precioPrincipal +
                "\n\nSe aplica un 21% de IVA: " + (precioPrincipal * iva) +
                "\n\nDespués de agregar el IVA, el precio es: " + precioConIVA +
                "\n\nSe aplica un descuento del 5%: " + (precioConIVA * descuento) +
                "\n\nEl precio final con descuento es: " + precioConDescuento;

  // Mostrar el mensaje con SweetAlert
  Swal.fire({
    icon: 'info',
    title: 'Cálculo de Precio con IVA y Descuento',
    text: mensaje
  });
}


document.body.addEventListener("click", function(event) {
  if (event.target.id === "calcular50") {
    calcularPrecio(50000);
  } else if (event.target.id === "calcular100") {
    calcularPrecio(100000);
  }
  if (event.target.id === "calcular150") {
    calcularPrecio(150000);
  } else if (event.target.id === "calcular300") {
    calcularPrecio(300000);
  }
  if (event.target.id === "calcular600") {
    calcularPrecio(600000);
  } else if (event.target.id === "calcular900") {
    calcularPrecio(900000);
  }
});



  


 






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
    this.total = this.subTotal - this.descuento + this.calcularIva();
  }
}

const productos = [
  { id: 1, nombre: 'Mes de prueba', precio: 50000 },
  { id: 2, nombre: 'Tres meses', precio: 100000 },
  { id: 3, nombre: 'Seis meses', precio: 150000 },
  { id: 4, nombre: 'Un año', precio: 300000 },
  { id: 5, nombre: 'Dos años', precio: 600000 },
  { id: 6, nombre: 'Tres años', precio: 900000 }
];

async function comprarProductos() {
  let productoId = 0;
  let productoSeleccionado = null;

  while (!productoSeleccionado) {
    const { value: selectedValue, isDismissed } = await Swal.fire({
      icon: 'question',
      title: '¿Qué producto desea comprar?',
      html:
        '<select id="productoSelect" class="swal2-select">' +
        '<option value="1">Mes de prueba ($50000)</option>' +
        '<option value="2">Tres meses ($100000)</option>' +
        '<option value="3">Seis meses ($150000)</option>' +
        '<option value="4">Un año ($300000)</option>' +
        '<option value="5">Dos años ($600000)</option>' +
        '<option value="6">Tres años ($900000)</option>' +
        '</select>',
      showCancelButton: true, // Mostrar botón de cancelar
      cancelButtonText: 'Cancelar', // Texto del botón de cancelar
      showConfirmButton: true,
      confirmButtonText: 'OK',
      preConfirm: () => {
        return document.getElementById('productoSelect').value;
      },
    });

    if (isDismissed) {
      return null; // El usuario canceló la selección
    }

    productoId = parseInt(selectedValue);
    productoSeleccionado = productos.find((producto) => producto.id === productoId);

    if (!productoSeleccionado) {
      await Swal.fire({
        icon: 'error',
        title: 'Producto no encontrado',
        text: 'Por favor, ingrese el número correspondiente al producto mostrado en pantalla.',
        confirmButtonText: 'OK',
      });
    }
  }

  let cantidadProducto = 0;
  while (!cantidadProducto || cantidadProducto <= 0) {
    const { value: cantidad, isDismissed: isCantidadDismissed } = await Swal.fire({
      icon: 'question',
      title: `Producto elegido: ${productoSeleccionado.nombre}`,
      input: 'number',
      inputLabel: 'Introduzca la cantidad deseada (sólo números mayores a cero):',
      showCancelButton: true, // Mostrar botón de cancelar
      cancelButtonText: 'Cancelar', // Texto del botón de cancelar
      showConfirmButton: true,
      confirmButtonText: 'OK',
      inputValidator: (value) => {
        if (!value || isNaN(value) || value <= 0) {
          return 'Por favor, ingrese una cantidad válida en números mayores a cero.';
        }
      },
    });

    if (isCantidadDismissed) {
      return null; // El usuario canceló la cantidad
    }

    cantidadProducto = parseInt(cantidad);
  }

  const pedido = new Pedido(productoSeleccionado.nombre, productoSeleccionado.precio, cantidadProducto);

  return pedido;
}

async function mostrarAlertaDetallePedido(pedido) {
  return await Swal.fire({
    icon: 'info',
    title: 'Detalle del pedido',
    html: `
      - ${pedido.producto} x ${pedido.cantidad}: $${pedido.subTotal}<br>
      - IVA 21%: $${pedido.calcularIva()}<br>
      - Descuento invernal: $${pedido.descuento}<br>
      Total = $${pedido.total}`,
    confirmButtonText: 'OK',
    showCancelButton: true, // Mostrar botón de cancelar
    cancelButtonText: 'Cancelar', // Texto del botón de cancelar
    allowOutsideClick: false, // Evitar cerrar haciendo clic fuera del cuadro de diálogo
  });
}



async function realizarPedido() {
  const pedido = await comprarProductos();

  pedido.calcularSubTotal();
  pedido.calcularDescuento();
  pedido.calcularTotal();

  const result = await mostrarAlertaDetallePedido(pedido);

  if (result.isConfirmed) {
    sessionStorage.setItem('Compra', JSON.stringify(pedido));
  } else {
    // El usuario canceló el pedido
    Swal.fire({
      icon: 'info',
      title: 'Pedido cancelado',
      text: 'El pedido ha sido cancelado.',
      confirmButtonText: 'OK',
    });
  }
}
                     







// localStorage.removeItem('');
// localStorage.clear()





  // const container = document.querySelector('.registroForm')
  // form.addEventListener('click', (e) => {
  //   console.log(e.target);
  // })






  
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
  document.getElementById("contrasenaGenerada").value = contrasenaAleatoria;

  // Almacenar los datos en localStorage
  const nombreRegistrado = document.getElementById("nombre").value;
  const apellidoRegistrado = document.getElementById("apellido").value;
  const edadRegistrada = document.getElementById("edad").value;
  const emailRegistrado = document.getElementById("email").value;

  localStorage.setItem('Contraseña', contrasenaAleatoria);
  localStorage.setItem('Nombre', nombreRegistrado);
  localStorage.setItem('Apellido', apellidoRegistrado);
  localStorage.setItem('Edad', edadRegistrada);
  localStorage.setItem('Email', emailRegistrado);
}

const enviarFormulario = () => {
  // Recuperar datos del formulario
  const nombreRegistrado = document.getElementById("nombre").value;
  const apellidoRegistrado = document.getElementById("apellido").value;
  const edadRegistrada = document.getElementById("edad").value;
  const emailRegistrado = document.getElementById("email").value;
  const contrasenaGenerada = document.getElementById("contrasenaGenerada").value;

  // Aquí puedes hacer algo con los datos antes de enviarlos (por ejemplo, enviarlos al servidor).

  

  // Limpiar los campos del formulario después de enviarlo

}

const recuperarDatos = () => {
  const claveRecuperacion = document.getElementById("claveRecuperacion").value;
  const contrasenaAlmacenada = localStorage.getItem('Contraseña');

  if (claveRecuperacion === contrasenaAlmacenada) {
      // Si la contraseña es correcta, muestra los datos almacenados
      document.getElementById("nombre").value = localStorage.getItem('Nombre');
      document.getElementById("apellido").value = localStorage.getItem('Apellido');
      document.getElementById("edad").value = localStorage.getItem('Edad');
      document.getElementById("email").value = localStorage.getItem('Email');
      document.getElementById("contrasenaGenerada").value = contrasenaAlmacenada;
      document.getElementById("datosRecuperados").innerHTML = "";
  } else {
      // Si la contraseña es incorrecta o no se encontraron datos, muestra un mensaje de error
      document.getElementById("datosRecuperados").innerHTML = "Contraseña incorrecta o no se encontraron datos registrados";
  }
}

  // const container = document.querySelector('.registroForm')
  // form.addEventListener('click', (e) => {
  //   console.log(e.target);
  // })