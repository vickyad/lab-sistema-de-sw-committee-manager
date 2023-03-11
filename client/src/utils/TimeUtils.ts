//Used to delay querying to database after updating database; This way, when we query it there will not be a risk of getting outdated info.
export function  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}