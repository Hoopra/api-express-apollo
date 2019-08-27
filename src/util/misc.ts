
export const randomInRange = (lower: number, upper: number) => {
    return Math.random() * (upper - lower) + lower;
};
