import React from 'react'
import Link from 'next/link'

export default function Kofi() {
  return (
    <div>
        <h1>Catalogo</h1>
        <Link href="/kofi/1" style={{ marginRight: "5px" }}>Cafe 1</Link>
        <Link href="/kofi/2" style={{ marginRight: "5px" }}>Cafe 2</Link>
        <Link href="/kofi/3" style={{ marginRight: "5px" }}>Cafe 3</Link>
    </div>
  )
}
