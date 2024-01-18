/*

Relationships in Sequelize

To tell Sequelize that a column is a FK, we need to add a couple properties to that column obj in our migration
    references: {
        model: <table name>,
        key: 'id' (not needed unless PK is something besides id)
    },
    onDelete: 'CASCADE || SET NULL' (if desired)

Next we have to connect our models, this is done by using Associations

Associations
    One-to-One
        hasOne - not used much
    One-to-Many
        belongsTo
        hasMany

        We have to determine which is which and the order does matter
        The model with the FK is the belongsTo
        <model we are in>.<relationship>(models.<the name of the model we are connecting to>, {
            foreignKey: <name of the FK being used to connect>
        })
        In order to CASCADE Delete, we need to add stuff to the hasMany
        The hooks: true enforces that the deletions occur in the right order. If this is left off, we can still run into Foreign Key Constraint Failed errors
    Many-to-Many
        <model we are in>.belongsToMany(models.<name of the model on other side of the join table>, {
            through: models.<name of model for join table>,
            foreignKey: <FK to join to join table>,
            otherKey: <FK to join from join table to other table>
        })






*/