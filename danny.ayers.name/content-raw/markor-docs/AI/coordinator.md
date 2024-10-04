Using smaller specialist models for specialist tasks makes sense. Loading on-(inferred)-demand is probably a necessity for local systems right now. 

I've got similar plans in (slow) progress, but am kicking the can down the road for many of the trickier/expensive practical problems. For example, a coordinator *could* be seen as yet another specialist, but without a bit more experience in what it needs to be able to do, a big remote monolith like the OpenAI API with dedicated prompt seems a reasonable placeholder.

But it does seem to me that smaller, distributed, specialist models are the near future. LLMs in this view are really a special case themselves - really good at human text comms/hopeless at maths.

Effectively using an agent paradigm and with appropriate communication protocols it's wide open. Going back to the coordinator component, this wouldn't need to do much if agents were reasonably good at self-description. Potentially they could be self-organising.

Starting from scratch, all this would be a seriously hard problem. But we've already got an enormous distributed information system in place with the Web. There are tried & tested specs for structured data & knowledge representation, and already loads of this stuff deployed on the Web as Linked Data. So over on the wiring side of things I reckon it mostly calls for lots of trial & error, minor extensions to well-known things, figure out how best to join the dots with LLMs etc. 
