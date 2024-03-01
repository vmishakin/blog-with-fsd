cd ~/PROJECTS/blog-with-fsd/
npm i
npm run build
rm -rf /var/www/pena-blog-prod/html
mv build /var/www/pena-blog-prod/html
