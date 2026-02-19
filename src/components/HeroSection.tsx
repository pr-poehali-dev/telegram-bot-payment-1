import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-in mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
            <Icon name="Zap" size={14} />
            Поддержи проект криптовалютой
          </span>
        </div>

        <h1 className="opacity-0 animate-fade-in-delay-1 font-heading font-900 text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
          <span className="gradient-text">Crypto</span>
          <span className="text-foreground">Donate</span>
          <br />
          <span className="text-foreground">Bot</span>
        </h1>

        <p className="opacity-0 animate-fade-in-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Быстрые и безопасные пожертвования через TRON TRC-20 и PayPal.
          Поддержи любимого автора в один клик.
        </p>

        <div className="opacity-0 animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-heading font-semibold text-lg px-8 py-6 glow-purple transition-all duration-300 hover:scale-105"
            onClick={() => onNavigate('donate')}
          >
            <Icon name="Heart" size={20} />
            Сделать донат
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border/50 bg-card/50 backdrop-blur-sm text-foreground font-heading font-semibold text-lg px-8 py-6 hover:bg-card transition-all duration-300 hover:scale-105"
            onClick={() => onNavigate('about')}
          >
            <Icon name="Info" size={20} />
            Подробнее
          </Button>
        </div>

        <div className="opacity-0 animate-fade-in-delay-4 mt-16 flex items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-2xl">◈</span>
            <span className="text-sm">TRON TRC-20</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CreditCard" size={20} />
            <span className="text-sm">PayPal F&F</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;