const fs = require('fs');
const path = require('path');

const dir = __dirname;

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.html')) {
        let content = fs.readFileSync(path.join(dir, file), 'utf8');
        
        // Regex to match "Faire un don" links and update href
        content = content.replace(/href="contact\.html"([^>]*>Faire un don<\/a>)/g, 'href="contact.html#dons"$1');
        
        fs.writeFileSync(path.join(dir, file), content);
        console.log(`Updated ${file}`);
    }
});
