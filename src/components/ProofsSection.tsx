import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const proofs = [
  {
    id: 1,
    type: "TRON TRC-20",
    amount: "$250",
    date: "Feb 15, 2026",
    txHash: "a8f3...e91d",
    status: "Confirmed",
    icon: "Coins" as const,
    color: "from-red-500 to-pink-500",
  },
  {
    id: 2,
    type: "PayPal F&F",
    amount: "$100",
    date: "Feb 12, 2026",
    txHash: "PayPal Receipt #4821",
    status: "Confirmed",
    icon: "CreditCard" as const,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    type: "TRON TRC-20",
    amount: "$75",
    date: "Feb 8, 2026",
    txHash: "c2d7...b4a0",
    status: "Confirmed",
    icon: "Coins" as const,
    color: "from-red-500 to-pink-500",
  },
  {
    id: 4,
    type: "PayPal F&F",
    amount: "$50",
    date: "Feb 3, 2026",
    txHash: "PayPal Receipt #4756",
    status: "Confirmed",
    icon: "CreditCard" as const,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 5,
    type: "TRON TRC-20",
    amount: "$500",
    date: "Jan 28, 2026",
    txHash: "f1e6...39c2",
    status: "Confirmed",
    icon: "Coins" as const,
    color: "from-red-500 to-pink-500",
  },
];

const ProofsSection = () => {
  return (
    <section id="proofs" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-800 text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Payment Proofs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Verified transactions from our generous supporters
          </p>
        </div>

        <div className="mb-8 flex justify-center gap-4">
          <Card className="gradient-border px-6 py-4 bg-card/80 backdrop-blur-sm text-center">
            <div className="font-heading font-bold text-2xl gradient-text">$975+</div>
            <div className="text-xs text-muted-foreground mt-1">Total Received</div>
          </Card>
          <Card className="gradient-border px-6 py-4 bg-card/80 backdrop-blur-sm text-center">
            <div className="font-heading font-bold text-2xl gradient-text">5</div>
            <div className="text-xs text-muted-foreground mt-1">Transactions</div>
          </Card>
          <Card className="gradient-border px-6 py-4 bg-card/80 backdrop-blur-sm text-center">
            <div className="font-heading font-bold text-2xl gradient-text">100%</div>
            <div className="text-xs text-muted-foreground mt-1">Confirmed</div>
          </Card>
        </div>

        <div className="space-y-4">
          {proofs.map((proof) => (
            <Card key={proof.id} className="gradient-border p-5 bg-card/80 backdrop-blur-sm hover:scale-[1.01] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${proof.color} flex items-center justify-center shrink-0`}>
                  <Icon name={proof.icon} size={22} className="text-white" fallback="Coins" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-heading font-semibold">{proof.type}</span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                      <Icon name="Check" size={10} />
                      {proof.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    TX: {proof.txHash}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="font-heading font-bold text-lg">{proof.amount}</div>
                  <div className="text-xs text-muted-foreground">{proof.date}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            All transactions are publicly verifiable on the blockchain.
            Contact us at <a href="mailto:tiktokersq32@gmail.com" className="text-primary hover:underline">tiktokersq32@gmail.com</a> for any questions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofsSection;
