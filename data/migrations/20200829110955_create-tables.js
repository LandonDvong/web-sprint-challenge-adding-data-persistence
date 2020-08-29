
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
        table.boolean("complete").notNull().defaultTo(false)
    })
    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.text("description").notNull()
        table.text("notes")
        table.boolean("complete").notNull().defaultTo(false)
        table.integer("project_id").notNull().references("id").inTable("projects").onDelete("CASCADE").onUpdate("CASCADE")
})
    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
})




}
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects")
};
