import React from 'react'

export default function KofiDetails({ params }: { params: { kofiId: string }}) {
  return (
    <h1>DETALLES DEL CAFE: {params.kofiId}</h1>
  )
}
