# Ngxs Diner

## Workshop Curriculum

In this workshop, we will create a restaurant app to meet the needs of hungry customers. The app will allow customers to make reservations, place orders, and track the kitchen's stock of ingredients.

The complete version of the app and can be found on GitHub: https://github.com/profanis/ngxs-diner (branch: kitchen_sol_final)

---

### Exercise 1

_Checkout this branch feat/kitchen_issue_1_

As soon as you serve the application you will see a list of restaurant tables. These tables are fetched in the pageable component directly from the service. We should get the data from the store instead.

Tasks:

- Install NGXS
- Replace in the restaurant-home.page.ts the service call with a query selector

Achievements:

- Install NGXS
- Create a state
- Create actions
- Create selectors

---

### Exercise 2

As soon as we Reserve a table, we should see on the top right corner the number to increase by 1.
As soon as we Cancel a Reservation, we should see on the top right corner the number to decrease by 1.

Tasks:

- Create the actions ReserveTableAction and CancelTableReservationAction
  These actions should update the property Reservations in the table.state.ts
- Create a reservationsCount selector and use that selector in the reserved-tables.component
- Move the ViewModel from the restaurant-home.page component to a new Selector. You should apply the correct implementation of the isOpen property

Achievements:

- Utilize the global state and apply a store selector
- Create more selectors
- Update your state

---

### Exercise 3

When we book a table, we should also pre-order food for that table. To do this, we should display a dialog box with the kitchen menu.

Tasks:

- When a user clicks on the Reserve button, dispatch the action ShowTableReservationAction
- When that action is being dispatched open the reservation dialog (hint: handle that in restaurant.module)
- Create a State with name Slice and load the data from the service recipes-api.service
- Display the recipes in the dialog box

Achievements:

- Use an NGXS event outside the State.
- Create one more state slice and display the recipes

---

### Exercise 4

When you reserve a table, you should also place your order so the kitchen can prepare it in advance. We should display the customer's order on the kitchen page so the kitchen staff can see what they need to do.

Tasks:

- Create the action AddChoiceAction which will get the tableName and the client’s recipe choice. Dispatch this action from the method ReservationViewComponent#addChoice
- Create a kitchen view model as a selector for the interface KitchenViewModel
- Select this Selector in the kitchen home component

Achievements:

- Create complex view model selectors

---

### Exercise 5

The table state seems to violate the single responsibility principle since it is handling both the tables and the reservations. We should separate the concerns.

Tasks:

- Create a reservations.state and move the required code from tables state
- Create a reservations.queries and move the required code from tables queries
- Create a reservations.actions and move the required code from tables actions

Achievements:

- Split your state and understand how important the SRP is

---

### Exercise 6

Before confirming your order, you can review your selections in the dialog box and remove any unwanted items. To make the dialog box easier to use, split it into two sections: one for the items you have selected and one for the items you have not selected.

Tasks:

- Create a view model where it will have the Ordered and NotOrdered items. Each one of them will have the recipes
  From the ordered section, you should be able to remove the selection.
- Similar to the AddChoiceAction, you should also create the RemoveChoiceAction

---

### Exercise 7

Everything we have done so far doesn’t really consider the temporary nature of reservations and orders within a real restaurant. We need to add the concept of time to our reservations.
These are the requirements:
When we create a reservation, we should set an expiry time on the reservation, which is two hours from the time that the reservation was created.
When a reservation has expired, the table is available for reservation again. We should modify the reservations data structure to hold multiple reservations for a table.
The kitchen will only show orders for the currently active reservations. Once a reservation has expired, the orders will no longer be visible in the kitchen.

Tasks:

- Update the `ReserveTable` action to be able to add multiple reservations for a table and set the expiry time on a new reservation. A convention can be used around determining the “latest” reservation by appending new reservations to the beginning of the list.
- Update the `CancelReservation` action so that it cancels (deletes) the latest reservation if it is not expired.
- Create a ClockState that:

  - Contains the current date and time, which is updated every minute by an interval timer.
  - Has a `currentMinute` selector that returns the current date and time, rounded to the minute, without the seconds.
    - The inputs to this selector need to be designed in such a way that it takes advantage of memoisation, and the output only gets calculated when the minute changes

- Update existing selectors for the reservation to take the `currentMinute` into account when deciding what to return for the reservation and the orders.
- Note: you will not need to change a single thing in your application’s components. You will only need to change the states and update the selectors.

Achievements:

- Add a feature by modifying only the state representations
- Understand how to optimise the memoisation of a selector
