New to me : "presque vu" (lit. "almost seen") is used by psychologists for the tip-of-the-tongue phenomenon. 

Ok, it's academese, but I reckon in this case utility trumps linguistic capital. Like "déjà vu", the *foreign* phrase for the concept provides a low-baggage identifier (unless you're French). 

"Tip-of-the-tongue" is a very familiar experience if you're my age, but that phrase ties it to language recall. It seems to me the idea is much more useful decoupled from this specific facet of cognition. Well, useful if you have knowledgebases on your mind.

I encountered a version of the phenomenon yesterday in a coding session with my Artificial Intern -

------
*Claude* :
[[
const stats = await stat(filepath)

message.stats = {
                size: stats.size,
                mode: stats.mode,
                uid: stats.uid,
                ...
]]

*Me* :
"Can't the keys & values be copied across more easily?"

*Claude* :
"Ah yes, you're right!
[[
message.stats = await stat(filepath)
]]
Much simpler!"
------

Full disclosure, my question was genuine, at that moment the *obvious* version hadn't clicked for me. Claude's suggestion was clearly clunky, my head did a little dance around map() before that ^ version surfaced just as I clicked send.

With vanilla LLMs, a couple of strategies for working around presque vu are apparent. One, as above, a second agent has its nose to the code, intervenes when bad smells are detected. Another would be to generate multiple versions - increase temperature maybe - then evaluate, choose the one that fits the requirements with the lowest Kolmogorov complexity (Occam's Razor). 

There are no doubt many more strategies that would help there, but there's no reason to limit the toolkit. 
With trad knowledgebase-augmented LLMs, loads more alternatives become available.

I haven't thought much about the code generation domain, but a design pattern that might fit nicely is exemplified in a simple scenario in my long list of experiments to try in a more chatty context: the LLM agent is introduced to a SPARQL agent which is backed by a graph store containing a chunk of WordNet.

An incoming query has keywords identified (trad NLP) which are passed to the SPARQL WordNet agent to get synonyms. These are replace-merged back into copies of the original query. Each of these is run by the LLM yielding a bunch of candidate responses for subsequent evaluation/selection.

Ok, this crude augmentation could easily be carried out by a vector DB or another LLM. But the logical approach of (graph) DB lookup is far more tractable, predictable, and at a far lower computational cost. Occam's Razor again.

More terms like "presque vu":
https://www.forbes.com/sites/traversmark/2024/02/15/a-psychologist-shares-4-new-types-of-dj-vu/

WordNet-RDF :
https://www.w3.org/TR/wordnet-rdf/

