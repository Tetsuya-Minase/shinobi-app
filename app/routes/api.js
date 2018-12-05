const express = require('express');
const connectDb = require('./connectDb');
const router = express.Router();

/**
 * 登録キャラクタ取得
 */
router.get('/character', function (req, res, next) {
    const name = req.query['name'];
    let sql = '';
    if (name && name.length > 0) {
        sql = `select * from chara where user_id = "${name}"`;
    } else {
        sql = 'select * from chara';
    }
    connectDb.query(sql, (err, rows) => {
        if (err) {
            res.status(500).send({ error: err });
        }
        const clientData = formatData(rows);
        res.send(clientData);
    });
});

/**
 * キャラクター登録
 */
router.post('/character', (req, res, next) => {
    const param = {
        user_id: req.body.userId,
        player_name: req.body.playerName,
        character_name: req.body.charactorName,
        name_kana: req.body.kana,
        regulation: req.body.regulation,
        type: req.body.type,
        joui_ryuha: req.body.ryuha,
        kai_ryuha: req.body.kairyuha,
        ryugi: req.body.ryugi,
        enemy: req.body.enemy,
        rank: req.body.rank,
        achievement: req.body.achievement,
        age: req.body.age,
        gender: req.body.gender,
        face: req.body.face,
        belief: req.body.belief,
        skill: JSON.stringify(req.body.selectedSkillList),
        arts: JSON.stringify(req.body.dispArtsArray),
        secrets: JSON.stringify(req.body.secrets),
        background: JSON.stringify(req.body.background),
        hyorogan: req.body.hyorogan,
        jintugan: req.body.jintugan,
        tonkohu: req.body.tonkohu,
        create_date: new Date(),
        last_modified: new Date(),
        delflg: 0
    };
    connectDb.query(`insert into chara set ?`, param, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ error: err });
        }
        res.send(result);
    });
});

/**
 * ログイン処理
 */
router.post('/login', (req, res, next) => {
    const id = req.body.id;
    const pass = req.body.password;

    connectDb.query(`select count(*) as "count" from login where user_id = "${id}" and password = "${pass}"`, (err, rows) => {
        if (err) {
            res.status(500).send({ error: err });
        }

        if (rows[0].count === 1) {
            res.send(true);
        } else {
            res.status(403).send({ error: 'ログインに失敗しました。' });
        }
    });
});

/**
 * ユーザ登録
 */
router.post('/user', (req, res, next) => {
    console.log('req.body:', req.body);
    const param = {
        user_id: req.body.userId,
        password: req.body.password,
        create_data: new Date(),
        lastmodified: new Date(),
        delflg: 0
    };
    console.log('param', param);
    connectDb.query(`insert into login set ?`, param, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ error: err });
        }
        console.log(result);
        res.send(result);
    });
});

router.get('/user', (req, res, next) => {
    const id = req.query['id'];
    const sql = `select count(*) as "count" from login where user_id = "${id}"`;
    connectDb.query(sql, (err, rows) => {
        if (err) {
            res.status(500).send({ error: err });
        }

        if (rows[0].count === 1) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
});

// デバッグ用
router.get('/user', (req, res, next) => {
    connectDb.query(`select * from login`, (err, rows) => {
        if (err) throw err;
        console.log(rows);
        res.send(rows);
    });
});
router.get('/user/del', (req, res, next) => {
    connectDb.query(`delete from login where id > 1`, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

/**
 * キャラクタデータフォーマッター
 * @param {object} dbData 
 */
const formatData = (dbData) => {
    const retList = [];
    Array.prototype.forEach.call(dbData, (data) => {
        const retobj = {};
        retobj['playerName'] = data.player_name;
        retobj['characterName'] = data.character_name;
        retobj['kana'] = data.name_kana;
        retobj['requlation'] = data.regulation;
        retobj['type'] = data.type;
        retobj['ryuha'] = data.joui_ryuha;
        retobj['kairyuha'] = data.kai_ryuha;
        retobj['ryugi'] = data.ryugi;
        retobj['enemy'] = data.enemy;
        retobj['rank'] = data.rank;
        retobj['achievement'] = data.achievement;
        retobj['age'] = data.age;
        retobj['gender'] = data.gender;
        retobj['face'] = data.face;
        retobj['belief'] = data.belief;
        retobj['selectedSkillList'] = JSON.parse(data.skill);
        retobj['dispArtsArray'] = JSON.parse(data.arts);
        retobj['secrets'] = JSON.parse(data.secrets);
        retobj['background'] = JSON.parse(data.background);
        retobj['hyorogan'] = data.hyorogan;
        retobj['jintugan'] = data.jintugan;
        retobj['tonkohu'] = data.tonkohu;
        retList.push(retobj);
    });
    return retList;
};

module.exports = router;
