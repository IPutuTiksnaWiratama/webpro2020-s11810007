let account = {
    Name: "Putu",
    Expenses: [],
    addExpenses: function(description, amount){
        this.Expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary: function (){
        let totalExpenses = 0;
        this.Expenses.forEach(function (el){
            totalExpenses = totalExpenses + el.amount;
        });
    return totalExpenses;
    }
};
account.addExpenses('Beli Minuman', 20000);
account.addExpenses('Beli Makanan', 50000);
console.log("Total pengeluaran " + account.Name + " adalah Rp." + account.getAccountSummary());
