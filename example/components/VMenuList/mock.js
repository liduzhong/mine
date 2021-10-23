import list from '@/router/config'
import mockDesc from '@/utils/mockDesc'
import cmp from './index'

const mockData = mockDesc(cmp.props)
export default mockData({
    title: 'title',
    list,
  },
)
