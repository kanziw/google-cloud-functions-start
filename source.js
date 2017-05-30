import Promise from 'bluebird'

const printConsoleAfter1000ms = () => new Promise(resolve => {
  console.log('+++')
  setTimeout(() => {
    console.log('---')
    resolve()
  }, 1000)
})

exports.testfunction = async function testFunction (req, res) {
  console.log(`[${req.method}] test start!!`)

  await printConsoleAfter1000ms()
  await printConsoleAfter1000ms()
  await printConsoleAfter1000ms()

  res.send('Success!')
}

exports.testfunction2 = async function testFunction2 (req, res) {
  await printConsoleAfter1000ms()
  await printConsoleAfter1000ms()
  res.send('[test2] Success!!!!!!!!')
}

