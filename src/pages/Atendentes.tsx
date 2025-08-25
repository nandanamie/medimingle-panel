import { Users, Search, Plus, Edit, Trash2, MessageCircle, Clock, CheckCircle, Activity } from "lucide-react";

const attendants = [
  {
    id: 1,
    name: "Ana Beatriz Silva",
    email: "ana.beatriz@medicenter.com",
    role: "Atendente Senior",
    status: "online",
    activeChats: 5,
    todayStats: {
      messages: 143,
      avgResponse: "2.3 min",
      resolved: 28,
      satisfaction: 4.8
    },
    monthStats: {
      totalChats: 847,
      avgResponse: "2.1 min",
      resolved: 623,
      satisfaction: 4.7
    }
  },
  {
    id: 2,
    name: "Carlos Mendes",
    email: "carlos.mendes@medicenter.com",
    role: "Atendente",
    status: "online",
    activeChats: 3,
    todayStats: {
      messages: 98,
      avgResponse: "1.8 min",
      resolved: 31,
      satisfaction: 4.9
    },
    monthStats: {
      totalChats: 567,
      avgResponse: "1.9 min",
      resolved: 441,
      satisfaction: 4.8
    }
  },
  {
    id: 3,
    name: "Beatriz Santos",
    email: "beatriz.santos@medicenter.com",
    role: "Atendente",
    status: "away",
    activeChats: 2,
    todayStats: {
      messages: 76,
      avgResponse: "4.1 min",
      resolved: 19,
      satisfaction: 4.2
    },
    monthStats: {
      totalChats: 423,
      avgResponse: "3.8 min",
      resolved: 298,
      satisfaction: 4.3
    }
  }
];

const statusConfig = {
  online: { color: "text-accent", bg: "bg-accent", label: "Online" },
  away: { color: "text-warning", bg: "bg-warning", label: "Ausente" },
  offline: { color: "text-muted-foreground", bg: "bg-muted", label: "Offline" }
};

export default function Atendentes() {
  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-primary p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary-foreground mb-2">
              Gerenciamento de Atendentes
            </h1>
            <p className="text-primary-foreground/80">
              Monitore e gerencie sua equipe de atendimento
            </p>
          </div>
          <button className="flex items-center space-x-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-lg transition-colors">
            <Plus className="h-4 w-4" />
            <span>Novo Atendente</span>
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Search and Filters */}
        <div className="flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar atendentes..."
              className="pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
            />
          </div>
          <div className="flex items-center space-x-2">
            <select className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background">
              <option>Todos os status</option>
              <option>Online</option>
              <option>Ausente</option>
              <option>Offline</option>
            </select>
          </div>
        </div>

        {/* Attendants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {attendants.map((attendant) => {
            const statusInfo = statusConfig[attendant.status as keyof typeof statusConfig];
            
            return (
              <div key={attendant.id} className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden">
                {/* Header */}
                <div className="p-4 bg-gradient-card border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                          <span className="text-lg font-medium text-primary-foreground">
                            {attendant.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className={`absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-card ${statusInfo.bg}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{attendant.name}</h3>
                        <p className="text-sm text-muted-foreground">{attendant.role}</p>
                        <p className={`text-xs font-medium ${statusInfo.color}`}>
                          {statusInfo.label}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <button className="p-1 hover:bg-secondary rounded transition-colors">
                        <Edit className="h-4 w-4 text-muted-foreground" />
                      </button>
                      <button className="p-1 hover:bg-destructive/10 rounded transition-colors">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Current Status */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">Status Atual</span>
                    <span className="text-lg font-bold text-primary">
                      {attendant.activeChats} chats ativos
                    </span>
                  </div>

                  {/* Today Stats */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-foreground">Hoje</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 bg-secondary/30 rounded-lg">
                        <MessageCircle className="h-4 w-4 text-primary mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Mensagens</p>
                        <p className="text-sm font-semibold text-foreground">
                          {attendant.todayStats.messages}
                        </p>
                      </div>
                      <div className="text-center p-2 bg-secondary/30 rounded-lg">
                        <Clock className="h-4 w-4 text-warning mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Resp. Média</p>
                        <p className="text-sm font-semibold text-foreground">
                          {attendant.todayStats.avgResponse}
                        </p>
                      </div>
                      <div className="text-center p-2 bg-secondary/30 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-accent mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Resolvidos</p>
                        <p className="text-sm font-semibold text-foreground">
                          {attendant.todayStats.resolved}
                        </p>
                      </div>
                      <div className="text-center p-2 bg-secondary/30 rounded-lg">
                        <Activity className="h-4 w-4 text-primary mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Satisfação</p>
                        <p className="text-sm font-semibold text-foreground">
                          {attendant.todayStats.satisfaction}/5
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Monthly Performance */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="text-sm font-medium text-foreground mb-2">Este Mês</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Total de Chats:</span>
                        <span className="font-medium text-foreground">
                          {attendant.monthStats.totalChats}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Taxa de Resolução:</span>
                        <span className="font-medium text-accent">
                          {Math.round((attendant.monthStats.resolved / attendant.monthStats.totalChats) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card rounded-xl shadow-soft border border-border/50 p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Atendentes</p>
                <p className="text-2xl font-bold text-foreground">{attendants.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl shadow-soft border border-border/50 p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-accent/10 rounded-full">
                <Activity className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Online Agora</p>
                <p className="text-2xl font-bold text-foreground">{attendants.filter(a => a.status === 'online').length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl shadow-soft border border-border/50 p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Chats Ativos</p>
                <p className="text-2xl font-bold text-foreground">
                  {attendants.reduce((sum, a) => sum + a.activeChats, 0)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl shadow-soft border border-border/50 p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-accent/10 rounded-full">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Média Satisfação</p>
                <p className="text-2xl font-bold text-foreground">
                  {(attendants.reduce((sum, a) => sum + a.todayStats.satisfaction, 0) / attendants.length).toFixed(1)}/5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}