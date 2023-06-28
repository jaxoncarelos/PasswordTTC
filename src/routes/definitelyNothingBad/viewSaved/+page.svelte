<script>
  let json = ""
  async function viewAllPasswords(){
    const response = await fetch('/definitelyNothingBad/viewSaved', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }})

    try {
      json = await response.json();
    } catch(error) {
      console.error(error.message)
    }
  }
</script>
  {#await viewAllPasswords()}
    <p>loading...</p>
  {:then}
    {#each json as password}
      <p>{password.key}: {password.count}</p>
    {/each}
  {:catch error}
    <p>error: {error.message}</p>
  {/await}
