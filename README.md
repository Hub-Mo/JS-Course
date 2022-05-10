# JS-Course

# learn strategy:
## doing al the tasks and leaving the optional tasks for spaced repetition.
<br>

---

## base
* [x] 01-var-alert
---
* [x] 02-var-prompt
---
* [x] 03-prompt-if
---
* [x] 04-agt-confirm

## colors
* [x] 01-change-bcg-one
---
* [x] 01-change-bcg-two
---
* [x] 01-change-bcg-three

## dates
* [x] 01-title-by-hour-one
---
* [x] 02-title-by-hour-two
---
* [x] 03-age-by-select
---
* [x] 04-locale-date-**optional**
---
* [] 05-get-spooky-fridays-**optional**

## maths
* [x] 01-calculator-one
---
* [x] 02-calculator-two
---
* [x] 03-fizzbuzz
---
* [] 04-even-square-**optional**
---
* [] 04-sort-numbers-**optional**
---
* [] 06-factorial-**optional**

## arrays
* [x] 01-get-element
---
* [x] 01-manipulate-array
---
* [x] 03-walk-one
---
* [x] 04-walk-two
---
* [x] 05-walk-three
---
* [x] 06-find-in-array
---
* [x] 07-filter-array
---
* [x] 08-array-includes
---
* [x] 09-reduce-array
---
* [] 10-dedupe-array-**optional**
---
* [] 11-rand-array-stats-**optional**

## dom
* [x] 01-select-one

```javascript
    document.getElementById('target').innerHTML = "Owned";
```
> The <mark>getElementById()</mark> method returns an element with a specified value.
method returns null if the element does not exist.
method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.

> The <mark>innerHTML</mark> property sets or returns the HTML content (inner HTML) of an element.


* [x] 02-select-two
```javascript
    document.querySelector('.material>p').innerHTML = "Owned";
```
> The <mark>querySelector()</mark> method returns the first element that matches a CSS selector.
To return all matches (not only the first), use the querySelectorAll() instead.

> Both <mark>querySelector()</mark> and <mark>querySelectorAll()</mark> throw a SYNTAX_ERR exception if the selector(s) is invalid.
---
* [x] 03-select-three
```javascript
    let text = document.getElementsByClassName('target');
for (i = 0; i < text.length; i++) {
    text[i].innerHTML = "owned";
}
```
> The <mark>getElementsByClassName()</mark> method of Document interface returns an array-like object of all child elements which have all of the given class name(s).

> When called on the document object, the complete document is searched, including the root node. You may also call <mark>getElementsByClassName()</mark> on any element; it will return only elements which are descendants of the specified root element with the given class name(s).

> used <mark>for-loop</mark> to loop 'text-length' times to change all the classes. at first it was only changing the first one if you only use
```javascript
    text.innerHTML = "owned"; //doesnt do sh*t.
    text.innerHTML[0] = "owned"; //Only changes the first one
```
---
* [x] 04-attr-create
---
* [x] 05-hover-image
---
* [x] 06-generate-table-one
---
* [] 07-generate-table-two-**optional**
---
* [x] 08-match-password-one
---
* [] 09-match-password-two-**optional**
---
* [x] 10-change-event-input-one
---
* [] 11-change-event-input-two-**optional**
---
* [] 12-mini-carousel-**optional**
