$(document).ready(() => {
    $("#add").on("click", function () {
        const title = $('.title').val().trim();
        const desc = $('.description').val().trim();
        if (title !== "" && desc !== "") {
            const taskItem = `
         <li class="border border-dark bg-white shadow d-flex justify-content-between flex-column p-3">
  <div class="d-flex justify-content-between ">
    <span>${title}</span>
    <div>
    <button class="btn btn-danger  delete-task">delete</button>
    </div>
  </div>
  <p>${desc}</p>
</li>
 `;
            $("#taskBox").append(taskItem);
            $(".title").val("");
            $(".description").val("");
        } else {
            alert("Please enter a task.");
        }
    });
    // delete
    $("#taskBox").on("click", ".delete-task", function () {
        $(this).closest("li").remove();
      });

   

});
