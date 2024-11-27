import { createRouter, Link } from '@tanstack/react-router';
import { routeTree } from './routeTree';

const router = createRouter({ 
  routeTree
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

/* There should be no type errors in this component */
export function ComponentWithLinks() {
  return (
    <>
      <Link to="/child">Link to child</Link>
      <Link search={{ thisIs: 'typesafe', hasSearch: true }} to="/child-b">Link to child 2</Link>
      <Link to="/error-route">Should be an error</Link>
    </>
  )
}