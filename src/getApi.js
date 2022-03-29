import React, { useEffect, useState } from "react"

const AsyncAwait = () => {
  const [producto, setProducto] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://scratchya.com.ar/react/datos.php")
    const data = await response.json()
    setProducto(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
      <table class='tg'>
          <thead>
              <tr>
              <td>Código</td>
              <td>Descripción</td>
              <td>Precio</td>
              </tr>
        </thead>
        <tbody>
          {producto.map(producto => (
            <tr>
              <td>{producto.codigo}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>

    /*<div>
      {producto.length > 0 && (
        <ul>
          {producto.map(producto => (
            <li key={producto.codigo}>{producto.descripcion}</li>
          ))}
        </ul>
      )}
    </div>*/
  )
}

export default AsyncAwait;