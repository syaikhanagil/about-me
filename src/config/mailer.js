import axios from 'axios';

// const uri = 'http://27.112.78.113:5000';
const uri = 'http://localhost:5000';

const mailer = (payload) => {
    axios.post(uri, JSON.parse(payload))
    .then(res => {
        if(res.status === 200){
            
        }
    })
    .catch(err => {
        console.clear();
    })
}