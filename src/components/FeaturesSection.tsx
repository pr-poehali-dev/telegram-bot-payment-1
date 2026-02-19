import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Shield" as const,
    title: "Безопасно",
    description: "Прямые переводы на кошелёк без посредников и комиссий сервиса",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "Zap" as const,
    title: "Мгновенно",
    description: "Транзакции обрабатываются сетью блокчейна за секунды",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "Globe" as const,
    title: "Глобально",
    description: "Принимаем донаты из любой точки мира без ограничений",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "Wallet" as const,
    title: "Мультивалюта",
    description: "Bitcoin, Ethereum, TRON TRC-20, PayPal и другие способы",
    color: "from-purple-500 to-pink-500",
  },
];

const FeaturesSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-800 text-4xl md:text-5xl mb-4">
            Почему <span className="gradient-text">CryptoDonate</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Простой и надёжный способ поддержать любимого автора
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="gradient-border p-8 bg-card/80 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={feature.icon} size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
