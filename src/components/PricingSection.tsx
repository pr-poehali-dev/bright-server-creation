import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const plans = [
    {
      name: "Стартовый",
      price: "299",
      features: ["До 10 игроков", "2 ГБ RAM", "10 ГБ SSD", "Базовая поддержка"],
      popular: false,
    },
    {
      name: "Игровой",
      price: "699",
      features: [
        "До 50 игроков",
        "8 ГБ RAM",
        "50 ГБ SSD",
        "Приоритетная поддержка",
        "Автобэкапы",
      ],
      popular: true,
    },
    {
      name: "Про",
      price: "1299",
      features: [
        "До 100 игроков",
        "16 ГБ RAM",
        "100 ГБ SSD",
        "VIP поддержка",
        "Автобэкапы",
        "DDoS защита",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gaming-dark to-purple-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Выбери свой{" "}
            <span className="gaming-gradient bg-clip-text text-transparent">
              тариф
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Гибкие тарифы для любых потребностей и бюджета
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-gaming-pink gaming-glow"
                  : "border-white/10 hover:border-gaming-purple/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gaming-pink text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-gaming-orange mb-2">
                  {plan.price} ₽
                </div>
                <div className="text-gray-300">в месяц</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                  >
                    <Icon
                      name="Check"
                      size={20}
                      className="text-gaming-blue mr-3"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gaming-pink hover:bg-gaming-purple text-white"
                    : "bg-gaming-purple hover:bg-gaming-pink text-white"
                }`}
              >
                Выбрать тариф
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
