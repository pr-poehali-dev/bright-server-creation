import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GamesSection = () => {
  const games = [
    { name: "Minecraft", icon: "Gamepad2", players: "500+" },
    { name: "CS2", icon: "Target", players: "1000+" },
    { name: "Rust", icon: "Hammer", players: "300+" },
    { name: "Valheim", icon: "Sword", players: "200+" },
    { name: "ARK", icon: "Zap", players: "150+" },
    { name: "DayZ", icon: "Shield", players: "250+" },
  ];

  return (
    <section className="py-20 bg-gaming-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Поддерживаемые{" "}
            <span className="gaming-gradient bg-clip-text text-transparent">
              игры
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Создавай серверы для самых популярных игр с автоматической
            настройкой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gaming-purple/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center justify-between mb-6">
                <Icon
                  name={game.icon as any}
                  size={48}
                  className="text-gaming-orange group-hover:text-gaming-pink transition-colors"
                />
                <span className="text-gaming-blue font-semibold">
                  {game.players} игроков
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {game.name}
              </h3>
              <Button className="w-full bg-gaming-purple hover:bg-gaming-pink text-white font-semibold transition-all duration-300">
                Создать сервер
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white px-8 py-4 text-lg font-semibold"
          >
            Посмотреть все игры
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
