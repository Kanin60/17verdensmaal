
export function gallery() {
    const arrGallery = [
        ["goal1"], 
        ["goal2"] 
    ]

    arrGallery.forEach( (arr) => {
        return `<img src="../../assets/Goals/${arr}"`
    })
}