import { 
  LayoutDashboard, 
  MessageCircle, 
  Users, 
  BarChart3, 
  Settings, 
  Calendar,
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Conversas", href: "/conversas", icon: MessageCircle },
  { name: "Atendentes", href: "/atendentes", icon: Users },
  { name: "Relatórios", href: "/relatorios", icon: BarChart3 },
  { name: "Agenda", href: "/agenda", icon: Calendar },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
];

const channels = [
  { name: "WhatsApp", icon: Phone, status: "online", count: 12 },
  { name: "Instagram", icon: MessageSquare, status: "online", count: 8 },
  { name: "Facebook", icon: MessageCircle, status: "online", count: 5 },
  { name: "Email", icon: Mail, status: "online", count: 3 },
];

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-gradient-card border-r border-border shadow-soft">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-border bg-gradient-primary">
        <h1 className="text-xl font-bold text-primary-foreground">
          MediCenter Pro
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        <div className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-secondary/50",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground hover:text-primary"
                )
              }
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Channels Section */}
        <div className="mt-8">
          <h3 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Canais Ativos
          </h3>
          <div className="space-y-1">
            {channels.map((channel) => (
              <div
                key={channel.name}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center">
                  <channel.icon className="mr-3 h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{channel.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    {channel.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* User Profile */}
      <div className="border-t border-border p-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-sm font-medium text-primary-foreground">DR</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              Dr. Roberto Silva
            </p>
            <p className="text-xs text-muted-foreground">
              Gerente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}