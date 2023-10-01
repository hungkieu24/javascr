function getRandNumbers(min, max, length) {
    var randomArray = [];
    for(var i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
        return randomArray;
}
var arr = getRandNumbers(10, 50, 5);
console.log(getRandNumbers);
console.log(arr);
console.log('hello');

function run(object) {
    var arr = [];
    for(var key in object){
        arr.push(`Thuoc tinh ${key} co gia tri ` + object[key]);
    }
    return arr;
}
console.log(run({ name: 'Nguyen Van A', age: 16 }));

var laguages = 'hungkieu';
for(var key in laguages) {
    console.log(laguages[key]);
}

var myInfo = {
    name: 'Hung Kieu',
    age: 18
}
    //Object. sẽ trả về mảng
console.log(Object.values(myInfo['name'])); // xuat ra từng chữ của chuỗi đặt trong key name
console.log(Object.keys(myInfo['name'])); // xuat ra index cua chuoi trong key name
console.log(Object.values(myInfo)); // xuất ra 2 value của name và age
console.log(Object.keys(myInfo)); // xuất ra key là name và age

var i = 0;
var arrMyInfo = Object.values(myInfo);
while (i < arrMyInfo.length) {
    console.log(arrMyInfo[i]);
    i++;
}

var myArr = [
    [1,2],
    [3,4],
    [5,6]
]

for(var row of myArr) {
    for(var col of row ) {
        console.log(col);
    }
}

var array = [ [[[1, 2], [3, 4]], [[5, 6], [7, 8]]], [[[9, 10], ['j', 'q']], [['k', '3d'], ['4q', '4d']]] ]

for (var key of array) { 
    for (var key1 of key) { 
        for (var key2 of key1 ) { 
            for (var key3 of key2) { 
                console.log(key3) 
            } 
        } 
    } 
}

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(nameOfSport) {
    return nameOfSport.filter(function(item){
        return item.like >= 5;

    })
}

console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

var totalLike = sports.reduce(function(total, sport) {
    return total + sport.like;
}, 0);
console.log('Tổng số like:', totalLike);

// tự định nghĩa 1 phương thức reduce thêm vào Array
Array.prototype.reduce2 = function (callback, result) {
    for (var i = 0; i < this.length; i++) {
        if (arguments.length < 2) {
            // trường hợp không truyền gtri khởi tạo
            // nếu như ở function callback có < 2 đối tượng thì thực hiện
            i = 1; // gán i cho index = 1
            result = this[0]; // và biến tích trữ sẽ là gtri đầu tiên của mảng
        }
        else {
            result = callback(result, this[i], i, this);
        }
    }
    return result;
}



var numbers = [1, 2, 3, 4 ,5];

var sum = numbers.reduce2( (total, initialValue) => total + initialValue, 0 );

console.log(sum);

function arrToObj(array) {
    return array.reduce((key, value) => {
        key[value[0]] = value[1];
    return key;
    }, {} )
}
 
// Expected results:
var arr = [
    ['name', 'Hưng Kiều'],
    ['age', 18],
];
console.log(arrToObj(arr));
