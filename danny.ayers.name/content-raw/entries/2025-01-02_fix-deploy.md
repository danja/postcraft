# Semem Fix & Deploy

**A little pause while I publish these scraps so I can tell Graham what reminded me of him.**

I made a todo list here yesterday without any explanation. Didn't publish. Invisible todo list is absolutely not what I want on my blog front page! My top priority this week is doc organisation, so I'll let myself off this time. I've changed the date on the file, this is it I'll now fill it out...

A little job for this morning is a little explore of [Semem](https://github.com/danja/semem).

It appears to (mostly) work, here's the [console log of a run](https://danny.ayers.name/entries/2025-01-01_semem-run.html).

But, **what is it doing?**

What I want right now, as a bit of scaffolding for what I want to explore, is a nodejs version of [memoripy](https://github.com/caspianmoon/memoripy) that uses a (remote) SPARQL store as (part of) its knowledgebase.

I only tried running it after many hours implementing it in a Claude project. Then had a couple of hours manually tweaking to get it to (mostly) run. It's definitely interacting with Ollama for embeddings & chat, a SPARQL endpoint for persistence. I don't see the extracted concepts in the SPARQL store, but there's a JSON syntax bug mentioned in the trace, that might well be related.  

Last night I had a short session with Claude, aiming to document what we had so far. I've put the artifacts over here : https://github.com/danja/semem/tree/main/docs/description_2025-01-01.md It sounds marvellous, but how much is true?

# Banebane

I had a chat with ClaudioB yesterday morning, pointed him to my notes so far on #:semem. He asked me if I had a **live instance** he could play with. A very good question! Not for the first time I'll quote -

## Connolly's Bane

> **"The bane of my existence is doing things that I know the
computer could do for me"**
\– Dan Connolly

*Which reminded me I've not been in touch with [Graham Klyne](https://www.ninebynine.org/) for many years. A blog post of his drew my attention to that quote. Good-o, he's on Mastodon : [@gklyne@indieweb.social](https://indieweb.social/@gklyne), I'll ping him there.*

**Pause**

It totally ties in with agent-oriented messaging. This is the kind of message I want my systems to be able to deal with automatically.
Somewhere around my vocabs I need terms for this particular kind of input. I may already have something like **Feature Request** around the project management oriented bits, but

* #:todo fix #:semem failing on UPDATE
* #:todo tease next steps from `semem/docs/description_2024-12-30/`

I sorted out the UPDATE.


* #:todo deploy to #:tbox

* #:todo #:spike for function/action calling a la ReAct

* #:todo some FOAF

Installed 'Markdown Preview Mermaid Support' into VSCode


semem - query execution times, store metrics, total embeddings size

support Groq, Mistral, Claude, OpenAI

refactor

comments

install the willison-mentioned UI tool - has useful bits for APIs?

ditto LibreChat

LOGGER - see Perplexity
