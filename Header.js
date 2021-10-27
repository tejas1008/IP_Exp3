import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo"
                    src="https://i.postimg.cc/qR6YwVKs/logo-01.png"
                />
            </Link>


            <div className="header__search">
                <input

                    className="header__searchInput" type="text" />
                <SearchIcon
                    className="header__searchIcon" />
            </div>


            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span
                            className='header__optionlineOne'>{!user ? 'Hello Guest' : user.email}</span>
                        <span
                            className='header__optionlineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span
                        className='header__optionlineOne'>Your </span>
                    <span
                        className='header__optionlineTwo'>Orders</span>

                </div>
                <div className="header__option">

                    <span
                        className='header__optionlineOne'>Your</span>
                    <span
                        className='header__optionlineTwo'>Bag</span>
                </div>

                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <LocalMallIcon />
                        <span className="header__optionlineTwo header__basketCount">{basket?.length}
                        </span>
                    </div>
                </Link>



            </div>
        </div>
    )
}
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
export default Header;
