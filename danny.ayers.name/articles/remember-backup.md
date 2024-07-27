A reminder to everyone - if you don't make backups of things, you _will_ lose them, sooner or later.

I've been stung more times than I care to mention. Sheer stupidity.

For anything you care about you should have _at minimum_ two local copies on different systems, one remote.

Most of my code exists in the working area of my desktop computer, on a second drive in the same machine and periodically I copy over to an external USB drive (a backup hard drive is ridiculously cheap - no need for performance, just space).

Plus remote copies at GitHub (I put any old junk there, why not) and most of it on my remote server too (I use GitHub a lot for deployment - push from here, pull from there). I've never really spent much time with the collaborative side of Git, but for backup, it rocks. Except for large files.

Photos/videos, I'm not so set up for yet. But I've got SyncThing setup up between my phone and desktop and try to remember the second internal drive and USB one. , and also pay a bit for Google Drive. That latter seems very bad value for money, but I've not yet found the energy to find a better alternative.

Even if you you have things you don't think is worth taking the time over to back up, just do it by default. It's virtually zero effort once you've got systems in place. And I bet next year you will find yourself hunting for that unimportant stuff.

Good filing/naming, good organisation, yeah, that's good for sure. But that's much lower priority than just making sure you don't lose stuff physically.

My music room stuff is only currently backed up on a second internal drive after every session, and USB external on the rare occasions. A few years ago the computer I used for that had a total meltdown, lost most of 2 years worth of work. When it sank in what had happened (almost immediately), generally mild-mannered Danny Boy smashed the guitar I had on my knee on the mixer. Broke the head off the guitar, huge dent & breakage for mixer. Fixing the guitar wasn't that onerous, but it took me _many_ hours to lessen the dent in the mixer, repair the broken PCB tracks inside.

Psychologically that was interesting. I spent about a week in a mute daze of shock. Then a sweet defence mechanism kicked in - if [thing] was any good, I could always recreate, this time _better_. Net positive experience. So although I do need to set up systems as above for that side of things, I won't won't lose any sleep.

So anyway, I'm prompted to write this after putting a script in place for a basic backup to second HD on some code that has data too big for GitHub with it (.gitignored). If I've got it right, these rsync options will propogate modified file contents on the original, but not file/dir deletes. As and when I get around to it I'll put it in as a cron job.

A similar script could just as easily do the same ssh'ing into my remote server, but 'easily recreate' is there in my code & notes.

```
#!/bin/bash

SOURCE_DIR="/home/danny/HKMS/postcraft/"
DEST_DIR="/space/postcraft-rsync"

rsync -av --update "$SOURCE_DIR" "$DEST_DIR"

echo "Done that."
```
