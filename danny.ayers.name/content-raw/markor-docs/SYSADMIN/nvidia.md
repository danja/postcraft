First, make sure your system is fully up to date or you will encounter issues:

sudo add-apt-repository restricted
sudo apt update
sudo apt dist-upgrade
Then reboot.

After a reboot, proceed with the installation:

sudo apt install --install-recommends nvidia-driver-470
When it's done, you will need to reboot to apply the changes.