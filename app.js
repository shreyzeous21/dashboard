const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// we have to add here the event listner

// show sidebar down
menuBtn.addEventListener('click',() => {
    sideMenu.style.display = 'block'
});

// close sidebar down
closeBtn.addEventListener('click',() => {
    sideMenu.style.display = 'none'
});

// change theme down
themeToggler.addEventListener('click',() => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});


// for Orders
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent =
    `
    <td>${order.projectName}</td>
    <td>${order.projectNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
    <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});