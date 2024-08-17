// rrd imports
import { Link } from 'react-router-dom'

// hooks import
import useLogout from '../hooks/useLogout'
import useAuthContext from '../hooks/useAuthContext'

// img import
import logo from "../assets/logo-app.jpeg";

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <img className='navbar-logo' src={logo} alt="logo" />
                    <h1>Workout Tracker</h1>
                </Link>
                <nav>
                    {user
                        ? (
                            <div>
                                <span>{user.email}</span>
                                <button onClick={handleClick}>Log out</button>
                            </div>
                        )
                        : (
                            <div>
                                <Link to="/login">Log in</Link>
                                <Link to="/signup">Sign up</Link>
                            </div>
                        )
                    }
                </nav>
            </div>
        </header>
    )
}

