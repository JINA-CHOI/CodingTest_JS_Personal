/*
문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.
*/

const input = require("fs").readFileSync("text.txt").toString().trim().split("\n");
const cleanInput = input.map(str=> str.split("/r").join(" "));
const testCase = cleanInput.flatMap(num => num.split(" ").map(Number));
const result = [];

for(let i=0; i<cleanInput.length; i++){
    result.push(testCase[2*i]+testCase[(2*i)+1]);//2개씩 묶어서 계산해야하기때문에 2의 배수로 만들어준다
}

console.log(result.join("\n"));