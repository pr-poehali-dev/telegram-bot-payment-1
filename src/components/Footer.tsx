import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-heading font-bold text-lg">
            <span className="gradient-text">Crypto</span>
            <span>Donate Bot</span>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <Icon name="MessageCircle" size={16} />
              Telegram
            </a>
            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <Icon name="Github" size={16} fallback="Code" />
              GitHub
            </a>
            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <Icon name="Twitter" size={16} fallback="AtSign" />
              Twitter
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 CryptoDonate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
