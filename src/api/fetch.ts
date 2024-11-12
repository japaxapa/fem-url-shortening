export async function handleSubmit(e) {
  e.preventDefault();
  await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: longURL,
      domain: "bit.ly",
      group_guid: `${process.env.REACT_APP_GUID}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const new_link = data.link.replace("https://", "");
      fetch(
        `https://api-ssl.bitly.com/v4/bitlinks/${new_link}/qr?image_format=png`,
        {
          mode: "cors",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
          },
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
    });
}
