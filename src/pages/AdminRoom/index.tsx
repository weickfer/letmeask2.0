import { useParams } from 'react-router-dom'

import { useRoom } from '../../hooks/room'
import { database } from '../../services/firebase'
import { withAuth } from '../../utils/withAuth'

import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'

import { Header } from '../../components/Header'
import { RoomCode } from '../../components/RoomCode'
import { Button } from '../../components/Button'
import { Question } from '../../components/Question'
import { QuestionButton } from '../../components/Question/QuestionButton'

import {
  Container,
  RoomTitle,
  QuestionList,
} from './styles'
import { useModal } from '../../hooks/modal'

function AdminRoomPage() {
  const params = useParams<{ id: string }>()
  const roomID = params.id

  const { title, questions } = useRoom({ roomID })
  const modal = useModal()

  const handleEndRoom = async () => {
    modal.setData({
      icon: 'close',
      title: 'Encerrar sala',
      description: 'Tem certeza que você deseja encerrar esta sala?',
      buttons: [
        {
          label: 'Cancelar',
          colors: {
            labelColor: '#737380',
            background: '#DBDCDD',
          },
          onClick: () => modal.closeModal()
        },
        {
          label: 'Sim, encerrar',
          colors: {
            labelColor: '#fff',
            background: '#D73754',
          },
          onClick: async () => {
            modal.closeModal()
            await database.ref(`rooms/${roomID}`).update({
              closedAt: new Date()
            })
          }
        }
      ]
    })
    modal.openModal()
  }

  const handleChekQuestionAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${roomID}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  const handleHighlightQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomID}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  const handleDeleteQuestion = async (questionId: string) => {
    modal.setData({
      icon: 'trash',
      title: 'Excluir pergunta',
      description: 'Tem certeza que você deseja excluir esta pergunta?',
      buttons: [
        {
          label: 'Cancelar',
          colors: {
            labelColor: '#737380',
            background: '#DBDCDD',
          },
          onClick: () => modal.closeModal()
        },
        {
          label: 'Sim, excluir',
          colors: {
            labelColor: '#fff',
            background: '#D73754',
          },
          onClick: async () => {
            modal.closeModal()
            await database.ref(`rooms/${roomID}/questions/${questionId}`).remove()
          }
        }
      ]
    })
    modal.openModal()
  }

  return (
    <Container>
      <Header>
        <div>
          <RoomCode code={roomID} />
          <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
        </div>
      </Header>
      <main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {
            questions.length > 0 &&
            <span>{`
              ${questions.length} ${questions.length === 1 ? 'pergunta' : 'perguntas'}
            `}</span>
          }
        </RoomTitle>

        <QuestionList>
          {
            questions.map(question => (
              <Question
                key={question.id}
                author={question.author}
                content={question.content}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {
                  !question.isAnswered && (
                    <>
                      <QuestionButton
                        type="button"
                        onClick={() => handleChekQuestionAsAnswered(question.id)}
                      >
                        <img src={checkImg} alt="Destacar pergunta" />
                      </QuestionButton>
                      <QuestionButton
                        type="button"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <img src={answerImg} alt="Marcar como respondida" />
                      </QuestionButton>
                    </>
                  )
                }
                <QuestionButton
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Deletar pergunta" />
                </QuestionButton>
              </Question>
            ))
          }
        </QuestionList>
      </main>
    </Container>
  )
}

const AdminRoom = withAuth(AdminRoomPage)

export { AdminRoom }