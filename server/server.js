const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/register', (req, res) => {
  // Получите данные из тела запроса
  const { username, password } = req.body;

  // Обработайте регистрацию пользователя
  // Ваш код для сохранения пользователя в базу данных или другие действия

  // Отправьте ответ клиенту
  res.json({ message: 'Регистрация прошла успешно' });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
