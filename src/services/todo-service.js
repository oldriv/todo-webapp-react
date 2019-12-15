const loadList = () => {
    return {
        name: "The Procrastinators delight",
        description: "Lists tasks I inted to postpone as much as I can.",
        todos:[
            {
            content: 'Create a TODO app with React',
            isCompleted: true,
            },
            {
            content: 'Attatch some DB to it.',
            isCompleted: false,
            },
            {
            content: 'Add users!',
            isCompleted: false,
            }
      ]}
}

export { loadList }; 