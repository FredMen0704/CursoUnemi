class RepositorioTienda{
    constructor(){
        this.productos = []
        this.transacciones = []
    }

    crearProducto(producto) {
        this.productos.push(producto)        
    }

    getGeneracodigoProducto(){
        let codigo = this.productos.length + 1
        return codigo
    }
    
    getExisteProducto(nombre){
        return this.productos.filter(
            (tienda) => tienda.producto.nombre === nombre).shift()
    }

    venderProducto(nombre, cantidad) {
        for (const producto of this.productos) {
          if (producto.producto.nombre === nombre) {
            if(producto.producto.stock-cantidad >= 0) {
            producto.producto.stock -= Number(cantidad)
            producto.producto.cantidadVendida += Number(cantidad)
            return producto
          }
          
        }
        }
      }

      abastecerProducto(nombre, cantidad) {
        for (const producto of this.productos) {
          if (producto.producto.nombre === nombre) {           
            producto.producto.stock += Number(cantidad)
            return producto
          }
        
        }
      }

 productoMasVendido(){
  
  this.productos.sort(function(a, b) {
    let left = a.producto.cantidadVendida;
    let right = b.producto.cantidadVendida;
    return left === right ? 0 : left > right ? -1 : 1;
  });
  console.log(this.productos)
 
}

ventaPromedia(total){
  var cantidad = 0
  for (const producto of this.productos) {
    cantidad += Number(producto.producto.cantidadVendida)
  }
  return (Number(total)/cantidad)
}
}

export default RepositorioTienda