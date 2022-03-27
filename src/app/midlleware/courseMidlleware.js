module.exports = function courseMidlleware(req, res, next) {

    res.locals._sort = {
        enabled: false,
        type: "default"
    };
    if (req.query.hasOwnProperty('_sort')) {
        // res.locals._sort.enabled = true;
        // res.locals._sort.type = req.query.type; //gán lại type default = type tren url
        // res.locals._sort.column = req.query.column // lấy giá trị name 
        Object.assign(res.locals._sort, { //hợp nhất 2 obj với nhau ,,nếu tồn tại sẻ ghi đè lên ob trước nó
            enabled: true,
            type: req.query.type,
            column: req.query.column
        })
        // để đẩy sang view ==> đọc docs expressjs response => res.locals
    }
    next();
}