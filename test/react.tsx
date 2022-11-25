import type { VFC } from 'react'

const Component: VFC = () => {
  const click = () => {}
  return (
    <button onClick={click} onBlur={() => {}} disabled>
      <p>hi</p> |
    </button>
  )
}

export default Component
