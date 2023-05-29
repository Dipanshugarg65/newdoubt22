import mongoose from "mongoose"

const Connection = async () => {
    const URL = 'mongodb://dipanshugarg65:Garg1234@ac-l0jptml-shard-00-00.gxsewsx.mongodb.net:27017,ac-l0jptml-shard-00-01.gxsewsx.mongodb.net:27017,ac-l0jptml-shard-00-02.gxsewsx.mongodb.net:27017/?ssl=true&replicaSet=atlas-nxt0h8-shard-0&authSource=admin&retryWrites=true&w=majority';
    try {
        mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database Connected Successfully')
    }

    catch (error) {
        console, log('Error While Connecting Database Please Check', error);
    }
}

export default Connection;