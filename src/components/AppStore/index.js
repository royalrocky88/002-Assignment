import {Component} from 'react'

import AppItem from '../AppItem'

import TabItem from '../TabItem'

import './index.css'

const tabsList = [
  {tabId: 'ADS', displayText: 'Company Ads'},

]

const appsList = [
  {
    appId: 0,
    appName: 'Salesforce',
    imageUrl:
      'salesforce.jpg',
    category: 'ADS',
    link: 'https://salesforce.com',
    description: '',
    headline: 'Salesforce for Small Business',
    primarytext: 'The world"s leading CRM is ready to help you simplify the business part of your small business.',
  },
  {
    appId: 1,
    appName: "Levi's",
    imageUrl:
      'levis.jpg',
    category: 'ADS',
    link: 'https://www.levi.com/global',
    description: '',
    headline: 'Salesforce for Small Business',
    primarytext: 'We like where you"re going with this.',
  },
  {
    appId: 2,
    appName: 'Cotopaxi',
    imageUrl:
      'cotopaxi.jpg',
    category: 'ADS',
    link: 'https://cotopaxi.com',
description: 'Shop Back to School',
headline: 'Made With Recycled Plastic',
primarytext: 'Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.',
  },
  {
    appId: 3,
    appName: 'Macdonald',
    imageUrl:
      'normMacdonald.jpg',
    category: 'ADS',
    link: 'https://mcdelivery.com',
description: '',
headline: 'Norm Macdonald"s Nothing Special gives one last dose of the late comic',
primarytext: 'The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape.',
  },
  {
    appId: 4,
    appName: 'Valentino',
    imageUrl:
      'valentino.jpg',
    category: 'ADS',
    link: 'https://valentino.com',
description: '',
headline: 'Valentino Hexagonal Metal Frame With Crystal Studs',
primarytext: 'Visit Valentino.com, discover the new products and shop now!',
  },
  {
    appId: 5,
    appName: 'Purple',
    imageUrl:
      'purple-display-ads.jpg',
    category: 'ADS',
    link: 'https://purple.com',
description: 'Shop Purple products, designed to help you sleep cool.',
headline: 'Cooler Summers Start Here',
primarytext: 'Say ‘goodnight’ to sleeping hot 🔥 with Purple products—designed to dissipate heat.',
  },
  {
    appId: 6,
    appName: 'Curology',
    imageUrl:
      'curology.jpg',
    category: 'ADS',
    link: 'https://curology.com',
description: 'Personalized skincare for dark spots, acne, and more. Results may vary.',
headline: 'Personalized skincare for dark spots, acne, and more.',
primarytext: 'Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.',
  },
  
  
]

// Write your code here

class AppStore extends Component {
  state = {searchInput: '', isActiveTab: tabsList[0].tabId}

  updateTabId = tabId => {
    this.setState({
      isActiveTab: tabId,
    })
  }

  isSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  getFilterAppList = () => {
    const {isActiveTab} = this.state
    const appsTab = appsList.filter(eachApp => eachApp.category === isActiveTab)
    return appsTab
  }

  //   finalSearchResult = () => {
  //     const {searchInput} = this.state
  //     const searchResults = appsList.filter(eachItem =>
  //       eachItem.appName.toLowerCase().includes(searchInput.toLowerCase()),
  //     )
  //     return searchResults
  //   }

  render() {
    const {searchInput} = this.state
    const appsTab = this.getFilterAppList()
    const searchResults = appsTab.filter(eachItem =>
      eachItem.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head-card">Ads Store</h1>
          <div className="search-card">
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.isSearchInput}
              className="input-card"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
              alt="search icon"
              className="search-image"
            />
          </div>
          <div className="tab-card">
            <ul className="tab-list-card">
              {tabsList.map(eachTab => (
                <TabItem
                  key={eachTab.tabId}
                  allTabsList={eachTab}
                  updateTabId={this.updateTabId}
                />
              ))}
            </ul>
          </div>
          <div className="app-card">
            <ul className="app-list-card">
              {searchResults.map(eachApp => (
                <AppItem key={eachApp.appId} allAppsList={eachApp} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AppStore