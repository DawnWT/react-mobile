import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'
type props = {
  color?: string
}
const SVGCart = ({ color = '#fff' }: props) => (
  <Svg width={18} height={20} fill="none">
    <G stroke={color} strokeWidth={1.5}>
      <Path d="M13.449 6c-3.156.511-5.816.496-8.88-.005C2.478 5.654.599 7.484 1.095 9.54l1.767 7.316A2.804 2.804 0 0 0 5.589 19h6.853a2.804 2.804 0 0 0 2.728-2.144l1.764-7.302c.497-2.06-1.39-3.894-3.485-3.555Z" />
      <Path strokeLinecap="round" d="M5 8.832V4.5A3.5 3.5 0 0 1 8.5 1h1A3.5 3.5 0 0 1 13 4.5V9" />
    </G>
  </Svg>
)
export default SVGCart
