import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  background?: 'white' | 'salmao'
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ background, type, title, to, onClick, children }: Props) => {
  if (type == 'button') {
    return (
      <ButtonContainer
        background={background}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <>
      <ButtonLink
        background={background}
        type="button"
        title={title}
        to={to as string}
        onClick={onClick}
      >
        {children}
      </ButtonLink>
    </>
  )
}

export default Button
