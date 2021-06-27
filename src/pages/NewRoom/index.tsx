import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Button } from '../../components/Button'

import IllustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

import { useAuth } from '../../hooks/auth'
import { database } from '../../services/firebase'

import {
  Container,
  MainContent,
  Form,
} from './styles'

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()

  const [roomName, setRoomName] = useState('')

  const handleCreateRoom = async (e: FormEvent) => {
    e.preventDefault()

    if (roomName.trim() === '') return

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: roomName,
      authorId: user?.id,
    })

    history.push(`/admin/rooms/${firebaseRoom.key}`)
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
          <h2>Crie uma nova sala</h2>

          <Form onSubmit={handleCreateRoom}>
            <input
              value={roomName}
              onChange={e => setRoomName(e.target.value)}
              type="text"
              placeholder="Nome da sala"
            />

            <Button type="submit">
              Criar sala
            </Button>
          </Form>
          <p>Quer entrar em uma sala já existente? <Link to="/">clique aqui</Link></p>
        </MainContent>
      </main>
    </Container>
  )
}