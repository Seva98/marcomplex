# Master
yarn build
git add -A
git commit -m "`date +'%Y-%m-%d'` update"
git push origin main
# gh-pages
#sed -i '' '/^_site/d' .gitignore
git commit -a -m "`date +'%Y-%m-%d'` update"
git push origin `git subtree split --prefix build master --rejoin`:refs/heads/gh-pages --force
#echo "_site" >> .gitignore
