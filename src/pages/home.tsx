import { useEffect } from 'react'
import { notification } from 'antd'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'

// import Counter from '@/components/Counter'

export default (() => {
  useEffect(() => {
    notification.info({
      message: '[Home] mounted'
    })

    return () => {
      notification.error({
        message: '[Home] unmounted'
      })
    }
  }, [])

  useActivate(() => {
    notification.success({
      message: '[Home] activated'
    })
  })
  useUnactivate(() => {
    notification.warning({
      message: '[Home] unactivated'
    })
  })
  return (
    <div>
      <h1>Home</h1>
      {/* <Counter /> */}
      {Array(100)
        .fill('')
        .map((item, idx) => (
          <div key={idx}>Home Item {idx + 1}</div>
        ))}
    </div>
  )
})

// export default () => (
//   <KeepAlive name="/home" title="首页" saveScrollPosition="screen">
//     <Home />
//   </KeepAlive>
// )
