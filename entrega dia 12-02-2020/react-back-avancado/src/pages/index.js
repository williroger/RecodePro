import Button from './components/Button'
import BabyYoda from './components/BabyYoda'

function HomePage() {
    return <div>
        {/* baby yoda renderizando ssr com parâmetro priority="true" -> preload */}
        <BabyYoda />
        RETA FINAL STAR WARS
        <Button />
         </div>
}

export default HomePage