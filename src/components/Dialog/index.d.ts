export interface DialogProps {
  title: React.ReactText
  isVisible: boolean
  buttons?: React.ReactElement[]
  onClose: () => void
  closeOnClickMask?: boolean
}

export interface DialogTypes extends React.FC<DialogProps> {
  modal: (args: DialogModal) => () => void
  confirm: (args: DialogConfirm) => void
  warning: (args: DialogConfirm) => void
}

export interface DialogModal extends Pick<DialogProps, 'title' | 'buttons'> {
  content: React.ReactNode
}

export interface DialogWarning extends Pick<DialogProps, 'title'> {
  content: React.ReactNode
  onOk?: () => void
}

export interface DialogConfirm extends DialogWarning {
  onCancel?: () => void
}
