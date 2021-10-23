import Alert from '@/views/alert'
import Avatar from '@/views/avatar'
import Badge from '@/views/badge'
import Breadcrumb from '@/views/breadcrumb'
import Button from '@/views/button'
import ButtonGroup from '@/views/buttonGroup'
import Carousel from '@/views/carousel'
import Collapse from '@/views/collapse'
import Modal from '@/views/modal'
import Pagination from '@/views/pagination'
import Progress from '@/views/progress'
import Status from '@/views/status'
import Steps from '@/views/steps'
import Drawer from '@/views/drawer'

export default [{
        path: '/',
        name: 'Alert',
        component: Alert,
    },
    {
        path: '/avatar',
        name: 'Avatar',
        component: Avatar,
    },
    {
        path: '/badge',
        name: 'Badge',
        component: Badge,
    },
    {
        path: '/breadcrumb',
        name: 'Breadcrumb',
        component: Breadcrumb,
    },
    {
        path: '/button',
        name: 'Button',
        component: Button,
    },
    {
        path: '/buttonGroup',
        name: 'ButtonGroup',
        component: ButtonGroup,
    },
    {
        path: '/carousel',
        name: 'carousel',
        component: Carousel,
    },
    {
        path: '/collapse',
        name: 'collapse',
        component: Collapse,
    },
    {
        path: '/modal',
        name: 'modal',
        component: Modal,
    },
    {
        path: '/pagination',
        name: 'pagination',
        component: Pagination,
    },
    {
        path: '/progress',
        name: 'progress',
        component: Progress,
    },
    {
        path: '/status',
        name: 'status',
        component: Status,
    },
    {
        path: '/steps',
        name: 'steps',
        component: Steps,
    },
    {
        path: '/drawer',
        name: 'drawer',
        component: Drawer,
    },
]