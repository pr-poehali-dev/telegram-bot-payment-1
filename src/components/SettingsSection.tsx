import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const SettingsSection = () => {
  const [notifications, setNotifications] = useState(true);
  const [anonymous, setAnonymous] = useState(false);
  const [autoConvert, setAutoConvert] = useState(true);

  return (
    <section id="settings" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-800 text-4xl md:text-5xl mb-4">
            <span className="gradient-text">Settings</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Customize your experience
          </p>
        </div>

        <div className="space-y-4">
          <Card className="gradient-border p-6 bg-card/80 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon name="Bell" size={20} className="text-primary" />
                </div>
                <div>
                  <Label className="font-heading font-semibold text-base">Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications about new donations</p>
                </div>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
          </Card>

          <Card className="gradient-border p-6 bg-card/80 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Icon name="EyeOff" size={20} className="text-accent" />
                </div>
                <div>
                  <Label className="font-heading font-semibold text-base">Anonymous Donations</Label>
                  <p className="text-sm text-muted-foreground">Hide your name when making donations</p>
                </div>
              </div>
              <Switch checked={anonymous} onCheckedChange={setAnonymous} />
            </div>
          </Card>

          <Card className="gradient-border p-6 bg-card/80 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Icon name="RefreshCw" size={20} className="text-secondary" />
                </div>
                <div>
                  <Label className="font-heading font-semibold text-base">Auto-Convert</Label>
                  <p className="text-sm text-muted-foreground">Automatically display amounts in USD</p>
                </div>
              </div>
              <Switch checked={autoConvert} onCheckedChange={setAutoConvert} />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SettingsSection;
