function calculateAverage(numbers) {
    var sum = 0;

    
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    
    var average = sum / numbers.length;

    
    document.getElementById("average").innerText = "average = " + average;
}


var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];

calculateAverage(numbers);
