// eslint-disable-next-line import/named
import { ReportHandler } from 'web-vitals'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line promise/catch-or-return,promise/prefer-await-to-then,promise/always-return
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
