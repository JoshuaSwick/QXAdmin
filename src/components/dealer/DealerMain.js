import React, { useState, useEffect } from "react";

function User() {
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(results => results.json())
      .then(data => {
        const { name } = data.results[0];
        console.log(data.results[0]);
        setFirstName(name.first);
        setLastName(name.last);
      });
  }, []); // <-- Have to pass in [] here!

  return (
    <div>
      Name:{" "}
      {!firstName || !lastName ? "Loading..." : `${firstName} ${lastName}`}
    </div>
  );
}

export default User;
