import { FilterQuery, Model, UpdateQuery } from "mongoose"

export default interface IController<T> {
    create(data: T): Promise<T>
    read(filter: FilterQuery<T>): Promise<T[]> 
    readOne(filter: FilterQuery<T>): Promise<T | null>
    update(id: string, dataUpdated: UpdateQuery<T>): Promise<void> 
    del?(id: string): Promise<void> 
}