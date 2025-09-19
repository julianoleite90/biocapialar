import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Remarketing Definamax - Suplemento Natural para Emagrecimento",
  description:
    "Phynamax - Auxiliou mais de 63 mil pessoas a perder peso em todo o Brasil. Resultados em até 30 dias ou seu dinheiro de volta.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
