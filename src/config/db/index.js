const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/youtube_course', { useUnifiedTopology: true });
        console.log('connect suceess to database mongoose')
    } catch (error) {
        console.log("connect failure")
    }


}
module.exports = { connect };