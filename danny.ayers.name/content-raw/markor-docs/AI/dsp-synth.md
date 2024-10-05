DSP experimenting on phone (inc. ChatGPT)

The post by u/StopFamous5415 mentioning DSP for music synths last night reminded me of something I wanted to look into, but by then I was feet-up on the couch.

I started by asking ChatGPT about simulating birdsong. It's an interesting problem because bird vocal anatomy is very different from that of mammals. The tone generator (syrinx) is at the bottom of a resonant pipe (trachea). That pipe splits (into the lungs), so two simultaneous tones are possible.

Anyway, after a few prompts, ChatGPT gave me some Python. To run on an Android phone: 

Install F-Droid - an open source (free) app store, from there, Install termux - terminal emulator/Linux environment (no root needed).

Termux uses a package manager pkg, seems like apt (which is also available) but for things specifically built for Android. It seems best to try pkg first, then apt, only then any more specific package manager like pip (for Python) or npm (for node JavaScript).

I think these were the things I had to install -

* pkg install build-essential
* pkg install python3
* pkg install python-numpy
* pkg install python-scipy
* apt install matplotlib

It takes a long time!

It appears that matplotlib images can be displayed from inside termux, but I haven't yet tried that, I just used :

plt.savefig('birdy.png')

Also to access files from outside termux in a regular file manager, run -

* termux-setup-storage

(You might also need 
* pkg install termux-am 
)
This creates a linked dir, under termux as -

storage/shared/

Any files you want outside, create/copy them there.

Not sure which of these were actually needed, but they were in my history :

*  pkg install libandroid-spawn
*  pkg install patchelf 
*  pkg install ninja 
*  pkg install distutils

I can't find where I installed this, but to play sounds in termux there's mpv, eg.
```
mpv birdy.wav
```

There might be something more convenient, but I pasted ChatGPT's Python into the nano editor in termux (it has syntax highlighting).

Ok, it's a lot of setting up, but handy if you want to play with DSP in bed.

Loads of other languages are available in termux - eg. Octave, if you want Matlab-like code.

A tip if you like JavaScript, in ChatGPT4 there's Simon Willison's 'Javascript Code Interpreter' GPT which allows ChatGPT to run code internally. It uses Deno which is like nodejs but has slightly different modules (annoying!). Ymmv but I found it handy to create & test little bits & pieces.
