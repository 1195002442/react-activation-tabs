import { useEffect } from 'react'
import { notification } from 'antd'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'

// import Counter from '@/components/Counter'

console.log('init')

export default (() => {
  useEffect(() => {
    notification.info({
      message: '[Chart] mounted'
    })

    return () => {
      notification.error({
        message: '[Chart] unmounted'
      })
    }
  }, [])

  useActivate(() => {
    notification.success({
      message: '[Chart] activated'
    })
  })
  useUnactivate(() => {
    notification.warning({
      message: '[Chart] unactivated'
    })
  })

  return (
    <div>
      <h1>Chart</h1>
      {/* <Counter /> */}
      {Array(100)
        .fill('')
        .map((item, idx) => (
          <div key={idx}>Chart Item {idx + 1}</div>
        ))}
    </div>
  )
})

// export default () => (
//   <KeepAlive name="/mdm/chart" title="图形" saveScrollPosition="screen">
//     <Chart />
//   </KeepAlive>
// )
