import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const WALLETS = {
  tron: {
    name: "TRON (TRC-20)",
    symbol: "◈",
    address: "TXHWYwxR2Exj9MCn1wCLTfhi8sMvKUN1bj",
    color: "from-red-500 to-pink-500",
    glow: "glow-pink",
    icon: "Coins" as const,
  },
  paypal: {
    name: "PayPal (Friends & Family)",
    symbol: "💳",
    address: "greggorywright@aol.com",
    color: "from-blue-500 to-cyan-500",
    glow: "glow-blue",
    icon: "CreditCard" as const,
  },
};

const AMOUNTS = [5, 10, 25, 50, 100];

const DonateSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [copiedWallet, setCopiedWallet] = useState<string | null>(null);
  const { toast } = useToast();

  const copyAddress = (key: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedWallet(key);
    toast({
      title: "Адрес скопирован!",
      description: `${address.slice(0, 20)}...`,
    });
    setTimeout(() => setCopiedWallet(null), 2000);
  };

  return (
    <section id="donate" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-800 text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Поддержать проект</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Выберите удобный способ пожертвования
          </p>
        </div>

        <div className="mb-10">
          <p className="text-center text-sm text-muted-foreground mb-4">Выберите сумму (USD)</p>
          <div className="flex flex-wrap justify-center gap-3">
            {AMOUNTS.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "default" : "outline"}
                className={`font-heading font-semibold text-lg px-6 py-5 transition-all duration-300 ${
                  selectedAmount === amount
                    ? "bg-gradient-to-r from-primary to-accent text-white glow-purple"
                    : "border-border/50 bg-card/50 hover:bg-card text-foreground"
                }`}
                onClick={() => setSelectedAmount(amount)}
              >
                ${amount}
              </Button>
            ))}
            <Button
              variant={selectedAmount === -1 ? "default" : "outline"}
              className={`font-heading font-semibold text-lg px-6 py-5 transition-all duration-300 ${
                selectedAmount === -1
                  ? "bg-gradient-to-r from-primary to-accent text-white glow-purple"
                  : "border-border/50 bg-card/50 hover:bg-card text-foreground"
              }`}
              onClick={() => setSelectedAmount(-1)}
            >
              Другая
            </Button>
          </div>
        </div>

        <Tabs defaultValue="tron" className="w-full">
          <TabsList className="grid grid-cols-2 bg-card/50 border border-border/30 p-1 mb-6 h-auto">
            {Object.entries(WALLETS).map(([key, wallet]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="font-heading font-semibold py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white transition-all"
              >
                <span className="mr-2">{wallet.symbol}</span>
                {wallet.name.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(WALLETS).map(([key, wallet]) => (
            <TabsContent key={key} value={key}>
              <Card className={`gradient-border p-8 bg-card/80 backdrop-blur-sm`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${wallet.color} flex items-center justify-center mb-6 animate-float`}>
                    <Icon name={wallet.icon} size={36} className="text-white" fallback="Coins" />
                  </div>

                  <h3 className="font-heading font-bold text-2xl mb-2">{wallet.name}</h3>
                  <p className="text-muted-foreground mb-6">
                    {selectedAmount && selectedAmount > 0
                      ? `Отправьте $${selectedAmount} на адрес ниже`
                      : "Скопируйте адрес для перевода"}
                  </p>

                  <div className="w-full max-w-lg bg-muted/50 rounded-xl p-4 flex items-center gap-3 mb-6">
                    <code className="flex-1 text-sm md:text-base break-all text-foreground/80">
                      {wallet.address}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="shrink-0 hover:bg-primary/20"
                      onClick={() => copyAddress(key, wallet.address)}
                    >
                      {copiedWallet === key ? (
                        <Icon name="Check" size={18} className="text-green-400" />
                      ) : (
                        <Icon name="Copy" size={18} />
                      )}
                    </Button>
                  </div>

                  {key === "paypal" && (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">Отправьте на email выше через Friends & Family</p>
                      <a
                        href="https://www.paypal.com/paypalme/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-heading font-semibold px-8 py-5 text-lg hover:opacity-90 transition-all"
                        >
                          <Icon name="ExternalLink" size={18} />
                          Открыть PayPal
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DonateSection;