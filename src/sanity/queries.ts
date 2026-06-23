export const getPropertiesQuery = `*[_type == "property"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  price,
  type,
  propertyType,
  location,
  area,
  bedrooms,
  bathrooms,
  suites,
  parking,
  featured,
  "imageUrl": images[0].asset->url
}`

export const getFeaturedPropertiesQuery = `*[_type == "property" && featured == true] | order(_createdAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  price,
  type,
  propertyType,
  location,
  area,
  bedrooms,
  bathrooms,
  suites,
  parking,
  "imageUrl": images[0].asset->url
}`

export const getPropertyBySlugQuery = `*[_type == "property" && slug.current == $slug][0] {
  _id,
  title,
  description,
  "slug": slug.current,
  price,
  type,
  propertyType,
  location,
  area,
  bedrooms,
  bathrooms,
  suites,
  parking,
  features,
  videoUrls,
  "images": images[].asset->url
}`
