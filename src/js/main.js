let toDoList = [
{
  listItem: `Develop the concept based on conducted research for Chris`,
  comState: false
},

{
  listItem: `Create personas and journey maps`,
  comState: true,
},

{
  listItem: `Develop system maps`,
  comState: false
},

{
  listItem: `Create wireframes for AR App`,
  comState: true
},

{
  listItem: `Create video prototype of AR experience`,
  comState: false
},
];

toDoList.forEach(itm => {
  let oneListItem = document.createElement(`li`);
  oneListItem.innerHTML = itm.listItem;
  oneListItem.classList.add(`listItem`);

  if (itm.comState == true)
    oneListItem.classList.add (`complete`);

    document.getElementById('toDoList').appendChild(oneListItem);
});
