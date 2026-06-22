export type PropertyType = "Casa" | "Apartamento" | "Terreno" | "Comercial";
export type TransactionType = "Venda" | "Locação";

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  transaction: TransactionType;
  price: number;
  neighborhood: string;
  city: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  suites: number;
  parkingSpots: number;
  description: string;
  features: string[];
  images: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export const properties: Property[] = [
  {
    id: "prop-1",
    title: "Apartamento de Alto Padrão no Umarizal",
    type: "Apartamento",
    transaction: "Venda",
    price: 1850000,
    neighborhood: "Umarizal",
    city: "Belém",
    area: 180,
    bedrooms: 3,
    bathrooms: 4,
    suites: 3,
    parkingSpots: 3,
    description: "Espetacular apartamento andar alto no coração do Umarizal, com sacada gourmet integrada e vista panorâmica para a baía. Acabamentos em porcelanato de alto luxo e projeto luminotécnico completo.",
    features: ["Piscina", "Academia", "Varanda Gourmet", "Segurança 24h", "Salão de Festas", "Churrasqueira"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    ]
  },
  {
    id: "prop-2",
    title: "Mansão em Condomínio Fechado",
    type: "Casa",
    transaction: "Venda",
    price: 3200000,
    neighborhood: "Augusto Montenegro",
    city: "Belém",
    area: 450,
    bedrooms: 4,
    bathrooms: 6,
    suites: 4,
    parkingSpots: 4,
    description: "Mansão deslumbrante em um dos condomínios mais exclusivos da cidade. Pé direito duplo, sala para 3 ambientes, área de lazer privativa com piscina aquecida e espaço gourmet.",
    features: ["Piscina Privativa", "Área Gourmet", "Closet", "Jardim", "Condomínio Clube", "Energia Solar"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4ea0d?w=800&q=80"
    ]
  },
  {
    id: "prop-3",
    title: "Cobertura Duplex no Batista Campos",
    type: "Apartamento",
    transaction: "Locação",
    price: 15000,
    neighborhood: "Batista Campos",
    city: "Belém",
    area: 220,
    bedrooms: 3,
    bathrooms: 5,
    suites: 3,
    parkingSpots: 2,
    description: "Maravilhosa cobertura para locação com vista privilegiada para a Praça Batista Campos. Totalmente mobiliada com móveis planejados de grife.",
    features: ["Mobiliado", "Vista Panorâmica", "Hidromassagem", "Elevador Privativo", "Condomínio com Lazer"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
    ]
  },
  {
    id: "prop-4",
    title: "Sala Comercial em Prédio Premium",
    type: "Comercial",
    transaction: "Locação",
    price: 4500,
    neighborhood: "Nazaré",
    city: "Belém",
    area: 55,
    bedrooms: 0,
    bathrooms: 1,
    suites: 0,
    parkingSpots: 1,
    description: "Sala comercial ampla e moderna, ideal para clínicas ou escritórios corporativos. Edifício com infraestrutura completa, recepção inteligente e auditório.",
    features: ["Recepção", "Auditório", "Cafeteria", "Catraca Eletrônica", "Estacionamento Rotativo"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    ]
  },
  {
    id: "prop-5",
    title: "Casa Térrea Moderna em Ananindeua",
    type: "Casa",
    transaction: "Venda",
    price: 850000,
    neighborhood: "Mário Covas",
    city: "Ananindeua",
    area: 160,
    bedrooms: 3,
    bathrooms: 3,
    suites: 1,
    parkingSpots: 2,
    description: "Casa recém-construída com projeto contemporâneo. Integração total entre sala, cozinha e varanda gourmet. Excelente localização, próximo a supermercados e shoppings.",
    features: ["Varanda Gourmet", "Quintal", "Porcelanato", "Iluminação em LED"],
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80"
    ]
  },
  {
    id: "prop-6",
    title: "Apartamento Compacto e Luxuoso",
    type: "Apartamento",
    transaction: "Venda",
    price: 680000,
    neighborhood: "Marco",
    city: "Belém",
    area: 75,
    bedrooms: 2,
    bathrooms: 2,
    suites: 1,
    parkingSpots: 1,
    description: "Apartamento projetado para quem busca praticidade sem abrir mão de conforto. Acabamento premium, lazer completo na cobertura (rooftop) com vista para a cidade.",
    features: ["Rooftop", "Piscina com Borda Infinita", "Coworking", "Lavanderia", "Academia"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Mariana Silva",
    role: "Cliente Compradora",
    content: "A Danielle entendeu exatamente o que minha família precisava. O atendimento foi impecável e transparente do início ao fim. Encontramos o apartamento dos nossos sonhos no Umarizal!",
    rating: 5
  },
  {
    id: "test-2",
    name: "Roberto e Camila",
    role: "Clientes Investidores",
    content: "Profissionalismo que impressiona. Conhece o mercado de Belém como poucos. Fechamos um excelente negócio de compra na planta graças à assessoria prestada.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Fernando Souza",
    role: "Cliente Vendedor",
    content: "Vender um imóvel de alto padrão exige estratégia. A Danielle fez um trabalho de marketing fantástico com nosso imóvel e o vendeu em tempo recorde e pelo preço justo.",
    rating: 5
  }
];
