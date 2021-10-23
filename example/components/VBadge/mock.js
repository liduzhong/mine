import mockDesc from '@/utils/mockDesc'
import cmp from './index'

const mockData = mockDesc(cmp.props)
export default {
    large: mockData({ url: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png', w: 24, h: 24, squircle: true }),
    normal: mockData({ url: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png', w: 20, h: 20 }),
    small: mockData({ url: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png', w: 16, h: 16 }),
    defaultPic: mockData({ w: 16, h: 16 }),
}