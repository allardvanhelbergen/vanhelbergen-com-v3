import React from 'react'
import HeaderNavBar from './HeaderNavBar'

export const Clear = () => <HeaderNavBar appearance="clear" />

export const Filled = () => <HeaderNavBar appearance="filled" />

export default {
  title: '3: Components/HeaderNavBar',
  component: HeaderNavBar,
  decorators: [storyFn => <div style={{ margin: '-16px' }}>{storyFn()}</div>],
}
