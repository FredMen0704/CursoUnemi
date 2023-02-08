import Tienda from '../entity/tienda.js'
import {
    Producto,
    TipoProducto
} from '../entity/tienda-producto.js'

class   CasoUsosTienda{
    constructor(repositorioTienda){
    this.repositoriotienda = repositorioTienda
    }

crearProducto(data){
    const producto = this.repositoriotienda.getExisteProducto(
    data.producto
    )
    

    if(!producto){
        const codigo = this.repositoriotienda.getGeneracodigoProducto()        
        const producto = new Producto(
            codigo,
            data.producto,
            data.stock,
            data.stockMinimo,
            data.pvp,
            0
        )
    const tipoProducto = new TipoProducto(
    producto.codigo,
    data.tipoProducto
    )

    const tienda = new Tienda(
        data.pvp,
        producto,
        tipoProducto,
       
    )
    
    this.repositoriotienda.crearProducto(tienda)
    
}else{
    alert('Existe un producto repetido')
}

}

venderProducto(nombre,cantidad){
     return this.repositoriotienda.venderProducto(nombre,cantidad)
}

abastecerProducto(nombre,cantidad){
    return this.repositoriotienda.abastecerProducto(nombre,cantidad)
    }

productoMasVendido(){
    return this.repositoriotienda.productoMasVendido()
}
ventaPromedia(){
    return this.repositoriotienda.ventaPromedia()
}
}


export {CasoUsosTienda}

