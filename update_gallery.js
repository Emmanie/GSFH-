const fs = require('fs');
const path = require('path');

const picturesDir = path.join(__dirname, 'pictures');
const galleryFile = path.join(__dirname, 'gallery.html');

fs.readdir(picturesDir, (err, files) => {
    if (err) throw err;

    const images = files.filter(f => f.match(/\.(jpeg|jpg|png|gif)$/i));

    let htmlContent = '\n';
    images.forEach((file, index) => {
        const encodedFile = encodeURIComponent(file).replace(/%20/g, '%20');
        const delay = index % 4; // 0, 1, 2, 3
        const delayAttr = delay > 0 ? ` data-delay="${delay}"` : '';
        const cat = file.toLowerCase().includes('jan') ? 'jan2026' : 'mars2026';
        const displayName = file.replace(/\.(jpeg|jpg|png|gif)$/i, '');

        htmlContent += `            <div class="gallery-item" data-reveal${delayAttr} data-cat="${cat}" data-caption="GSFH - ${displayName}">\n`;
        htmlContent += `                <img src="pictures/${encodedFile}" alt="${displayName}" loading="lazy">\n`;
        htmlContent += `                <div class="gallery-overlay">Actions GSFH</div>\n`;
        htmlContent += `            </div>\n`;
    });

    let content = fs.readFileSync(galleryFile, 'utf8');
    const startMarker = '<!-- ═══ NOUVELLES PHOTOS — Mars 2026 ═══ -->';
    const endMarker = '<!-- Count -->';
    
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf(endMarker);
    
    if (startIndex !== -1 && endIndex !== -1) {
        const newContent = content.substring(0, startIndex + startMarker.length) + '\n' + htmlContent + '\n        </div>\n\n        ' + content.substring(endIndex);
        fs.writeFileSync(galleryFile, newContent);
        console.log(`Updated gallery.html with ${images.length} images.`);
    } else {
        console.log("Markers not found in gallery.html");
    }
});
