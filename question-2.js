// Question #2: User Task List

const userTaskList = [
  { id: 1, task: 'Buy groceries' },
  { id: 2, task: 'Finish homework' },
  { id: 3, task: 'Call mom' },
  { id: 4, task: 'Wash dishes' },
];

// เริ่มเขียนโค้ดตรงนี้
userTaskList.push({ id: 5, task: 'Walk the dog' });
userTaskList.find((item) => {
  if (item.id === 4) {
    item.task = 'Go to the gym';
  }
});
userTaskList.pop((item, index) => index - 1);
const cnvArrayTaskList = Object.entries(userTaskList);
const [lastKey, lastValue] = cnvArrayTaskList[cnvArrayTaskList.length - 1];
console.log(lastValue);
