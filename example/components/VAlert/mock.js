import mockDesc from '@/utils/mockDesc'
import cmp from './index'

const mockData = mockDesc(cmp.props)
export default {
  normal: mockData(
    { text: 'info：默认样式' },
  ),
  info: mockData({
    info: true,
    text: 'info：默认样式',
  }),
  success: mockData({
    success: true,
    text: 'success：默认样式',
  }),
  warning: mockData({
    warning: true,
    text: 'warning：默认样式',
  }),
  error: mockData({
    error: true,
    text: 'error：默认样式',
  }),
}
