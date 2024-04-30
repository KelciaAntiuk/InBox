const connection = require('./connection');

const getAll = async () => {
  const [user] = await connection.execute('SELECT * FROM user');
  return user;

};

const createUser = async (user) => { //Recebemos um user e vamos 'pegar ela
  const { title, email, empresa, password } = user;

  const titleParam = title !== undefined ? title : null;
  const empresaParam = empresa !== undefined ? empresa : null;
  const emailParam = email !== undefined ? email : null;
  const passwordParam = password !== undefined ? password : null;

  //Aqui 'abrimos' a user e ent 'pegamos' o title, 
  //porque não recebo o status? porque toda user já começará com Status:pendente

  //const code = 'INSERT INTO user(title, email, empresa, password) VALUES (?, ?, ?, ?)';

  const [createdUser] = await connection.execute('INSERT INTO user (title, empresa, email, password) VALUES (?, ?, ?, ?)', [titleParam, empresaParam, emailParam, passwordParam]);

  //no banco de dados datas devem ser salvas em UTC:
  //const dateUTC = new Date(Date.now()).toUTCstring();

  return { insertId: createdUser.insertId };

};

const deleteUser = async (id) => {

  const code = 'DELETE FROM user WHERE id = ? '

  const removedUser = await connection.execute(code, [id]);
  return removedUser;

};

const updateUser = async (id, user) => {
  const { title } = user;

  const code = 'UPDATE user SET title = ? WHERE id = ? '
  const [updatedUser] = await connection.execute(code, [title, id]);
  return updatedUser

}

module.exports = {
  getAll,
  createUser,
  deleteUser,
  updateUser

};