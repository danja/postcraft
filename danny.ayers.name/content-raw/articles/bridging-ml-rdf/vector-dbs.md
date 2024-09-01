https://github.com/Stevenic/vectra

Vectra is a local vector database for Node.js with features similar to Pinecone or Qdrant but built using local files.

Keep in mind that your entire Vectra index is loaded into memory so it's not well suited for scenarios like long term chat bot memory. Use a real vector DB for that. Vectra is intended to be used in scenarios where you have a small corpus of mostly static data that you'd like to include in your prompt. Infinite few shot examples would be a great use case for Vectra or even just a single document you want to ask questions over.

Pinecone style namespaces aren't directly supported but you could easily mimic them by creating a separate Vectra index (and folder) for each namespace.

...
https://thecodebarbarian.com/getting-started-with-vector-databases-in-node-js.html

uses

https://github.com/chroma-core/chroma
