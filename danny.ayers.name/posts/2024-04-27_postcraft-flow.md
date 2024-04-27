# Postcraft Flow : 2024-04-27

This is a work in progress, a sketch of the flow for the Postcraft pipeline. It's basically a Static Site Builder. It appears complex here, but that's a **feature!** Well, not exactly. The individual operations, which would typically appear as hardwired functions in a dedicated site builder are here implemented as independent services, connected at runtime via a definition that's expressed declaratively.

A Turtle file `transmission.ttl` defines the general topology. Configuration details for the individual services are in `services.ttl`. The configuration specific to the site being built (dirs,templates etc) is supplied in `manifest.ttl` which is passed as a command-line argument.

Right now the pipeline is a simple sequence of steps. The steps are executed in order, with the output of each step being the input to the next. There are forks in the pipeline at `PostcraftDispatcher` and `DirWalker`, but as the subsequent services are still just sequences of steps, it can still be thought of as a sequence.

In `transmission.ttl` the topology is defined as an `rdf:List` (confusingly aka an RDF Collection, see [Ordered data in RDF](https://ontola.io/blog/ordered-data-in-rdf)) using the concise Turtle syntax:

```
:postcraft a trm:Pipeline ;
trm:pipe (:s1 :s2 :s3 :s4 :s5 :s6 :s7 :s8 :s9 :s10 :s11) .
```

The services are then, in turn:

#### :s1 a :ContextReader . # the manifest

Reads a Turtle document. The configuration is used to set up the context for the rest of the pipeline.

#### :s2 a :ConfigMap . ### use services.ttl?

#### :s3 a :FileReader ; # the template

trm:configKey :contextKey .

#### :s4 a :NOP .

No operation - a utility service that does nothing, helpful when making provisional changes to the pipeline.

#### :s5 a :PostcraftDispatcher . # dispatch each content group

process forks here

#### :s6 a :DirWalker .

process forks here

which reads the content directory and dispatches each file entry to be processed individually.

#### :s7 a :FileReader . # the markdown content

#### :s8 a :PostcraftPrep .

#### :s9 a :MarkdownToHTML .

#### :s10 a :Templater .

#### :s11 a :FileWriter .

### Utility Services

#### :NOP .

#### :s4 a :Halt .

##### :s3 a :ShowMessage .
