import Icon from "@/components/ui/icon";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Алексей",
      game: "Minecraft",
      rating: 5,
      text: "Отличные серверы! Запустил свой мир за 5 минут, никаких лагов.",
    },
    {
      name: "Мария",
      game: "Valheim",
      rating: 5,
      text: "Поддержка просто супер, помогли настроить мод за пару минут.",
    },
    {
      name: "Дмитрий",
      game: "CS2",
      rating: 5,
      text: "Стабильный пинг, хорошая производительность. Рекомендую!",
    },
  ];

  return (
    <section className="py-20 bg-gaming-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Отзывы{" "}
            <span className="gaming-gradient bg-clip-text text-transparent">
              игроков
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Тысячи довольных игроков уже создали свои серверы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gaming-purple/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {review.name}
                  </h4>
                  <p className="text-gaming-blue">{review.game}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-gaming-orange fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
