// Define the timeLimit function
var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise(async(resolve, reject) => {
            const id = setTimeout(() => reject("Time Limit Exceeded"), t);

            try{
                const res = await fn(...args);
                clearTimeout(id); // Clear the timeout if fn resolves before the timeout
                resolve(res); 
            } catch(err){
                reject(err);
            }
        }) 
    }        
};

// Define the provided function (fn)
const fn = async (n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
}

// Define inputs and t
const inputs = [5];
const t = 150;

// Create a time-limited version of the function
const limitedFn = timeLimit(fn, t);

// Call the time-limited function with the provided inputs
limitedFn(...inputs)
    .then(result => {
        console.log({ resolved: result, time: 100 }); // Log the resolved result and time to the console
    })
    .catch(error => {
        console.error(error); // Log any errors to the console
    });
