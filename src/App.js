import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageURL: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Suri',
    role: 'Software',
  },
  {
    uniqueNo: 2,
    imageURL: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Suri',
    role: 'Software',
  },
  {
    uniqueNo: 3,
    imageURL: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Suri',
    role: 'Software',
  },
  {
    uniqueNo: 4,
    imageURL: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Suri',
    role: 'Software',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
