cd ~/PROJECTS/blog-with-fsd/
npm i
npm run build apiUrl="https://vmishakin.ru/api"
rm -rf /var/www/pena-blog-prod/html
mv build /var/www/pena-blog-prod/html
