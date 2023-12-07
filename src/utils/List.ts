export class List<T> {
    private readonly items: Array<T>;

    constructor() {
        this.items = [];
    }

    static of(object: any): List<any> {
        const list = new List<any>();
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                list.add(object[key]);
            }
        }
        return list;
    }

    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(value);
    }

    addAll(values: List<T>): void {
        values.forEach((value) => this.add(value));
    }

    get(index: number): T {
        return this.items[index];
    }

    map<U>(callback: (value: T, index: number, array: T[]) => U): U[] {
        return this.items.map(callback);
    }

    forEach(param: (value: any) => void) {
        this.items.forEach(param);
    }
}
