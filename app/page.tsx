import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">
                Jose Esau Martinez Contreras
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Desarrollador Web
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:martinez117esau@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  martinez117esau@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>871 138 2101</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Saltillo, México</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Mexicana</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        {/* Objective Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
            Objetivo
          </h2>
          <p className="text-foreground leading-relaxed">
            Unirme a un equipo en el que pueda poner en práctica los
            conocimientos adquiridos durante mi tiempo de formación, crecer en
            experiencia y desarrollarme personal y profesionalmente dentro de
            una empresa que ofrezca oportunidades en función de mi desempeño,
            logros y aportaciones.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
            Experiencia Laboral
          </h2>

          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    TSM Connect
                  </h3>
                  <p className="text-muted-foreground">Saltillo</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">jun 2018 — Presente</span>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">
                Desarrollo de un sistema web de logística en el cual se
                implementó C# para el consumo de una base de datos con el motor
                SQL server, también se creó un API escrita en NodeJs para el
                consumo de un servicio de GPS y envío de datos en tiempo real y
                se usó Angular para el front-end y Bootstrap 4 para el diseño de
                las vistas.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">CFE</h3>
                  <p className="text-muted-foreground">Gómez Palacio</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">ago 2016 — dic 2016</span>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">
                Desarrollo de un sistema web en tiempo real para la supervisión
                de trabajo de los ejecutivos de la CFE en el cual se utilizaron
                las tecnologías como NodeJs para el back-end y jQuery para el
                front-end con la base de datos MongoDB y para el diseño de las
                vistas se usó el framework de diseño Bootstrap 4.
              </p>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
            Competencias Técnicas
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  C#
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  PHP
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  ASP.NET Core
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Python
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">
                  Vue
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  React
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  jQuery
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  HTML/CSS
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Bootstrap
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Tailwind
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Bases de Datos
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">
                  SQL Server
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  MySQL
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Herramientas & Otros
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">
                  Git
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Ubuntu
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Ionos
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
            Formación
          </h2>

          <Card className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  ITS Saltillo
                </h3>
                <p className="text-muted-foreground">
                  Ingeniería en Sistemas Computacionales
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">ago 2011 — jun 2016</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
            Proyectos
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Sistema de Venta de Alimentos
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Interfaz de usuario para un sistema de pedidos en tiempo real y
                administración de productos, enfocada en experiencia móvil,
                flujo de compra (carrito y pago) y panel de administración para
                gestionar áreas, artículos y promociones.
                <br />
              </p>
              <a href="https://1800-market.com" className="text-blue-400">
                1800 Market
              </a>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Vue 3</Badge>
                <Badge variant="secondary">Vite</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">TailwindCSS</Badge>
                <Badge variant="secondary">Ionos vps linux</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Mi portal idea
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Aplicación web de gestión interna para empleados, cursos y
                recursos empresariales, desarrollada con Vue 3 y TypeScript.
                <br />
                Desarrollé Mi Portal, una SPA de gestión interna que centraliza
                empleados, cursos, órdenes y configuración empresarial.
                Implementé autenticación y control de acceso, UI modular y
                consumo de API REST, usando Vue 3, TypeScript, Vite y
                TailwindCSS para una interfaz responsiva y mantenible.
              </p>
              <a
                href="https://mi-portal-idea-front.vercel.app/"
                className="text-blue-400"
              >
                Mi portal idea
              </a>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Vue 3</Badge>
                <Badge variant="secondary">Vite</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">TailwindCSS</Badge>
                <Badge variant="secondary">Vercel</Badge>
                <Badge variant="secondary">Ionos vps linux</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Sistema de rifas para eventos sociales
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Desarrollé un sistema de rifas en tiempo real para eventos
                (posadas) usando Vue 3, TypeScript, Vite y Firebase, gestión de
                empleados, selección automática de ganadores y entrega de
                premios. Incluye actualizaciones en tiempo real y lector de QR.
              </p>
              <a
                href="https://posada-cdmx.vercel.app/"
                className="text-blue-400"
              >
                Rifa
              </a>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Vue 3</Badge>
                <Badge variant="secondary">Vite</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">TailwindCSS</Badge>
                <Badge variant="secondary">Vercel</Badge>
                <Badge variant="secondary">Ionos vps linux</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Nginx</Badge>
                <Badge variant="secondary">Socket.io</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Sistema fila operadores
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Desarrollé la interfaz y la lógica frontend usando Vue 3, Vite y
                Pinia. Implementé comunicación en tiempo real con
                socket.io-client para actualizar turnos y estados de operadores
                instantáneamente. Integré un SDK de reconocimiento biométrico
                (huella) para autenticación de operadores. Preparé despliegue
                continuo y hosting con Firebase.
              </p>
              <a
                href="https://posada-cdmx.vercel.app/"
                className="text-blue-400"
              >
                Rifa
              </a>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Vue 3</Badge>
                <Badge variant="secondary">Vite</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">Socket.io</Badge>
                <Badge variant="secondary">Firebase</Badge>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Api de timbrado de carta porte
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                API backend que automatiza la generación y gestión de timbres
                para Carta Porte v3: construye la estructura fiscal (conceptos,
                ubicaciones, mercancías), valida y transforma datos, persiste
                timbres y gestiona cancelaciones.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">Express.js</Badge>
              </div>
            </Card>
          </div>
        </section>

        {/* Languages & Interests */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
              Idiomas
            </h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-foreground">Español</span>
                <Badge className="bg-primary text-primary-foreground">
                  Nativo
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Inglés</span>
                <Badge variant="secondary">Basico</Badge>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
              Intereses
            </h2>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Machine Learning & Inteligencia Artificial</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Realidad Virtual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Fútbol & Videojuegos</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
