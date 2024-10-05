Clearly, as 'manifest URL' is defined, these files are expected to appear on the  Web. But there doesn't appear to be an unambiguous means of interpreting their contents without additional out-of-band information.

My apologies if this has been discussed before. I'm fairly ignorant around these parts, which is why I happened to be exploring site manifest specs for a project. Thought I should airdrop this as I fly by.

So, I haven't read the WebArch doc in a long while, but I'm betting it says something like it SHOULD be possible to see what kind of representation something is with the HTTP stack alone. If required the follow-your-nose link protocol can provide more.

Here, there is a media type that would fulfil this role (application/manifest+json). This will typically require the filename to have the .webmanifest extension and the server knowing the association. However, .json is allowed as an option, and I suspect in practice that would be the first choice for most developers (not least because IDEs often key off the extension for syntax highlighting). It's easy to imagine non-compliance even if the manifest were mandated in the spec.

If this was starting from scratch, I'd have strongly recommended using a JSON-LD compatible structure (and media type). Looks a bit too late for that.

 I've only checked using eyes and (unreliable) memory, but I don't think this structure will yield to the common JSON-LD tweak of dropping in an "@context":"http://example.org/spec" attribute so the whole lot can be fed to a standard JSON-LD parser. (May be worth checking.)

Right now I can't think of anything better than inserting a namespace-like URL attribute. At least there'll be something unambiguous there for anything that bothers to look inside. 
An alternative would be to put something in /.well-known/ but that feels a bit convoluted (unless there's something already defined that could be piggy-backed).

But I do reckon this is quite important. If a straightforward disambiguation mechanism can be found, aside from (hand waves) Web best practices, there are fairly immediate practical use cases. Discovery/search should be easier, automatic creation of directory/marketplace listings would be simplified, the data would also be available for immediate use by generic Linked Data tools (akin to DOAP, the RDF Description of a Project spec).

Anyway, I'll leave that with you. I'd better continue today's flight.
