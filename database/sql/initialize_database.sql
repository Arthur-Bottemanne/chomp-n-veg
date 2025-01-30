CREATE DATABASE IF NOT EXISTS chomp_n_veg;

USE chomp_n_veg;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS foods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    calories DECIMAL(5, 2) NOT NULL,
    protein DECIMAL(5, 2),
    fat DECIMAL(5, 2),
    carbohydrate DECIMAL(5, 2)
);

CREATE TABLE IF NOT EXISTS beverages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    liters DECIMAL(5, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS users_eat_foods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fkuser INT NOT NULL,
    fkfood INT NOT NULL,
    meal_type VARCHAR(50),
    date_eaten DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_users_eat_foods FOREIGN KEY (fkuser) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_foods_eaten_by_users FOREIGN KEY (fkfood) REFERENCES foods(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS users_drink_beverages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fkuser INT NOT NULL,
    fkbeverage INT NOT NULL,
    date_drunk DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_users_drink_beverages FOREIGN KEY (fkuser) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_beverages_drank_by_users FOREIGN KEY (fkbeverage) REFERENCES beverages(id) ON DELETE CASCADE
);