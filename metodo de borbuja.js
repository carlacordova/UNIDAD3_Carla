
nums = integrar() [0,3,2,1,5]

for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
    
    if (nums[i] > nums[j]) {
    aux = nums[i];
    nums[i] = nums[j];
    nums[j] = aux;
    
    }
    }
    }