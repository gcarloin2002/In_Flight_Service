"use client"

export default function SeatSwap() {
    return (
        <div>
          <h1>Seat Swap</h1>
          <button onClick={() => addOrder()}>Button 1</button>
          <button onClick={() => handleClick("Button 2")}>Button 2</button>
          <button onClick={() => handleClick("Button 3")}>Button 3</button>
        </div>
      );
}

function handleClick(buttonName) {
    console.log(`Clicked ${buttonName}`);
    // You can add your logic here for each button click
  }

async function addOrder() {
    const newOrder = { id: 4, userid: 0, orderconfirmed: false };
    try {
        const response = await fetch('/api/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newOrder,
            }),
        });
        const data = await response.json(); // await here

        console.log(data);

        // You might want to handle the response here if needed
    } catch (error) {
        console.error('Error updating row:', error);
    }
}

