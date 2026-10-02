import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/** 1.91:1 social card cropped from an entry's first gallery image, or undefined to use the site default. */
export async function shareImage(images: { src: ImageMetadata; alt: string }[]) {
  const first = images[0];
  if (!first) return undefined;
  // Astro won't upscale, so ask for no more width than the source has and keep the card ratio.
  const width = Math.min(1200, first.src.width);
  const height = Math.round((width * 630) / 1200);
  const card = await getImage({ src: first.src, width, height, fit: "cover", format: "jpg", quality: 82 });
  return { url: card.src, alt: first.alt, width, height };
}
