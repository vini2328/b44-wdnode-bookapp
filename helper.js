import { client } from "./index.js";

export async function getallbooks(req) {
  return await client.db("b44wd").collection("books").find(req.query).toArray();
}
export async function getbookbyid(id) {
  return await client.db("b44wd").collection("books").findOne({ id: id });
}
export async function deletebooks(id) {
  return await client.db("b44wd").collection("books").deleteOne({ id: id });
}
export async function addbooks(newbooks) {
  return await client.db("b44wd").collection("books").insertMany(newbooks);
}


export async function updatebooksbyid(id,updatebooks) {
  return await client.db("b44wd").collection("books").updateOne({id:id },{$set:updatebooks});
}
