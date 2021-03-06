import * as base from './base'
import * as container from './container'
import * as code from './code'
import _Decor from './Decor'
import _Unique from './Unique'


const is = base.is
const to = base.to
const sym = base.sym
const init = base.init
const str = base.str
const arr = base.arr
const decor = base.decor
const decorClsHasMeth = base.decorClsHasMeth
const decorClsNewMeth = base.decorClsNewMeth
const decorClsSetMeth = base.decorClsSetMeth
const decorClsApplyParam = base.decorClsApplyParam
const decorClsApplyMeth = base.decorClsApplyMeth
const decorClsApplyClass = base.decorClsApplyClass
const print = base.print
const err = base.err
const has = base.has
const funcHas = base.funcHas
const objHas = base.objHas
const map = base.map
const join = base.join
const split = base.split
const line = base.line
const sugar = base.sugar
const promisify = base.promisify
const assert = base.assert

const Container = container.Container
const List = container.List
const Dict = container.Dict
const Mass = container.Mass

const Code = code.Code
const CodeClosure = code.CodeClosure
const CodeBracket = code.CodeBracket
const CodeBracketRound = code.CodeBracketRound
const CodeBracketSquare = code.CodeBracketSquare
const CodeBracketCurly = code.CodeBracketCurly
const CodeVar = code.CodeVar
const CodeContainer = code.CodeContainer
const CodeObj = code.CodeObj
const CodeArr = code.CodeArr
const CodeSet = code.CodeSet
const CodeMap = code.CodeMap
const CodeList = code.CodeList
const CodeDict = code.CodeDict

const Decor = _Decor
const Unique = _Unique


export default function(code: any, context?: any, contextName?: string) {
  code = Code.new(code).$
  if(is.un(context)) return eval(code)
  if(is.un(contextName)) contextName = 'C'
  return eval(Code.new({
    template: `(@ => @)`,
    codes: [contextName, code]
  }).$)(context)
}


/*
(() => {
  const fa = (m, s) => s
  .split(/[, \n]+/)
  .filter(i => Boolean(i))
  .map(i => `const ${i} = ${m}.${i}`)
  .join('\n')

  const fb = (s) => s
  .split(/[, \n]+/)
  .filter(i => Boolean(i))
  .map(i => `const ${i} = _${i}`)
  .join('\n')

  const r = [
    fa('base', ``),
    fa('container', ``),
    fa('code', ``),
    fb(``)
  ].join('\n\n')

  console.log(r)
})()
*/
