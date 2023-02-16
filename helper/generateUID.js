import {v4 as uuid} from 'uuid'

export function genUID(){
    return uuid().split('-').join('')
}