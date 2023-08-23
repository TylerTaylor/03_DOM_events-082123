# DOM Events

## Deliverables

- Demo a simple event
  - Add an event listener and log the event object, such as a click event that fires a console.log
- Demo click event and remove
  - in `renderBook`, add an event listener to the delete button
  - Add a callback that removes the `li`. You can do this through the `li` itself or the `event.target.parentElement`
- Demo Forms and Submit
  - Select the form with the id of `'book-form'`
  - Add a submit event listener
  - Pass the event listener a callback that handles the form
  - The callback takes the event as a parameter
  - It should prevent the form's default behavior
  - It should build a book object using the event object
  - Call `renderBook` and pass it the new book object

## Events

When the user interacts with the DOM, it fires events that trigger an effect in our JavaScript code that can do something, such as updating the DOM or adding content to the database.

To pick up events, our code must 'listen' for the event. The `addEventListener` method will do just that. It takes 2 arguments - the first being the event it's listening for, and the second is the function that will run once the event is triggered.

```js
div.addEventListener('click', () => console.log('hi'))

// When events are triggered, the event object is passed as an argument
// to the event handler function (the callback passed as the second arg to addEventListener)
div.addEventListener('click', (e) => console.log(e))
```

There are many event types, which you can check out here: [Events MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

## Forms

Forms can have a variety of inputs users can interact with. The submit event can be used to retrieve the values from those inputs.

When a form submits, it will, by default, try to send a request and refresh the page. We will almost never want that behavior. So to prevent that, we need to call `e.preventDefault()`. Afterward, the event can be used to grab the form values through the target attribute.

```js
<form>
  <input type="text" name='favColor'/>
  <input type="submit" />
</form>
```

```js
form.addEventListener('submit',(e)=> {
  e.preventDefault
  // Here we are using the name property from the form to target the specific input
  console.log(e.target.faveColor.value)
})
```