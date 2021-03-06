import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Main from './components/Main'
import Bookmarks from './components/BookmarkList'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { ImageProvider } from './contex/state'


const App = () => {
    return (
        <Router>
            <ImageProvider>
                <main className='wrapper grey darken-2'>
                    <Header/>
                    <Sidebar/>
                    <Switch>
                        <Route path='/' exact component={Main}/>
                        <Route path='/bookmarks' component={Bookmarks}/>
                    </Switch>
                    <Footer/>
                </main>
            </ImageProvider>
        </Router>
    )
}

export default App
