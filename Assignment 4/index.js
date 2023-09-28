/* 1
შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
დაბეჭდეთ მასივისი ახალი ელემენტები. 
*/

{
    console.log( "TASK 1");
let arr = [5 , 25 , 89 , 120 , 36 ];
arr.push("javascript", "python");
arr.unshift("html" , "Css");
console.log(arr.length);
arr.shift();
arr.pop();
console.log(arr);
}

/* 2
 შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;
  გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
  მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
  მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
  გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
  მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
  წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
  გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

*/

{
    console.log( "TASK 2");
    let arr = ["orange" , "banana" , "pear"];
    console.log(arr.length);
    arr.push("apple" , "pineapple");
    arr.unshift("watermelon");
    console.log(arr.length);
    arr.splice(2 , 0 , "mango");
    //let arr1 = [];
   // for (let i = 0; i<arr.length; i++){
  //      if (arr1.length == 2) arr1.push("Mango");
    //    arr1.push(arr[i]);
    //}
    console.log(arr);
    
    arr.pop();
    arr.shift();

    console.log(arr.length)


}
/*3
მოცემულია მასივი let array =[1, 2, 3, 4, 5]. 
splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].
*/
{
    console.log( "TASK 3");
let arr = [ 1 , 2 , 3 , 4 , 5 ];
arr.splice (3 , 0 , "a" , "b" , "c" );
console.log ( arr ) ;

}
/* 4
მოცემულია მასივი:
let arr = [1, 2, 3, 4, 5];
foreach საშუალებით გამოთვალეთ რიცხვების ჯამი
*/ 
console.log( "TASK 4");
let arr = [1, 2, 3, 4, 5]
let sum = 0;
arr.forEach(item => {
 sum+=item;
})
console.log(sum);

/*5
ციკლის საშუალებით გამოიტანეთ რიცხვების სვეტი 100 დან 1 მდე;
*/
{
console.log( "TASK 5");
for (let i = 100; i > 0; i--){
    console.log(i);
}
}
/* 6
მოცემულია მასივი:
let array=[2,15,10,24] წაშალეთ ამ
მასივიდან რიცხვი 10;
*/
{
console.log( "TASK 6");
let array=[2,15,10,24];
array.splice(array.indexOf(10),1)
console.log(array);
}

/* 7 
 მოცემულია მასივი:
let array = [12, 25, 3, 6, 8, 14, 7, 23];
map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;
*/
{
    console.log( "TASK 7");
let arr = [12, 25, 3, 6, 8, 14, 7, 23];

let arr1 = arr.map(( num ) => {
    return  (num / 3);
})
console.log(arr1);

}
/* 8
მოცემულია მასივი:
let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
*/
{
    console.log( "TASK 8");
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let arr = languages.filter((item) => {
    if (item.length > 3) return item;
})
console.log(arr);
}

/*9
მოცემულია მასივი:
let words = ['madrid', 'rome', 'milan', 'berlin'];

filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან n-ს;

*/
{
    console.log( "TASK 9");
let words = ['madrid', 'rome', 'milan', 'berlin'];
let arr = words.filter((item) => {
    if (item.includes('m') || item.includes('n')) return item;
})
console.log(arr);
}

/* 10
მოცემულია სამი მასივი:
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

concat მეთოდის საშუალებით გაერთიანეთ ეს სამი მასივი ერთ მასივში

*/
{  
console.log( "TASK 10");
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let arr = arr1.concat(arr2.concat(arr3));
console.log(arr);
}

/*11
შეამოწმეთ მოცელუმ მასივში let arr = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით
*/

{
    console.log( "TASK 11");
let arr = [-1, -2, -3, 4];
console.log(arr.some(item => {
    if(item > 0) return true;
}))
}


/*12
მოცემულია მასივი let array =[23,45,32,5,87,7,3,98]

sort მეთოდის საშუელებით დაალაგეთ ელემენტები კლებადობის მიხედვით და ამოიღეთ მინიმალური რიცხვი;

*/
{
    console.log( "TASK 12");
let array = [ 23 , 45 , 32 , 5 , 87 , 7 , 3 , 98 ];
array.sort(function(a, b){return b - a});
console.log(array)
console.log(array[array.length-1])
}