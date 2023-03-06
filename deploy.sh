#!\bin\sh
sudo apt update && sudo apt upgrade -y

curl -fsSL https://deb.nodesource.com/setup_19.x | sudo bash - && sudo apt install -y nodejs
sudo npm install --global yarn
sudo yarn add express.js multer cors
sudo yarn add -g nodemon