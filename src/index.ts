export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    var i: number = 0;
    var j: number = 0;
    var k: number = collection_3.length - 1;

    let result: Array<number> = [];
    var selection: Array<number> = [];

    if(i < collection_1.length) {
        selection.push(collection_1[i]);
    }
    else {
        selection.push(Number.MAX_VALUE);
    }
    if(j < collection_2.length) {
        selection.push(collection_2[j]);
    }
    else {
        selection.push(Number.MAX_VALUE);
    }
    if(k != -1) {
        selection.push(collection_3[k]);
    }
    else {
        selection.push(Number.MAX_VALUE);
    }

    while(i < collection_1.length || j < collection_2.length || k >= 0) {
        const min_val = element => (element) == Math.min(...selection);
        const col_num = selection.findIndex(min_val);
        if(col_num == 0) {
            result.push(collection_1[i]);
            i++;

            if(i < collection_1.length) {
                selection[0] = collection_1[i];
            }
            else {
                selection[0] = Number.MAX_VALUE;
            }
        }
        else if(col_num == 1) {
            result.push(collection_2[j]);
            j++;
            
            if(j < collection_2.length) {
                selection[1] = collection_2[j];
            }
            else {
                selection[1] = Number.MAX_VALUE;
            }
        }
        else {
            result.push(collection_3[k]);
            k--;
            
            if(k >= 0) {
                selection[2] = collection_3[k];
            }
            else {
                selection[2] = Number.MAX_VALUE;
            }
        }
    }
    return result;
}