import React from 'react'

const Footbar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 block overflow-hidden bg-emerald-500 md:hidden">
    <div className="flex justify-center gap-5 p-5 font-semibold text-white">
      <div className="sm:text-sm">Multas</div>
      <div className="sm:text-sm">Consultas</div>
      <div className="sm:text-sm">Mapa</div>
      <div className="sm:text-sm">Noticias</div>
      <div className="sm:text-sm">Clima</div>
    </div>
  </div>  )
}

export default Footbar