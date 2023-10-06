import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo" className="w-28 object-contain"/>
            <button
            type="button"
            onClick={()=>window.open('https://github.com/TheODDYSEY')}
            className="black-btn"
            ></button>
        </nav>
        <h1 className="head_text">
        Master Article Summaries with<br className="max-md:hidden"/>
            <span className="orange_gradient">
                OpenAI GPT-4
            </span>
        </h1>
        <h2 className="desc">
        Transform your reading journey with Summize, your AI article wizard. Unlock the power of swift, insightful summaries and stay effortlessly informed! </h2>
        <h2 className="desc"></h2>
    </header>
  )
}

export default Hero