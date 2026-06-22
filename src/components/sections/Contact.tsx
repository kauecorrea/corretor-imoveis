"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  phone: z.string().min(10, "Telefone inválido"),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  interest: z.string().min(1, "Selecione um interesse"),
  message: z.string().min(5, "Mensagem muito curta"),
  consent: z.boolean().refine(val => val === true, "Você precisa concordar com os termos"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interest: "",
      consent: false,
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Instead of actually sending an email in this demo, 
    // we'll format a WhatsApp link and open it as a fallback/alternative, 
    // or just show success if they prefer email routing.
    
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5591985800448";
    const text = `Olá Danielle, me chamo ${data.name}. Tenho interesse em: ${data.interest}.\n\nMensagem: ${data.message}\n\nMeu contato: ${data.phone}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(url, '_blank');
    
    setIsSuccess(true);
    setIsSubmitting(false);
    reset();
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Info Column */}
          <div className="w-full lg:w-5/12">
            <div className="mb-2 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary"></span>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Fale Comigo</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading mb-8 leading-tight">
              Vamos encontrar o seu imóvel ideal?
            </h2>
            <p className="text-foreground/70 leading-relaxed font-light mb-12">
              Preencha o formulário para iniciarmos uma conversa sobre o seu próximo passo no mercado imobiliário. Entrarei em contato o mais breve possível.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-lg mb-1">WhatsApp / Telefone</h4>
                  <p className="text-foreground/70">(91) 98580-0448</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-lg mb-1">E-mail</h4>
                  <p className="text-foreground/70">daniellecorrea.contato@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-lg mb-1">Área de Atendimento</h4>
                  <p className="text-foreground/70">Belém e região metropolitana.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-heading text-2xl mb-6">Envie uma mensagem</h3>
              
              {isSuccess ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-md border border-green-200 text-center">
                  <h4 className="font-heading text-xl mb-2">Mensagem enviada com sucesso!</h4>
                  <p>Você será redirecionado para o WhatsApp, ou aguarde meu retorno em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Nome Completo *</label>
                      <input 
                        {...register("name")}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary transition-colors text-sm"
                        placeholder="Seu nome"
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">WhatsApp / Telefone *</label>
                      <input 
                        {...register("phone")}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary transition-colors text-sm"
                        placeholder="(91) 90000-0000"
                      />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">E-mail (Opcional)</label>
                      <input 
                        {...register("email")}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary transition-colors text-sm"
                        placeholder="seu@email.com"
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Qual seu interesse? *</label>
                      <select 
                        {...register("interest")}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary transition-colors text-sm"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="Comprar um imóvel">Comprar um imóvel</option>
                        <option value="Vender meu imóvel">Vender meu imóvel</option>
                        <option value="Alugar um imóvel">Alugar um imóvel</option>
                        <option value="Avaliar meu imóvel">Avaliar meu imóvel</option>
                      </select>
                      {errors.interest && <p className="text-destructive text-xs mt-1">{errors.interest.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Mensagem *</label>
                    <textarea 
                      {...register("message")}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary transition-colors text-sm resize-none"
                      placeholder="Como posso te ajudar?"
                    ></textarea>
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="consent"
                      {...register("consent")}
                      className="mt-1 w-4 h-4 accent-primary"
                    />
                    <label htmlFor="consent" className="text-xs text-foreground/60 leading-relaxed">
                      Concordo em fornecer meus dados para que a equipe Danielle Corrêa Imóveis possa entrar em contato comigo. Seus dados estão seguros e não serão compartilhados.
                    </label>
                  </div>
                  {errors.consent && <p className="text-destructive text-xs mt-1">{errors.consent.message}</p>}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                  
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
