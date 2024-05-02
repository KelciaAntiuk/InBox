const connection = require('./connection');

const getAll = async () => {
  const [email] = await connection.execute('SELECT * FROM email');
  return email;

};

const createEmail = async (email) => { //Recebemos uma people e vamos 'pegar ela

  const  { assunto, body, receiver, user } = email; 
  //Aqui 'abrimos' a people e ent 'pegamos' o title, 
  //porque não recebo o status? porque toda people já começará com Status:pendente

  const code = 'INSERT INTO email(assunto,body, receiver, user) VALUES (?, ?, ?, ?)';

  const [ createdEmail] = await connection.execute(code , [assunto, body, receiver, user]);


  return {insertId: createdEmail.insertId};

};

const deleteEmail = async (id) => {

  const code = 'DELETE FROM email WHERE id = ? '

  const removedEmail = await connection.execute(code, [id]);
  return removedEmail;

};

const updateEmail = async (id, email) => {
  const { title } = email;

  const code = 'UPDATE email SET title = ? WHERE id = ? '
  const [updatedEmail] = await connection.execute(code, [title, id]);
  return updatedEmail

}

module.exports = {
  getAll,
  createEmail,
  deleteEmail,
  updateEmail

};