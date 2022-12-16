export const applications = {
    local: [
        {
            name: 'Stocks',
            type: 'window',
            details: {
                url: 'http://localhost:3001/stocks',
                left: 0,
                top: 0,
                width: 860,
                height: 600,
            },
            description: "An Application to view Stocks"
        },
        {
            name: 'Stock Details',
            type: 'window',
            details: {
                url: 'http://localhost:3002/details',
                left: 100,
                top: 100,
                width: 400,
                height: 400,
            },
            description: "Details about the individual stocks"
        },
    ],
};

export const channels = {
    definitions: [
        {
            name: 'Red',
            meta: {
                color: 'red',
            },
        },
        {
            name: 'Green',
            meta: {
                color: 'green',
            },
        }  
    ]
};