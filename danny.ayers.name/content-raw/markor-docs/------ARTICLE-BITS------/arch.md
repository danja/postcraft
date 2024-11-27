
Book Review: A Philosophy of Software Design

Over the holidays, I've read a few books - among them was **A Philosophy of Software Design** by **John Osterhout**. It has 178 pages and was released in 2018.

This book tries to place certain abstract ideas in the minds of readers, not focussing on a specific language or framework, but rather bringing general ideas to light when designing or maintaining software.

For me, this book is not relevant because it shows "ground-breaking relevations", but because it frames abstract concepts very clearly, attaches concise names to them, and shows their implications. Furthermore, the book does not try to convince anybody of "the one way to do software design", but on the other hand, tries to set the stage for a discussion about design. So if you read the book and disagree, the author will be happy as well :-)

I think this book is especially helpful to more experienced developers, who can relate the explanations to their own experiences.

So what are the core ideas (as I understood them)? Let's summarize them:

## Definition of Complexity

The book defines complexity as **anything related to the structure of a software system that makes it hard to understand or modify.** Then follows an explanation of **symptoms**. Complexity leads to **change amplification**, **cognitive load** and **unknown unknowns**, whereas the last one is the worst.

The book gives two causes for complexity: **Dependencies** and **Obscurity**. The remainder of the book is about how to work with these causes, when to reduce them, etc. The book strives for **obvious design as a goal**.

## Modularization

The book introduces the idea of **deep and shallow modules**, where a deep module has a small interface and a big implementation, and the shallow module vice versa.

![img](igzx1c6cz1b61)

A "module" in this context is anything with a boundary; so you can apply this to classes, but also to methods, microservices or packages. That's so nice about this idea - that it can be applied so generally.

The author makes the case that **deep modules should be universally preferred**, because they hide more information behind their interfae, and thus lead to better information hiding. Then follows the observation that *general-purpose* modules are more deep than modules for a specific task (*special-purpose* modules), so general modules should be preferred (within their bounds - so their API must still fit to your particular use case).

When should modules be merged together and split apart? Again, the rules from above are applied: If a merging results in a simpler interface (and thus a more deep module), this should be preferred. Modules should be split apart if a module mixes different abstractions: When general-purpose and special-purpose functionality resides in the same module, this should be split apart. More general functionality should be pulled downwards (into the lower layers), and more specific functionality upwards (into the upper layers).

That area concludes with extending the common saying of *A module should do one thing*, by extending it to ***A module should do one thing, but do it completely.*** I like this a lot, as it also gives some guidance when features should be merged together.

## Comments and Names

The book also rather extensively talks about comments and names. Though I feel some other books have influenced me more in this area ("Clean Code" by by Robert C. Martin), this book again builds very catchy intuition for this topic. For me, the key findings were that **names should drive intuition**, and thus do not need to be "complete" - and there might be a sweet spot for 2-4 word-names. As I personally have been guilty of 10-word-names sometimes, this is a good advice for me :-)

Because comments should describe non-obvious things when someone else looks at the code, it follows naturally that **comments must have a different abstraction than code**. This means that there are *two fundamentally different kinds of comments:*

1. **Interface comments**, usually in the docblock, should describe high-level intent, and the core idea of the interface. They should **add intuition** for the reader. We should *not* talk about implementation details here.
2. **Implementation comments** should be inline, to explain low-level details. They **add precision**, and explain the **what and why** of a specific code detail.

When I used implementation comments beforehand, it always felt a bit "dirty" - and likewise when I explained a big section "how this class works internally" in the docblock. Having this separation allows for a very clear distinction between the two comment types, and helps writing better comments on both layers.

## Design Process

The book makes the claim that a module should be **designed twice**. This fits well with my observation that we re-built Neos CMS 3 times until I really liked stuff :-)

The recommended design process by the book puts **comments first**, so they are used as the main design tool**.** Then, APIs and Function Signatures should be written, and only at the end the implementation. That's a very actionable advice which I'll certainly experiment with in the upcoming weeks and months - as I feel that too much of my design happens in my head instead of somewhere approachable to others.

While the book places high emphasis and value on good tests, the author makes a controversial claim **against test-driven development,** arguing that this emphasizes a *tactical approach to software development*. This is contrasted with a recommended *strategic approach to software development.* Of course, the world is not black and white here - and to me it was certainly refreshing to read this opinion outside the "mainstream of TDD".

# Summary

I can wholeheartedly recommend this book, especially for people who have themselves developed software for a few years. It's easy to read and quick to grasp the core ideas. The ideas outlined above are explained with practical examples which make the concepts very approachable.

Finally, I think a discussion in the industry about the underpinning philosophies of software design, regardless of specific technologies, approaches, and design patterns, is also a very valuable thing.

Thanks for reading **and looking forward to your comments :-)**

----
[reddit](https://www.reddit.com/r/softwarearchitecture/s/Xhtvyg47ih)