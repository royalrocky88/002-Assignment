

import './index.css'

const TabItem = props => {
  const {allTabsList} = props
  const {displayText} = allTabsList


  return (
    <li className="tab-list">
      <button
        type="button"
        className="each-tab-btn"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem