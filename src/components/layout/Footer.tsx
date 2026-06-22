import React from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { Mail, MapPin, Phone } from "lucide-react";

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Logo variant="gold" />
            <p className="text-white/80 text-sm leading-relaxed">
              Especialista em imóveis de alto padrão em Belém e Região Metropolitana. 
              Atendimento personalizado para encontrar o imóvel dos seus sonhos ou fechar o melhor negócio na venda do seu patrimônio.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.instagram.com/daniellecorrea.imoveis/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="https://www.facebook.com/people/Danielle-Corr%C3%AAa-Im%C3%B3veis/61553382076659/?ref=PRODASH_UPSELL_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-heading text-lg tracking-wider uppercase mb-6 text-primary">Navegação</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              <li><Link href="#hero" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">Sobre Mim</Link></li>
              <li><Link href="#properties" className="hover:text-primary transition-colors">Imóveis</Link></li>
              <li><Link href="#testimonials" className="hover:text-primary transition-colors">Depoimentos</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contatos */}
          <div>
            <h4 className="font-heading text-lg tracking-wider uppercase mb-6 text-primary">Contato</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <span>(91) 98580-0448</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <span>daniellecorrea.contato@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Atendimento em Belém e região metropolitana.</span>
              </li>
            </ul>
          </div>

          {/* CRECI / LGPD */}
          <div>
            <h4 className="font-heading text-lg tracking-wider uppercase mb-6 text-primary">Informações</h4>
            <div className="flex flex-col gap-4 text-sm text-white/80">
              <div className="inline-block border border-primary/30 rounded-md p-3 bg-primary/5">
                <span className="block text-xs uppercase tracking-widest text-primary mb-1">Registro Profissional</span>
                <span className="font-semibold text-white">CRECI 12194</span>
              </div>
              <p className="text-xs mt-2">
                Compromisso com a transparência e segurança jurídica em todas as transações imobiliárias.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} Danielle Corrêa Imóveis. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
