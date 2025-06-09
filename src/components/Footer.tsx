import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gaming-dark border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gaming-gradient bg-clip-text text-transparent mb-4">
              GameServers
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Лучшие игровые серверы с поддержкой 24/7 и высокой
              производительностью.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Игры</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Minecraft</li>
              <li>CS2</li>
              <li>Rust</li>
              <li>Valheim</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Документация</li>
              <li>Контакты</li>
              <li>FAQ</li>
              <li>Статус серверов</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Социальные сети
            </h4>
            <div className="flex space-x-4">
              <Icon
                name="MessageCircle"
                size={24}
                className="text-gaming-blue hover:text-gaming-pink cursor-pointer transition-colors"
              />
              <Icon
                name="Users"
                size={24}
                className="text-gaming-blue hover:text-gaming-pink cursor-pointer transition-colors"
              />
              <Icon
                name="Globe"
                size={24}
                className="text-gaming-blue hover:text-gaming-pink cursor-pointer transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 GameServers. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
