/*

Restful Routes

#	Action	|URL	            |HTTP Verb	|EJS view 	|mongoose method
1	Index	|                   |GET        |index.ejs  |.find()
2	Show	|         /:id      |GET        |show.ejs   |.findById()
3	New	    |         /new      |GET        |new.ejs	|none
4	Create	|         /	        |POST       |none       |.create(req.body)
5	Edit	|         /:id/edit	|GET        |edit.ejs   |.findById()
6	Update	|         /:id      |PUT        |none       |.findByIdAndUpdate()
7	Destroy	|         /:id      |DELETE     |none       |.findByIdAndDelete()

*/