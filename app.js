const financeTracker = {
  owner: "Asror Coder",
  balance: 5000,
  expenses: [],

  addExpense(name, cost, cat) {
    this.expenses.push({ title: name, amount: cost, category: cat });
    this.balance -= cost;
    this.render();
  },

  render() {
    document.getElementById("balance").textContent = "$" + this.balance;

    const list = document.getElementById("expenses");
    list.innerHTML = "";

    this.expenses.forEach((item) => {
      
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.title} - $${item.amount}
        <span>${item.category}</span>
      `;
      list.appendChild(li);
    });
  },
};

document.getElementById("expenseForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const amount = +document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  financeTracker.addExpense(title, amount, category);

  e.target.reset();
});
