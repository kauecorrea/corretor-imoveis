import { defineField, defineType } from "sanity"

export const property = defineType({
  name: "property",
  title: "Imóveis",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título do Imóvel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Identificador na URL (Slug)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição Completa",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Preço (R$)",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Finalidade (Venda ou Aluguel)",
      type: "string",
      options: {
        list: ["Venda", "Aluguel"],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "propertyType",
      title: "Tipo de Imóvel",
      type: "string",
      options: {
        list: [
          "Casa",
          "Apartamento",
          "Lote/Terreno",
          "Sítio/Fazenda",
          "Comercial",
          "Cobertura"
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Localização (Bairro, Cidade)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "area",
      title: "Área Total (m²)",
      type: "number",
    }),
    defineField({
      name: "bedrooms",
      title: "Quartos",
      type: "number",
    }),
    defineField({
      name: "bathrooms",
      title: "Banheiros",
      type: "number",
    }),
    defineField({
      name: "suites",
      title: "Suítes",
      type: "number",
    }),
    defineField({
      name: "parking",
      title: "Vagas de Garagem",
      type: "number",
    }),
    defineField({
      name: "features",
      title: "Diferenciais / Comodidades",
      description: "Ex: Piscina, Churrasqueira, Academia (Adicione um por um)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "images",
      title: "Galeria de Imagens",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "videoUrls",
      title: "Links de Vídeos (Ex: Youtube, Mp4)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Destacar na Página Inicial?",
      type: "boolean",
      initialValue: false,
    }),
  ],
})
