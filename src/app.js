import { notification } from 'antd'
import KeepAliveTabs from '@/components/KeepAliveTabs'
import { AliveScope } from 'react-activation';
notification.config({
  placement: 'bottomRight',
  duration: 2
})

// export const layout = () => ({
//   disableMobile: true,
//   headerRender: () => <KeepAliveTabs />
// })

export function rootContainer(container) {
  return <AliveScope>{container}</AliveScope>;
}
