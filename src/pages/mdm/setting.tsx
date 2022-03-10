import { useEffect } from 'react'
import { notification } from 'antd'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'

// import Counter from '@/components/Counter'

export default (() => {
  // console.log('test')

  useEffect(() => {
    notification.info({
      message: '[Setting] mounted'
    })

    return () => {
      notification.error({
        message: '[Setting] unmounted'
      })
    }
  }, [])

  useActivate(() => {
    notification.success({
      message: '[Setting] activated'
    })
  })
  useUnactivate(() => {
    notification.warning({
      message: '[Setting] unactivated'
    })
  })
  return (
    <div>
      <h1>Setting</h1>
      {/* <Counter /> */}
      {Array(100)
        .fill('')
        .map((item, idx) => (
          <div key={idx}>Setting Item {idx + 1}</div>
        ))}
    </div>
  )
})

// export default () => (
//   <KeepAlive name="/mdm/setting" title={'设置'} saveScrollPosition="screen">
//     <Setting />
//   </KeepAlive>
// )
