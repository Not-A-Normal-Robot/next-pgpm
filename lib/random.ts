/// Generates a random 128-bit number as a string
/**
 * Generates a random 128-bit number as a hexadecimal string.
 * @param randomizer An optional function that generates a random number between 0 and 1. Defaults to Math.random.
 * @returns A random 128-bit number as a hexadecimal string
 */
export function random128String(randomizer = Math.random) {
    return randomizer().toString(16).slice(2) + 
           randomizer().toString(16).slice(2);
}


/**
 * Generate a PRNG using the SplitMix32 algorithm, given a certain 32-bit integer seed.
 * The returned function will generate a random number between 0 and 1.
 * For random integers, use the generateIntPrng function.
 * 
 * Implementation from https://stackoverflow.com/a/47593316
 * @param a The seed to begin the PRNG with
 * @returns A function that generates a random number between 0 and 1
 */
export function generatePrng(a: number) {
    return function() {
        a |= 0;
        a = a + 0x9e3779b9 | 0;
        let t = a ^ a >>> 16;
        t = Math.imul(t, 0x21f0aaad);
        t = t ^ t >>> 15;
        t = Math.imul(t, 0x735a2d97);
        return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
    }
}

/**
 * Generate a PRNG using the SplitMix32 algorithm, given a certain 32-bit integer seed.
 * The returned function will generate a random 32-bit integer.
 * For numbers between 0 and 1, use the generatePrng function.
 * 
 * Implementation from https://stackoverflow.com/a/47593316
 * @param a The seed to begin the PRNG with
 * @returns A function that generates a random 32-bit integer
 */
export function generateIntPrng(a: number) {
    return function() {
        a |= 0;
        a = a + 0x9e3779b9 | 0;
        let t = a ^ a >>> 16;
        t = Math.imul(t, 0x21f0aaad);
        t = t ^ t >>> 15;
        t = Math.imul(t, 0x735a2d97);
        return (t = t ^ t >>> 15) >>> 0;
    }
}