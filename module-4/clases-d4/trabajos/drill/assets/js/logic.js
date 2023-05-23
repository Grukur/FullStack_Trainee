
$('input[type=checkbox]').on('click', (data)=>{
    /* console.log($(`#${data.currentTarget.nextElementSibling.id}`).val()) */
    let check = data.target.id
    let job = ($(`#${data.currentTarget.nextElementSibling.id}`))
    let map = new Map()
    let maper = map.set(check, job.val())
    console.log(maper)
    console.log(check)

})
