//Object prop shorthand

const name = 'Andrew';
const age = 27

const user = {
    name,
    age,
    location: 'Philidelphia'
}

console.log(user);

//Object Descructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const {label:productLabel, stock, rating = 5} = product

// console.log(productLabel, stock, rating);

const transaction = (type, { label, stock }) => {
    console.log(type);
    console.log(label);
    console.log(stock);
}

transaction('order', product);