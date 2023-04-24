const data = [
  {
    hidden: false,
    name: "Current monthly bill",
    description: "Opening balance at the beginning of the statement period selected.",
    value: "$4.00",
    paths: [
      "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    ],
    css_class: "bg-primary-50 text-primary-700",
    links: [
      {
        title: "Switch to yearly billing",
        link: "/#",
        event: "evtUpsertBilling"
      }
    ]
  },
  {
    hidden: false,
    name: "Next payment due",
    description: "Total payments made for the statement period selected.",
    value: "March 18",
    paths: [
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ],
    css_class: "bg-purple-50 text-purple-700",
    links: [
      {
        title: "View payment history",
        link: "/#",
        event: ""
      }
    ]
  },
  {
    hidden: false,
    name: "Payment information",
    description: "Total outstanding payments to be made for the statement period selected.",
    value: "",
    paths: [
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    ],
    css_class: "bg-blue-50 text-blue-700",
    links: [
      {
        title: "Update payment method",
        link: "/#",
        event: ""
      },
      {
        title: "Redeem coupon",
        link: "/#",
        event: ""
      }
    ]
  },
  {
    hidden: true,
    name: "Closing Balance",
    description: "Closing balance at the end of the statement period selected.",
    value: "$ 1,000",
    paths: [
      "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    ],
    css_class: "bg-yellow-50 text-yellow-700",
    links: [],
    event: ""
  }
];
const stats = {
  data
};

export { stats as s };
