import React from 'react'
import { Multas } from '../../utils/type'

interface Props{
    multa: Multas
}
const Tarifario: React.FC<Props> = ({multa}) => {
  return (
    <div
    className="w-full rounded-lg p-4 border-[1px] border-gray-200 bg-white flex flex-col gap-2"
  >
    <span className="font-medium">{multa.reason}</span>
    <p>{multa.comment}</p>
  </div>  )
}

export default Tarifario