const express = require('express');
const axios = require('axios');
const router = express.Router();
const { Base64 } = require('js-base64');

require('dotenv').config()

module.exports = (sequelize) => {

    router.post('/create', (req, res, next) => {
        const name = req.body.name
        const diff = req.body.diff
        const qs = req.body.questions
        const uid = req.body.id

        axios.post("https://maker.ifttt.com/trigger/new_quiz/with/key/b29qT57zYRHzFGTGlOqgq7", {
            "value1": name, "value2": diff, "value3": uid
        })

        const Tests = require('../models/tests')(sequelize)
        const Questions = require('../models/questions')(sequelize)
        const Answers = require('../models/answers')(sequelize)


        Tests.create({
            testName: req.body.name,
            testDiff: (diff == 0 ? "Easy" : diff == 1 ? "Medium" : diff == 2 ? "Hard" : "N/A"),
            testQNum: qs.length
        }).then(test => {
            console.log("Created test with ID " + test.dataValues.testID + "! Generating Questions...")
            qs.forEach((q, i) => {
                Questions.create({
                    testID: test.dataValues.testID,
                    questionNum: i + 1,
                    questionBlockEncoded: Base64.encode(q.code),
                    questionText: q.question,
                    questionExplanation: q.explanation
                }).then(createdQ => {
                    q.answers.forEach((ans, i) => {
                        correct = String.fromCharCode(97 + i) == q.correct
                        Answers.create({
                            questionID: createdQ.dataValues.questionID,
                            testID: test.dataValues.testID,
                            ansText: ans,
                            ansLetter: String.fromCharCode(97 + i),
                            ansCorrect: correct
                        })
                    });
                })
            });
        });



    })

    return router;
}