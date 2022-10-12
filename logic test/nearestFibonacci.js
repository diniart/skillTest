function nearestFibonacci(angka) {
    let jmlAngka = 0;
    for (const i of angka) {
        jmlAngka += i;
    }

    let i;
    let fibonacciAwal = [0, 1];
    let fibonacci = []

    for (i = 2; i <= 10; i++) {
        fibonacciAwal[i] = fibonacciAwal[i - 2] + fibonacciAwal[i - 1];
        fibonacci.push(fibonacciAwal[i]);
    }
    let fibonacciBatas;
    for (i in fibonacci) {
        if (fibonacci[i] >= jmlAngka) {
            fibonacciBatas = fibonacci[i];
            break;
        }
    }
    console.log(`${fibonacci}`);
    console.log(`fibonacciAwal terdekat = ${fibonacciBatas}`);
  
}


nearestFibonacci([15, 1, 3]);




 