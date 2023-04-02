function choice(rand) {
    let randIndex = Math.floor(Math.random() * rand.length);
    return rand[randIndex];
}
export { choice }; 