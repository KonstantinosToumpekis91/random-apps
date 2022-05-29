document.addEventListener("DOMContentLoaded", () => {
  const $display = document.querySelector("#display");
  const $buttons = document.querySelectorAll(".num");
  const $result = document.querySelector(".equal");
  const $clear = document.querySelector(".clear");

  $buttons.forEach(($button) => {
    $button.addEventListener("click", (e) => {
      $display.value += e.target.dataset.num;
      console.log(typeof e.target.dataset);
    });
  });

  //result button
  $result.addEventListener("click", (e) => {
    if ($display.value !== "") {
      const result = eval($display.value);
      $display.value = result;
    }
  });

  //clear button
  $clear.addEventListener("click", (e) => {
    $display.value = "";
  });
});
