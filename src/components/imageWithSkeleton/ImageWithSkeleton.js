import { useState } from "react"
import Skeleton from "@mui/material/Skeleton";

const ImageWithSkeleton = ({
  src,
  alt,
  className,
  aspectRatio = "4/3",
  skeletonClassName,
  ...rest
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: aspectRatio,
        overflow: "hidden",
      }}
    >
      {!hasLoaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          className={skeletonClassName}
        />
      )}

      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setHasLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: hasLoaded ? 1 : 0,
          transition: "opacity 0.4s ease-in-out",
        }}
        {...rest}
      />
    </div>
  );
};


export default ImageWithSkeleton