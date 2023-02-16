import { hashSync, compareSync } from "bcrypt";
const saltRounds = 10
export function createHash(data){
    const results = hashSync(data, saltRounds)
    return results
}

export function compare(input, hashed){
    const results = compareSync(input, hashed)
    return results
}