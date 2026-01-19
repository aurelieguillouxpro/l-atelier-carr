import { useState, useRef, useEffect } from "react";
import { motion, TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageSrcSet {
  sm: string;  // 400px
  md: string;  // 800px
  lg: string;  // 1200px
}

interface OptimizedImageProps {
  src: string | ImageSrcSet;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  whileHover?: TargetAndTransition;
  transition?: object;
  style?: React.CSSProperties;
  sizes?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  containerClassName,
  loading = "lazy",
  onLoad,
  whileHover,
  transition,
  style,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle both string (legacy) and object (new srcset) formats
  const isMultiSize = typeof src === 'object';
  const imgSrc = isMultiSize ? src.md : src;
  const srcSet = isMultiSize 
    ? `${src.sm} 400w, ${src.md} 800w, ${src.lg} 1200w`
    : undefined;

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", containerClassName)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/20 animate-pulse" />
      )}
      
      {isInView && (
        <motion.img
          src={imgSrc}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
          alt={alt}
          className={cn(
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          style={style}
          loading={loading}
          decoding="async"
          onLoad={handleLoad}
          whileHover={whileHover}
          transition={transition}
        />
      )}
    </div>
  );
};

// Hook for preloading HD images
export const usePreloadImage = (src: string | undefined) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      setIsLoaded(false);
      return;
    }

    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = src;

    return () => {
      img.onload = null;
    };
  }, [src]);

  return isLoaded;
};

export default OptimizedImage;
