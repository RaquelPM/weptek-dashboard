import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import { useOutsideClick } from '~/hooks'

import { Container, Selected, OptionsList } from './styles'

const NSelector = forwardRef(
  (
    {
      label = '',
      placeholder = '',
      options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
      value,
      onChange = () => null,
      disabled,
      onBlur = () => null,
      error,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)

    const firstEffect = useRef(true)

    const container = useOutsideClick(() => setOpen(false))

    useEffect(() => {
      if (firstEffect.current) {
        firstEffect.current = false

        return
      }

      if (!open) {
        onBlur()
      }
    }, [open])

    useImperativeHandle(ref, () => ({
      ...container.current,
      blur: () => {
        setOpen(false)
      },
      focus: () => {
        setOpen(true)
      },
    }))

    const listOptions = options.map((option) => (
      <button
        type="button"
        className="option"
        onClick={() => onChange(option)}
        key={options.indexOf(option)}
      >
        {option}
      </button>
    ))

    return (
      <Container disabled={disabled} ref={container} error={error} {...rest}>
        <p className="label">{label}</p>
        <Selected
          open={open}
          onClick={() => setOpen(!open)}
          selected={!!value}
          error={error}
        >
          <p className="option">{value ?? placeholder}</p>
          <IoIosArrowDown size={24} className="icon" />
        </Selected>
        <OptionsList open={open} onClick={() => setOpen(!open)}>
          {listOptions}
        </OptionsList>
        <p className="error">{error}</p>
      </Container>
    )
  }
)

export default NSelector
