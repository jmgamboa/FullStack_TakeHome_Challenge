# On the Front End

Feel as though this was where most of my shortcomings were so will state list those first

1. Didn't get around to doing an edit funtionality on each record. The task stated CRUD and so assuming this was implied and did not get around to it. The API functionally supported it but there exists no interface for it

2. Success messages. Went with a fairly crude approach on success messages. Message simply does a javascript alert() call

3. Error handling on bad requests. While the app doesn't break, the server error message aren't displayed on a 400 response

4. Overall state architecture. None of the components share state that updates each other. Ultimately, have to refresh the page after something is added or removed. I think this would have been a good candidate for something like Redux or trying to share state between components via hooks?

5. Making a Customer Component that is a child component of CustomerLists Component would have been a decent architecture decision here as there is a lot being added to this in the future:  delete, edit, possibly move the order on  the list?


# On the Back End

Felt more comfortable here. Spent the least time here and choses safest architecture decisions

1.  Would've like to explore a more dynamic Priority model vs a enumerable field. Something that would allow users to create their own heirarchy

2. No login, create account, permissions, or groups. Typical models throughout apps

3. CompanyModel to ensure a more programatic approach to creating a Company entity

4. Sorting / filtering would be nice

5. Testing for models. I think with only 1 model it was too early of a call to start using FactoryBoy package

6. Having different groups or tags models tied to each customer so we can do things like  New Customers, Existing Customers, Former Customers, New leads.  Having different lists of different customers


###  Side note. I did run into a big issue with cors on django that ate up quite a bit of time. As a result, I did spend more time on the app. It wasn't allowing me to make cross origin requests from the react app via axios (didn't try another request package. I even changed ALLOWED_HOSTS to * in both the env file and settings file to make sure. I have ran into this issue before on early versions of django  1.x - 2.x. It isn't apparent why it sometimes does not happen. I did resort to this solution https://stackoverflow.com/questions/35760943/how-can-i-enable-cors-on-django-rest-framework. But also a heads up to you if other candidates are experiencing this.