const fs = require('fs');
const path = require('path');

const dir = __dirname;
const oldEmail = 'contact@gsfh.org';
const newEmail = 'gsfhhaiti26@gmail.com';

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes(oldEmail)) {
            content = content.split(oldEmail).join(newEmail);
            fs.writeFileSync(filePath, content);
            console.log(`Replaced email in ${file}`);
        }
    }
});
