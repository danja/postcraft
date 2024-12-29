# Semem Ollama

#:semem, the **Semantic Memory** component of #:hyperdata I'm working on is a high priority for me, there are a lot of places I want to use it.

I want to try and get the most out of [Large Language Model](https://en.wikipedia.org/wiki/Large_language_model) and [Linked Data](https://en.wikipedia.org/wiki/Linked_data) integration. It's a seriously fertile space, huge potential, lots of **blue sky** for research. I've got a stack of ideas to try (many roughed out in scattered notes), but I'm following the dev strategy of prioritizing activities for which I have an immediate use. This has led me to [SPARQL](https://en.wikipedia.org/wiki/SPARQL) store-backed Graph [RAG](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) as the inroad. About a year ago, to help get my head around this, I made a little [LlamaIndex](https://www.llamaindex.ai/) extension, [GraphRAG with SPARQL](https://github.com/danja/nlp/tree/main/GraphRAG). This was only a minimal proof-of-concept, but did give me a mental foothold.

The majority of the current activity in this space seems focused on using LLMs to derive [RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework) models from text (this is what the bits above did). For my needs I'm putting the emphasis more on aligning LLM-interpreted text with existing ontologies. Ok, I'm developing ontologies in a just-in-time fashion, but still treating the resources there as "digital" (logically defined) anchor points for the "analog" (probabilistic) shapes around LLMs.

I made a couple of underlying design choices around my #:hyperdata uber-project. One is to favour Javascript. Not everyone's preferred language (see [What's Your Least Favourite Programming Language? (2024 soundcheck question) - Computerphile](https://www.youtube.com/watch?v=03lRzf7iSiU)), especially with AI dev being Python-first. But as I need to use JS in the browser it's a way of reducing my cognitive load (I'm really bad at remembering syntax). Another is to do things kind-of from scratch, avoiding frameworks (libs ok). I'm [dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) to the max because I want to understand what's going on.

A key part of #:semem is embeddings derived from text. A key tool I need asap is a similarity-based search across my scattered docs (so I'm not continually repeating myself). [TrustGraph](https://github.com/trustgraph-ai/trustgraph) is broadly the kind of system I'm aiming for, but that's big and quite blackboxy. While I was still going around in circles at a lower level, trying to decide which **vector DB** tooling to use, I stumbled on [memoripy](https://github.com/caspianmoon/memoripy). As the name suggests, it's Python. But it's an understandable size, has the general shape I'm after and uses specific well-known libs (eg. [Faiss](https://github.com/facebookresearch/faiss)) that all have **JS APIs**.

So for an initial setup for #:semem, the other week I got Claude to help me port it to JS. Once I'd got what appeared to be necessary coverage, I left it there, untested.

Coming back to it today I see most of the examples use the OpenAI API. I don't have any credit on that right now. But [Ollama](https://github.com/ollama/ollama) is also an option. I've got that set up locally, should do nicely to kickstart #:semem.

I had a quick skim of the available small [models](https://ollama.com/search). One I hadn't noticed before is [nomic-embed-text](https://ollama.com/library/nomic-embed-text). Ok, that looks a good candidate for my embeddings. When playing, I got very promising results with `orca`, `phi` and `qwen`. They still seem to be up there in the populars, so I some have initial LLM candidates already installed.
I can't remember when I last update Ollama itself, I'd better do that now.
The [manual install docs](https://github.com/ollama/ollama/blob/main/docs/linux.md) have this :

<blockquote>
If you are upgrading from a prior version, you should remove the old libraries with sudo rm -rf /usr/lib/ollama first.

Download and extract the package:   

curl -L https://ollama.com/download/ollama-linux-amd64.tgz -o ollama-linux-amd64.tgz
sudo tar -C /usr -xzf ollama-linux-amd64.tgz
</blockquote>

That'll take a while on this connection.

Dogwalk time.
