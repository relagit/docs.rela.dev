import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "./pages",
    lastUpdated: true,
    cleanUrls: true,
    lang: "en-US",
    title: "Rela",
    description: "A suite of tools to help you manage your git workflow and increase your productivity.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        editLink: {
            pattern: "https://github.com/relagit/docs.rela.dev/tree/main/pages/:path",
        },

        nav: [
            { text: "Home", link: "/" },
            { text: "Client", link: "/client/" },
            { text: "Commits", link: "/commits/" },
        ],

        sidebar: {
            "/client": [],
            "/commits": [],
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/relagit/docs.rela.dev" },
            {
                link: "https://rela.dev",
                icon: {
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path></svg>`,
                },
            },
        ],

        footer: {
            copyright: "Copyright © 2023 TheCommieAxolotl and Rela contributors.",
            message: "Made with ❤️",
        },
    },
});
