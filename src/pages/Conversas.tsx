import { MessageCircle, Phone, Search, Filter, User, Send, Paperclip, Smile } from "lucide-react";
import { useState } from "react";

const conversations = [
  {
    id: 1,
    patient: "Maria Silva",
    channel: "whatsapp",
    status: "active",
    lastMessage: "Gostaria de remarcar minha consulta para próxima semana",
    time: "14:32",
    messages: [
      { id: 1, sender: "patient", text: "Boa tarde! Gostaria de remarcar minha consulta", time: "14:30" },
      { id: 2, sender: "attendant", text: "Boa tarde, Maria! Claro, posso ajudar. Para quando gostaria de remarcar?", time: "14:31" },
      { id: 3, sender: "patient", text: "Gostaria de remarcar minha consulta para próxima semana", time: "14:32" }
    ]
  },
  {
    id: 2,
    patient: "João Santos",
    channel: "instagram",
    status: "waiting",
    lastMessage: "Recebi os resultados dos exames",
    time: "14:27",
    messages: [
      { id: 1, sender: "patient", text: "Oi! Recebi os resultados dos exames, está tudo bem?", time: "14:27" }
    ]
  }
];

export default function Conversas() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="flex-1 flex h-full">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-primary p-4 shadow-soft z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary-foreground">
            Central de Conversas
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary-foreground/60" />
              <input
                type="text"
                placeholder="Buscar conversas..."
                className="pl-10 pr-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
            </div>
            <button className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
              <Filter className="h-4 w-4 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 pt-20">
        {/* Conversation List */}
        <div className="w-80 bg-card border-r border-border shadow-soft">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Conversas Ativas</h3>
              <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                {conversations.length}
              </span>
            </div>
          </div>
          
          <div className="overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-4 border-b border-border cursor-pointer transition-colors hover:bg-secondary/30 ${
                  selectedConversation.id === conversation.id ? 'bg-primary/10' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-foreground">
                        {conversation.patient}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {conversation.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.lastMessage}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        conversation.channel === 'whatsapp' ? 'bg-accent/10 text-accent' :
                        conversation.channel === 'instagram' ? 'bg-primary/10 text-primary' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {conversation.channel}
                      </span>
                      <span className={`inline-flex h-2 w-2 rounded-full ${
                        conversation.status === 'active' ? 'bg-accent animate-pulse' :
                        conversation.status === 'waiting' ? 'bg-warning' : 'bg-muted'
                      }`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border bg-gradient-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <User className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {selectedConversation.patient}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Via {selectedConversation.channel}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <MessageCircle className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/10">
            {selectedConversation.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'attendant' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'attendant'
                      ? 'bg-gradient-primary text-primary-foreground'
                      : 'bg-card border border-border text-foreground'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'attendant' 
                      ? 'text-primary-foreground/70' 
                      : 'text-muted-foreground'
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Paperclip className="h-4 w-4 text-muted-foreground" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="w-full px-4 py-2 pr-10 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-secondary rounded transition-colors">
                  <Smile className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <button className="p-2 bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}