//logical operator
// && And
// || Or
// ! Not

function Scholarship() {
  const age = 19;
  const gender = "male";

  return (
    <div>
      <h1>
        {age == 19 || gender == "female"
          ? "Scholarship Granted"
          : "Not eligible for scholarship"}
      </h1>
    </div>
  );
}

export default Scholarship;
