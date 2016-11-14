const request = require("request")
const cheerio = require('cheerio')
const express = require('express')

const app = express()

app.get('/movie/:id', (req,res) => {

	const idMovie = req.params.id;
	const myUrl = 'http://www.imdb.com/title/' + idMovie

	request(myUrl, (error, response, body) => {

		let $ = cheerio.load(body)

		const title = $(".titleBar h1").text();
		const desc = $(".summary_text").text().trim();
		const director = $("[itemprop='director']").text().trim();

		res.json( {title, desc, director} )

	})

})

app.listen(3000, () => console.log("Listening on port 3000...."))
