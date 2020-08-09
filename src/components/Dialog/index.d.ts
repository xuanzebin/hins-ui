export interface DialogProps {
  title: React.ReactText
  isVisible: boolean
  buttons?: React.ReactFragment[]
  onClose: () => void
  closeOnClickMask?: boolean
}
