declare function stalinSort<T = any>(suspects: T[], direction?: 'asc' | 'desc'): T[];

declare function miracleSort<T>(input: T[], direction?: 'asc' | 'desc'): Promise<T[]>;

declare function timeSort<T = number>(input: T[], direction?: 'asc' | 'desc'): Promise<T[]>;

declare function bogoSort<T>(input: T[], direction?: 'asc' | 'desc'): T[];

declare function bozoSort<T>(input: T[], direction?: 'asc' | 'desc'): T[];

declare function tacoSort<T = number>(input: T[], direction?: 'asc' | 'desc'): T[];

declare function luckySort<T>(input: T[], direction?: 'asc' | 'desc'): T[];

declare function capitalismSort<T = number>(input: T[], direction?: 'asc' | 'desc', real?: boolean): T[];

declare function communismSort<T = number>(input: T[], direction?: 'asc' | 'desc'): T[];

declare function quantumBogoSort<T>(input: T[], direction?: 'asc' | 'desc'): T[];

declare const version = "1.0.0";
declare const superSortAlgorithms: {
    stalinSort: typeof stalinSort;
    miracleSort: typeof miracleSort;
    timeSort: typeof timeSort;
    bogoSort: typeof bogoSort;
    bozoSort: typeof bozoSort;
    tacoSort: typeof tacoSort;
    luckySort: typeof luckySort;
    capitalismSort: typeof capitalismSort;
    communismSort: typeof communismSort;
    quantumBogoSort: typeof quantumBogoSort;
};
declare function superSort(input: number[], direction?: 'asc' | 'desc'): Promise<number[]>;

export { superSort, superSortAlgorithms, version };
