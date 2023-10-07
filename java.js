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

// Chuyển mảng thành object
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

// Tự định nghĩa hàm map 
Array.prototype.map2 = function(callback1) {

    var newArray =[];
    for (var i = 0; i < this.length; i++) {
       var result = callback1(this[i],i);
       newArray.push(result);
    }
    return newArray;
}

var arrName = [
    'hung',
    'hai',
    'thu'
]

var htmls = arrName.map2(function(name) {
    return `<h2>${name}<h2>`;
});
console.log(htmls);

// tự định nghĩa hàm foreach
Array.prototype.forEach2 = function(callback2) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) // vòng lặp for in này có lợi là không lặp qua mảng rỗng 
                                    //và chỉ xuất các phần tử hiện hữu của mảng thừa độ dài 
                                    // nhưng nó lại lặp qua cả các phần tử ở __proto__ 
                                    // nên cần hàm hasOwnProperty (trong trường hợp này) 
                                    // để ktra cái this đó có nắm giữ index hay không \
                                    // or có phải là thuộc tính phương thức gần nhất hay không
        { 
        callback2(this[i],i,this);
        }
    }
}

var info = [
    {
        name: 'Hung',
        age: 18,
    },
    {
        name: 'Hung',
        age: 19,
    },
    {
        name: 'Hai',
        age: 16
    }
];

info.forEach2(function(in4) {
    console.log(in4);
});

// tự định nghĩa hàm every

// Hàm every2 nhận vào một hàm test
Array.prototype.every2 = function(test) {
    // Khởi tạo biến result là true
    var result = true;
    // Dùng vòng lặp for để duyệt qua các phần tử của mảng
    for (var i = 0; i < this.length; i++) {
      // Gọi hàm test với phần tử hiện tại và lưu kết quả vào biến passed
      var passed = test(this[i]);
      // Nếu passed là false, gán result là false và thoát khỏi vòng lặp
      if (!passed) {
        result = false;
        break;
      }
    }
    // Trả về giá trị của result
    return result;
  }

// Cách 2 
Array.prototype.myevery = function(cb) {
    var result = true;
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var passed = cb(this[i], i, this);
            if(!passed) {
                result = false;
            }
        }
    }
    return result;
}

var age18 = info.every2(function(check) {
    return check.age === 16;
})

console.log(age18);

// tự định nghĩa hàm find 

// Cách 1
Array.prototype.find2 = function (finded) {
    // Dùng vòng lặp for để duyệt qua các phần tử của mảng
    for (let i = 0; i < this.length; i++) {
      // Gọi hàm finded với phần tử hiện tại và lưu kết quả vào biến passed
      let passed = finded(this[i]);
      // Nếu passed là true, trả về giá trị của phần tử hiện tại và thoát khỏi vòng lặp
      if (passed) {
        return this[i];
      }
    }
    // Nếu không có phần tử nào thỏa mãn điều kiện, trả về undefined
    return undefined;
  }
// Cách 2
Array.prototype.myFind = function(callback) {
    for(let i of this) {
        if(callback(i)) {
            return i;
        }
    }
    return undefined;
}
// Cách 3 
Array.prototype.myFind2 = function(callback) {
    for(var i in this) {
        if (this.hasOwnProperty(i)) {
            var passed = callback(this[i]);
            if (passed) {
                return this[i];
            }
        }
    }
    return undefined;
}

var findInfo = info.find2(function(finded) {
    return finded.name ==='Hai';
});
console.log(findInfo);


// Tự định nghĩa hàm filter 
Array.prototype.filter2 = function(findAll) {
    const newArray = [];

    for (var i in this){
        if (this.hasOwnProperty(i)) {
            var passed = findAll(this[i]);
            if (passed){
                newArray.push(this[i]);
            }
        }
    }

    return newArray;
}

var infoFilter = info.filter2(function(all) {
    return all.age > 16;
})
console.log(infoFilter);


// DOM Events

// presentDefault events
// ví dụ về ngăn chặn thẻ ul ẩn đi khi không focus vào thẻ input
var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) {
    e.preventDefault();
}

ulElement.onclick = function(e) {
    console.log(e.target)
}

// ví dụ về onchange và onkey
var inputchange = document.querySelector('input[type="text"]');
inputchange.onchange = function(e) {
    console.log(e.target.value);
}

var inputkey = document.querySelector('input[type="text_2"]');
inputkey.onkeyup = function(e) {
    switch(e.keyCode) // or e.which
    {
        case 13: // khi ấn phím enter, theo keyCode là số 13
            console.log('Enter');
            break;
        case 27: // khi ấn phím esc, theo keyCode là số 27
            console.log('esc');
            break;
    }
}

var checkbox = document.querySelector('input[type="checkbox"]');
// ấn vào ô check sẽ ra kq là true or flase
checkbox.onclick = function(e) {
    console.log(e.target.checked);
}

var selected = document.querySelector('select');
//ấn select 1 ô thì sẽ trả ra value của ô đó
selected.onchange = function(e) {
    console.log(e.target.value);
}

// Stop Propagation (ngăn chặn sự nổi bọt)
document.querySelector('div').onclick = function() {
    console.log('DIV');
}
document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('Click success!!');
}


