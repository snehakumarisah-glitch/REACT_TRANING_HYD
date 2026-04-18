'use server'
 
export async function sayHello(message: string) {

    console.log("Message received: " + message);
    return `Hello, ${message}!`;
}
