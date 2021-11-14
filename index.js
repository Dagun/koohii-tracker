const jsdom = require("jsdom");
const fs = require('fs');
const schedule = require('node-schedule');
const { JSDOM } = jsdom;
const { Telegraf } = require('telegraf');
const bot = new Telegraf("2110283983:AAEM24DgzMN_iiaoJVNQrD12Q19qZ-7lc7g");

const kanjiList = "一 二 三 四 五 六 七 八 九 十 口 日 月 田 目 古 吾 冒 朋 明 唱 晶 品 呂 昌 早 旭 世 胃 旦 胆 亘 凹 凸 旧 自 白 百 中 千 舌 升 昇 丸 寸 肘 専 博 占 上 下 卓 朝 嘲 只 貝 唄 貞 員 貼 見 児 元 頁 頑 凡 負 万 句 肌 旬 勺 的 首 乙 乱 直 具 真 工 左 右 有 賄 貢 項 刀 刃 切 召 昭 則 副 別 丁 町 可 頂 子 孔 了 女 好 如 母 貫 兄 呪 克 小 少 大 多 夕 汐 外 名 石 肖 硝 砕 砂 妬 削 光 太 器 臭 嗅 妙 省 厚 奇 川 州 順 水 氷 永 泉 腺 原 願 泳 沼 沖 汎 江 汰 汁 沙 潮 源 活 消 況 河 泊 湖 測 土 吐 圧 埼 垣 填 圭 封 涯 寺 時 均 火 炎 煩 淡 灯 畑 災 灰 点 照 魚 漁 里 黒 墨 鯉 量 厘 埋 同 洞 胴 向 尚 字 守 完 宣 宵 安 宴 寄 富 貯 木 林 森 桂 柏 枠 梢 棚 杏 桐 植 椅 枯 朴 村 相 机 本 札 暦 案 燥 未 末 昧 沫 味 妹 朱 株 若 草 苦 苛 寛 薄 葉 模 漠 墓 暮 膜 苗 兆 桃 眺 犬 状 黙 然 荻 狩 猫 牛 特 告 先 洗 介 界 茶 脊 合 塔 王 玉 宝 珠 現 玩 狂 旺 皇 呈 全 栓 理 主 注 柱 金 銑 鉢 銅 釣 針 銘 鎮 道 導 辻 迅 造 迫 逃 辺 巡 車 連 軌 輸 喩 前 煎 各 格 賂 略 客 額 夏 処 条 落 冗 冥 軍 輝 運 冠 夢 坑 高 享 塾 熟 亭 京 涼 景 鯨 舎 周 週 士 吉 壮 荘 売 学 覚 栄 書 津 牧 攻 敗 枚 故 敬 言 警 計 詮 獄 訂 訃 討 訓 詔 詰 話 詠 詩 語 読 調 談 諾 諭 式 試 弐 域 賊 栽 載 茂 戚 成 城 誠 威 滅 減 蔑 桟 銭 浅 止 歩 渉 頻 肯 企 歴 武 賦 正 証 政 定 錠 走 超 赴 越 是 題 堤 建 鍵 延 誕 礎 婿 衣 裁 装 裏 壊 哀 遠 猿 初 巾 布 帆 幅 帽 幕 幌 錦 市 柿 姉 肺 帯 滞 刺 制 製 転 芸 雨 雲 曇 雷 霜 冬 天 妖 沃 橋 嬌 立 泣 章 競 帝 諦 童 瞳 鐘 商 嫡 適 滴 敵 匕 叱 匂 頃 北 背 比 昆 皆 楷 諧 混 渇 謁 褐 喝 葛 旨 脂 詣 壱 毎 敏 梅 海 乞 乾 腹 複 欠 吹 炊 歌 軟 次 茨 資 姿 諮 賠 培 剖 音 暗 韻 識 鏡 境 亡 盲 妄 荒 望 方 妨 坊 芳 肪 訪 放 激 脱 説 鋭 曽 増 贈 東 棟 凍 妊 廷 染 燃 賓 歳 県 栃 地 池 虫 蛍 蛇 虹 蝶 独 蚕 風 己 起 妃 改 記 包 胞 砲 泡 亀 電 竜 滝 豚 逐 遂 家 嫁 豪 腸 場 湯 羊 美 洋 詳 鮮 達 羨 差 着 唯 堆 椎 誰 焦 礁 集 准 進 雑 雌 準 奮 奪 確 午 許 歓 権 観 羽 習 翌 曜 濯 曰 困 固 錮 国 団 因 姻 咽 園 回 壇 店 庫 庭 庁 床 麻 磨 心 忘 恣 忍 認 忌 志 誌 芯 忠 串 患 思 恩 応 意 臆 想 息 憩 恵 恐 惑 感 憂 寡 忙 悦 恒 悼 悟 怖 慌 悔 憎 慣 愉 惰 慎 憾 憶 惧 憧 憬 慕 添 必 泌 手 看 摩 我 義 議 犠 抹 拭 拉 抱 搭 抄 抗 批 招 拓 拍 打 拘 捨 拐 摘 挑 指 持 拶 括 揮 推 揚 提 損 拾 担 拠 描 操 接 掲 掛 捗 研 戒 弄 械 鼻 刑 型 才 財 材 存 在 乃 携 及 吸 扱 丈 史 吏 更 硬 梗 又 双 桑 隻 護 獲 奴 怒 友 抜 投 没 股 設 撃 殻 支 技 枝 肢 茎 怪 軽 叔 督 寂 淑 反 坂 板 返 販 爪 妥 乳 浮 淫 将 奨 采 採 菜 受 授 愛 曖 払 広 勾 拡 鉱 弁 雄 台 怠 治 冶 始 胎 窓 去 法 会 至 室 到 致 互 棄 育 撤 充 銃 硫 流 允 唆 出 山 拙 岩 炭 岐 峠 崩 密 蜜 嵐 崎 崖 入 込 分 貧 頒 公 松 翁 訟 谷 浴 容 溶 欲 裕 鉛 沿 賞 党 堂 常 裳 掌 皮 波 婆 披 破 被 残 殉 殊 殖 列 裂 烈 死 葬 瞬 耳 取 趣 最 撮 恥 職 聖 敢 聴 懐 慢 漫 買 置 罰 寧 濁 環 還 夫 扶 渓 規 替 賛 潜 失 鉄 迭 臣 姫 蔵 臓 賢 腎 堅 臨 覧 巨 拒 力 男 労 募 劣 功 勧 努 勃 励 加 賀 架 脇 脅 協 行 律 復 得 従 徒 待 往 征 径 彼 役 徳 徹 徴 懲 微 街 桁 衡 稿 稼 程 税 稚 和 移 秒 秋 愁 私 秩 秘 称 利 梨 穫 穂 稲 香 季 委 秀 透 誘 稽 穀 菌 萎 米 粉 粘 粒 粧 迷 粋 謎 糧 菊 奥 数 楼 類 漆 膝 様 求 球 救 竹 笑 笠 笹 箋 筋 箱 筆 筒 等 算 答 策 簿 築 篭 人 佐 侶 但 住 位 仲 体 悠 件 仕 他 伏 伝 仏 休 仮 伎 伯 俗 信 佳 依 例 個 健 側 侍 停 値 倣 傲 倒 偵 僧 億 儀 償 仙 催 仁 侮 使 便 倍 優 伐 宿 傷 保 褒 傑 付 符 府 任 賃 代 袋 貸 化 花 貨 傾 何 荷 俊 傍 俺 久 畝 囚 内 丙 柄 肉 腐 座 挫 卒 傘 匁 以 似 併 瓦 瓶 宮 営 善 膳 年 夜 液 塚 幣 蔽 弊 喚 換 融 施 旋 遊 旅 勿 物 易 賜 尿 尼 尻 泥 塀 履 屋 握 屈 掘 堀 居 据 裾 層 局 遅 漏 刷 尺 尽 沢 訳 択 昼 戸 肩 房 扇 炉 戻 涙 雇 顧 啓 示 礼 祥 祝 福 祉 社 視 奈 尉 慰 款 禁 襟 宗 崇 祭 察 擦 由 抽 油 袖 宙 届 笛 軸 甲 押 岬 挿 申 伸 神 捜 果 菓 課 裸 斤 析 所 祈 近 折 哲 逝 誓 斬 暫 漸 断 質 斥 訴 昨 詐 作 雪 録 剥 尋 急 穏 侵 浸 寝 婦 掃 当 彙 争 浄 事 唐 糖 康 逮 伊 君 群 耐 需 儒 端 両 満 画 歯 曲 曹 遭 漕 槽 斗 料 科 図 用 庸 備 昔 錯 借 惜 措 散 廿 庶 遮 席 度 渡 奔 噴 墳 憤 焼 暁 半 伴 畔 判 拳 券 巻 圏 勝 藤 謄 片 版 之 乏 芝 不 否 杯 矢 矯 族 知 智 挨 矛 柔 務 霧 班 帰 弓 引 弔 弘 強 弥 弱 溺 沸 費 第 弟 巧 号 朽 誇 顎 汚 与 写 身 射 謝 老 考 孝 教 拷 者 煮 著 箸 署 暑 諸 猪 渚 賭 峡 狭 挟 頬 追 阜 師 帥 官 棺 管 父 釜 交 効 較 校 足 促 捉 距 路 露 跳 躍 践 踏 踪 骨 滑 髄 禍 渦 鍋 過 阪 阿 際 障 隙 随 陪 陽 陳 防 附 院 陣 隊 墜 降 階 陛 隣 隔 隠 堕 陥 穴 空 控 突 究 窒 窃 窟 窪 搾 窯 窮 探 深 丘 岳 兵 浜 糸 織 繕 縮 繁 縦 緻 線 綻 締 維 羅 練 緒 続 絵 統 絞 給 絡 結 終 級 紀 紅 納 紡 紛 紹 経 紳 約 細 累 索 総 綿 絹 繰 継 緑 縁 網 緊 紫 縛 縄 幼 後 幽 幾 機 畿 玄 畜 蓄 弦 擁 滋 慈 磁 系 係 孫 懸 遜 却 脚 卸 御 服 命 令 零 齢 冷 領 鈴 勇 湧 通 踊 疑 擬 凝 範 犯 氾 厄 危 宛 腕 苑 怨 柳 卵 留 瑠 貿 印 臼 毀 興 酉 酒 酌 酎 酵 酷 酬 酪 酢 酔 配 酸 猶 尊 豆 頭 短 豊 鼓 喜 樹 皿 血 盆 盟 盗 温 蓋 監 濫 鑑 藍 猛 盛 塩 銀 恨 根 即 爵 節 退 限 眼 良 朗 浪 娘 食 飯 飲 飢 餓 飾 餌 館 餅 養 飽 既 概 慨 平 呼 坪 評 刈 刹 希 凶 胸 離 璃 殺 爽 純 頓 鈍 辛 辞 梓 宰 壁 璧 避 新 薪 親 幸 執 摯 報 叫 糾 収 卑 碑 陸 睦 勢 熱 菱 陵 亥 核 刻 該 骸 劾 述 術 寒 塞 醸 譲 壌 嬢 毒 素 麦 青 精 請 情 晴 清 静 責 績 積 債 漬 表 俵 潔 契 喫 害 轄 割 憲 生 星 醒 姓 性 牲 産 隆 峰 蜂 縫 拝 寿 鋳 籍 春 椿 泰 奏 実 奉 俸 棒 謹 僅 勤 漢 嘆 難 華 垂 唾 睡 錘 乗 剰 今 含 貪 吟 念 捻 琴 陰 予 序 預 野 兼 嫌 鎌 謙 廉 西 価 要 腰 票 漂 標 栗 慄 遷 覆 煙 南 楠 献 門 問 閲 閥 間 闇 簡 開 閉 閣 閑 聞 潤 欄 闘 倉 創 非 俳 排 悲 罪 輩 扉 侯 喉 候 決 快 偉 違 緯 衛 韓 干 肝 刊 汗 軒 岸 幹 芋 宇 余 除 徐 叙 途 斜 塗 束 頼 瀬 勅 疎 辣 速 整 剣 険 検 倹 重 動 腫 勲 働 種 衝 薫 病 痴 痘 症 瘍 痩 疾 嫉 痢 痕 疲 疫 痛 癖 匿 匠 医 匹 区 枢 殴 欧 抑 仰 迎 登 澄 発 廃 僚 瞭 寮 療 彫 形 影 杉 彩 彰 彦 顔 須 膨 参 惨 修 珍 診 文 対 紋 蚊 斑 斉 剤 済 斎 粛 塁 楽 薬 率 渋 摂 央 英 映 赤 赦 変 跡 蛮 恋 湾 黄 横 把 色 絶 艶 肥 甘 紺 某 謀 媒 欺 棋 旗 期 碁 基 甚 勘 堪 貴 遺 遣 潰 舞 無 組 粗 租 狙 祖 阻 査 助 宜 畳 並 普 譜 湿 顕 繊 霊 業 撲 僕 共 供 異 翼 戴 洪 港 暴 爆 恭 選 殿 井 丼 囲 耕 亜 悪 円 角 触 解 再 講 購 構 溝 論 倫 輪 偏 遍 編 冊 柵 典 氏 紙 婚 低 抵 底 民 眠 捕 哺 浦 蒲 舗 補 邸 郭 郡 郊 部 都 郵 邦 那 郷 響 郎 廊 盾 循 派 脈 衆 逓 段 鍛 后 幻 司 伺 詞 飼 嗣 舟 舶 航 舷 般 盤 搬 船 艦 艇 瓜 弧 孤 繭 益 暇 敷 来 気 汽 飛 沈 枕 妻 凄 衰 衷 面 麺 革 靴 覇 声 眉 呉 娯 誤 蒸 承 函 極 牙 芽 邪 雅 釈 番 審 翻 藩 毛 耗 尾 宅 託 為 偽 畏 長 張 帳 脹 髪 展 喪 巣 単 戦 禅 弾 桜 獣 脳 悩 厳 鎖 挙 誉 猟 鳥 鳴 鶴 烏 蔦 鳩 鶏 島 暖 媛 援 緩 属 嘱 偶 遇 愚 隅 逆 塑 遡 岡 鋼 綱 剛 缶 陶 揺 謡 鬱 就 蹴 懇 墾 貌 免 逸 晩 勉 象 像 馬 駒 験 騎 駐 駆 駅 騒 駄 驚 篤 罵 騰 虎 虜 膚 虚 戯 虞 慮 劇 虐 鹿 麓 薦 慶 麗 熊 能 態 寅 演 辰 辱 震 振 娠 唇 農 濃 送 関 咲 鬼 醜 魂 魔 魅 塊 襲 嚇 朕 雰 箇 錬 遵 罷 屯 且 藻 隷 癒 璽 潟 丹 丑 羞 卯 巳".split(" ");
let pathToFile;
if (process.env.LOGNAME == "mm") {
    pathToFile = "felix.json";
} else {
    pathToFile = "/home/pi/koohii-tracker/felix.json";
}

let dailyMessages = ["Felix? 😳😳 Why did you learn ","Ich als 67 muss richtig blushen 👉👈 wenn felix auf die idee kommt zu viele kanjis zu lernen... nämlich ", "Rosen sind rot 🔴, seid wie felix 🏗, er lernte heute "];
let milestoneMessages = ["Ratet mal wer heute ein milestone erreicht hat 😎? ","If every day would be a milestone for felix, it'd be a boring day! myb... idk... stop thinkin! ", "Fast hat der Felix sein Ziel erreicht 🥵🥵🥵 "];
let amountOfMessages = 3;

const mileStoneCounter = 50;
const endGoal = 2200;

let dId = 773246069;
let fId = -1001357131424;

let updateFelix = () => {
    JSDOM.fromURL("https://kanji.koohii.com/profile/Rockoro", {}).then((dom) => {
        let rawdata = fs.readFileSync(pathToFile);
        let koohii = JSON.parse(rawdata);
        let table = dom.window.document.querySelector("#main_container > table");
        let kanjis = table.querySelector("tbody > tr:nth-child(2) > td > strong").innerHTML;
        let reviews = table.querySelector("tbody > tr:nth-child(3) > td").innerHTML;
        let lastLogin = table.querySelector("tbody > tr:nth-child(5) > td").innerHTML;
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        let jsonData = { time: hours + ":" + minutes + ":" + seconds, date: date + "-" + month + "-" + year, kanjis: kanjis, reviews: reviews, lastLogin: lastLogin };
        koohii.koohii.data.push(jsonData);

        if (koohii.koohii.data[koohii.koohii.data.length - 2].reviews != koohii.koohii.data[koohii.koohii.data.length - 1].reviews) {
            if (koohii.koohii.data[koohii.koohii.data.length - 2].kanjis != koohii.koohii.data[koohii.koohii.data.length - 1].kanjis) {
                fs.writeFile(pathToFile, JSON.stringify(koohii), 'utf8', function (err) {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
                    console.log("JSON file has been saved.", date, month, year, hours, minutes, seconds);
                });
            }
        } else {
        }
    });
};

bot.hears('/felix', ctx => {
    JSDOM.fromURL("https://kanji.koohii.com/profile/Rockoro", {}).then((dom) => {
        let table = dom.window.document.querySelector("#main_container > table");
        let kanjis = table.querySelector("tbody > tr:nth-child(2) > td > strong").innerHTML;
        let reviews = table.querySelector("tbody > tr:nth-child(3) > td").innerHTML;
        let lastLogin = table.querySelector("tbody > tr:nth-child(5) > td").innerHTML;
        let felix = `Felix currently knows ${kanjis} Kanjis, which he reviewed ${reviews} times. The last time he was online was ${lastLogin}.\n\nToday he learnt the following kanjis:\n`;
        // ctx.deleteMessage();

        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();

        let jsonDate = { date: date - 1 + "-" + month + "-" + year };
        let rawdata = fs.readFileSync(pathToFile);
        let koohii = JSON.parse(rawdata);
        let raw = [];
        raw.push(koohii.koohii.data.find((e) => {
            return e.date.localeCompare(jsonDate.date) == 0;
        }));

        if (raw.length - 1 < 0) {
            felix.concat("none :(");
        } else {
            for (let i = raw[raw.length - 1].kanjis; i < kanjis; i++) {
                felix = felix.concat(kanjiList[i]);
            }
        }

        bot.telegram.sendMessage(ctx.chat.id, felix);
    });
});

bot.hears('/kanjis', ctx => {
    JSDOM.fromURL("https://kanji.koohii.com/profile/Rockoro", {}).then((dom) => {
        let table = dom.window.document.querySelector("#main_container > table");
        let kanjis = table.querySelector("tbody > tr:nth-child(2) > td > strong").innerHTML;
        let felix = `Felix currently knows ${kanjis} Kanjis. These are the Kanjis he knows:\n`;
        for (let i = 0; i < kanjis; i++) {
            felix = felix.concat(kanjiList[i]);
        }
        // ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.chat.id, felix);
    });
});

bot.hears('/json', ctx => {
    ctx.replyWithDocument({ source: pathToFile });
});

bot.hears('/id', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, ctx.chat.id);
});

bot.hears('/dailyMessage', ctx => {
    dailyMessage(ctx.chat.id);
});

bot.launch();

let milestone = (id, skip) => {
    JSDOM.fromURL("https://kanji.koohii.com/profile/Rockoro", {}).then((dom) => {
        let table = dom.window.document.querySelector("#main_container > table");
        let kanjis = table.querySelector("tbody > tr:nth-child(2) > td > strong").innerHTML;
        let felix = milestoneMessages[randomIntFromInterval(0,amountOfMessages-1)];

        if(skip==undefined) skip = false;

        if (kanjis % mileStoneCounter == 0 || skip) {
            felix = felix.concat(kanjis, " Kanjis erreicht!");
            if (id == undefined) {
                bot.telegram.sendMessage(dId, felix);
            } else {
                bot.telegram.sendMessage(id, felix);
            }
        }
    });
}

let dailyMessage = (id, skip) => {
    JSDOM.fromURL("https://kanji.koohii.com/profile/Rockoro", {}).then((dom) => {
        let table = dom.window.document.querySelector("#main_container > table");
        let kanjis = table.querySelector("tbody > tr:nth-child(2) > td > strong").innerHTML;

        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();

        let jsonDate = { date: date - 1 + "-" + month + "-" + year };
        let rawdata = fs.readFileSync(pathToFile);
        let koohii = JSON.parse(rawdata);
        let raw = [];
        let felix = dailyMessages[randomIntFromInterval(0,amountOfMessages-1)];

        raw.push(koohii.koohii.data.find((e) => {
            return e.date.localeCompare(jsonDate.date) == 0;
        }));

        if(skip==undefined) skip = false;

        if (raw.length - 1 < 0 || !(skip)) {
        } else {
            let dailyKanjis = kanjis - raw[raw.length - 1].kanjis;
            if (dailyKanjis > 10 || skip) {
                felix = felix.concat(dailyKanjis - 10, " extra Kanjis more than needed today");
                if (id == undefined) {
                    bot.telegram.sendMessage(dId, felix);
                } else {
                    bot.telegram.sendMessage(id, felix);
                }
            }
        }
    });
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const job = schedule.scheduleJob('* */5 * * * *', function () {
    updateFelix();
});

const dailyMessageJob = schedule.scheduleJob('* * 20 * * *', function () {
    milestone(fId);
    dailyMessage(fId);
});