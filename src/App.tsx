import { formatearPrecio } from "./utils/precios.ts"
import { calcularDescuento } from "./utils/precios.ts"
import { MINIMO_ENVIO_GRATIS } from "./utils/precios.ts"
import { faltaParaEnvioGratis } from "./utils/precios.ts"
import {Encabezado} from "./components/Encabezado/Encabezado.tsx"
import './components/Encabezado/Encabezado.module.css'

function App() {

  let precioInicial: number = 10000;
  let precioDescuento: number = 8000;
  let valorCompra: number = 10000;

  return (
    <main>
      <Encabezado/>
      <h1>Vitrina</h1>
      <p>Tienda en linea en construcción</p>
      <p>{formatearPrecio(180000)}</p>
      {/*<p>El descuento es de: {calcularDescuento(precioInicial, precioDescuento)}%</p>*/}
      <p>Para un producto con Precio inicial de {formatearPrecio(precioInicial)} 
        con el descuento del {calcularDescuento(precioInicial, precioDescuento)}% 
         tiene un valor de {formatearPrecio(precioDescuento)}</p>
      <p>El valor minimo pra un envío gratis es de: {formatearPrecio(MINIMO_ENVIO_GRATIS)}</p>
      <p>En una compra de {formatearPrecio(valorCompra)} el valor pendiente para un envío gratis es de {formatearPrecio(faltaParaEnvioGratis(valorCompra))}</p>
    </main>
  )
}

export default App
