// const cars = [
//     {
//         preview:
//             'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400',
//         original:
//             'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200',
//         description: 'Porsche 911',
//     },
//     {
//         preview:
//             'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=400',
//         original:
//             'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=1200',
//         description: 'Classic Sports Car',
//     },
//     {
//         preview:
//             'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
//         original:
//             'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200',
//         description: 'Modern Sports Car',
//     },
//     {
//         preview:
//             'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
//         original:
//             'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
//         description: 'Chevrolet Camaro',
//     },
//     {
//         preview:
//             'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=400',
//         original:
//             'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200',
//         description: 'Red Sports Car',
//     },
//     {
//         preview:
//             'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=400',
//         original:
//             'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1200',
//         description: 'Luxury Car',
//     },
// ];


// const gallery = document.querySelector(".gallery")
// gallery.innerHTML = images.reduce((html, image) => html + `
// <li class="gallery-item"> <a class="gallery-link"
// href="${image.original}">
// <img class="gallery-image" src="${image.preview}"
// data-source="${image.original}"
// alt="${image.description}"/>
// </a>
// </li>
// `, "")

// const imageGallery = gallery.addEventListener("click", (event) => {
//     event.preventDefault;
//     if (event.target.nodeName !== "IMG") {
//         return
//     }

//     const galleryOriginal = event.target.dataset.source
//     const description = event.target.alt
//     console.log(galleryOriginal)



//     const imageList = basicLightbox.create(`
//         <img src="${image.original}" alt="${images.description}">`
//     )
//     imageList.show()


// })


