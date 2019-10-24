module.exports.handler = async(event, context) => {
    console.log(JSON.stringify(event))

    const name = event.pathParameters.name

    return {
        statusCode: 200,
        body: JSON.stringify(`Hello ${name}`)
    }
}