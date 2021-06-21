import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            pseudo:'kyky',
            email: 'sylcoventonKendy02@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            
        },
        {
            pseudo: 'jp',
            email: 'jeanphillipe@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            
        },
        {
            pseudo: 'jon',
            email: 'jonathan@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            
        },
        {
            pseudo: 'serge',
            email: 'serge@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            
        }, 
        {
            pseudo: 'dany',
            email: 'daniel@gmail.com.com',
            password: bcrypt.hashSync('1234', 8),
            
        }

        
    ]
    ,
    messages: [
        {
            sender: 'kyky',
            receiver: 'dany',
            message: 'Hey',
        },
        {
            sender: 'dany',
            receiver: 'kyky',
            message: 'wassup',
        },
        {
            sender: 'kyky',
            receiver: 'dany',
            message: 'Tout va Bien',
        },
        {
            sender: 'kyky',
            receiver: 'dany',
            message: 'Wow j\'ai supprime ce message',
        }
    ]
    ,

    group: [
        {
            admin: '',
            
        }
    ]
}

export default data;