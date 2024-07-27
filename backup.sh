#!/bin/bash

# danny local, copy to the second drive in this machine

# Source and destination directories
SOURCE_DIR="/home/danny/HKMS/postcraft/"
DEST_DIR="/space/postcraft-rsync"

# Use rsync to perform the backup
rsync -av --update "$SOURCE_DIR" "$DEST_DIR"

echo "Backup completed successfully."
