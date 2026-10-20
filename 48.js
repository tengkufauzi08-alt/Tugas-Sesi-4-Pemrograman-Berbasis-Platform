const studentData = [
    {
        name : "Deska",
        java_programming_score : 80,
        python_programming_score : 100,
        javascript_programming_score : 80,
    },
    {
        name : "Ladesh",
        java_programming_score : 50,
        python_programming_score : 90,
        javascript_programming_score : 70,
    },
    {
        name : "Ujang Galon",
        java_programming_score : 70,
        python_programming_score : 95,
        javascript_programming_score : 60,
    },
]

// Mengakses objek didalam array
for(let i in studentData){
    for (let j in studentData[i]){
        console.log(j + ":" + studentData[i][j]);
    }
}
