Unveiling the Unified Landscape: Bridging Knowledge Graphs and Machine Learning
**tl;dr** _graphs and language models are very different representations of knowledge, but the advantages of each can be exploited with a suitable mapping_

Knowledge Graphs combined with Language Models is a hot topic. We have seen demos, and increasingly they have become features in products. But most of the time, they are connected inefficiently. In this post, I will take a closer look at the essential building blocks of both worlds, their features, what makes them unique, and how they could be combined on a native level.

Paradoxically in this context, the Web, a colossal information system, tends to get overlooked. Billions of interconnected pages and documents form a vast interconnected network of information. The Resource Description Framework (RDF) emerged to enhance such information with structure, allowing machines to better understand and manipulate it. Viewed as Linked Data, the Web itself is _the_ Global Knowledge Graph.

Of course the Web is used as a primary source for data in training LLMs and for many RAG (Retrieval Augmented Generation) systems. This typically involves reshaping it into arbitrary structures that will fit into the Machine Learning world. There is a fundamental mismatch between the rigid URL-based linkage of Web data and the probabilistic relations found in machine learning models. This mismatch becomes even more apparent when the Web model is enhanced with the formal logic-grounded components of RDF. The contrast between the representations is like that of digital vs. analog in electronics.

I will now dip into the problems this can cause, then describe a potential way forward.

## Large Language Models for RDF Processing

Feeding an LLM with an ontology and data serialized as Turtle has recently become a widespread approach for processing RDF. For instance, prompts with a taxonomy and an input text are used to perform classification tasks on that given text. That works somehow, but it's not the right tool. LLMs are good at handling semantics given in natural language but can be lossy and generate hallucinations, which is not ideal for IRI handling. It feels like using [Minecraft and Redstone](https://www.youtube.com/watch?v=7OdhtAiPfWY) for computing tasks. There is a lot of overhead in lifting the semantics to natural language. That costs a lot of energy (in every sense). You may think of tasks worth spending money on for computing time, but there are environments where this is not possible, and we want to broaden the scope where we can do such processing, like phones and devices in the Internet of Things. In many cases, it's possible to use embeddings linked to IRIs for more efficient and less error-prone data processing.

## Language

Knowledge Graphs and language models are all about **language**. They are about communication and the persistence of information with a defined grammar and vocabulary to represent semantics. Use cases have implications on how the grammar and vocabulary are designed. Based on the environment and anatomy, humans communicate differently than whales or [prairie dogs](https://www.youtube.com/watch?v=y1kXCh496U0). And that's just the same for computers. Let's have a look at the core building blocks of Web-friendly Knowledge Graphs, and language models used to represent semantics.

## Named Nodes (IRIs)

Web addresses, URLs, are a key component of [Web architecture](https://www.w3.org/TR/webarch/). These may be generalised as resource identifiers, where a resource can be anything that can be identified. Named nodes correspond to these resources: as part of an ontology, resources can be properties or classes; in a data graph for taxonomy, resources represent entities and concepts.

### Semantics

Named nodes are the essential objects that carry the semantics. The RDF model defines literals, blank nodes, and triples as well.

Triples attach literals or blank nodes to resources or link to other resources. These relations define a resource's semantics. While the IRI of the named node can use a speaking domain name or path, one should not rely on it. The example below describes the resource identified by `ex:wombat`. The semantic doesn't come from that IRI; it's the `ex:Animal` class that is linked as type and the label `Wombat`. Features, like, in this case, type and label, are explicitly expressed as properties.

```turtle
ex:wombat a ex:Animal;
    rdfs:label "Wombat".
```

A wombat expert may use a more precise definition because there are three subtypes of wombats: the common wombat and the southern/northern hairy-nosed wombat. A taxonomy can be used to represent that hierarchical structure. That example also shows that the semantics of a named node is not a single point but a solid that can have volume and can be further divided, as shown here:

![animal taxonomy bubble chart](/files/2024/unified-landscape/bubble.svg)

### Identifier

Named nodes are identified by IRIs. IRIs are identifiers designed for the Internet/Web. One key aspect is a design that avoids collisions even if there is no single source that generates the identifiers. Another key aspect is that they are easy to resolve. That means if you stumble over an unknown IRI, you can go to that IRI, fetch the content, and understand the semantics.

## Embeddings (Vectors)

Embeddings are vectors generated by neural networks that represent the semantics of a given input. It's mainly known for text input but works as well for image, audio, video, or graph input.

### Semantics

Embeddings are expressed in latent space rather than feature space, meaning there is no predefined value for a specific feature. For example, in the previous wombat example, there is no value that acts like a boolean "wombat: true/false" or an animal value that can be understood with a lookup table. The semantics can only be understood when combined with the model. As we are not able to directly understand what a vector expresses, we need to compare an unknown vector with known references. If we get a vector that is very close to a vector generated with the same model for our wombat example, there is a high chance that the given vector also represents a wombat. But what is very close? That depends on the use case. If you deal with vectors covering everything in this world, a beaver is very close to a wombat because it's also an animal. If you focus only on the animal world, "close" has a different meaning. A good value for the maximal distance for a specific use case is often determined through trial and error. Approaches based on clustering can also be used where centroids and volumes are estimated based on known vectors. Here, it becomes clear once more that we're only dealing with points in the latent space that don't have a volume. That means they can't represent hierarchies. If we look at the bubble chart above, a vector would be just a point in the inner bubbles without any information about which bubble it represents.

### Identifier

While it looks like the vector is the only identifier, as the model is required to interpret the values of the vector, a reference to the model is also needed. The model must include all the information required to transform the input for the neural network, such as the tokenizer in the case of a language model. There is currently no specification from a standard body for identifiers, but for open-source models, the Hugging Face repository names are commonly used as identifiers, which is also supported by libraries from Hugging Face. But keep in mind how the semantics is encoded. The combination of a vector and model identifier can't be used like most other identifiers with an equality check. Almost all use cases require using fuzzy logic.

## Comparison

<table class="table">
<thead>
<tr>
<th></th>
<th>Named Nodes</th>
<th>Embeddings</th>
</tr>
</thead>
<tbody>
<tr>
<td>semantics</td>
<td>defined by properties and relations</td>
<td>defined by the model and the vector</td>
</tr>
<tr>
<td>identifier</td>
<td>IRI, conflict-free, easy to resolve</td>
<td>vector + model, no standard available</td>
</tr>
<tr>
<td>use cases</td>
<td>share information across organizations within enterprises or the web</td>
<td>compare semantics</td>
</tr>
</tbody>
</table>

|                | Named Nodes                                                          | Embeddings                            |
| -------------- | -------------------------------------------------------------------- | ------------------------------------- |
| **semantics**  | defined by properties and relations                                  | defined by the model and the vector   |
| **identifier** | IRI, conflict-free, easy to resolve                                  | vector + model, no standard available |
| **use cases**  | share information across organizations within enterprises or the web | compare semantics                     |

## Bridging Both Worlds

As both worlds have their use cases, it leads to the question of how we can bring them closer together. Can we simply define IRIs for embeddings? Let's introduce a new schema `emb:` that can be used like this:

`emb:model=http%3A%2F%2Fexample.org%2Fmodel&vector=%5B-0.2%2C0.5%5D`

model: `http://example.org/model`

vector: `[-0.2,0.5]`

It combines the model and the vector into a single IRI by encoding them as search parameters. The `model` parameter could refer to a model definition in the Hugging Face format. The `vector` parameter is just a JSON array with all the vector elements. But this leads to some follow-up problems.

### Limit the Number of Models

As described earlier, a vector is only useful when combined with the model. If there are two vectors generated by two different models, they can't be compared. Like in natural languages, where English has become the standard language for scientific publications, some models will become more dominant and standard. Models can also be trained to speak a given "language." Multimodal models already show today that this is possible when one model generates the same embeddings as another for a different media type. Therefore, it should also be possible to have translation models. That will lead to unified embeddings.

### Point vs. Solid

A vector is still just a point and doesn't match the concept of a resource in a Knowledge Graph. Using a solid could solve that problem. Multiple embeddings for the same resource can be generated to estimate the coverage of the resource. The object can be simplified to a sphere with a center and radius and encoded in an IRI like this:

`emb:model=http%3A%2F%2Fexample.org%2Fmodel&sphere=%5B%5B-0.2%2C0.5%5D%2C0.2%5D`

model: `http://example.org/model`

sphere: `[[-0.2,0.5],0.2]`

There are probably a lot of options for optimizing this. Neighbor resources could be used to draw a clear line between each other.

### Dimension Reduction

Only two dimensions were used in the examples, but in reality, vectors have many more. Generating a solid for fewer dimensions is much easier and requires fewer bytes to express in an IRI. Dimension reduction for specific use cases is very common, but we need a generic approach.

One of them got more attention recently, since [OpenAI](https://supabase.com/blog/matryoshka-embeddings) and [Nomic](https://blog.nomic.ai/posts/nomic-embed-matryoshka) started using [Matryoshka](https://arxiv.org/abs/2205.13147) embeddings. It condenses the most important part of the semantics into the first part of the vector. This is done in varying density levels, from high density to low, where an increasing part of the vector is used. A model that generates this kind of vector can be achieved by changing the loss function used in the training. Normally, the function would be applied only to the full vector. With Matryoshka, the loss is calculated for vectors of varying sizes, and the results are added together, as shown below:

![matryoshka weights](/files/2024/unified-landscape/matryoshka.svg)
_Matryoshka calculates the loss for varying lengths and adds them together. The aggregated impact on the loss function is shown in blue._

Very handy for similarity search, it allows vectors to be truncated to fixed lengths with the power of two.

Variable length vectors would be more useful for the compression use case. A smart algorithm could cut off the last part by checking that the kept part doesn't overlap with other resources. An approach based on a weighted dot product could give similar results but doesn't have the limitation that the vector can only be truncated by the power of two. The weight for each element could be selected individually, as shown below:

![weighted-dot-product](/files/2024/unified-landscape/weighted-dot-product.svg)
_Weighted dot product would calculate the loss where each element is weighted individually. The aggregated impact on the loss function is shown in blue. A linear function was used for the weights, but other functions could also be employed._

## Conclusion

Named nodes and embeddings are the essential building blocks for knowledge graphs and language models. Based on their features, they are used for different use cases. There are already ways to combine both worlds, but not in a native or efficient way. Efficiently combined, they would be even more powerful. There are still some problems to solve, but I hope this blog post has sparked your interest, and I invite you to share your thoughts, insights, and questions on LinkedIn or the GitHub discussions. Furthermore, maybe some of you delve deeper and are interested in doing research in this field.
