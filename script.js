function calculateAverage() {
  const s1 = parseFloat(document.getElementById("sub1").value);
  const s2 = parseFloat(document.getElementById("sub2").value);
  const s3 = parseFloat(document.getElementById("sub3").value);

  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    document.getElementById("output").innerText =
      "Please enter valid marks for all subjects.";
    return;
  }

  const avg = (s1 + s2 + s3) / 3;

  document.getElementById("output").innerText =
    "Average Marks: " + avg.toFixed(2);
}
