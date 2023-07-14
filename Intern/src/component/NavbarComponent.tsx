import './css/NavbarComponent.css';

interface NavbarProps{
    username: string;
}

const NavbarComponent = ({username}: NavbarProps) => {

    return (
        <div>
        <nav className='main-nav'>
            <div className='logo'>
                <h2>SOMAIYA</h2>
            </div>
            <div className='menu-link'>
                <ul>
                    <li>
                        <a href='#'>Add Students</a>
                    </li>
                    <li>
                        <a href='#'>Add Faculty</a>
                    </li>
                    <li>
                        <a href='#'>Add Course</a>
                    </li>
                    <li>
                        <a href='#'>Add Staff</a>
                    </li>
                </ul>
            </div>
            <div className='Welcome'>
                <div className='text'>
                    <h3>WELCOME, {username}.</h3>
                </div>
            </div>
            <div className='Logout'>
                <button>LOGOUT</button>
            </div>
        </nav>
        </div>
    )
}

export default NavbarComponent;
