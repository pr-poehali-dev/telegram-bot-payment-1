import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const stats = [
  { label: "Поддержали", value: "1,247", icon: "Users" as const },
  { label: "Собрано", value: "$12,580", icon: "TrendingUp" as const },
  { label: "Проектов", value: "8", icon: "Folder" as const },
];

const ProfileSection = () => {
  return (
    <section id="profile" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="gradient-border p-8 md:p-12 bg-card/80 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 glow-purple">
              <Icon name="User" size={48} className="text-white" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h3 className="font-heading font-bold text-2xl">Автор проекта</h3>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  <Icon name="BadgeCheck" size={14} />
                  Верифицирован
                </Badge>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Создатель открытых проектов и контента. Каждый донат помогает развивать
                новые идеи и делать мир лучше. Спасибо за вашу поддержку! 🚀
              </p>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-muted/30">
                    <Icon name={stat.icon} size={20} className="mx-auto mb-2 text-primary" />
                    <div className="font-heading font-bold text-xl">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProfileSection;
