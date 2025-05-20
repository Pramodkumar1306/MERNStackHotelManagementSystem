import mongoos from 'mongoose'

const connectDb = async() => {
    try{
        await mongoos.connect(`mongodb+srv://indrayanip23:indrayanip23@cluster0.krneehl.mongodb.net/food-del`);
        console.log('Db Connected'); 
    } catch(error) {
        console.log('Mongo Connection Db Error'+error)
    }
        
}

export default connectDb;