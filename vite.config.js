import path, { resolve } from "path";
import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import fs from "fs";

const root = resolve(__dirname, "src"); // get absolute path to root directory

function pages() {
    return {
        name: "configure-server-pages",
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                if (decodeURI(req.originalUrl).includes("/фрезерный-центр")) {
                    res.setHeader("Content-Type", "text/html");
                    res.writeHead(200);
                    res.write(fs.readFileSync(path.join(root, "frezer.html")));
                    res.end();
                    return;
                }

                next();
            });
        },
    };
}

export default defineConfig({
    root, // set root directory
    base: "/", // base URL for the app, default is '/'

    plugins: [
        pages(),
        ViteMinifyPlugin({
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: false,
            removeEmptyAttributes: false,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: false,
        }),
    ],
    build: {
        emptyOutDir: true,
        outDir: "../dist", // output build directory
        chunkSizeWarningLimit: 1600, // this isn't neccesery
        rollupOptions: {
            input: [
                resolve(root, "index.html"), // main page
                resolve(root, "frezer.html"), // first subpage
            ],
        },
    },
});
