----
update on that - my target the other day was to get LDAP running and be able to connect to it from ApacheDirectoryStudio on my desktop. That's a full-on gui built on Eclipse, kinda must-have, the command line tools are painfully 1990s greybeard.

Got there, but it took me *ages* , largely because I'd overdone firewalls (ufw on the server itself, plus one outside provided free by linode, the hosting co.). I still need to set up TLS, but that shouldn't be too painful now I have things either end to work against.

I just checked what I'd need for ldap with ejabberd (the go-to server for XMPP). That's the one I had running before my server got screwed.   
"ejabberd has built-in LDAP support. You can authenticate users against LDAP server and use LDAP directory as vCard storage." Yay!

Incidentally, ejabberd can do MQTT, the IoT-oriented proto. I can't remember if you've mentioned this before, but it seemed likely that someone had hooked up Furbies. Yup :
https://github.com/CrazyRobMiles/FurbyESP32
Ok, Furby dev has squeezed itself into my queue.
How have you been sourcing them? If I look on eBay.it which model to go for?