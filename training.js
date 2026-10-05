// function getExpensiveProducts(products) {
//     return products.filter(product => product.price > 500)
// }



// // function applyDiscount(products, discount) {
// //     return products.map(product => ({
// //         ...product,
// //         price: product.price * (1 - discount / 100)
// //     }))
// // }

// // function findUser(users, userId) {
// //     return findUser.find(user => user.id === userId)
// // }

// // class BankAccount {
// //     constructor(owner, balance) {
// //         this.owner = owner
// //         this.balance = balance
// //         this.isRead = false
// //     }

// //     deposit(amount) {
// //         this.balance += amount
// //     }

// //     withdraw(amount) {
// //         this.balance -= this.amount
// //     }

// //     getBalance() {
// //         return this.balance
// //     }

// }


// class Book {

//     constructor(title, author, pages) {
//         this.title = title
//         this.author = author
//         this.pages = pages
//     }

//     toggleRead() {
//         this.isRead = !this.isRead
//     }

//     getInfo() {
//         return `${this.title}, ${this.author}, ${this.pages}`
//     }
// }


// class ShoppingCart {
//     constructor() {
//         this.items = []
//     }

//     addItem(product) {
//         this.items.push(product)
//     }
//     removeItem(productName) {
//         this.items = this.items.filter(product => product.name != productName)
//     }
//     getTotal() {
//         return this.items.reduce((total, product) => total + product.price * product.quantity, 0)
//     }
//     getItemsCount() {
//         return this.items.reduce((total, product) => total + product.quantity)
//     }
// }






// const decrease = document.querySelector(".decrease")
// const value = document.querySelector(".value")
// const increase = document.querySelector(".increase")

// let counter = 0

// decrease.addEventListener("click", (event) => {
//     if (counter > 0) {
//         counter -= 1
//     }
//     value.textContent = counter;
// })

// increase.addEventListener("click", (event) => {
//     counter += 1
//     value.textContent = counter;
// })




// Тему менять

// const theme = document.querySelector(".theme-btn")
// theme.addEventListener("click", (event) => {
//     document.body.classList.toggle("dark-theme")
// })


// const form = document.querySelector(".shopping-form");
// const input = document.querySelector(".shopping-input");
// const list = document.querySelector(".shopping-list");

// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     const product = input.value

//     if (product.trim() === "") {
//         return
//     }

//     const item = document.createElement("li")
//     item.textContent = product

//     list.append(item)

//     input.value = "";
// })