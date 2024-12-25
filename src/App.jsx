import { Container } from './components/container'
import './App.css'
import { NavBarRoot } from './components/NavBarRoot'
import { TitleRoot } from './components/title'
import { VideoRoot } from './components/videoRoot'
import { BottomBarRoot } from './components/bottom'
import { FooterBarRoot } from './components/footerRoot'

function counter()  n

function App() {
    return (
        <>
            <NavBarRoot />
            <Container>
                <TitleRoot />
                <VideoRoot />
                <BottomBarRoot />
            </Container>
            <FooterBarRoot />

        </>
    )
}

export default App









