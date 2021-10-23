import mockDesc from '@/utils/mockDesc'
import cmp from './index'

const mockData = mockDesc(cmp.props)
export default {
  large: mockData({
    list: [
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
    ], w: 20, h: 20,
  }),
  normal: mockData({
    list: [
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
    ], w: 16, h: 16,
  }),
  small: mockData({
    list: [
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
    ], w: 12, h: 12,
  }),
  placeholder: mockData({
    list: [
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
    ],
    w: 12, h: 12,
    max: 3,
  }),
}
