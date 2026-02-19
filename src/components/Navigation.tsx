import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  onNavigate: (section: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2 font-heading font-bold text-xl hover:opacity-80 transition-opacity"
        >
          <span className="gradient-text">Crypto</span>
          <span>Donate</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-body" onClick={() => onNavigate('about')}>
            <Icon name="Info" size={16} />
            About
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-body" onClick={() => onNavigate('profile')}>
            <Icon name="User" size={16} />
            Profile
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-body" onClick={() => onNavigate('proofs')}>
            <Icon name="ShieldCheck" size={16} />
            Proofs
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-body" onClick={() => onNavigate('settings')}>
            <Icon name="Settings" size={16} />
            Settings
          </Button>
        </div>

        <Button
          size="sm"
          className="bg-gradient-to-r from-primary to-accent text-white font-heading font-semibold hover:opacity-90 transition-all"
          onClick={() => onNavigate('donate')}
        >
          <Icon name="Heart" size={16} />
          Donate
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
