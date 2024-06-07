const obj = {
    science : 91,
    maths : 87,
    English : 55
}

function giveMarks (key,grd){
    if (91 <= grd && grd <=100){
        console.log(`${key}:a`);
    } else if(76 <=grd && grd <=90){
        console.log(`${key}:b`);
    } else if(60 <=grd && grd <=75){
        console.log(`$"{key}:c`);
    } else {
        console.log(`${key}:f`);
    }
}

for(let key in obj){
    giveMarks(key,obj[key])
}