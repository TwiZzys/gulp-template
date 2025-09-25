// imageFormatsCheck.js
const htmlEl = document.documentElement;

// Перевірка WebP через canvas
const supportsWebP = () => {
    try {
        const canvas = document.createElement('canvas');
        if (!canvas.getContext) return false;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } catch {
        return false;
    }
}

// Перевірка AVIF через Image (з твоїм base64)
const supportsAvif = (callback) => {
    const img = new Image();
    img.onload = () => callback(img.width > 0 && img.height > 0);
    img.onerror = () => callback(false);
    img.src =
        "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGNbWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAsaWxvYwAAAABEAAACAAEAAAABAAAByQAAABoAAgAAAAEAAAG1AAAAFAAAAEJpaW5mAAAAAAACAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAAAaaW5mZQIAAAAAAgAAYXYwMUFscGhhAAAAABppcmVmAAAAAAAAAA5hdXhsAAIAAQABAAAAw2lwcnAAAACdaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQBBYYHAAAANm1kYXQSAAoEGAAGFTIKGAAooQACIR3LYBIACggYAAYIEBA0IDIMGAAKKKKEAACwE0vY";

}

// Додаємо клас WebP / no-webp
htmlEl.classList.add(supportsWebP() ? 'webp' : 'no-webp');

// Перевіряємо AVIF і додаємо клас
supportsAvif((supported) => {
    htmlEl.classList.add(supported ? 'avif' : 'no-avif');
});
