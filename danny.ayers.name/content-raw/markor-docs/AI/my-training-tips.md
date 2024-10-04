I'm preparing for a related kind of problem, getting a GPT to learn a particular data modelling language.
This is untried best-guess advice (in the order it comes to mind after only the first coffee of the day).

I've not read much about the specifics of training for a programming language, but there are plenty of papers on arxiv available. Read!

After you're tired of reading, I'd suggest the first priority will be to pin down exactly what you want the GPT to be able to do. Write code or interpret code? Support question & answer/reference lookup? Will you need a chat interface? 

If you've got loads of resources available then obviously you'll have more options. But in any case, because it will be very time-consuming, (y)our best bet is almost certainly to start small. Do some exploration.

Training from scratch is unrealistic, so you'll be starting with a base model. Full-parameter training from a checkpoint is doable, but could easily get costly in terms of time & $s. That aspect aside, from what I can gather it's probably a bad place to start anyway, it literally introduces a lot of variables. More things to go wrong, like the new training can lead the model to forget desirable things it already knows.

So I reckon in your case (and mine), fine-tuning is the way to go. HuggingFace has libs that cover the leading approaches (QLoRA is the one I'm looking at).

https://github.com/huggingface/peft

But have a good google for examples/tutorials that seem near to what you are after. At lot of folks use a framework like LlamaIndex or Langchain for these kinds of tasks. I've only had the tiniest of plays so can't really judge, but personally I found them confusing, found myself spending more time on learning their way of doing things than the task at hand. Ymmv.

If you've got a workhorse machine at home you could do this locally with llama.cpp or similar. I haven't, so am looking at something like HuggingFace or Colab. I've not yet had a proper look at what services are available, but there do seem to be quite a few alternatives. My own budget is very limited, but I'll be happy to spend a few tens of $s if it will save hours of time.

What to use as a base model? Intuitively it makes sense to find something as close as possible to your particular goal. Check what models are designed for, check what datasets they've been trained on. I'd take benchmark results with a pinch of salt, usually these are cherry-picked to look good.
There are many running instances online available to play with, or you could spin up your own on Colab or whatever. 
My own target for the data thing is a small, very domain-specific tool to use alongside a more general-purpose LLM like ChatGPT or Claude. So I've been trying some of the very small quantized models, running locally with Ollama. (For now I've paused this side, I plan to use Orca 2 as a placeholder - it's nicely methodical - until I've spent more time on the data).
There's a lot of good info of this angle around r/LocalLlama

Oh yeah, data. Research suggests that devoting plenty of time on preparing this pays off. That you've got a bunch of data already is a great start. 
The ultimate shape of the training data you need will depend on your end goal and whatever your starter model prefers. Once you've got a basic idea, you'll probably want to use one of the big LLM APIs to synthesize more for you. It's likely a good idea to make a split, training/test so you can evaluate. 
Automate everything you can.

The programming language domain is an interesting one, because you can potentially put a compiler/interpreter/evaluator in the loop. Perhaps even up inside OpenAI's setup : https://til.simonwillison.net/llms/code-interpreter-expansions

I've not got to this stage yet, but the data language I want the GPT to understand has a well-defined syntax and approach to schemas that allow for validation on several levels. I'm pretty sure I can exploit this in generating training data, even if simply (automatically) filtering ok/not ok. 

I'm trying not to overthink this prematurely, but I suspect there is potential in having *this language* runtime services tied to the language model in deployment (folks must have worked on this kind of thing already - like RAG but with 'calculation' rather than knowledge lookup).

Anyhow, good luck & remember to have fun! Please keep us posted on how you get on.