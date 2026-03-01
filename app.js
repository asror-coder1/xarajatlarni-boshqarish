// Moliyaviy xarajatlarni boshqarish tizimi
const financeTracker = {
    owner: "Asror Coder",
    balance: 5000,
    expenses: [
        { title: "Internet", amount: 150, category: "Utility" },
        { title: "Kurs", amount: 500, category: "Education" }
    ],

    // Yangi xarajat qo'shish
    addExpense(name, cost, cat) {
        this.expenses.push({ title: name, amount: cost, category: cat });
        this.balance -= cost;
        console.log(`💸 Xarajat qo'shildi: ${name} (-${cost}$)`);
    },

    // Hisobotni ko'rish
    showReport() {
        console.log(`\n--- ${this.owner} uchun hisobot ---`);
        console.log(`Joriy balans: ${this.balance}$`);
        console.log("Barcha xarajatlar:");
        this.expenses.forEach(item => {
            console.log(`- ${item.title}: ${item.amount}$ [${item.category}]`);
        });
    }
};

// Ishlatib ko'ramiz
financeTracker.addExpense("Tushlik", 50, "Food");
financeTracker.showReport();