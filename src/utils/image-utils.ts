import { getImage } from "astro:assets";
import path from "node:path";

// Local content images live under src/content and are optimized by Astro at
// build time. Glob them once so we can resolve a post's relative cover image
// (e.g. "./cover.jpg") to its final hashed asset path.
const contentImages = import.meta.glob<{ default: ImageMetadata }>(
	"/src/content/**/*.{jpeg,jpg,png,gif,webp,avif}",
);

/**
 * Resolve a post's cover image to an absolute URL suitable for Open Graph /
 * Twitter card / JSON-LD tags. Returns `undefined` when no usable image exists.
 *
 * @param image   The frontmatter `image` value (relative, root-absolute, or external).
 * @param postId  The content entry id, used to locate relative images.
 * @param site    `Astro.site` — required to build absolute URLs.
 */
export async function resolveCoverImageUrl(
	image: string | undefined,
	postId: string,
	site: URL | undefined,
): Promise<string | undefined> {
	if (!image || image.trim() === "") return undefined;

	// Already an absolute external URL.
	if (image.startsWith("http://") || image.startsWith("https://")) {
		return image;
	}

	if (!site) return undefined;

	// Root-absolute path pointing at a file in /public.
	if (image.startsWith("/")) {
		return new URL(image, site).href;
	}

	// Relative path resolved against the post's directory inside src/content.
	const postDir = path.dirname(postId);
	const normalized = path
		.normalize(path.join("/src/content/posts", postDir, image))
		.replace(/\\/g, "/");

	const loader = contentImages[normalized];
	if (!loader) return undefined;

	const { default: imageMetadata } = await loader();
	const optimized = await getImage({ src: imageMetadata });
	return new URL(optimized.src, site).href;
}
