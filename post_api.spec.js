import * as chai from "chai";
import chaiJsonSchemaAjv from "chai-json-schema-ajv";
import supertest from "supertest";

chai.use(chaiJsonSchemaAjv)

const {expect} = chai
// import { getRequest, sendRequest, updateRequest, deleteRequest } from './script.js';
import { dataInput,dataUbah } from "./data.js"
import {allPost, post} from "./post.js"
const request = supertest('https://dummyjson.com')

describe("Testing Api get,post,put,delete", function(){
    it('Judul produk 1 : His mother had always taught him', async function (){
        const res = await request.get('/posts/1')
        expect(res.body.title).to.equal('His mother had always taught him')
    })

    it('Judul produk : Data baru input', async function (){
        const res = await request.post('/posts/add').send(dataInput)
        expect(res.body.title).to.equal('Data baru input')
    })

    it('Judul produk 1 : Data ini berubah', async function (){
        const res = await request.put('/posts/1').send(dataUbah)
        expect(res.body.title).to.equal('Data ini berubah')
    })

    it('produk 1 : Validasi data yang dihapus', async function (){
        const res = await request.delete('/posts/1').expect(200)
    })
})

describe('Validasi data dan tipe data', function() {
    it('api all product test get menggunakan json schema', async function (){
        const res = await request.get('/posts')
        expect(res.body).to.be.jsonSchema(allPost);
    })

    it('api product test get menggunakan json schema', async function (){
        const res = await request.get('/posts/2')
        expect(res.body).to.be.jsonSchema(post);
    })

    it('api product test post menggunakan json schema', async function (){
        const res = await request.post('/posts/add').send(dataInput)
        expect(res.body).to.be.jsonSchema(post);
    })

    it('api product test put menggunakan json schema', async function (){
        const res = await request.put('/posts/1').send(dataUbah)
        expect(res.body).to.be.jsonSchema(post);
    })
})
