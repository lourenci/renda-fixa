interface Props {
  onClick: () => void
  className: string
}

function CloseButton({ onClick, className }: Props): JSX.Element {
  return (
    <button
      className={`close ${className}`}
      aria-label='Fechar'
      onClick={onClick}
    >
      <i className='fa fa-close' />
    </button>
  )
}

export default CloseButton
