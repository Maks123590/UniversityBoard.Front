import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/students').default);
app.model(require('./models/groups').default);
app.model(require('./models/exams').default);
app.model(require('./models/academicDisciplines').default);
app.model(require('./models/educationalDirections').default);
app.model(require('./models/academicDepartaments').default);
app.model(require('./models/switches').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
