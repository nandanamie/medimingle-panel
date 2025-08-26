import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  Clock, 
  MessageCircle, 
  CheckCircle, 
  Star,
  Edit,
  Settings,
  Activity,
  Calendar,
  Award
} from "lucide-react";

// Dados mockados do atendente
const attendantData = {
  id: "ATD001",
  name: "Ana Carolina Santos",
  email: "ana.santos@medicenter.com.br",
  phone: "(11) 99999-9999",
  role: "Atendente Senior",
  department: "Central de Atendimento",
  status: "online",
  avatar: "",
  joinDate: "2022-03-15",
  shift: "08:00 - 17:00",
  specialties: ["Cardiologia", "Neurologia", "Ortopedia"],
  stats: {
    totalChats: 1247,
    avgResponseTime: "2.3 min",
    resolutionRate: 94.2,
    satisfaction: 4.8,
    todayChats: 23,
    activeChats: 5
  },
  recentActivity: [
    { time: "14:30", action: "Finalizou atendimento", patient: "Maria Silva", type: "whatsapp" },
    { time: "14:15", action: "Agendou consulta", patient: "João Santos", type: "instagram" },
    { time: "13:45", action: "Respondeu dúvida", patient: "Ana Costa", type: "email" },
    { time: "13:20", action: "Transferiu para especialista", patient: "Pedro Lima", type: "facebook" }
  ]
};

const statusConfig = {
  online: { color: "bg-accent", label: "Online" },
  away: { color: "bg-warning", label: "Ausente" },
  offline: { color: "bg-muted", label: "Offline" }
};

export default function PerfilAtendente() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Meu Perfil</h1>
          <p className="text-muted-foreground">Gerencie suas informações e acompanhe seu desempenho</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Edit className="h-4 w-4" />
          Editar Perfil
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Perfil Principal */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={attendantData.avatar} />
                  <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
                    {attendantData.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className={`absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-background ${statusConfig[attendantData.status as keyof typeof statusConfig].color}`}>
                  <div className="h-full w-full rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            <CardTitle className="text-xl">{attendantData.name}</CardTitle>
            <CardDescription className="text-center">
              {attendantData.role} • {attendantData.department}
            </CardDescription>
            <Badge variant="secondary" className="w-fit mx-auto">
              {statusConfig[attendantData.status as keyof typeof statusConfig].label}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{attendantData.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{attendantData.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Turno: {attendantData.shift}</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">ID: {attendantData.id}</span>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-2">Especialidades</h4>
              <div className="flex flex-wrap gap-1">
                {attendantData.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            <Button className="w-full gap-2">
              <Settings className="h-4 w-4" />
              Configurações
            </Button>
          </CardContent>
        </Card>

        {/* Estatísticas e Atividades */}
        <div className="lg:col-span-2 space-y-6">
          {/* Estatísticas do Dia */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{attendantData.stats.activeChats}</p>
                    <p className="text-xs text-muted-foreground">Chats Ativos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Activity className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{attendantData.stats.todayChats}</p>
                    <p className="text-xs text-muted-foreground">Hoje</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Clock className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{attendantData.stats.avgResponseTime}</p>
                    <p className="text-xs text-muted-foreground">Tempo Médio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Desempenho Geral */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Desempenho Geral
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {attendantData.stats.totalChats}
                  </div>
                  <p className="text-sm text-muted-foreground">Total de Atendimentos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {attendantData.stats.resolutionRate}%
                  </div>
                  <p className="text-sm text-muted-foreground">Taxa de Resolução</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-3xl font-bold text-warning">{attendantData.stats.satisfaction}</span>
                    <Star className="h-6 w-6 text-warning fill-warning" />
                  </div>
                  <p className="text-sm text-muted-foreground">Satisfação Média</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Atividade Recente */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Atividade Recente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {attendantData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-sm text-muted-foreground font-mono">
                      {activity.time}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        Paciente: {activity.patient}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}