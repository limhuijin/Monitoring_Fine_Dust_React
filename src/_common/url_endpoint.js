
const domain = "http://localhost:8080"; // java-spring
// const domain = "http://localhost:8000"; // python
// const domain = "http://localhost:3000"; // node
const frontApiPrefix = `${domain}/api/front`;

export const urlTemplateMapping = {
    list : `${frontApiPrefix}/list`,
    one : `${frontApiPrefix}/one`, // reg_no 붙일 것
    insert : `${frontApiPrefix}/insert`,
    update : `${frontApiPrefix}/update`,
    delete : `${frontApiPrefix}/delete`
}