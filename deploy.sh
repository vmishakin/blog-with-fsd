cd ~/PROJECTS/blog-with-fsd/
npm ci
npm run build apiUrl="https://vmishakin.ru/api"
rm -rf /var/www/pena-blog-prod/html
mv build /var/www/pena-blog-prod/html
