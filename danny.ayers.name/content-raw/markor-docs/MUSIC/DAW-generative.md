I just saw this over on r/generative. 

https://www.reddit.com/r/generative/s/qw8xC4B1Hz

u/Aagentah is developing a system built on Electron.js that (so far) uses Three.js to create visuals from music made in Ableton.

I'd like to experiment with generative from music, running it directly from DAW hadn't occurred to me, it seems a brilliant approach. 

But where to start? The wiring looks daunting. How to get realtime data streaming from audio/midi tracks into a separate JavaScript processor/renderer..? 
And the related question - how to capture a video of the rendering?
Maybe there is a plugin/bridging tool that might help? (I use Reaper on Ubuntu btw).

I imagine there are 3 routes to coupling: 

1. *somehow*  hooking directly from Reaper internally (..?) and/or injecting a JS runtime + renderer
2.  hooking into the system-level audio/midi wiring, somewhere around ALSA or Jack
3. Even more loosely-coupled using a streaming protocol like WebSockets

Thoughts or suggestions?