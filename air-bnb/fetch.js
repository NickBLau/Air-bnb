// const destinationlist = document.querySelector('.destinationlist')

// fetch('./data/destinations.json')
// .then(response => response.json())
// .then(data =>{
//     data.destinations.forEach(destination => {
//         destinationlist.innerHTML += `
//         <figure id="${destination.id}">
//         <img src="./img/${destination.image}" alt="">
//         <div>
//             <span><i class="${
//                 localStorage.getItem(destination.id)
//                 ? "fa-solid fa-heart"
//                 : "fa-regular fa-heart"
//             }
//                 "></i></span>
//             <a href="/destination.html?id=${destination.id}">More</a>
//         </div>
//     </figure>`

//     })
//     console.log(data.destinations[0]);
// })
// ;

const destinationslist = document.querySelector('.destinationslist')

fetch('./data/destinations.json')
    .then((response) => response.json())
    .then(data => {
        // console.log(data.destinations[0]);
        data.destinations.forEach(destination => {
            destinationslist.innerHTML += `
            <figure id="${destination.id}">
            <img src="./img/${destination.image}" alt="">
            <div>
            <span><i class="fa-regular fa-heart"></i></span>
            <a href="/destination.html?id=${destination.id}">More</a>
            </div>
            </figure>
            `;
        
        });
    });
