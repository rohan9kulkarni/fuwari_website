import { type CollectionEntry, getCollection } from "astro:content";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { getCategoryUrl } from "@utils/url-utils.ts";

async function getRawSortedPosts() {
	const allBlogPosts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const sorted = allBlogPosts.sort((a, b) => {
		const dateA = new Date(a.data.published);
		const dateB = new Date(b.data.published);
		return dateA > dateB ? -1 : 1;
	});
	return sorted;
}

export async function getSortedPosts() {
	const sorted = await getRawSortedPosts();

	for (let i = 1; i < sorted.length; i++) {
		sorted[i].data.nextSlug = sorted[i - 1].slug;
		sorted[i].data.nextTitle = sorted[i - 1].data.title;
	}
	for (let i = 0; i < sorted.length - 1; i++) {
		sorted[i].data.prevSlug = sorted[i + 1].slug;
		sorted[i].data.prevTitle = sorted[i + 1].data.title;
	}

	return sorted;
}

export type SeriesPost = {
	slug: string;
	title: string;
	part: number;
	total: number;
	prevSlug: string;
	prevTitle: string;
	nextSlug: string;
	nextTitle: string;
};

export async function getSeriesInfo(
	seriesName: string,
	currentSlug: string,
): Promise<SeriesPost | null> {
	if (!seriesName) return null;

	const allPosts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const seriesPosts = allPosts
		.filter((p) => p.data.series === seriesName)
		.sort((a, b) => {
			return new Date(a.data.published) > new Date(b.data.published) ? 1 : -1;
		});

	const idx = seriesPosts.findIndex((p) => p.slug === currentSlug);
	if (idx === -1) return null;

	const total = seriesPosts.length;
	const part = idx + 1;

	return {
		slug: currentSlug,
		title: seriesPosts[idx].data.title,
		part,
		total,
		prevSlug: idx > 0 ? seriesPosts[idx - 1].slug : "",
		prevTitle: idx > 0 ? seriesPosts[idx - 1].data.title : "",
		nextSlug: idx < total - 1 ? seriesPosts[idx + 1].slug : "",
		nextTitle: idx < total - 1 ? seriesPosts[idx + 1].data.title : "",
	};
}

export async function getSeriesPosts(seriesName: string) {
	if (!seriesName) return [];

	const allPosts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	return allPosts
		.filter((p) => p.data.series === seriesName)
		.sort((a, b) => {
			return new Date(a.data.published) > new Date(b.data.published) ? 1 : -1;
		})
		.map((p, i) => ({
			slug: p.slug,
			title: p.data.title,
			part: i + 1,
		}));
}
export type PostForList = {
	slug: string;
	data: CollectionEntry<"posts">["data"];
};
export async function getSortedPostsList(): Promise<PostForList[]> {
	const sortedFullPosts = await getRawSortedPosts();

	// delete post.body
	const sortedPostsList = sortedFullPosts.map((post) => ({
		slug: post.slug,
		data: post.data,
	}));

	return sortedPostsList;
}
export type Tag = {
	name: string;
	count: number;
};

export async function getTagList(): Promise<Tag[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const countMap: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { tags: string[] } }) => {
		post.data.tags.forEach((tag: string) => {
			if (!countMap[tag]) countMap[tag] = 0;
			countMap[tag]++;
		});
	});

	// sort tags
	const keys: string[] = Object.keys(countMap).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	return keys.map((key) => ({ name: key, count: countMap[key] }));
}

export type Category = {
	name: string;
	count: number;
	url: string;
};

export async function getCategoryList(): Promise<Category[]> {
	const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
	const count: { [key: string]: number } = {};
	allBlogPosts.forEach((post: { data: { category: string | null } }) => {
		if (!post.data.category) {
			const ucKey = i18n(I18nKey.uncategorized);
			count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1;
			return;
		}

		const categoryName =
			typeof post.data.category === "string"
				? post.data.category.trim()
				: String(post.data.category).trim();

		count[categoryName] = count[categoryName] ? count[categoryName] + 1 : 1;
	});

	const lst = Object.keys(count).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	const ret: Category[] = [];
	for (const c of lst) {
		ret.push({
			name: c,
			count: count[c],
			url: getCategoryUrl(c),
		});
	}
	return ret;
}
