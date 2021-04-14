// DO YOUR MAGIC
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();
        tbl.text("vin",17).unique().notNullable();
        tbl.text("make",100).notNullable();
        tbl.text("model",100).notNullable();
        tbl.integer("mileage").notNullable();
        tbl.text("title",100);
        tbl.text("transmission",100);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars")    
}
