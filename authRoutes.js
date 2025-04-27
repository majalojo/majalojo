import express from 'express';
import Book from './models/Books.js';
import { deleteModel } from 'mongoose';

const router = express.Router();

//http://localhost:3000/api/newbook
router.post('/newbook', async (req, res) => {
  try {

    const { title, author, publishedYear } = req.body;


    if (!title || !author || !publishedYear) {
      return res.status(400).json({ message: 'Obavezna polja!' });
    }


    const existing = await Book.findOne({ title, author, publishedYear });
    if (existing) {
      return res.status(400).json({ message: 'Ova knjiga već postoji!' });
    }

    //Another approach:
    //const knjiga = await Book.create({ title, author, publishedYear });

    const knjiga = new Book({
     title,
     author,
     publishedYear
    });


    await knjiga.save();


    return res.status(201).json({
      message: 'Knjiga je uspješno dodana!',
      knjiga: {
        title: knjiga.title,
        author: knjiga.author,
        publishedYear: knjiga.publishedYear
      }
    });
  } catch {
    res.status(500).json({ message: 'Došlo je do greške' });
  }
});


//GET 
//http://localhost:3000/api/books
router.get('/books', async (req,res)=>{
     const sveknjige = await Book.find();
     res.send(sveknjige);
});


// http://localhost:3000/api/onebook?publishedYear=2022
router.get('/onebook', async (req,res)=>{
     const {publishedYear} = req.query;
     const sveknjige = await Book.findOne({publishedYear});
     if (!sveknjige) {
          return res.status(404).json({ message: 'Knjiga nije pronađena.' });
        }
     res.send(sveknjige);
});

//DELETE
http://localhost:3000/api/deletebooks
router.delete('/deletebooks', async (req, res)=>{
    const deleteAllBooks = await Book.deleteMany({});
    res.send(deleteAllBooks);
})

export default router;

//DELETE
http://localhost:3000/api/deleteonebook?title=Stara knjiga
router.delete('/deleteonebook', async (req,res)=>{
     const {title} = req.query;
     const deleteOneBook = await Book.deleteOne({title});
     res.send(deleteOneBook);
})
