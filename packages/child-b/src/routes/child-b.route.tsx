import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/child-b')({
  validateSearch() {
    return {
      thisIs: 'typesafe',
      hasSearch: true,
    } as const;
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/child-b"!</div>
}
