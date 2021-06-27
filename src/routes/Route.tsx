import { ComponentType } from 'react'
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect
} from 'react-router-dom'

import { useAuth } from '../hooks/auth'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: ComponentType
}

export function Route({
  isPrivate,
  component: Component,
  ...routeProps
}: RouteProps) {
  const { user } = useAuth()

  return (
    <ReactDOMRoute
      {...routeProps}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/TESTE',
              state: { from: location }
            }}
          />
        )
      }}
    />
  )
}