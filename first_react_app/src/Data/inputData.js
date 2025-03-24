export const inputData = {
    LoginForm: {
        labels: [
            'Email Address', 'Password'
        ],
        fields: [
            {
                id: '1', placeholder: 'Enter your Email', type: 'email', name: 'Email', id: 'exampleInputEmail1'
            }, {
                id: '2', placeholder: 'Enter your Password', type: 'password', name: 'Password', id: 'exampleInputPassword1'
            }
        ]
    },
    SignupForm: {
        labels: ['Name', 'Email Address', 'Password'],
        fields: [
            {
                id: '1', placeholder: 'Enter your Name', type: 'text', name: 'name', id: 'name'
            },
            {
                id: '2', placeholder: 'Enter your Email', type: 'email', name: 'email', id: 'exampleInputEmail1'

            }, {
                id: '3', placeholder: 'Enter your Password', type: 'password', name: 'password', id: 'exampleInputPassword1'
            }
        ]
    }
}