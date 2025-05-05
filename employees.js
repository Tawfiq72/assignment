let currentRow = null;

function deleteRow(btn) {
  const row = btn.closest("tr");
  row.remove();
}

function editRow(btn) {
  currentRow = btn.closest("tr");
  const cells = currentRow.querySelectorAll("td");

  document.getElementById("editID").value = cells[0].innerText;
  document.getElementById("editName").value = cells[1].innerText;
  document.getElementById("editEmail").value = cells[2].innerText;
  document.getElementById("editDept").value = cells[3].innerText;
  document.getElementById("editDate").value = cells[4].innerText;
  document.getElementById("editGender").value = cells[5].innerText;
  document.getElementById("editEmpType").value = cells[6].innerText;

  document.getElementById("editForm").style.display = "block";
}

function saveChanges() {
  if (!currentRow) return;

  currentRow.cells[1].innerText = document.getElementById("editName").value;
  currentRow.cells[2].innerText = document.getElementById("editEmail").value;
  currentRow.cells[3].innerText = document.getElementById("editDept").value;
  currentRow.cells[4].innerText = document.getElementById("editDate").value;
  currentRow.cells[5].innerText = document.getElementById("editGender").value;
  currentRow.cells[6].innerText = document.getElementById("editEmpType").value;

  document.getElementById("editForm").style.display = "none";
  currentRow = null;
}
