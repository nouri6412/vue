var express = require('express');

var dbo = require('../db');


var router = express.Router({ mergeParams: true });
var middleware = require("../middleware");

router.get("/", function (req, res) {

    const dbConnect = dbo.getDb();
    dbConnect.collection("structure").find({}).toArray(function (err, result) {
        if (err) {
            res.status(400).send("Error fetching listings!");
        } else {
            res.json(result);
        }
    });
});

//insert fields
router.get("/init", middleware.isAdmin, function (req, res) {

    const dbConnect = dbo.getDb();
    //dbConnect.collection("structure").deleteMany({ });
    dbConnect.collection("structure").deleteMany({ type: "init" });

    var obj = {
        type: "init",
        fields: [
            {
                title: "input_text",
                name: "input",
                type: "text",
                label: "متن کوتاه"
            },
            {
                title: "input_number",
                name: "input",
                type: "number",
                label: "عدد"
            },
            {
                title: "input_date",
                name: "input",
                type: "date",
                label: "تاریخ"
            },
            {
                title: "textarea",
                name: "textarea",
                type: "text",
                label: "متن بلند"
            },
            {
                title: "document",
                name: "document",
                type: "text",
                label: "ساختار"
            },
            {
                title: "list",
                name: "list",
                type: "text",
                label: "لیست"
            },
            {
                title: "object",
                name: "object",
                type: "object",
                label: "آبجکت"
            }
        ],
        data_type: [
            {
                name: "int",
                length: 10
            },
            {
                name: "string",
                length: 2000
            },
            {
                name: "text"
            },
            {
                name: "date"
            },
            {
                name: "object"
            }
        ]
    };


    dbConnect.collection("structure").insertOne(obj, function (err, res) {
        if (err) throw err;
        console.log("structure  inserted . ");
    });

    var result = { state: true };

    res.json(result);
});

router.get("/test_data_model", middleware.isAdmin, function (req, res) {

    const dbConnect = dbo.getDb();

    dbConnect.collection("structure").deleteMany({ type: "model" });

    var obj = [
        {
            type: "model",
            name: "category",
            label: "دسته بندی",
            model: [
                {
                    field: "input_number",
                    data_type: "int",
                    name: "id",
                    label: "شناسه",
                    nullable: false,
                    uniq: true,
                    auto_increment: true
                },
                {
                    field: "input_text",
                    data_type: "string",
                    name: "title",
                    label: "عنوان",
                    nullable: false
                }
                ,
                {
                    field: "input_text",
                    data_type: "string",
                    name: "description",
                    label: "توضیح"
                }
            ]
        },
        {
            type: "model",
            name: "post",
            label: "نوشته",
            model: [
                {
                    field: "input_number",
                    data_type: "int",
                    name: "id",
                    label: "شناسه",
                    nullable: false,
                    uniq: true,
                    auto_increment: true
                },
                {
                    field: "input_text",
                    data_type: "string",
                    name: "title",
                    label: "عنوان",
                    nullable: false
                },
                {
                    field: "input_date",
                    data_type: "date",
                    name: "inserted_date",
                    label: "تاریخ ایجاد",
                    nullable: false
                },
                {
                    field: "textarea",
                    data_type: "textarea",
                    name: "description",
                    label: "توضیحات"
                },
                {
                    field: "object",
                    data_type: "object",
                    name: "category",
                    label: "دسته بندی",
                    object: {
                        model: "category",
                        key: "id",
                        title: ["title", "description"]
                    }
                },
                {
                    field: "document",
                    data_type: "document",
                    name: "author",
                    label: "نویسنده",
                    model: [
                        {
                            field: "input_number",
                            data_type: "int",
                            name: "author_id",
                            label: "شناسه"
                        },
                        {
                            field: "input_text",
                            data_type: "string",
                            name: "author_name",
                            label: "عنوان",
                            nullable: false
                        }]
                },
                {
                    field: "list",
                    data_type: "list",
                    name: "comments",
                    label: "نظرات",
                    model: [
                        {
                            field: "input_text",
                            data_type: "string",
                            name: "user",
                            label: "کاربر"
                        },
                        {
                            field: "input_text",
                            data_type: "string",
                            name: "comment",
                            label: "نظر",
                            nullable: false
                        }]
                }
            ]
        }];


    dbConnect.collection("structure").insertMany(obj, function (err, res) {
        if (err) throw err;
        console.log("structure  inserted . ");
    });

    var result = { state: true };

    res.json(result);
});

module.exports = router;