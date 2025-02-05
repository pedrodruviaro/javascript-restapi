const database = require("../database")
const User = require("./user")
const Product = require("./product")
const Inventory = require("./inventory")

class InventoryMovement {
  constructor() {
    this.model = database.db.define("inventory_movements", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
      },
      amount: {
        type: database.db.Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: database.db.Sequelize.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      productIt: {
        type: database.db.Sequelize.INTEGER,
        references: {
          model: Product,
          key: "id",
        },
      },
      inventoryId: {
        type: database.db.Sequelize.INTEGER,
        references: {
          model: Inventory,
          key: "id",
        },
      },
    })

    // Relations
    this.model.belongsTo(User, {
      foreignKey: "userId",
    })
    this.model.belongsTo(Product, {
      foreignKey: "productId",
    })
    this.model.belongsTo(Inventory, {
      foreignKey: "inventoryId",
    })

    User.hasMany(this.model, {
      foreignKey: "userId",
    })
    Product.hasMany(this.model, {
      foreignKey: "productId",
    })
    Inventory.hasMany(this.model, {
      foreignKey: "inventoryId",
    })
  }
}

module.exports = new InventoryMovement().model
