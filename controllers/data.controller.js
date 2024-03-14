const { validationResult } = require("express-validator");
const DataObj = require("../model/DataModel")
const { PromiseProvider } = require("mongoose");
/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

module.exports.postData = async (req, res) => {
    try {
        const request = validationResult(req)

        if (!request.isEmpty()) {
            res.status(400)
            return;
        }

        const body = req.body;
        const dataBody = new DataObj({
            companyUen: body.companyUen,
            companyName: body.companyName,
            userName: body.userName,
            email: body.email,
            mobile: body.mobile,
            position: body.position
        })
        await dataBody.save();
        const returnData = await DataObj.find({}, null, { sort: { CREATED: -1 } });
        res.status(200).send(returnData);

    }
    catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.tableData = async (req, res) => {

};