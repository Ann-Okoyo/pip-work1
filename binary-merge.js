
// Given an array of unsorted numbers, return the index 
// of the following target if the target exists in the array.
//  If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target =89;
// let num1= [45,12,6,89,2,5];
function mergeSort(num1){
    if (num1.length<=1) {
        return num1
        
    }
    let middle = Math.floor((num1.length)/2);
    let left = num1.slice(0,middle);
    let right = num1.slice(middle);
    return(mergeSorted(mergeSort(left),(mergeSort(right))));

}
function mergeSorted(left,right){
    let emptyArray=[];
    while(left.length &&right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift());
        }
        else{
            emptyArray.push(right.shift());
        }
     
    }
    return[...emptyArray,...left,...right]
}
let num1= [45,12,6,89,2,5];
console.log(mergeSort(num1))

//Binary search
function binarySearch(num1,target){
    let left2 = 0;
    let right2=num1.length-1;

    while(left2 < right2){
        let middle1=Math.floor((left2+right2)/2);
        if(target === num1[middle1]){
            return middle1
        }
        else if(target>num1[middle1]){
            left2=middle1+1
        }
        else{
            right2=middle1-1
        }

    }
}
let target=6;
console.log(binarySearch(num1,target))



// Given an unsorted array of numbers return the 
// sorted array in descending order
// let arr=[123,89,5,23,9,56]


function mergeSort7(arr){
    if(arr.length<=1){
        return arr;
    };
    let middle= Math.floor(arr.length/2)
    let left6=arr.slice(0,middle);
    let right8=arr.slice(middle);
    return mergeSort9(mergeSort7(left6),mergeSort7(right8));
    
};
//when its in descending order change the sign at 
//the if else statement
function mergeSort9(left6,right8){
    let emptyArray=[];
    while(left6.length &&right8.length){
        if(left6[0]>right8[0]){
            emptyArray.push(left6.shift());
        }
        else{
            emptyArray.push(right8.shift());
        }

    }
    return[...emptyArray,...left6,...right8];
}
let arr =[123,89,5,23,9,56];
console.log(mergeSort7(arr));



// Given the following array, search 
// for the following target
let target9 = 34
let arr2 = [1,4,78,2,67,3];

function binary6(arr){
    let left9 =0;
    let right10=arr2.length-1;


    while(left9<=right10){
        let middle10=Math.floor(arr2.length/2);
        if(target9 === arr2[middle10]){
            return middle10
        }
        else if(target>arr2[middle10]){
            left9=middle10+1
        }
        else{
            return null
        }

    }
}
console.log(binary6(arr))

// Write a function that takes in the following 
// array and consoles the target if it is found else
// null

function mergeSort11(num7){
    if(num7.length<=1){
        return num7
    };
    let middle14=Math.floor(num7.length/2);
    let left11=num7.slice(0,middle14);
    let right19= num7.slice(middle14);
    return mergeSort12(mergeSort11(left11),mergeSort11(right19));

}
function mergeSort12(left11,right19){
    let emptyArray=[];
    while(left11.length &&right19.length){
        if(left11[0]<right19[0]){
            emptyArray.push(left11.shift());
        }
        else{
            emptyArray.push(right19.shift());
        }
    }
    return[...emptyArray,...left11,...right19];
}
let num7 = [2,8,0,23,5,45,76]
console.log(mergeSort11(num7))