INSTALLER_DIR="$HOME/.App-Installer"
REPO_URL="https://github.com/phoenixbyrd/App-Installe>
DESKTOP_DIR="$HOME/Desktop"
APP_DESKTOP_FILE="$DESKTOP_DIR/app-installer.desktop" 
# Check if the directory already exists
if [ ! -d "App-Installer" ]; then                        # Directory doesn't exist, clone the repository
    git clone "$REPO_URL" "$INSTALLER_DIR"
    
git clone --depth 1 https://github.com/phoenixbyrd/App-Installer .App-Installer

cd .App-Installer
git fetch --unshallow