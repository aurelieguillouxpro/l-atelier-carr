import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'zczmkr8c',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster reads
});

// Types for Sanity data
export interface SanityPressArticle {
  _id: string;
  title: string;
  source: string;
  date: string;
  excerpt: string;
  link: string;
}

export interface SanityExhibition {
  _id: string;
  title: string;
  venue: string;
  location: string;
  date: string;
  description: string;
  isUpcoming: boolean;
}

export interface SanityTestimonial {
  _id: string;
  quote: string;
  author: string;
  role: string;
}

export interface SanityArtwork {
  _id: string;
  title: string;
  category: 'peinture' | 'sculpture';
  year?: string;
  dimensions?: string;
  technique?: string;
  description?: string;
  image: {
    asset: {
      url: string;
    };
  };
}

export interface SanityPageContent {
  _id: string;
  pageId: string;
  title?: string;
  subtitle?: string;
  content?: string;
  quote?: string;
  quoteAuthor?: string;
}

// GROQ Queries
export const queries = {
  pressArticles: `*[_type == "pressArticle"] | order(date desc) {
    _id,
    title,
    source,
    date,
    excerpt,
    link
  }`,
  
  exhibitions: `*[_type == "exhibition"] | order(date desc) {
    _id,
    title,
    venue,
    location,
    date,
    description,
    isUpcoming
  }`,
  
  testimonials: `*[_type == "testimonial"] {
    _id,
    quote,
    author,
    role
  }`,
  
  artworks: `*[_type == "artwork"] | order(year desc) {
    _id,
    title,
    category,
    year,
    dimensions,
    technique,
    description,
    "image": image.asset->url
  }`,
  
  pageContent: (pageId: string) => ({
    query: `*[_type == "pageContent" && pageId == $pageId][0] {
      _id,
      pageId,
      title,
      subtitle,
      content,
      quote,
      quoteAuthor
    }`,
    params: { pageId }
  }),
};
