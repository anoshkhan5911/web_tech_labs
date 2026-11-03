// Task 1
console.log("Task-01");
function addition(a, b) {
    return a + b;
}
console.log(addition(2, 3));


// Task 2
console.log("Task-02");
function bitwiseAND(a, b) {
    return a & b;
}
function bitwiseOR(a, b) {
    return a | b;
}
function bitwiseXOR(a, b) {
    return a ^ b;
}
console.log(bitwiseAND(1, 3));
console.log(bitwiseOR(1, 3));
console.log(bitwiseXOR(3, 3));


// Task 3
console.log("Task-03");
function addUp(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    return sum;
}
console.log(addUp(3));


// Task 4
console.log("Task-04");
function progressBar(a) {
    let sum = "";
    let filled = Math.floor(a / 10);
    
    for (let i = 0; i < filled; i++) {
        sum += "#";
    }
    for (let i = filled; i < 10; i++) {
        sum += "-";
    }
    return sum;
}
console.log(progressBar(100));


// Task 5
console.log("Task-05");
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return [min, max];
}
console.log(minMax([1, 2, 3, 4, 5]));


// Task 6
console.log("Task-06");
function calculateRepoStats(repos) {
    const stars = repos.map((repo) => repo.stars);
    const maxStars = Math.max(...stars);
    const minStars = Math.min(...stars);
    const totalStars = stars.reduce((sum, s) => sum + s, 0);
    const avgStars = Math.floor(totalStars / stars.length);
    const varianceScore = Math.abs(maxStars - minStars);

    return { maxStars, minStars, avgStars, varianceScore };
}
const repos = [
    { name: "repo-a", stars: 12 },
    { name: "repo-b", stars: 45 },
    { name: "repo-c", stars: 3 },
];
console.log(calculateRepoStats(repos));


// Task 7
console.log("Task-07");
function roundTo2(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}
function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
    const discounted = basePrice * (1 - discountPercentage / 100);
    const withTax = discounted * (1 + taxRate / 100);
    const finalPrice = roundTo2(withTax);
    const loyaltyPoints = Math.ceil(finalPrice);

    return { finalPrice, loyaltyPoints };
}
console.log(calculateFinalPrice(100, 15, 10));


// Task 8
console.log("Task-08");
function paginateData(items, pageNumber, pageSize = 5) {
    const totalPages = Math.ceil(items.length / pageSize);
    const startIndex = (pageNumber - 1) * pageSize;
    const data = items.slice(startIndex, startIndex + pageSize);

    return {
        data,
        currentPage: pageNumber,
        totalPages,
        hasNext: pageNumber < totalPages,
        hasPrev: pageNumber > 1,
    };
}
const allProducts = [
    "Laptop", "Mouse", "Keyboard", "Monitor",
    "Desk", "Chair", "Webcam", "Headphones",
];
console.log(paginateData(allProducts, 2, 3));