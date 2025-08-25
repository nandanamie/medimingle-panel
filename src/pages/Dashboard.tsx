import { 
  MessageCircle, 
  Users, 
  Clock, 
  TrendingUp,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Activity
} from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { ConversationList } from "@/components/ConversationList";
import { AttendantStatus } from "@/components/AttendantStatus";

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-primary p-6 shadow-soft">
        <h1 className="text-2xl font-bold text-primary-foreground mb-2">
          Dashboard - Sistema Omnichannel
        </h1>
        <p className="text-primary-foreground/80">
          Visão geral dos atendimentos em tempo real
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Conversas Ativas"
            value="42"
            change="+12% hoje"
            changeType="positive"
            icon={MessageCircle}
            gradient
          />
          <MetricCard
            title="Tempo Médio de Resposta"
            value="2.8min"
            change="-18% hoje"
            changeType="positive"
            icon={Clock}
          />
          <MetricCard
            title="Atendentes Online"
            value="8/12"
            change="2 em pausa"
            changeType="neutral"
            icon={Users}
          />
          <MetricCard
            title="Taxa de Conversão"
            value="74%"
            change="+5% esta semana"
            changeType="positive"
            icon={TrendingUp}
          />
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Consultas Agendadas Hoje"
            value="156"
            change="+23 que ontem"
            changeType="positive"
            icon={Calendar}
          />
          <MetricCard
            title="Casos Resolvidos"
            value="89%"
            change="Meta: 85%"
            changeType="positive"
            icon={CheckCircle2}
          />
          <MetricCard
            title="Chamadas Perdidas"
            value="7"
            change="-3 que ontem"
            changeType="positive"
            icon={AlertTriangle}
          />
          <MetricCard
            title="NPS Médio"
            value="8.6/10"
            change="+0.3 este mês"
            changeType="positive"
            icon={Activity}
          />
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ConversationList />
          <AttendantStatus />
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl shadow-soft border border-border/50 p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Ações Rápidas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center space-x-2 p-4 rounded-lg bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              <MessageCircle className="h-5 w-5" />
              <span>Nova Conversa</span>
            </button>
            <button className="flex items-center justify-center space-x-2 p-4 rounded-lg bg-gradient-success text-accent-foreground hover:opacity-90 transition-opacity">
              <Calendar className="h-5 w-5" />
              <span>Agendar Consulta</span>
            </button>
            <button className="flex items-center justify-center space-x-2 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
              <Activity className="h-5 w-5" />
              <span>Ver Relatórios</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}