import React, { useEffect, useState } from 'react'
//cambbios en el useEffect para corregir excesiva peticiones que hace
export const Message = () => {
  const [coords, setCoords] = useState({x:0,y:0});
  const {x,y} = coords;

  useEffect(() => {
    // console.log('componente montado');
    const mouseMove = (e) => {
      const coords = {x:e.x, y:e.y};
      setCoords(coords);
      console.log(':D');
    }
    window.addEventListener('mousemove',mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])

  return (
    <>
      <h3>Eres Genial</h3>
      <p>x: {x} y:{y}</p>
    </>
  )
}
