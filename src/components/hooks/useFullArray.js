

export const FullingArray = (totalPages) => {
    let newarray = []
    for (let i = 1; i < totalPages + 1; i++) {
    newarray.push(i)    
    }
    console.log("My fulling mem")
    return newarray

}