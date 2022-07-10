import 'dotenv/config'
import { app } from './src/app.js';
import { db } from './src/db/config/db.config.js'

const PORT = process.env.PORT || 8000;
// db.connect(error => {
//     if (error) throw error
//     console.log("DB 연결 성공"); 
// })
app.listen(process.env.PORT || 5000, () => {
    console.log(`서버 정상 실행 http://localhost:${PORT}`)
})