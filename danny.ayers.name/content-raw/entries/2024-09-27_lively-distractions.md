# Lively Distractions

**2024-09-28** Yesterday I was too busy doing things so only wrote down reminders. I'll flesh them out a little now.

## Tibico Research

Last month Oriana asked me to look after her jar of [Tibicos](https://en.wikipedia.org/wiki/Tibicos) aka **water kefir**. It's fascinating stuff, I've already started experimenting. It also made a nice test case for using Claude AI's [Projects](https://www.anthropic.com/news/projects) for research. I had only used them for software projects, for which they are great (with the help of [repopack](https://github.com/yamadashy/repopack)). I know virtually nothing about microbiology (though have been interested a while - I've got a usable microscope etc), so this topic offered a good *virgin* project.    

I created the Project and set up a custom prompt. Then added the 'Edit' raw text of the Wikipedia page on Tibicos and that of [Saccharomyces boulardii](https://en.wikipedia.org/wiki/Saccharomyces_boulardii) (a probiotic - that page is an interesting read), together with 4 papers linked from Wikipedia to Project Knowledge.
It worked really well, I immediately had a useful expert on hand.  

I was curious how viable it might be to incorporate the probiotic critter into the existing symbiotic tibicos culture. Here's how the chat started :

![Claude Tibicos research screenshot 1](media/images/2024-09/claude-tibicos_1.png)

By the 4th interaction we were at this :

 ![Claude Tibicos research screenshot 1](media/images/2024-09/claude-tibicos_2.png)

alife

Claudio

## process

write requirements first!

convert into prompt if appropriate

sparql-store-lite

farelo metrics

cd /home/danny/github-danny/hyperdata/packages
git submodule add https://github.com/danja/sparql-store-lite.git sparql-store-lite

https://claude.ai/chat/cb4609cc-19aa-4701-840a-c7eca3bf5d90

@rdfjs/parser-n3

nvm install node

npm install -g npm@latest

npm -v

---

### webpack transmissions for in-browser


To interact with GitHub's API using Node.js, here are some suitable libraries ranked by activity, coverage, and popularity:

1. Octokit (https://github.com/octokit/octokit.js)
   - Official GitHub REST API client for JavaScript
   - Very active development, excellent coverage, and widely used
   - Supports both REST and GraphQL APIs

2. @octokit/rest (https://github.com/octokit/rest.js)
   - Part of the Octokit ecosystem, focused on REST API
   - Active development, great coverage for REST API, popular

3. axios (https://github.com/axios/axios)
   - General-purpose HTTP client, can be used with GitHub API
   - Very active, widely used, but requires more manual setup for GitHub specifics

These libraries are well-maintained, offer good coverage, and are popular in the Node.js ecosystem for GitHub API interactions.

Q1: What specific GitHub API features are you looking to implement in your transmissions processors?
Q2: Do you have a preference for using REST API or GraphQL API for GitHub interactions?
Q3: Are there any specific authentication methods you need to support (e.g., OAuth, Personal Access Tokens)?
