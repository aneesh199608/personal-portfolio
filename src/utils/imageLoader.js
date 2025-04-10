export function registerImages(imageMap) {
    document.querySelectorAll('[data-img]').forEach(img => {
      const key = img.dataset.img;
      if (imageMap[key]) {
        img.src = imageMap[key];
      } else {
        console.warn(`Image key '${key}' not found in imageMap`);
      }
    });
  }
  