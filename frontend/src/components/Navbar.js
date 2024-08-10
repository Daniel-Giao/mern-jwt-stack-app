// rrd imports
import { Link } from 'react-router-dom'

// hooks import
import useLogout from '../hooks/useLogout'
import useAuthContext from '../hooks/useAuthContext'

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
                    <h1>Workout Buddy</h1>
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

