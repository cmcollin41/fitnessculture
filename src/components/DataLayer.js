/**
 * A component for pushing events into the GTM datalayer. Uses component did mount to ensure a window dom element is available.
 * Further work is needed on this component to make it more powerful
 */
const DataLayer = ({event, pageType, destination}) => {
 
  return (
    dataLayer.push({
      event: event,
      pageType: pageType,
      destination: destination
    })
  )
}

export default DataLayer;