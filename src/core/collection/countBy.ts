function countBy<T, K extends string | number | symbol>(
    array: T[],
    iteratee: (value: T) => K
): Record<K, number> {
    return array.reduce((result, item) => {
        const key = iteratee(item);
        if (result[key]) {
            result[key]++;
        } else {
            result[key] = 1;
        }
        return result;
    }, {} as Record<K, number>);
}

export { countBy };
