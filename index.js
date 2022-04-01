let div  = document.getElementById.apply('container')

const getAllStations = async () => {
    let req = await fetch('https://mtaapi.herokuapp.com/stations')
    let res = await req.json()
    console.log(res)
    res.result.forEach((element) => {
       // console.log('Station', element)
       let h2 = document.createElement('h2')
       h2.innerText = element.name
       div.append(h2)
    })
}

getAllStations()