export function Array2Tree(list: Array<any>, parent: any) {
    if (!list.length) {
        return []
    }
    let newArr: any[] = [];
    list.forEach(item => {
        if (item.parent === parent) {
            newArr.push({
                ...item,
                children: Array2Tree(list, item.id)
            })
        }
    })
    return newArr;
}

export function splitSeriesSubArray(arr: number[]): any[] {
    let res: any[] = [];
    let seriesArr: number[] = [];
    let arrLen: number = arr.length;
    for (let i = 0; i < arrLen; i++) {
        if (i === 0) {
            seriesArr.push(arr[i]);
        } else {
            if (arr[i] - arr[i - 1] === 1) {
                seriesArr.push(arr[i]);
            } else {
                res.push(seriesArr);
                seriesArr = [];
                seriesArr.push(arr[i]);
            }
        }
    }
    res.push(seriesArr);
    return res;
}