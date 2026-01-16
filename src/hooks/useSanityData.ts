import { useQuery } from '@tanstack/react-query';
import { 
  sanityClient, 
  queries,
  SanityPressArticle,
  SanityExhibition,
  SanityTestimonial,
  SanityArtwork,
  SanityPageContent
} from '@/lib/sanity';

// Hook for press articles
export function usePressArticles() {
  return useQuery<SanityPressArticle[]>({
    queryKey: ['pressArticles'],
    queryFn: () => sanityClient.fetch(queries.pressArticles),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Hook for exhibitions
export function useExhibitions() {
  return useQuery<SanityExhibition[]>({
    queryKey: ['exhibitions'],
    queryFn: () => sanityClient.fetch(queries.exhibitions),
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for testimonials
export function useTestimonials() {
  return useQuery<SanityTestimonial[]>({
    queryKey: ['testimonials'],
    queryFn: () => sanityClient.fetch(queries.testimonials),
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for artworks
export function useArtworks(category?: 'peinture' | 'sculpture') {
  return useQuery<SanityArtwork[]>({
    queryKey: ['artworks', category],
    queryFn: async () => {
      const allArtworks = await sanityClient.fetch(queries.artworks);
      if (category) {
        return allArtworks.filter((artwork: SanityArtwork) => artwork.category === category);
      }
      return allArtworks;
    },
    staleTime: 1000 * 60 * 5,
  });
}

// Hook for page content
export function usePageContent(pageId: string) {
  return useQuery<SanityPageContent | null>({
    queryKey: ['pageContent', pageId],
    queryFn: () => sanityClient.fetch(queries.pageContent(pageId)),
    staleTime: 1000 * 60 * 5,
  });
}
