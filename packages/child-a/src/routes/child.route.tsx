import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/child')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/child route"!</div>
}
