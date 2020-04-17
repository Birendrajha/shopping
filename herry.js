const mongoose=require('mongoose')


mongoose.connect("mongodb://localhost:27017/behappy",
{useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Connected to Mongo!')
})
.catch((err) => {
    console.error('Error connecting to Mongo', err)
})
