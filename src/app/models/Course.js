const mongoose = require('mongoose');
const schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Courseschema = new schema({
    name: { type: String, maxlength: 255, required: true },
    description: { type: String, maxlength: 255 },
    image: { type: String, maxlength: 60 },
    videoId: { type: String, maxlength: 20 },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true }
    // createAt: { type: Date, default: Date.now }, thay thế bằng timestamps
    // updateAt: { type: Date, default: Date.now }
}, {
    timestamps: true
})
mongoose.plugin(slug);
// custom mdw 
Courseschema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {  // hasOwnProperty :kiểm tra xem đối tượng có thuộc tính này hay không
        const istypes = ['desc', 'asc'].includes(req.query.type);
        return this.sort({     //hàm sort trong mongoodb 
            [req.query.column]: istypes ? req.query.type : "desc",
        })
    }
    return this;
}


//
Courseschema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Course', Courseschema);