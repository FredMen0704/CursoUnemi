//importacion de moledos de clases
import RepositorioTienda from '../../src/repository/repositorio-tienda.js'
import { CasoUsosTienda } from '../../src/use-cases/usecases-tienda.js'
import { RenderTemplate } from './table-render.js'

const repositorioTienda = new RepositorioTienda()
const casoUsosTienda = new CasoUsosTienda(repositorioTienda)
const renderTemplate = new RenderTemplate(repositorioTienda.productos)

const tbody = document.querySelector("#id-table-productos > tbody");
const tfoot = document.querySelector("#id-table-productos > tfoot")
const formRegistroCuenta = document.querySelector('#id-form-registro-producto')
const selectTipo = document.getElementById('id-select-tipo-producto');

// capturamos en evento submit del formulario HTML addEventListener
formRegistroCuenta.addEventListener('submit', (event) => {
    event.preventDefault();
    // creamos un objeto FormData con los valores de los controles del Formulario HTML
    const formdata = new FormData(event.target)
    // covertimos los datos en objeto key: values (diccionario)
    const data = Object.fromEntries(formdata.entries())


    data.tipoNombre = selectTipo.options[selectTipo.selectedIndex].text

    // modelo de negocio agregar cuentas bancarias
  casoUsosTienda.crearProducto(data)
  // renderizar datos en la tabla HTML
  tbody.innerHTML = renderTemplate.renderTbody()
  tfoot.innerHTML = renderTemplate.renderTfoot()

});

tbody.addEventListener('click', (event) => {
  event.preventDefault();
  // capturamos la accion-depositar monto
  if (event.target.closest('a[rel="accion-vender"]')) {

    const cantidad = prompt("Ingrese la cantidad de productos a vender: ", "0.00")

    if (isFinite(cantidad) && cantidad) {

      const nombre = event.target.dataset.producto
      casoUsosTienda.venderProducto(nombre, cantidad)
      console.log(casoUsosTienda)
      tbody.innerHTML = renderTemplate.renderTbody()
      tfoot.innerHTML = renderTemplate.renderTfoot()
    }

  } // capturamos la accion-bebitar monto
  else if (event.target.closest('a[rel="accion-abastecer"]')) {

    const cantidad = prompt("Ingrese la cantidad de productos a comprar: ", "0.00")

    if (isFinite(cantidad) && cantidad) {
      const nombre = event.target.dataset.producto
      casoUsosTienda.abastecerProducto(nombre, cantidad)
      tbody.innerHTML = renderTemplate.renderTbody()
      tfoot.innerHTML = renderTemplate.renderTfoot()
    }

  }

});

const promedio = document.querySelector("#id-btn-venta-promedia")
const total = document.querySelector("#id-total")
promedio.addEventListener('click', (event) => {

  console.log(casoUsosTienda.ventaPromedia(total))

  alert('Venta promedia por unidad' + total)
  
 
})

const masVenta = document.querySelector("#id-btn-mas-vendido")
masVenta.addEventListener('click', (event) => {
  console.log(casoUsosTienda.productoMasVendido())

  alert('Estamos llegando al boton mas vendido' + casoUsosTienda.productoMasVendido())
  
 
})

const menosVenta = document.querySelector("#id-btn-menos-vendido")
menosVenta.addEventListener('click', (event) => {
  alert('Estamos llegando al boton menos vendido')
 
})