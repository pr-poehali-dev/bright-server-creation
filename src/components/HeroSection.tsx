
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gaming-dark via-purple-900 to-gaming-purple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gaming-pink/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gaming-orange/20 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-gaming-blue/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Создай свой
            <span className="gaming-gradient bg-clip-text text-transparent"> игровой сервер</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Запускай серверы для любых игр за минуты. Высокая производительность, низкие пинги, поддержка 24/7
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gaming-purple hover:bg-gaming-pink text-white px-8 py-4 text-lg font-semibold gaming-glow transition-all duration-300 hover:scale-105">
              <Icon name="Gamepad2" size={24} className="mr-2" />
              Создать сервер
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
              <Icon name="Play" size={24} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-gaming-orange mb-2">99.9%</div>
              <div className="text-gray-300">Время работы</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-gaming-pink mb-2">< 15ms</div>
              <div className="text-gray-300">Средний пинг</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-gaming-blue mb-2">50+</div>
              <div className="text-gray-300">Поддерживаемых игр</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
