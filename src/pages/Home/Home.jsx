import nestorLabiukLogo from '../../assets/img/logotipo nl-02.png'
import './home.css'

function Home() {
  return (
    <div className='home'>
        <div className='home-img-container'>
          <img src={nestorLabiukLogo} className="home-img" alt="Vite logo" />
        </div>
      </div>
  )
}

export default Home
