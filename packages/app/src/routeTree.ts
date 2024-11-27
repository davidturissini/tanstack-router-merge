/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { 
  rootRouteChildren as childRootRouteChildren,
  RootRouteChildren as ChildRootRouteChildren,
  FileRouteTypes as ChildFileRouteTypes,
  FileRoutesById as ChildFileRoutesById,
  FileRoutesByTo as ChildFileRoutesByTo,
  FileRoutesByFullPath as ChildFileRoutesByFullPath
} from 'child-a';

import { 
  rootRouteChildren as childBRootRouteChildren,
  RootRouteChildren as ChildBRootRouteChildren,
  FileRouteTypes as ChildBFileRouteTypes,
  FileRoutesById as ChildBFileRoutesById,
  FileRoutesByTo as ChildBFileRoutesByTo,
  FileRoutesByFullPath as ChildBFileRoutesByFullPath
} from 'child-b'

// Create/Update Routes

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {}
}

// Create and export the route tree

export interface FileRoutesByFullPath extends ChildFileRoutesByFullPath, ChildBFileRoutesByFullPath {}

export interface FileRoutesByTo extends ChildBFileRoutesByTo, ChildFileRoutesByTo {}

export interface FileRoutesById extends ChildFileRoutesById, ChildBFileRoutesById {
  __root__: typeof rootRoute
}

export interface FileRouteTypes extends ChildFileRouteTypes, ChildBFileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fileRoutesByTo: FileRoutesByTo
  fullPaths: ChildFileRouteTypes['fullPaths'] | ChildBFileRouteTypes['fullPaths'];
  to: ChildFileRouteTypes['to'] | ChildBFileRouteTypes['to'];
  id: '__root__' | ChildFileRouteTypes['id'] | ChildBFileRouteTypes['id']
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren extends ChildRootRouteChildren, ChildBRootRouteChildren {}

const rootRouteChildren: RootRouteChildren = {
  ...childRootRouteChildren,
  ...childBRootRouteChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/foo"
      ]
    },
    "/foo": {
      "filePath": "foo.route.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
