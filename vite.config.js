import path, { resolve } from "path";
import { defineConfig } from "vite";
import fs from "fs";

const root = resolve(__dirname, "src"); // get absolute path to root directory

function pages() {
    return {
        apply: "serve",
        configureServer(server) {
            return () => {
                server.middlewares.use(async (req, res, next) => {
                    if (decodeURI(req.originalUrl).includes("/фрезерный-центр")) {
                        console.info(true);
                        res.setHeader("Content-Type", "text/html");
                        res.writeHead(200);
                        res.write(fs.readFileSync(path.join(root, "pages/frezer.html")));
                        res.end();
                    }

                    next();
                });
            };
        },
        name: "pages",
    };
}

export default defineConfig({
    root, // set root directory
    base: "/", // base URL for the app, default is '/'

    plugins: [pages()],
    build: {
        emptyOutDir: true,
        outDir: "../dist", // output build directory
        chunkSizeWarningLimit: 1600, // this isn't neccesery
        rollupOptions: {
            input: {
                main: resolve(root, "index.html"), // main page
                frezer: resolve(root, "pages/frezer.html"), // first subpage
            },
        },
    },
});
