import './Home.css'
import {Link} from 'react-router'

export default function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Orderly</h1>
            <h3>Orderly is an online ordering service.</h3>

            <Link to="/shops"><div className="browse_button">Browse Stores</div></Link>
        </div>
    )
}