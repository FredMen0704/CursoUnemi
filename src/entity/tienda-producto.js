class Producto{
    constructor(codigo, nombre, stock, stockMinimo, precio,cantidadVendida){
        this.codigo = codigo;
        this.nombre = nombre;
        this.stock = stock;
        this.stockMinimo = stockMinimo;
        this.precio = Number(precio);
        this.cantidadVendida = Number(cantidadVendida);
    }
}

class TipoProducto{
    constructor(codigo, nombre){
        this.codigo = codigo;
        this.nombre = nombre;
}
}


export   {
    Producto,
    TipoProducto
}

