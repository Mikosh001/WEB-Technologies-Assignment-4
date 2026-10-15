# Assignment 4 — Forms and Validation

**Student:** Berdibek Meiirbek

- Website: https://mikosh001.github.io/WEB-Technologies-Assignment-4/
- Repository: https://github.com/Mikosh001/WEB-Technologies-Assignment-4

## Tasks

| Task | File | Features |
| --- | --- | --- |
| 0 | `index.html` | Basic contact form: name, email, message, labels, Submit |
| 1 | `html5-validation.html` | HTML5 required fields, email type, minlength, maxlength and a name pattern |
| 2 | `bootstrap-form.html` | Bootstrap form controls, responsive grid, placeholders and helper text |
| 3 | `bootstrap-validation.html` | Dynamic `is-valid` / `is-invalid` classes and visible feedback |
| 4 | `registration.html` | All registration fields, radio buttons, checkboxes, country select, Submit and Reset |

Every page has a navbar linking to all five tasks. Bootstrap 5.3.8 CSS is stored locally; no CDN or build step is required. JavaScript is used only on Tasks 3 and 4 for validation and password matching.

## Run

Open `index.html` in a browser and use the navbar.

These are practice forms. Tasks 0–2 use native GET submission to the same static page. Tasks 3–4 prevent submission, check the inputs and show a completion message locally. There is no contact delivery, account creation, database or password storage.

## Check the forms

1. Task 0: enter a name, an email and a message; press Submit.
2. Task 1: submit empty fields, enter an invalid email, then try a message shorter than 10 characters. The browser blocks invalid submissions.
3. Task 2: resize the page; name and email become two columns at 768 px and above.
4. Task 3: submit empty fields to see errors. Enter valid values to see green feedback and a completion message.
5. Task 4: test a password shorter than 8 characters and passwords that do not match. Select one gender and a country; hobbies are optional and allow multiple choices.
6. Submit valid registration data, then change the password to verify that confirmation becomes invalid.
7. Press Reset: values, selected options, feedback styles and the completion message are cleared.
8. Test navigation and layouts on phone and desktop screens.

## Main files

- `styles.css` — shared layout and basic form styles.
- `validation.js` — HTML constraint checks, Bootstrap feedback, password matching and reset handling.
- `assets/bootstrap/bootstrap.min.css` — Bootstrap 5.3.8.
- `assets/bootstrap/LICENSE.txt` — Bootstrap's MIT license.

Resources: [Bootstrap forms](https://getbootstrap.com/docs/5.3/forms/overview/), [Bootstrap validation](https://getbootstrap.com/docs/5.3/forms/validation/), [MDN constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation).

