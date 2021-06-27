import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import { database } from "../services/firebase"
import { useAuth } from "./auth"
import { useToast } from "./toast"

type IQuestion = {
  id: string
  content: string
  author: {
    name: string
    avatar: string
  }
  isHighlighted: boolean
  isAnswered: boolean
  likeCount: number
  // hasLiked: boolean
  likeId?: string
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string
    avatar: string
  }
  content: string
  isHighlighted: boolean
  isAnswered: boolean
  likes: Record<string, { authorId: string }>
}>

type UseRoomType = {
  roomID: string
}

export const useRoom = ({ roomID }: UseRoomType) => {
  const [onwerId, setOnwerId] = useState('')
  const [title, setTitle] = useState('')
  const [active, setActive] = useState<boolean | null>(null)
  const [questions, setQuestions] = useState<IQuestion[]>([])
  const history = useHistory()

  const { user } = useAuth()
  const { addToast } = useToast()

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomID}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()

      if (databaseRoom === null) {
        setActive(false)
        addToast({
          title: 'Essa sala não existe.',
          type: 'warn'
        })
        history.push('/')

        return
      }

      if (databaseRoom?.closedAt) {
        if (databaseRoom.authorId === user?.id) {
          setActive(false)
          addToast({
            title: 'Sala fechada com sucesso.',
            type: 'success'
          }, {
            duration: 5000
          })
          history.push('/')
        } else {
          setActive(false)
          addToast({
            title: 'O admin encerrou está sala.',
            type: 'warn'
          }, {
            duration: 5000
          })
          history.push('/')
        }


        return
      }

      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {}

      const parsedQuestions = Object
        .entries(firebaseQuestions)
        .map(([key, value]) => {
          return {
            id: key,
            author: value.author,
            content: value.content,
            isAnswered: value.isAnswered,
            isHighlighted: value.isHighlighted,
            likeCount: Object.values(value.likes ?? {}).length,
            // hasLiked: Object.values(value.likes ?? {}).some(like => like.authorId === user?.id)
            likeId: Object.entries(value.likes ?? {}).find(([_, value]) => value.authorId === user?.id)?.[0]
          }
        })

      setActive(true)
      setOnwerId(databaseRoom.authorId)
      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })

    return () => {
      roomRef.off('value')
    }
  }, [roomID, user])


  return { active, onwerId, title, questions }
}