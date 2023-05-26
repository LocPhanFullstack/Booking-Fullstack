const db = require('../models');

let createClinic = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (
                !data.name ||
                !data.address ||
                !data.imageBase64 ||
                !data.descriptionMarkdown ||
                !data.descriptionHTML
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter',
                });
            } else {
                await db.Clinic.create({
                    name: data.name,
                    address: data.address,
                    image: data.imageBase64,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown,
                });

                resolve({
                    errCode: 0,
                    message: 'OK',
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = { createClinic };
