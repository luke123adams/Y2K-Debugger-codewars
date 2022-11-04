import { expect, test} from '@jest/globals';

import { Y2Kmachine } from "./main";

test('When given input 01/01/70, Y2K machine function returns 01/01/1970', () =>{
     const actual = Y2Kmachine('01/01/70')
     const expected = '01/01/1970'

    expect(actual).toStrictEqual(expected)
})

test('When given input 23/10/80, Y2K machine function returns 23/10/1980', () =>{
    const actual = Y2Kmachine('23/10/80')
    const expected = '23/10/1980'

   expect(actual).toStrictEqual(expected)
})

test('When given input 15/07/86, Y2K machine function returns 15/07/1986', () =>{
    const actual = Y2Kmachine('15/07/86')
    const expected = '15/07/1986'

   expect(actual).toStrictEqual(expected)
})

test('When given input 25/02/94, Y2K machine function returns 25/02/1994', () =>{
    const actual = Y2Kmachine('25/02/94')
    const expected = '25/02/1994'

   expect(actual).toStrictEqual(expected)
})

test('When given input 13/06/04, Y2K machine function returns 13/06/2004', () =>{
    const actual = Y2Kmachine('13/06/04')
    const expected = '13/06/2004'

   expect(actual).toStrictEqual(expected)
})

test('When given input 25/02/14, Y2K machine function returns 25/02/2014', () =>{
    const actual = Y2Kmachine('25/02/14')
    const expected = '25/02/2014'

   expect(actual).toStrictEqual(expected)
})

test('When given input 31/07/22, Y2K machine function returns 31/07/2022', () =>{
    const actual = Y2Kmachine('31/07/22')
    const expected = '31/07/2022'

   expect(actual).toStrictEqual(expected)
})

test('When given input 25/08/50, Y2K machine function returns 25/08/2050', () =>{
    const actual = Y2Kmachine('25/08/50')
    const expected = '25/08/2050'

   expect(actual).toStrictEqual(expected)
})