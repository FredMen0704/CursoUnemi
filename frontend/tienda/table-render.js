

export class RenderTemplate{
    constructor(productos){
        this.productos = productos
        this.total = 0
    }


renderTbody(){
  this.total = 0
    return this.productos.map((producto) =>{
      this.total  += producto.producto.precio * producto.producto.cantidadVendida
        return `<tr>
            <td><b>${producto.producto.codigo}</b></td>
            <td>${producto.producto.nombre}</td>
            <td>${producto.tipoProducto.nombre}</td>
            <td>${producto.producto.stock}</td>
            <td>${producto.producto.stockMinimo}</td>  
            <td>${producto.producto.precio}</td>  
            <td>${producto.producto.cantidadVendida}</td>
                                  
            <td><div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Acciones
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#" rel="accion-vender" data-producto="${producto.producto.nombre}">Vender</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" rel="accion-abastecer" data-producto="${producto.producto.nombre}">Abastecer</a>
                  </li>
                </ul>
              </div>
            </td>
        </tr>`
    }).join('')
    }
    renderTfoot() {
      return `<tr>
          <td colspan="5" align="right" id = "id-total" value="${this.total}"><b>Total Ventas: </b></td>
          <td colspan="2">$ ${this.total}</td>
          <td></td>
      </tr>`
    }
}
