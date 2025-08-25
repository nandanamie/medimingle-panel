import { BarChart3, TrendingUp, Calendar, Download, Filter, MessageCircle, Clock, Users, CheckCircle, Star } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";

export default function Relatorios() {
  return (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-primary p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary-foreground mb-2">
              Relatórios e Analytics
            </h1>
            <p className="text-primary-foreground/80">
              Análise completa do desempenho do atendimento
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-lg transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filtros</span>
            </button>
            <button className="flex items-center space-x-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-lg transition-colors">
              <Download className="h-4 w-4" />
              <span>Exportar</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Period Selector */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Período:</span>
            </div>
            <select className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background">
              <option>Últimos 7 dias</option>
              <option>Últimos 30 dias</option>
              <option>Últimos 3 meses</option>
              <option>Este ano</option>
            </select>
          </div>
        </div>

        {/* Main KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total de Conversas"
            value="1,847"
            change="+23% vs período anterior"
            changeType="positive"
            icon={MessageCircle}
            gradient
          />
          <MetricCard
            title="Tempo Médio de Resposta"
            value="2.4min"
            change="-15% vs período anterior"
            changeType="positive"
            icon={Clock}
          />
          <MetricCard
            title="Taxa de Resolução"
            value="89.5%"
            change="+4.2% vs período anterior"
            changeType="positive"
            icon={CheckCircle}
          />
          <MetricCard
            title="Satisfação Média"
            value="4.7/5"
            change="+0.3 vs período anterior"
            changeType="positive"
            icon={Star}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Conversations by Channel */}
          <div className="bg-card rounded-xl shadow-soft border border-border/50 p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Conversas por Canal
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-primary rounded"></div>
                  <span className="text-sm text-foreground">WhatsApp</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-foreground">1,247</span>
                  <p className="text-xs text-muted-foreground">67.5%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-accent rounded"></div>
                  <span className="text-sm text-foreground">Instagram</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-foreground">324</span>
                  <p className="text-xs text-muted-foreground">17.5%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-warning rounded"></div>
                  <span className="text-sm text-foreground">Facebook</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-foreground">186</span>
                  <p className="text-xs text-muted-foreground">10.1%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-muted rounded"></div>
                  <span className="text-sm text-foreground">Email</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-foreground">90</span>
                  <p className="text-xs text-muted-foreground">4.9%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time Trends */}
          <div className="bg-card rounded-xl shadow-soft border border-border/50 p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Evolução do Tempo de Resposta
            </h3>
            <div className="h-64 flex items-center justify-center bg-secondary/10 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Gráfico de tendência de tempo de resposta
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Performing Attendants */}
          <div className="bg-card rounded-xl shadow-soft border border-border/50">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">
                Top Atendentes (Este Mês)
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { name: "Carlos Mendes", resolved: 623, satisfaction: 4.9, responseTime: "1.8 min" },
                  { name: "Ana Beatriz", resolved: 598, satisfaction: 4.7, responseTime: "2.1 min" },
                  { name: "Beatriz Santos", resolved: 456, satisfaction: 4.3, responseTime: "3.8 min" }
                ].map((attendant, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary-foreground">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{attendant.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {attendant.resolved} casos • {attendant.satisfaction}/5 ⭐
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{attendant.responseTime}</p>
                      <p className="text-xs text-muted-foreground">Tempo médio</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Peak Hours */}
          <div className="bg-card rounded-xl shadow-soft border border-border/50">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">
                Horários de Pico
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { hour: "09:00 - 10:00", messages: 234, percentage: 85 },
                  { hour: "14:00 - 15:00", messages: 198, percentage: 72 },
                  { hour: "16:00 - 17:00", messages: 187, percentage: 68 },
                  { hour: "11:00 - 12:00", messages: 156, percentage: 57 },
                  { hour: "13:00 - 14:00", messages: 142, percentage: 52 }
                ].map((peak, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{peak.hour}</span>
                      <span className="text-sm text-muted-foreground">{peak.messages} msgs</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${peak.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl shadow-soft border border-border/50 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Conversões</h3>
                <p className="text-sm text-muted-foreground">Consultas agendadas</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-foreground">1,247</p>
              <p className="text-sm text-accent">+18% vs mês anterior</p>
              <p className="text-xs text-muted-foreground">
                Taxa de conversão: 67.5%
              </p>
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-soft border border-border/50 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Pacientes Ativos</h3>
                <p className="text-sm text-muted-foreground">Únicos este mês</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-foreground">923</p>
              <p className="text-sm text-accent">+12% vs mês anterior</p>
              <p className="text-xs text-muted-foreground">
                267 novos pacientes
              </p>
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-soft border border-border/50 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-warning/10 rounded-full">
                <Clock className="h-6 w-6 text-warning" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">SLA</h3>
                <p className="text-sm text-muted-foreground">Cumprimento de meta</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-foreground">94.2%</p>
              <p className="text-sm text-accent">+2.1% vs mês anterior</p>
              <p className="text-xs text-muted-foreground">
                Meta: 90% em 3min
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}