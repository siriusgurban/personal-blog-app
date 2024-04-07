const month= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

export const convertTime =(mil:string)=>{
        const time = new Date(parseInt(mil));
        return `${time.getDate()} ${month[time.getMonth()]} ${time.getFullYear()}, ${time.getHours()}:${time.getMinutes()} `
}