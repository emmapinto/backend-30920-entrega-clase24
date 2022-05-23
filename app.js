const exphbs = require("express-handlebars");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000 || process.env.port;
const cookieParser = require("cookie-parser");
const session = require("express-session");

const MongoStore = require("connect-mongo")
const advanceOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

app.use(
	session({
		store: MongoStore.create({
			mongoUrl: "mongodb+srv://moncholoco:moncholoco@cluster0.jj0on.mongodb.net/clase24?retryWrites=true&w=majority",
			mongoOptions: advanceOptions
		}),
		secret: "shhh",
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 60000 * 10 } // tiempo de vida máximo de 10 minutos.
	})
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main.hbs" }));
app.set("view engine", ".hbs");
app.use(express.static("public"));

let user = "";
let usuarios = [];
let person = "";

app.get("/", (req, res) => {
	if (req.session.user) {
		res.redirect("/bienvenido");
	} else {
		res.redirect("/login");
	}
});

app.get("/login", (req, res) => {
	res.sendFile(__dirname + "/public/login.html");
});

/***** Empezar desde http://localhost:3000/login  ******/
app.post("/login", (req, res) => {
	let { user } = req.body;
	usuarios.push(req.body);
	person = user;
	console.log(`do Post ${user}`);
	if (req.body.user) {
		req.session.user = user;
		res.redirect("/");
	}
});

/********* Bienvenido *********/
app.get("/bienvenido", (req, res) => {
	if (req.session.user) {
		res.render("bienvenido", {
			bienvenido: usuarios.find((usuario) => usuario.user == req.session.user),
		});
	} else {
		res.redirect("/login");
	}
});

/****** Para destruir la session: http://localhost:3000/logout ******/
app.get("/logout", (req, res) => {
	req.session.destroy(() => {
		res.render("logout", { logout: person });
	});
	// setTimeout(() => {
	// 	res.redirect("/");
	// }, 2000);
});

app.listen(PORT, () => {
	console.log("Server listen port 3000");
});
