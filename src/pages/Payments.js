import React, { useState } from "react";

const Payments = () => {
    const [payments, setPayments] = useState([
        { amount: 200, status: "Unpaid" },
        { amount: 500, status: "Paid" },
    ]);

    const markAsPaid = (index) => {
        const updated = [...payments];
        updated[index].status = "Paid";
        setPayments(updated);
    };

    return (
        <div className="p-6 space-y-6 md:p-8">
            <h1 className="text-2xl font-bold text-gray-900">Payments</h1>

            {/* Payments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {payments.map((payment, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-200"
                    >
                        <h2 className="font-semibold text-lg text-gray-900">Amount: ${payment.amount}</h2>
                        <p
                            className={`text-sm ${payment.status === "Paid" ? "text-green-500" : "text-red-500"}`}
                        >
                            {payment.status}
                        </p>
                        {payment.status === "Unpaid" && (
                            <button
                                onClick={() => markAsPaid(index)}
                                className="mt-4 text-sm text-blue-500 hover:text-blue-700 transition duration-200"
                            >
                                Mark as Paid
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Payments;
