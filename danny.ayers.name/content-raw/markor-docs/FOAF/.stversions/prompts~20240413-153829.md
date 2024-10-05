This document is a sample from an email archive. Please write a Javascript function to convert this to a JSON representation. It will use cheerio to extract the following fields : subject, from, cc, in-reply-to, next-message, previous-message, message-text

---

Please make me a Javascript method using cheerio in nodejs that will do the following :
locate each HTML link element and header element in the document, convert them to the appropriate snippet of markdown and then add each to a new line in a string, in the original document order. The function shell looks like this (it will appear in a class):

import \* as cheerio from 'cheerio'

    extractLinks(htmlContent) {
        const $ = cheerio.load(htmlContent);

        return markdownResult;
    }
