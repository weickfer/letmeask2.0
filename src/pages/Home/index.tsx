import { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import { database } from '../../services/firebase'
import { useAuth } from '../../hooks/auth'

import { Button } from '../../components/Button'

import IllustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import {
  Container,
  MainContent,
  CreateRoomButton,
  Separator,
  Form,
} from './styles'

export function Home() {
  const history = useHistory()
  const auth = useAuth()

  const [roomCode, setRoomCode] = useState('')

  const handleCreateNewRoom = async () => {
    if (!auth.user) {
      await auth.signWithGoogle()
    }

    history.push('/rooms/new')
  }

  const handleJoinRoom = async (e: FormEvent) => {
    e.preventDefault()

    if (roomCode.trim() === '') return

    const formattedRoomCode = roomCode.replace('#', '')

    const roomRef = await database.ref(`rooms/${formattedRoomCode}`).get()

    if (!roomRef.exists()) {
      alert('Essa sala não existe.')
      return
    }

    if (roomRef.val().closedAt) {
      alert('Essa sala já foi fechada.')
      return
    }

    history.push(`/rooms/${formattedRoomCode}`)
  }

  return (
    <Container>
      <aside>
        <img
          src={IllustrationImg}
          alt="Ilustração simbolizando perguntas e respostar"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire suas dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />

          <CreateRoomButton onClick={handleCreateNewRoom}>
            <img src={googleIconImg} alt="Google" /> Crie sua sala com o Google
          </CreateRoomButton>

          <Separator>ou entre em uma sala</Separator>

          <Form onSubmit={handleJoinRoom}>
            <input
              value={roomCode}
              onChange={e => setRoomCode(e.target.value)}
              type="text"
              placeholder="Digite o código da sala"
            />

            <Button type="submit">
              Entrar na sala
            </Button>
          </Form>
        </MainContent>
      </main>
    </Container>
  )
}