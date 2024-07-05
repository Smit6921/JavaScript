let num = [10, 20, 30, 40, 50, 60];

function Descending(arr) 
{
    arr.sort(function(a, b) 
    {
        return b - a;
    });
    arr.forEach(function(record) 
    {
        console.log(record);
    });
}
Descending(num);