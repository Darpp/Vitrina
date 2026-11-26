export const MINIMO_ENVIO_GRATIS = 150000;

export function formatearPrecio(valor: number): string {
    const valorFormateado = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
    }).format(valor)
    return valorFormateado
}


export function calcularDescuento(precioDescuento: number, precioInicial: number) :number {
  if (precioInicial <= 0 || precioDescuento >= precioInicial) {
    return 0;
  }
  const descuento = ((precioInicial - precioDescuento) / precioInicial) * 100;
  return Math.round(descuento);
}

export function faltaParaEnvioGratis(valor: number) {
    if (valor >= MINIMO_ENVIO_GRATIS) {
        return 0
    }
    let valorFaltante = MINIMO_ENVIO_GRATIS - valor
    return valorFaltante
}