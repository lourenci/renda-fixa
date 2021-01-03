import style from './index.scss'
import CloseButton from './components/CloseButton'

interface Props {
  onCloseCard: () => void
  children: React.ReactNode
}

function Card({ onCloseCard, children }: Props): JSX.Element {
  return (
    <div className={`card rounded ${style.card_property}`}>
      <CloseButton className={style.closeButton} onClick={onCloseCard} />
      {children}
    </div>
  )
}

export default Card
