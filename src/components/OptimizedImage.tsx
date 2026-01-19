import { useState } from "react";
import { motion, TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  whileHover?: TargetAndTransition;
  transition?: object;
  style?: React.CSSProperties;
  fetchPriority?: "high" | "low" | "auto";
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
  fetchPriority = "auto",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/20 animate-pulse" />
      )}
      
      <motion.img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        style={style}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        onLoad={handleLoad}
        whileHover={whileHover}
        transition={transition}
      />
    </div>
  );
};

export default OptimizedImage;
