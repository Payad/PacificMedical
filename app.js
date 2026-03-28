
const links = document.querySelector(".links");
const dropDown = document.querySelector(".drop-down");

dropDown.addEventListener('click', function() {
    if (links.classList.contains("show-links")) {
        links.classList.toggle("show-links");
    } else if (!links.classList.contains("show-links")) {
        links.classList.toggle("show-links");
    }
});

// show-sub-link functionality
const plusBtn = document.querySelectorAll(".plus1");
const subLinks = document.querySelectorAll(".sub-links");
const headerLink = document.querySelectorAll(".header-link");

// plusBtn.forEach((link) => {

// })

//sublinks dropdown
subLinks.forEach(function(link) {
    // const btn = link.querySelector('.plus1');
    const prevEl = link.previousElementSibling; //<a> link
    const btn = prevEl.querySelector(".plus1"); //selecting btn
    // console.log(btn);

    btn.addEventListener('click', function() {
        link.classList.toggle("show-sublinks");

        subLinks.forEach(function (item) {
            if (item !== link) {
                item.classList.remove("show-sublinks");
            };
        });
    });

    //
    // btn.addEventListener('click', function() {
    //     // const link = subLinks.querySelector('.sub-links');
    //     // console.log(link);
    //     link.classList.toggle('show-sublinks')
    //     // subLinks.classList.toggle('show-sublinks')
    //     // headerLink.forEach(function(item) {
    //     //     // console.log(item);
    //     //     // if (item !== link) {
    //     //     //     item.classList.remove('show-sublinks')
    //     //     // }
    //     //     subLinks.classList.toggle('show-sublinks')
    //     // })
    // })
});

// plusBtn.forEach(function(question) {
//     const btn = question.parentElement.parentElement;
//     // console.log(btn);
//     btn.addEventListener('click', function() {

//     });
// })

// for (let i = 0; i < plusBtn.length; i++) {
//     const plus = plusBtn[i];
//     plus.addEventListener('click', function(e) {
//         console.log(e);
//         // const btns = e.target.parentElement.parentElement;
//         // console.log(btns);
//         if(subLinks.classList.contains('show-sublinks')) {
//                     subLinks.classList.toggle('show-sublinks');
//                 } else if (!subLinks.classList.contains('show-sublinks')) {
//                     subLinks.classList.toggle('show-sublinks')
//                 }
//     })
// }

// plus.addEventListener('click', function() {

// })

// plusBtn.addEventListener('click', function() {
//     if(subLinks.classList.contains('show-sublinks')) {
//         subLinks.classList.toggle('show-sublinks');
//     } else if (!subLinks.classList.contains('show-sublinks')) {
//         subLinks.classList.toggle('show-sublinks')
//     }
// });



