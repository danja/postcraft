ping -c 3 -s 1464 distrowatch.com

wlx1cbfce60f911: flags=4163<UP,BROADCAST,RUNNING,MULTICAST> mtu 1500
inet 192.168.0.10 netmask 255.255.255.0 broadcast 192.168.0.255
ether 1c:bf:ce:60:f9:11 txqueuelen 1000 (Ethernet)
RX packets 37900 bytes 43545711 (43.5 MB)
RX errors 0 dropped 0 overruns 0 frame 0
TX packets 23912 bytes 4354034 (4.3 MB)
TX errors 0 dropped 0 overruns 0 carrier 0 collisions 0

add 28 for headers

danny@danny-desktop:~$ sudo ifconfig | grep mtu
enp2s0: flags=4099<UP,BROADCAST,MULTICAST> mtu 1500
lo: flags=73<UP,LOOPBACK,RUNNING> mtu 65536
virbr0: flags=4099<UP,BROADCAST,MULTICAST> mtu 1500
wlx1cbfce60f911: flags=4163<UP,BROADCAST,RUNNING,MULTICAST> mtu 1500

sudo ifconfig wlx1cbfce60f911 mtu 1428

(ChatGPT ftw!).
