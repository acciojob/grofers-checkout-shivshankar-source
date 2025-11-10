const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Count Price";
document.body.appendChild(getSumBtn);

let allMoneyList = document.querySelectorAll(".prices");
let table = document.querySelector("table");

const getSum = () => {
  let sum = 0;
  for (let t of allMoneyList) {
    sum += parseFloat(t.innerText);
  }

  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerText = sum;  // keep it simple
  tr.append(td);
  table.append(tr);
};

getSumBtn.addEventListener("click", getSum);
