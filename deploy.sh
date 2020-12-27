yarn build
git add -A
git commit -m "`date +'%Y-%m-%d'` update"
git push origin main
yarn deploy