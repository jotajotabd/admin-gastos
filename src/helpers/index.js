export const formatearCantidad = (cantidad) => {
    // return new Intl.NumberFormat('es-ES', {
    //     style: 'currency',
    //     currency: 'USD',
    // }).format(cantidad);

    return Number(cantidad).toLocaleString('es-ES', {
        style: 'currency',
        currency: 'USD'
    });
}