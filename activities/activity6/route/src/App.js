import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import AboutThisSite from './AboutUs';
import ContactUs from './ContactUs';
import LoginPage from './Login';
import User from './User';
import NavBar from './NavBar';
import PrivateRoute from './PrivateRoute.js';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (from, navigate) => {
        setIsLoggedIn(true);
        console.log('in hanldeLogin from', from);
        console.log('in hanldeLogin navigate', navigate);
        navigate(from, { replace: true});
    };

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<RootElement />} />
                    <Route
                    path='/about'
                    element={
                        <PrivateRoute authorized={isLoggedIn}>
                            <AboutThisSite />
                        </PrivateRoute>
                    }
                    />
                    <Route 
                    path='/contact'
                    element={
                        <PrivateRoute authorized={isLoggedIn}>
                            <ContactUs />
                        </PrivateRoute>
                    }
                    />

                    <Route path='/login' element={<LoginPage onClick={handleLogin} />} />
                    <Route path='/user/:username' element={<User />} />
                </Routes>
                <h5>Some Friends of mine</h5>
                <ul>
                    <li>
                        <Link to='user/Hiedi'>Hiedi</Link>
                    </li>
                    <li>
                        <Link to='user/Lex'>Lex</Link>
                    </li>
                    <li>
                        <Link to='user/Erik'>Erik</Link>
                    </li>
                    <li>
                        <Link to='user/Ryan'>Ryan</Link>
                    </li>
                </ul>
            </BrowserRouter>
        </>
    );
};

const RootElement = () => <span></span>;

export default App;