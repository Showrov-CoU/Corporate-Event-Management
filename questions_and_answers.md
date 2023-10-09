<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>`geeting` is a let type varible. so it can be reinitialize or reassign.it assign with empty object `{}`. so, its answer is `A`</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>We know in JS behaviour when a number is added with string. it returns a new string which is the result of concatenate string of two operand. so `1+"2"` is `"12"` not `3`.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>`food` is an array of size 4. and `info` is an object where the `property` is `favoriteFood` & `value` is `the first indices value of food array`. then `info` objects `property value` change with `"🍝"` . Now the `info` object is `{ favoriteFood: '🍝' }` but `food` array unchanged. so the result is `A`</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>`sayHi` is fuction with one `parameter` named `name`. `sayHi` fuction expects one arguments. if `sayHi` is call with one `argument`, the parameter `name` will get this `argument` otherwise get `undefined`. so the answer is `Hi there, undefined`</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>`count` variable initialized with `0`. and `nums` is an array of `numbers` of size `4`. the first indices value of nums array is `0` which is one of the `Falsy value`. Using the iterative method of `forEach`, iterates all value of array and check which are `truthy`. if the iterative value is `truthy` then add `1` with previous value of `count`. After iteration `count` value is `3`. </i>

</p>
</details>
