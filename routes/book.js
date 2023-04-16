const router=express.Router()
import express from "express";
import { getallbooks, getbookbyid, deletebooks, addbooks, updatebooksbyid,
 } from "../helper.js";



router.get('/', async (req, res) =>{
    const {language,rating} = req.query; 
    console.log(req.query,language)
    // let filteredbooks = books
    // if(language){
    // filteredbooks = books.filter((bk)=>bk.language === language)
    // }
    if(req.query.rating){
      req.query.rating = +req.query.rating
      }
    const book= await getallbooks(req);
     res.send(book);
  })
  
  router.get('/:id',async  (req, res)=> {
    const{id}=req.params;
    console.log(req.params)
    // const book =books.find((bk)=>bk.id == id)
     const book= await getbookbyid(id)
     book? res.send(book) : res.status(404).send({message: "no books found"});
    })
  
  
  router.delete('/:id',async  (req, res)=> {
    const{id}=req.params; 
    console.log(req.params)
    // const book =books.find((bk)=>bk.id == id)
     const book= await deletebooks(id);
     res.send(book);
  
  })
  
  
  router.post('/', async  (req, res)=> {
    const newbooks = req.body;
    console.log(req.body)
     const result = await addbooks(newbooks);
     res.send(result);
  
  })

    router.put('/:id', async  (req, res)=> {
    const{id}=req.params; 
    const updatebooks = req.body;
    console.log(req.body)
     const result = await updatebooksbyid(id,updatebooks)
     res.send(result);
  
  })


  export const booksRouter= router
   
  