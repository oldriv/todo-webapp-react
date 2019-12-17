const loadList = () => {
    return [{
            name: "Procrastination Delight",
            description: "I will do it... tomorrow.",
            todos: [{
                    content: 'Think about making a TODO list.',
                    isCompleted: true,
                },
                {
                    content: 'Nice.',
                    isCompleted: true,
                },
                {
                    content: 'Have a nap.',
                    isCompleted: true,
                }
            ]
        },
        {
            name: "Productivity Galore",
            description: "We can do this!",
            todos: [{
                    content: 'Think about making a TODO list.',
                    isCompleted: false,
                },
                {
                    content: 'Actually do it',
                    isCompleted: false,
                },
                {
                    content: 'Also complete all the items in the list!',
                    isCompleted: false,
                },
            ]
        },
        {
            name: "Very important things",
            description: "Only the most essential tasks.",
            todos: [{
                    content: 'Eat',
                    isCompleted: true,
                },
                {
                    content: 'Sleep',
                    isCompleted: true,
                },
                {
                    content: 'Make TODO lists.',
                    isCompleted: false,
                }
            ]
        }
    ];
}

export {
    loadList
};