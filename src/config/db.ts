import { createConnection } from "mysql";
require('dotenv').config();

export const connectionPool = createConnection({
    host: process.env.HOST,
    port: 8889,
    user: process.env.USER,                                                                                                              
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

class db {
    public async select (query: any, data: any[]): Promise<any>{
        return new Promise((resolve, reject) => {
            connectionPool.query(query, data, (error, results) => {
                if(error){
                    // connectionPool.release()
                    return reject(error)
                }
                return resolve(results)
            })
            
        })
    }

    public async insert (query: any, data: any[]): Promise<any>{
        return new Promise((resolve, reject) => {
            connectionPool.query(query, data, (error, results) => {
                if(error){
                    // connectionPool.release()
                    return reject(error)
                }
                return resolve(results)
            })
        })
    }

    public async update (query: any, data: any[]): Promise<any>{
        return new Promise((resolve, reject) => {
            connectionPool.query(query, data, (error, results) => {
                if(error){
                    // connectionPool.release()
                    return reject(error)
                }
                return resolve(results)
            })
        })
    }

    public async delete (query: any, data: any[]): Promise<any>{
        return new Promise((resolve, reject) => {
            connectionPool.query(query, data, (error, results) => {
                if(error){
                    // connectionPool.release()
                    return reject(error)
                }
                return resolve(results)
            })
        })
    }

    public async startTransaction (): Promise<any>{
        connectionPool.beginTransaction();
    }

    public async commitTransaction (): Promise<any>{
        connectionPool.commit();
    }

    public async rollbackTransaction (): Promise<any>{
        connectionPool.rollback();
    }
}

export const connection = new db();