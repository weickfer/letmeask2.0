import { ElementType, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom"

import { useAuth } from "../hooks/auth"
import { useRoom } from "../hooks/room"
import { useToast } from '../hooks/toast'

export function withAuth(WrappedComponent: ElementType) {
  const Wrapper = (props: any) => {
    const [isOnwer, setIsOnwer] = useState(false)
    const history = useHistory()
    const params = useParams<{ id: string }>()

    const { user } = useAuth()
    const { active, onwerId } = useRoom({ roomID: params.id })
    const { addToast, addHtmlToast } = useToast()


    useEffect(() => {
      if (onwerId === '') return
      if (active === null) return

      if (user?.id === onwerId) {
        setIsOnwer(true)
      } else {
        addToast({
          type: 'error',
          title: 'Você precisa ser dono desta sala para acessar esse painel.',
        })
        if (active) {
          addHtmlToast()
        }

        history.replace('/')
      }
    }, [params.id, user?.id, onwerId, active, addToast, addHtmlToast, history])

    return isOnwer ? <WrappedComponent {...props} /> : <div />
  }

  return Wrapper
}