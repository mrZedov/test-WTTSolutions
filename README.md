# test-WTTSolutions

База <employee> расположена по адресу <mongodb://localhost>

Реализованы следующие методы:

Get() http://localhost:3000/employees
Получение массива всех сотрудников

@Get(:id) http://localhost:3000/employees/:id
Получить одного сотрудника по ID

@Post() http://localhost:3000/employees
Добавление нового сотрудника. При выполнении запроса происходит валидация на обязательность поля <firstName>,
но потенциально широкие возможности проверки полей
<dateAdded> и <dateUpdated> будут соответствовать текущему времени операции добавления  
В ответе будет найденный элемент

@Put(:id) http://localhost:3000/employees/:id
Найти сотрудника по ID и осуществить замену полей новыми значениями
В ответе будет новый измененный элемент
<dateUpdated> будет обновлено на текущеее время операции изменения

@Delete(:id) http://localhost:3000/employees/:id
Удалить сотрудника по ID из базы
В ответе будет удаленный элемент

Реквизиты записи сотрудника:
    firstName: string;
    lastName: string;
    login: string;
    workPhone: string;
    personalPhone: string;
    workEmail: string;
    personalEmail: string;
    company: string;
    businessLocation: string;
    role: string;
    hourlyRate: number;
