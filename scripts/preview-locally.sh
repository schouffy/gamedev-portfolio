# Sourcing nvm
. ~/.nvm/nvm.sh

# build
nvm install 16.20.2 
npm run build

npm install -g serve
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem below
npm run serve