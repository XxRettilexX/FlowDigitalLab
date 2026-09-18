/**
 * Tiny 8x8 neutral-gray base64 PNG used as the blur placeholder for
 * next/image when the source is a dynamic string path (frontmatter-driven
 * covers), since Next only auto-generates blurDataURL for statically
 * imported local images.
 */
export const BLUR_DATA_URL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAF0lEQVR4AWNgYPjPwMDwn4GBgYGBgQEACg8B/2j+/GAAAAAASUVORK5CYII=';
