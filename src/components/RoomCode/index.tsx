import copyImg from '../../assets/images/copy.svg'

import { Container } from './styles'

interface RoomCodeProps {
  code: string
}

export function RoomCode({ code }: RoomCodeProps) {
  const handleCopyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(`#${code}`)
  }

  return (
    <Container onClick={handleCopyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </Container>
  )
}