CREATE DATABASE IF NOT EXISTS chomp_n_veg;

USE chomp_n_veg;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS consumables (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(10) NOT NULL,
    calories DECIMAL(5, 2) NOT NULL,
    protein DECIMAL(5, 2),
    fat DECIMAL(5, 2),
    carbohydrate DECIMAL(5, 2)
);

CREATE TABLE IF NOT EXISTS users_consume_consumables (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fkuser INT NOT NULL,
    fkconsumable INT NOT NULL,
    quantity INT NOT NULL,
    meal_type VARCHAR(50),
    date_consumed DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_users_consume_consumables FOREIGN KEY (fkuser) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_consumables_get_consumed_by_users FOREIGN KEY (fkconsumable) REFERENCES consumables(id) ON DELETE CASCADE
);