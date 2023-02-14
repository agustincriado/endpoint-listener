module.exports = (request, response) => {
  console.log({"Error request": request})
  response.status(404).json({
    Error: 'Not Found'
  })
}