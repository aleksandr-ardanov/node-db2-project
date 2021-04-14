exports.seed = function(knex) {
    return knex("cars").truncate()
        .then(() => {
            return knex("cars").insert([
                {
                    vin: '11111111111111111',
                    make: 'Chrysler',
                    model: 'Town & Country',
                    mileage: 175000,
                    title: 'clean',
                    transmission: 'CVT',
                  },
                  {
                    vin: '22222222222222222',
                    make: 'Toyota',
                    model: 'Camry',
                    mileage: 150000,
                    title: 'clean',
                    transmission: 'automatic',
                  },
                  {
                    vin: '33333333333333333',
                    make: 'Ford',
                    model: 'Mustang',
                    mileage: 0,
                    title: 'clean',
                    transmission: 'automatic',
                  },
            ])
        })
}