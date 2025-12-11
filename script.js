const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Count Price";
document.body.appendChild(getSumBtn);

let allMoneyList = document.querySelectorAll(".price");
let table = document.querySelector("table");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
 let sum = 0;
const getSum = () => {
 for (let t of allMoneyList) {
    sum += parseFloat(t.innerText);
  }
	
  td.className="price"
  td.innerText = sum;  // keep it simple
  tr.append(td);
};
getSumBtn.addEventListener("click", getSum);

  table.append(tr);

