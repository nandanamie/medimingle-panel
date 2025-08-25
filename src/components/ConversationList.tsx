import { MessageCircle, Phone, Mail, MessageSquare, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

const conversations = [
  {
    id: 1,
    patient: "Maria Silva",
    channel: "whatsapp",
    lastMessage: "Gostaria de remarcar minha consulta para próxima semana",
    time: "2 min",
    unread: 2,
    priority: "high"
  },
  {
    id: 2,
    patient: "João Santos",
    channel: "instagram",
    lastMessage: "Recebi os resultados dos exames, está tudo bem?",
    time: "5 min",
    unread: 1,
    priority: "medium"
  },
  {
    id: 3,
    patient: "Ana Costa",
    channel: "email",
    lastMessage: "Preciso de uma segunda via do relatório médico",
    time: "12 min",
    unread: 0,
    priority: "low"
  },
  {
    id: 4,
    patient: "Pedro Oliveira",
    channel: "facebook",
    lastMessage: "Qual o horário de funcionamento da clínica?",
    time: "18 min",
    unread: 3,
    priority: "medium"
  },
  {
    id: 5,
    patient: "Carla Mendes",
    channel: "whatsapp",
    lastMessage: "Obrigada pelo atendimento de hoje!",
    time: "1h",
    unread: 0,
    priority: "low"
  }
];

const channelIcons = {
  whatsapp: Phone,
  instagram: MessageSquare,
  facebook: MessageCircle,
  email: Mail
};

const priorityColors = {
  high: "border-l-destructive bg-destructive/5",
  medium: "border-l-warning bg-warning/5",
  low: "border-l-muted bg-muted/20"
};

export function ConversationList() {
  return (
    <div className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden">
      <div className="p-4 border-b border-border bg-gradient-card">
        <h3 className="text-lg font-semibold text-foreground">
          Conversas Recentes
        </h3>
        <p className="text-sm text-muted-foreground">
          {conversations.filter(c => c.unread > 0).length} novas mensagens
        </p>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {conversations.map((conversation) => {
          const ChannelIcon = channelIcons[conversation.channel as keyof typeof channelIcons];
          
          return (
            <div
              key={conversation.id}
              className={cn(
                "p-4 border-l-4 border-b border-border/30 hover:bg-secondary/30 cursor-pointer transition-all duration-200",
                priorityColors[conversation.priority as keyof typeof priorityColors],
                conversation.unread > 0 && "bg-primary/5"
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <User className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="text-sm font-medium text-foreground">
                        {conversation.patient}
                      </p>
                      <ChannelIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {conversation.lastMessage}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-1 ml-4">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{conversation.time}</span>
                  </div>
                  
                  {conversation.unread > 0 && (
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-border bg-gradient-card">
        <button className="w-full text-sm text-primary hover:text-primary-glow font-medium transition-colors">
          Ver todas as conversas →
        </button>
      </div>
    </div>
  );
}