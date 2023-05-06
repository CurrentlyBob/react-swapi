import { Link } from 'react-router-dom'

// assets
import reactLogo from '../../assets/react.svg'

const NavBar = () => {
  return (
    <header>
      <img className="logo" src={ reactLogo } alt="The React logo" />
      <nav>
        <h2>STAR WARS STARSHIPS</h2>
      </nav>
    </header>
  )
}

export default NavBar