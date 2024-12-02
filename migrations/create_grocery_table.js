/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('grocerystores', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.decimal('latitude', 10, 7).notNullable(); // Supports latitude with precision up to 7 decimal places
      table.decimal('longitude', 10, 7).notNullable(); // Supports longitude with precision up to 7 decimal places
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('grocerystores');
};
