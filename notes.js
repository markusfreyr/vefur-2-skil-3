/* todo sækja pakka sem vantar  */

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    searchPath: ['knex', 'public'],
  },
});


/**
 * Create a note asynchronously.
 *
 * @param {Object} note - Note to create
 * @param {string} note.title - Title of note
 * @param {string} note.text - Text of note
 * @param {string} note.datetime - Datetime of note
 *
 * @returns {Promise} Promise representing the object result of creating the note
 */
async function create({ title, text, datetime } = {}) {
  /* todo útfæra */
  return knex('notes')
    .returning(['id', 'datetime', 'title', 'text'])
    .insert([{ datetime, title, text }]);
}

/**
 * Read all notes.
 *
 * @returns {Promise} Promise representing an array of all note objects
 */
async function readAll() {
  /* todo útfæra */
  return knex.select('*')
    .from('notes');
}

/**
 * Read a single note.
 *
 * @param {number} id - Id of note
 *
 * @returns {Promise} Promise representing the note object or null if not found
 */
async function readOne(id) {
  /* todo útfæra */
  return knex.select('*')
    .from('notes')
    .where('id', id);
}

/**
 * Update a note asynchronously.
 *
 * @param {number} id - Id of note to update
 * @param {Object} note - Note to create
 * @param {string} note.title - Title of note
 * @param {string} note.text - Text of note
 * @param {string} note.datetime - Datetime of note
 *
 * @returns {Promise} Promise representing the object result of creating the note
 */
async function update(id, { title, text, datetime } = {}) {
  /* todo útfæra */
  return knex('notes')
    .where('id', id)
    .update({ title, text, datetime })
    .returning(['id', 'datetime', 'title', 'text']);
}

/**
 * Delete a note asynchronously.
 *
 * @param {number} id - Id of note to delete
 *
 * @returns {Promise} Promise representing the boolean result of creating the note
 */
async function del(id) {
  /* todo útfæra */
  return knex('notes')
    .where('id', id)
    .del();
}

module.exports = {
  create,
  readAll,
  readOne,
  update,
  del,
};
