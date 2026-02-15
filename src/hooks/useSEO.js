import { useEffect } from "react";

export default function useSEO({
    title,
    description,
    canonical,
}) {
    useEffect(() => {
        // title
        if (title) document.title = title;

        // meta description
        if (description) {
            let meta = document.querySelector("meta[name='description']");
            if (!meta) {
                meta = document.createElement("meta");
                meta.name = "description";
                document.head.appendChild(meta);
            }
            meta.content = description;
        }

        // canonical link
        if (canonical) {
            let link = document.querySelector("link[rel='canonical']");
            if (!link) {
                link = document.createElement("link");
                link.rel = "canonical";
                document.head.appendChild(link);
            }
            link.href = canonical;
        }
    }, [title, description, canonical]);
}
