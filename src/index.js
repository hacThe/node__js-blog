const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 3000;

const db = require('./config/db');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
db.connect();
app.use(
    express.urlencoded({    
        extended: true,
    }),
);


app.use(express.json());

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a+b,
        }
    }), 
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource','views'));
app.use(methodOverride('_method'));
// routes init
           route(app);
   
                 app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
