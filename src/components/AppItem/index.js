import './index.css'

const AppItem = props => {
  const {allAppsList} = props
  const {appName, imageUrl, link, headline} = allAppsList

  return (
    <li className="app-list">
      <p className="headline-card">{headline}</p>
      <img src={imageUrl} alt={appName} className="logo-card" />
      <p className="name-card">
        <a href={link}>{appName}</a>
      </p>
    </li>
  )
}

export default AppItem