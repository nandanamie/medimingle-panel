import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  FileText, 
  Clock,
  MessageCircle,
  Heart,
  Activity,
  Star,
  Edit,
  Download
} from "lucide-react";

// Dados mockados do cliente/paciente
const patientData = {
  id: "PAC001234",
  name: "Maria Santos Silva",
  email: "maria.santos@email.com",
  phone: "(11) 98765-4321",
  birthDate: "1985-06-15",
  age: 38,
  cpf: "123.456.789-00",
  address: "Rua das Flores, 123 - Vila Madalena, São Paulo - SP",
  avatar: "",
  registrationDate: "2023-01-10",
  preferredChannel: "WhatsApp",
  healthPlan: "Unimed Básico",
  emergencyContact: {
    name: "João Silva Santos",
    relationship: "Cônjuge",
    phone: "(11) 99876-5432"
  },
  stats: {
    totalAppointments: 18,
    completedAppointments: 16,
    canceledAppointments: 2,
    avgSatisfaction: 4.9,
    lastVisit: "2024-01-15"
  },
  recentHistory: [
    { 
      date: "2024-01-15", 
      type: "Consulta", 
      specialty: "Cardiologia", 
      doctor: "Dr. Roberto Silva", 
      status: "Concluída",
      rating: 5 
    },
    { 
      date: "2023-12-20", 
      type: "Exame", 
      specialty: "Laboratório", 
      doctor: "Exames de Rotina", 
      status: "Concluída",
      rating: 5 
    },
    { 
      date: "2023-11-10", 
      type: "Consulta", 
      specialty: "Clínico Geral", 
      doctor: "Dra. Ana Costa", 
      status: "Concluída",
      rating: 4 
    },
    { 
      date: "2023-10-05", 
      type: "Consulta", 
      specialty: "Cardiologia", 
      doctor: "Dr. Roberto Silva", 
      status: "Cancelada",
      rating: null 
    }
  ],
  conversations: [
    { 
      date: "2024-01-20", 
      channel: "WhatsApp", 
      subject: "Agendamento de retorno", 
      status: "Resolvida",
      attendant: "Ana Carolina"
    },
    { 
      date: "2024-01-10", 
      channel: "Email", 
      subject: "Dúvida sobre exames", 
      status: "Resolvida",
      attendant: "Carlos Silva"
    },
    { 
      date: "2023-12-15", 
      channel: "Instagram", 
      subject: "Horário de funcionamento", 
      status: "Resolvida",
      attendant: "Ana Carolina"
    }
  ]
};

const channelColors = {
  WhatsApp: "bg-green-500",
  Email: "bg-blue-500",
  Instagram: "bg-pink-500",
  Facebook: "bg-blue-600"
};

export default function PerfilCliente() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Perfil do Paciente</h1>
          <p className="text-muted-foreground">Informações completas e histórico médico</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar Dados
          </Button>
          <Button variant="outline" className="gap-2">
            <Edit className="h-4 w-4" />
            Editar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Perfil Principal */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={patientData.avatar} />
                <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
                  {patientData.name.split(" ").map(n => n[0]).join("").slice(0,2)}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl">{patientData.name}</CardTitle>
            <CardDescription className="text-center">
              {patientData.age} anos • Paciente desde {new Date(patientData.registrationDate).toLocaleDateString('pt-BR')}
            </CardDescription>
            <Badge variant="secondary" className="w-fit mx-auto">
              ID: {patientData.id}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{patientData.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{patientData.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Nascimento: {new Date(patientData.birthDate).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">CPF: {patientData.cpf}</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Plano: {patientData.healthPlan}</span>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-2">Endereço</h4>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">{patientData.address}</span>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">Contato de Emergência</h4>
              <div className="space-y-2">
                <p className="text-sm font-medium">{patientData.emergencyContact.name}</p>
                <p className="text-xs text-muted-foreground">{patientData.emergencyContact.relationship}</p>
                <p className="text-sm">{patientData.emergencyContact.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas e Histórico */}
        <div className="lg:col-span-2 space-y-6">
          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{patientData.stats.totalAppointments}</p>
                    <p className="text-xs text-muted-foreground">Total Consultas</p>
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
                    <p className="text-2xl font-bold">{patientData.stats.completedAppointments}</p>
                    <p className="text-xs text-muted-foreground">Concluídas</p>
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
                    <p className="text-2xl font-bold">{patientData.stats.canceledAppointments}</p>
                    <p className="text-xs text-muted-foreground">Canceladas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{patientData.stats.avgSatisfaction}</p>
                    <p className="text-xs text-muted-foreground">Satisfação</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Histórico de Consultas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Histórico de Consultas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {patientData.recentHistory.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-mono text-muted-foreground">
                        {new Date(appointment.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div>
                        <p className="font-medium">{appointment.type} - {appointment.specialty}</p>
                        <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {appointment.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm">{appointment.rating}</span>
                        </div>
                      )}
                      <Badge 
                        variant={appointment.status === "Concluída" ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {appointment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Histórico de Conversas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Histórico de Conversas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {patientData.conversations.map((conversation, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${channelColors[conversation.channel as keyof typeof channelColors]}`} />
                      <div>
                        <p className="font-medium">{conversation.subject}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(conversation.date).toLocaleDateString('pt-BR')} • Atendente: {conversation.attendant}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        {conversation.channel}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {conversation.status}
                      </Badge>
                    </div>
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