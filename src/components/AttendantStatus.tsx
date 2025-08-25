import { User, Clock, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const attendants = [
  {
    id: 1,
    name: "Ana Beatriz",
    status: "online",
    activeChats: 5,
    avgResponseTime: "2.3 min",
    todayResolved: 28,
    efficiency: 94
  },
  {
    id: 2,
    name: "Carlos Mendes",
    status: "online",
    activeChats: 3,
    avgResponseTime: "1.8 min",
    todayResolved: 31,
    efficiency: 97
  },
  {
    id: 3,
    name: "Beatriz Santos",
    status: "away",
    activeChats: 2,
    avgResponseTime: "4.1 min",
    todayResolved: 19,
    efficiency: 89
  },
  {
    id: 4,
    name: "Daniel Costa",
    status: "offline",
    activeChats: 0,
    avgResponseTime: "3.2 min",
    todayResolved: 24,
    efficiency: 91
  }
];

const statusConfig = {
  online: { color: "text-accent", bg: "bg-accent", label: "Online" },
  away: { color: "text-warning", bg: "bg-warning", label: "Ausente" },
  offline: { color: "text-muted-foreground", bg: "bg-muted", label: "Offline" }
};

export function AttendantStatus() {
  return (
    <div className="bg-card rounded-xl shadow-soft border border-border/50">
      <div className="p-4 border-b border-border bg-gradient-card">
        <h3 className="text-lg font-semibold text-foreground">
          Status dos Atendentes
        </h3>
        <p className="text-sm text-muted-foreground">
          {attendants.filter(a => a.status === 'online').length} online • {attendants.filter(a => a.status === 'away').length} ausente
        </p>
      </div>
      
      <div className="p-4 space-y-4">
        {attendants.map((attendant) => {
          const statusInfo = statusConfig[attendant.status as keyof typeof statusConfig];
          
          return (
            <div
              key={attendant.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className={cn(
                    "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card",
                    statusInfo.bg
                  )} />
                </div>
                
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {attendant.name}
                  </p>
                  <p className={cn("text-xs", statusInfo.color)}>
                    {statusInfo.label}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-3 w-3" />
                  <span>{attendant.activeChats}</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{attendant.avgResponseTime}</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-3 w-3" />
                  <span>{attendant.todayResolved}</span>
                </div>
                
                <div className={cn(
                  "flex items-center space-x-1 font-medium",
                  attendant.efficiency >= 95 ? "text-accent" : 
                  attendant.efficiency >= 90 ? "text-warning" : "text-destructive"
                )}>
                  <AlertCircle className="h-3 w-3" />
                  <span>{attendant.efficiency}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}