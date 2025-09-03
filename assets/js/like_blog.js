document.addEventListener('DOMContentLoaded', () => {
    const likeIcons = document.querySelectorAll('.like-icon');

    likeIcons.forEach(likeIcon => {
        likeIcon.addEventListener('click', () => {
            const blogId = likeIcon.getAttribute('data-blog');
            const url = `/like_blog/${parseInt(blogId)}/`;
            
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.liked) {
                    likeIcon.classList.remove('empty-heart');
                    likeIcon.classList.add('fa-heart');
                } else {
                    likeIcon.classList.add('empty-heart');
                    likeIcon.classList.remove('fa-heart');
                }

                // Actualizar el contador de "likes"
                const likeCount = document.getElementById(`like-count-${blogId}`);
                if (likeCount) {
                    likeCount.innerHTML = data.like_count;
                }
            })
            .catch(error => {
                console.error('Error al realizar la solicitud fetch:', error);
            });
        });
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');

//     if (likeIcon) {
//         likeIcon.onclick = () => {
//             const blogId = likeIcon.getAttribute('data-blog');
//             const url = `/like_blog/${parseInt(blogId)}/`;
//             fetch(url, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//         };
//     } else {
//         console.error('Elemento likeIcon no encontrado en el DOM.');
//     }
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcons = document.querySelectorAll('.like-icon');
//     likeIcons.forEach(likeIcon => {
//         const likeCount = likeIcon.closest('.post-share').querySelector('.like-count');

//         likeIcon.onclick = () => {
//             const blogId = likeIcon.getAttribute('data-blog');
            
//             if (!blogId || isNaN(parseInt(blogId))) {
//                 console.error('Atributo data-blog no encontrado o no es un número válido');
//                 return;
//             }

//             const url = `/like_blog/${parseInt(blogId)}/`;

//             fetch(url, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.liked) {
//                     likeIcon.classList.remove('empty-heart');
//                     likeIcon.classList.add('fa-heart');
//                 } else {
//                     likeIcon.classList.add('empty-heart');
//                     likeIcon.classList.remove('fa-heart');
//                 }
//                 likeCount.innerHTML = data.like_count;
//             })
//             .catch(error => {
//                 console.error('Error al realizar la solicitud fetch:', error);
//             });
//         };
//     });
// });



// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');
    
//     // Verificar si likeCount existe y si su valor puede ser convertido a un número
//     if (!likeCount || isNaN(parseInt(likeCount.innerHTML))) {
//         console.error('Elemento likeCount no encontrado o su contenido no es un número');
//         return;
//     }

//     // Verificar si likeIcon existe
//     if (!likeIcon) {
//         console.error('Elemento likeIcon no encontrado');
//         return;
//     }

//     likeIcon.onclick = () => {
//         const blogId = likeIcon.getAttribute('data-blog');
        
//         // Verificar si blogId es válido
//         if (!blogId || isNaN(parseInt(blogId))) {
//             console.error('Atributo data-blog no encontrado o no es un número válido');
//             return;
//         }

//         const url = `/like_blog/${parseInt(blogId)}/`;

//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.liked) {
//                 likeIcon.classList.remove('empty-heart');
//                 likeIcon.classList.add('fa-heart');
//             } else {
//                 likeIcon.classList.add('empty-heart');
//                 likeIcon.classList.remove('fa-heart');
//             }
//             likeCount.innerHTML = data.like_count;
//         })
//         .catch(error => {
//             console.error('Error al realizar la solicitud fetch:', error);
//         });
//     };
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');
    
//     // Verificar si likeCount existe y si su valor puede ser convertido a un número
//     if (!likeCount || isNaN(parseInt(likeCount.innerHTML))) {
//         console.error('Elemento likeCount no encontrado o su contenido no es un número');
//         return;
//     }

//     let likeCountInitial = parseInt(likeCount.innerHTML);

//     // Verificar si likeIcon existe
//     if (!likeIcon) {
//         console.error('Elemento likeIcon no encontrado');
//         return;
//     }

//     likeIcon.onclick = () => {
//         const blogId = likeIcon.getAttribute('data-blog');
        
//         // Verificar si blogId es válido
//         if (!blogId || isNaN(parseInt(blogId))) {
//             console.error('Atributo data-blog no encontrado o no es un número válido');
//             return;
//         }

//         const url = `/like_blog/${parseInt(blogId)}/`;

//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.liked) {
//                 likeIcon.classList.remove('empty-heart');
//                 likeIcon.classList.add('fa-heart');
//                 likeCountInitial++;
//             } else {
//                 likeIcon.classList.add('empty-heart');
//                 likeIcon.classList.remove('fa-heart');
//                 likeCountInitial--;
//             }
//             likeCount.innerHTML = data.like_count;
//         })
//         .catch(error => {
//             console.error('Error al realizar la solicitud fetch:', error);
//         });
//     };
// });



// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');
//     let likeCountInitial = parseInt(likeCount.innerHTML);

//     if (!likeIcon) {
//         console.error('Elemento likeIcon no encontrado');
//         return;
//     }

//     likeIcon.onclick = () => {
//         const blogId = likeIcon.getAttribute('data-blog');
//         const url = `/like_blog/${parseInt(blogId)}/`;
//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.liked) {
//                 likeIcon.classList.remove('empty-heart');
//                 likeIcon.classList.add('fa-heart');
//                 likeCountInitial++;
//             } else {
//                 likeIcon.classList.add('empty-heart');
//                 likeIcon.classList.remove('fa-heart');
//                 likeCountInitial--;
//             }
//             likeCount.innerHTML = data.like_count;
//         })
//         .catch(error => {
//             console.error('Error al realizar la solicitud fetch:', error);
//         });
//     };
// });



// likeIcon.onclick = () => {
//     const blogId = likeIcon.getAttribute('data-blog');
//     const url = `/like_blog/${parseInt(blogId)}/`;
//     fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.liked) {
//             likeIcon.classList.remove('empty-heart');
//             likeIcon.classList.add('fa-heart');
//             likeCountInitial++;
//         } else {
//             likeIcon.classList.add('empty-heart');
//             likeIcon.classList.remove('fa-heart');
//             likeCountInitial--;
//         }
//         likeCount.innerHTML = data.like_count;
//     })
//     .catch(error => {
//         console.error('Error al realizar la solicitud fetch:', error);
//     });
// };


// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');

//     if (!likeIcon) {
//         console.error('likeIcon element not found');
//         return;
//     }

//     likeIcon.onclick = () => {
//         const blogId = likeIcon.getAttribute('data-blog');
//         const url = `/like_blog/${parseInt(blogId)}/`;
//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => relikeCountInitial++;sponse.json())
//         .then(data => {
//             // Actualizar el icono de "like" y el contador de "likes"
//             if (data.liked) {
//                 likeIcon.classList.remove('empty-heart');
//                 likeIcon.classList.add('fa-heart');
//             } else {
//                 likeIcon.classList.add('empty-heart');
//                 likeIcon.classList.remove('fa-heart');
//             }
//             likeCount.innerHTML = data.like_count;
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//         });
//     };
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');
//     let likeCountInitial = parseInt(likeCount.innerHTML);

//     if (!likeIcon) {
//         console.error('likeIcon element not found');
//         return;
//     }

//     likeIcon.onclick = () => {
//         const blogId = likeIcon.getAttribute('data-blog');
//         const url = `/like_blog/${parseInt(blogId)}/`;
//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Actualizar el icono de "like" y el contador de "likes"
//             if (data.liked) {
//                 likeIcon.classList.remove('empty-heart');
//                 likeIcon.classList.add('fa-heart');
//                 likeCountInitial++;
//             } else {
//                 likeIcon.classList.add('empty-heart');
//                 likeIcon.classList.remove('fa-heart');
//                 likeCountInitial--;
//             }
//             likeCount.innerHTML = likeCountInitial;
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//         });
//     };
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');
//     let likeCountInitial = parseInt(likeCount.innerHTML);

//     if (!likeIcon) {
//         console.error('likeIcon element not found');
//         return;
//     }

//     likeIcon.onclick = () => {
//         const blogId = likeIcon.getAttribute('data-blog');
//         const url = `/like_blog/${parseInt(blogId)}/`;
//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Actualizar el icono de "like" y el contador de "likes"
//             if (data.liked) {
//                 likeIcon.classList.remove('empty-heart');
//                 likeIcon.classList.add('fa-heart');
//             } else {
//                 likeIcon.classList.add('empty-heart');
//                 likeIcon.classList.remove('fa-heart');
//             }
//             // likeCountInitial = data.like_count;
//             // likeCount.innerHTML = likeCountInitial;
//             likeCount.innerHTML = data.like_count;
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//         });
//     };
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');

//     if (!likeIcon) {
//         console.error('likeIcon element not found');
//         return;
//     }

//     likeIcon.onclick = () => {
//         const blogId = likeIcon.getAttribute('data-blog');
//         const url = `/like_blog/${parseInt(blogId)}/`;
//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Actualizar el icono de "like" y el contador de "likes"
//             if (data.liked) {
//                 likeIcon.classList.remove('empty-heart');
//                 likeIcon.classList.add('fa-heart');
//             } else {
//                 likeIcon.classList.add('empty-heart');
//                 likeIcon.classList.remove('fa-heart');
//             }
//             likeCount.innerHTML = data.like_count;
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//         });
//     };
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');

//     if (!likeIcon) {
//         console.error('likeIcon element not found');
//         return;
//     }

//     likeIcon.onclick = () => {
//         const blogId = likeIcon.getAttribute('data-blog');
//         const url = `/like_blog/${parseInt(blogId)}/`;
//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.liked) {
//                 likeIcon.classList.remove('empty-heart');
//                 likeIcon.classList.add('fa-heart'); // Ensures the icon is filled when liked
//             } else {
//                 likeIcon.classList.add('empty-heart');
//                 likeIcon.classList.remove('fa-heart'); // Ensures the icon is empty when not liked
//             }
//             likeCount.innerHTML = data.like_count;
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//         });
//     };
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');

//     if (!likeIcon) {
//         console.error('likeIcon element not found');
//         return;
//     }

//     likeIcon.onclick = () => {
//         const blogId = likeIcon.getAttribute('data-blog');
//         const url = `/like_blog/${parseInt(blogId)}/`;
//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.liked) {
//                 likeIcon.classList.remove('empty-heart');
//                 likeIcon.classList.add('fa-heart'); // Ensures the icon is filled when liked
//             } else {
//                 likeIcon.classList.add('empty-heart');
//                 likeIcon.classList.remove('fa-heart'); // Ensures the icon is empty when not liked
//             }
//             likeCount.innerHTML = data.like_count;
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//         });
//     };
// });


// const likeIcon = document.getElementById('like-icon');
// const likeCount = document.getElementById('like-count');


// likeIcon.onclick = () => {
//     const blogId = likeIcon.getAttribute('data-blog');
//     const url = `/like_blog/${parseInt(blogId)}/`;
//     fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json'
//         }
//     })
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         if(data.liked) {
//             likeIcon.classList.remove('empty-heart');
//         }
//         else {
//             likeIcon.classList.add('empty-heart');
//         }
//         likeCount.innerHTML = data.like_count;
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');

//     if (!likeIcon) {
//         console.error('likeIcon element not found');
//         return;
//     }

//     console.log('likeIcon element found', likeIcon);

//     likeIcon.onclick = () => {
//         console.log('likeIcon clicked');
//         const blogId = likeIcon.getAttribute('data-blog');
//         console.log('Blog ID:', blogId);
//         const url = `/like_blog/${parseInt(blogId)}/`;

//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Response data:', data);
//             if (data.liked) {
//                 likeIcon.classList.remove('empty-heart');
//             } else {
//                 likeIcon.classList.add('empty-heart');
//             }document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');

//     if (!likeIcon) {
//         console.error('likeIcon element not found');
//         return;
//     }

//     console.log('likeIcon element found', likeIcon);

//     likeIcon.onclick = () => {
//         console.log('likeIcon clicked');
//         const blogId = likeIcon.getAttribute('data-blog');
//         console.log('Blog ID:', blogId);
//         const url = `/like_blog/${parseInt(blogId)}/`;

//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Response data:', data);
//             if (data.liked) {
//                 likeIcon.classList.remove('empty-heart');
//             } else {
//                 likeIcon.classList.add('empty-heart');
//             }
//             likeCount.innerHTML = data.like_count;
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//         });
//     };
// });

//         headers: {
//             'Content-type': 'applicatin/json'
//         }
//     })
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         if(data.liked) {
//             likeIcon.classList.remove('empty-heart');
//         }
//         else {
//             likeIcon.classList.add('empty-heart');
//         }
//         likeCount.innerHTML = data.like_count;
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const likeIcon = document.getElementById('like-icon');
//     const likeCount = document.getElementById('like-count');

//     if (likeIcon) {
//         likeIcon.onclick = () => {
//             const blogId = likeIcon.getAttribute('data-blog');
//             const url = `/like_blog/${parseInt(blogId)}/`;
//             fetch(url, {
//                 method: 'GET',
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//         };
//     } else {
//         console.error('likeIcon element not found');
//     }
// });





// const likeIcon = document.getElementById('like-icon');
// const likeCount = document.getElementById('like-count');


// likeIcon.onclick = () => {
//     const blogId = likeIcon.getAttribute('data-blog');
//     const url = `/like_blog/${parseInt(blogId)}/`;
//     fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json'
//         }
//     })
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }