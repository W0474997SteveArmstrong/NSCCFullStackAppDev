const express = require('express');
const multer = require('multer');
const Database = require('better-sqlite3');

const db =new Database('./db/Chinook_Sqlite.sqlite')