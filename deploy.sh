yarn build
git add -A
git commit -m "`date +'%Y-%m-%d'` update"
git push origin main
./node_modules/gh-pages/bin/gh-pages.js -d build