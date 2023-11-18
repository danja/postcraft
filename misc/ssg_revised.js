const os = require('os');
const fsExtra = require('fs-extra'); // Equivalent to shutil in Python
const glob = require('glob'); // Equivalent to glob in Python
const process = require('process'); // Equivalent to sys in Python
const moment = require('moment'); // Equivalent to datetime in Python
const marked = require('marked'); // Equivalent to commonmark in Python
const fs = require('fs');

class StaticSiteGenerator {
    constructor() {
        // Other properties and initializations can be added here
    }

    // Reads the content of a file
    fread(filename) {


        try {
            const data = fs.readFileSync(filename, 'utf8');
            return data;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    // Writes content to a file
    fwrite(filename, text) {
        const fs = require('fs');
        const path = require('path');

        try {
            const basedir = path.dirname(filename);
            if (!fs.existsSync(basedir)) {
                fs.mkdirSync(basedir, { recursive: true });
            }

            fs.writeFileSync(filename, text, 'utf8');
        } catch (err) {
            console.error(err);
        }
    }

    // Logs a message with specified arguments
    log(msg, ...args) {
        const util = require('util');
        console.error(util.format(msg, ...args));
    }

    // Remove tags and truncate text to the specified number of words
    truncate(text, words = 25) {
        return text.replace(/<.*?>/gs, ' ').split(/\s+/).slice(0, words).join(' ');
    }

    // Parse headers in text and yield (key, value, end-index) tuples
    * read_headers(text) {
        const headerRegex = /\\s*<!--\\s*(.+?)\\s*:\\s*(.+?)\\s*-->\\s*|.+?/g;
        let match;

        while ((match = headerRegex.exec(text)) !== null) {
            if (!match[1]) break;
            yield { key: match[1], value: match[2], endIndex: match.index + match[0].length };
        }
    }

    // Convert yyyy-mm-dd date string to RFC 2822 format date string
    rfc_2822_format(dateStr) {
        const moment = require('moment');

        return moment(dateStr, 'YYYY-MM-DD').format('ddd, DD MMM YYYY HH:mm:ss +0000');
    }

    // Read content and metadata from file into a dictionary
    read_content(filename) {
        const fs = require('fs');
        const path = require('path');
        const marked = require('marked');

        // Read file content
        let text;
        try {
            text = fs.readFileSync(filename, 'utf8');
        } catch (err) {
            console.error('Error reading file:', err);
            return null;
        }

        // Extract date and slug from filename
        const dateSlug = path.basename(filename).split('.')[0];
        const match = /^(?:(\\d{4}-\\d{2}-\\d{2})-)?(.+)$/.exec(dateSlug);
        const content = {
            date: match[1] || '1970-01-01',
            slug: match[2],
        };

        // Read headers
        let end = 0;
        const headerRegex = /\\s*<!--\\s*(.+?)\\s*:\\s*(.+?)\\s*-->\\s*|.+?/g;
        let headerMatch;
        while ((headerMatch = headerRegex.exec(text)) !== null) {
            if (!headerMatch[1]) break;
            content[headerMatch[1]] = headerMatch[2];
            end = headerMatch.index + headerMatch[0].length;
        }

        // Separate content from headers
        text = text.substring(end);

        // Convert Markdown content to HTML, if applicable
        if (/\\.(md|mkd|mkdn|mdown|markdown)$/.test(filename)) {
            try {
                text = marked(text);
            } catch (err) {
                this.log('WARNING: Cannot render Markdown in ' + filename + ': ' + err.message);
            }
        }

        // Update the dictionary with content and RFC 2822 date
        content.content = text;
        content.rfc_2822_date = this.rfc_2822_format(content.date);

        return content;
    }

    // Replace placeholders in template with values from params
    render(template, params) {
        return template.replace(/{{\s*([^}\s]+)\s*}}/g, (match, p1) => {
            return String(params[p1] !== undefined ? params[p1] : match);
        });
    }

    async makePages(src, dst, templatePath) {
        // Create destination directory if it doesn't exist
        await fsExtra.ensureDir(dst);

        // Read the template
        const templateContent = await fsExtra.readFile(templatePath, 'utf8');

        // Process each markdown file in the source directory
        const mdFiles = glob.sync(path.join(src, '*.md'));
        for (const mdFile of mdFiles) {
            // Extract the file name without extension
            const baseName = path.basename(mdFile, path.extname(mdFile));

            // Read markdown content
            const mdContent = await fsExtra.readFile(mdFile, 'utf8');

            // Convert markdown to HTML
            const htmlContent = marked(mdContent);

            // Generate the final HTML content
            const finalContent = templateContent.replace('{{ content }}', htmlContent);

            // Write the HTML file to the destination directory
            await fsExtra.writeFile(path.join(dst, `${baseName}.html`), finalContent);
        }

        // Copy static files (images, CSS, JS) to the destination directory
        const staticSrc = path.join(src, 'static');
        const staticDst = path.join(dst, 'static');
        if (await fsExtra.pathExists(staticSrc)) {
            await fsExtra.copy(staticSrc, staticDst, { overwrite: true });
        }

        // Write a log entry
        const logEntry = {
            timestamp: moment().format(),
            src,
            dst,
            filesProcessed: mdFiles.length
        };
        await fsExtra.writeFile(path.join(dst, 'log.json'), JSON.stringify(logEntry, null, 2));
    }

    async makeList(src, dst) {
        // Create destination directory if it doesn't exist
        await fs.ensureDir(dst);

        // List all files in the source directory
        const files = (await fs.readdir(src))
            .filter(f => fs.statSync(path.join(src, f)).isFile());

        // Write the list to a JSON file in the destination directory
        await fs.writeJson(path.join(dst, 'file_list.json'), files);
    }

    async main() {
        // Create a new '_site' directory from scratch
        const siteDir = '_site';
        if (await fs.pathExists(siteDir)) {
            await fs.remove(siteDir);
        }
        await fs.copy('static', siteDir);

        // Default parameters
        let params = {
            basePath: '',
            subtitle: 'Another Interim Blog',
            author: '@danja',
            siteUrl: 'https://hyperdata.it',
            currentYear: moment().year()
        };

        // If params.json exists, load it
        const paramsPath = 'params.json';
        if (await fs.pathExists(paramsPath)) {
            const paramsJson = await fs.readJson(paramsPath);
            params = { ...params, ...paramsJson };
        }

        // Load layouts
        const pageLayout = await fs.readFile('layout/page.html', 'utf8');
        const postLayout = await fs.readFile('layout/post.html', 'utf8');
        const listLayout = await fs.readFile('layout/list.html', 'utf8');
        const itemLayout = await fs.readFile('layout/item.html', 'utf8');
        const feedXml = await fs.readFile('layout/feed.xml', 'utf8');
        const itemXml = await fs.readFile('layout/item.xml', 'utf8');

        // Combine layouts to form final layouts
        // Note: 'render' method needs to be implemented to process layouts
        const finalPostLayout = this.render(pageLayout, postLayout);
        const finalListLayout = this.render(pageLayout, listLayout);

        // Create site pages, blogs, blog list pages, and RSS feeds
        // Note: Implement makePages and makeList methods to handle these operations
        // Example:
        // await this.makePages('content/_index.html', path.join(siteDir, 'index.html'), pageLayout, params);
        // Similar calls for blogs, blog list pages, and RSS feeds
    }
}

module.exports = StaticSiteGenerator;
