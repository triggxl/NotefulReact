const FoldersService = {
  getAllFolders(knex) {
    return knex.select('*').from('folders')
  },

  insertFolders(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into('folders')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  getById(knex, id) {
    return knex
      .from('folders')
      .select('*')
      .where('id', id)
      .first()
  },

  deleteFolders(knex, id) {
    return knex('folders')
      .where({ id })
      .delete()
  },

  updateFolders(knex, id, newFolderFields) {
    return knex('folders')
      .where({ id })
      .update(newFolderFields)
  },
}

module.exports = FoldersService

// client is making a GET request to /folders and /notes....undefined id error need to figure out why it's throwing this error....use Postman to make requests to each endpoint to figure out why each route isn't working
