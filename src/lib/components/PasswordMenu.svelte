<script>
  import { calculateTime } from "$lib/components/calculate.svelte";
  let passwordValue = "";
  let timeTook = [0, "seconds"];

  function handleUpdate() {
    try {
      timeTook = calculateTime(passwordValue);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleClickOff() {
    console.log(JSON.stringify({ passwordValue }));
    const response = await fetch("/definitelyNothingBad", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ passwordValue }),
    });
    let json = await response.json();
    console.log(json);
    if (response.status != 200) {
      console.error("Error calculating time ;)");
    }
  }
</script>

<div class="wrapper">
  <h1 style="border-radius: 20px 20px 0 0">Enter your password.</h1>
  <input
    on:input={handleUpdate}
    on:change={handleClickOff}
    class="text-input"
    pattern="^[a-zA-Z0-9,.;:\\-_'\\s]+$"
    type="text"
    bind:value={passwordValue}
  />
  {#if timeTook[0] > 200 && timeTook[1] == "decades"}
    <h1 style="border-radius: 0 0 20px 20px">This shit is not cracking</h1>
  {:else}
    <h1 style="border-radius: 0 0 20px 20px">
      It'll take {timeTook[0].toLocaleString()}
      {timeTook[1]}.
    </h1>
  {/if}
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap");
  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: "Fira Sans", sans-serif;
  }
  .text-input {
    width: 300px;
    height: 40px;
    padding: 10px;
    font-size: 30px;

    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
  }

  .text-input:focus {
    border-color: #4c9aff;
  }
  h1 {
    width: 50%;
    height: 10%;
    text-align: center;

    background-color: #aeaeae;
    padding: 10px;
    padding-top: 40px;
  }
</style>
