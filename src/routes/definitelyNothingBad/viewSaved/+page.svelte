<script>
  let json = ""
  // on load call viewAlLPasswords()
  async function viewAllPasswords(){
    const response = await fetch('/definitelyNothingBad/viewSaved', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    if(response.status != 200){
      console.error("Error fetching passwords ;)")
    }
    json = await response.json()
  }
</script>
{json}