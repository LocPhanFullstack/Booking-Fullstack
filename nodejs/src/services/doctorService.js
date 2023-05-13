const db = require('../models');

let getTopDoctor = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                limit,
                order: [['createdAt', 'DESC']],
                attributes: {
                    exclude: ['password'],
                },
                where: {
                    roleId: 'R2',
                },
                include: [
                    { model: db.Allcode, as: 'positionData', attributes: ['valueVi', 'valueEn'] },
                    { model: db.Allcode, as: 'genderData', attributes: ['valueVi', 'valueEn'] },
                ],
                raw: true,
                nest: true,
            });

            resolve({
                errCode: 0,
                data: users,
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = { getTopDoctor };
