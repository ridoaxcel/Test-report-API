import supertest from 'supertest';

const request = supertest('https://dummyjson.com');

// request
//   .get('/posts/1')
//   .then(response => {
//     console.log(response.body);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

  const dataInput = {
    title: 'Data baru input',
    description: 'Hallo ini data yang baru diinput',
    body: 'Hello world this new body',
    userId: 5,
    tags: ['math','sciece','biology'],
    reaction: 3
  };

  const dataUbah = {
    title: 'Data ini berubah',
    description: 'Hallo ini data yang baru diubah',
    body: 'Hello world this new update body',
    userId: 10,
    tags: ['calculus','algebra','statistics '],
    reaction: 3
  };

//   request
//   .post('/posts/add') 
//   .send(data)
//   .then(response => {
//     console.log('Response:', response.body);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

//   request
//   .put('/posts/1') 
//   .send(data)
//   .then(response => {
//     console.log('Response:', response.body);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
  
//   request
//   .delete('/posts/1')
//   .then(response => {
//     console.log('Response:', response.body);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

async function getRequest(){
  const result = await request.get('/posts/1')
  return result.body.title;
}

async function sendRequest(){
  const result = await request.post('/posts/add')
  .send(dataInput)
  .expect(200)
  .then(response => {
      console.log('Response:', response.body);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

async function updateRequest(){
  const result = await request.put('/posts/1')
  .send(dataUbah)
  .expect(200)
  .then(response => {
      console.log('Response:', response.body);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

async function deleteRequest(){
  const result = await request.delete('/posts/1')
  .expect(200)
  .then(response => {
      console.log('Response:', response.body);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

console.log(getRequest());
// sendRequest()
//updateRequest()
// deleteRequest();

// export { getRequest, sendRequest, updateRequest, deleteRequest };