/*
문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

입력의 마지막에는 0 두 개가 들어온다.

출력
각 테스트 케이스마다 A+B를 출력한다.
*/

const input = require("fs").readFileSync("text.txt").toString().trim().split("\n");
const cleanInput = input.map(str=> str.split("\r").join(" "));
const testCase = cleanInput.flatMap(str => str.trim().split(" ").map(Number));
const result = [];

console.log(testCase);

for(let i=0; i< cleanInput.length;i++){ 
    if(testCase[2*i]+testCase[(2*i)+1] === 0){ //입력 마지막 0일 경우에는 결과에 추가하지 않는다.

    }else{
        result.push(testCase[2*i]+testCase[(2*i)+1]);
    }
}

console.log(result.join("\n"));