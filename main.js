// setting Global scope variables //

const form = document.getElementById('myForm');
const date = new Date();
const data = [];


// setting up event listeners for submit //
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("form is submitting ...");
    addData(e.target.userName.value , e.target.userID.value , e.target.Balance.value);
    createDataCont();
    })

    // push the data to the array //

    function addData(name , id , balance) {
        const task = {
            userName: name,
            userID: id,
            Balance: balance,
            // taskDate: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() //
            taskDate: date.toLocaleTimeString()     
        }
        data.push(task);
        console.table(data);
    }


    // create the content table form the data given // 

    function createDataCont() {
        const tBody = document.getElementById('tableContent');
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const editBtn = document.createElement('button');
        const removeBtn = document.createElement('button');
        editBtn.innerText = 'Edit Balance';
        editBtn.classList.add('btn','btn-primary' ,'mx-2' ,'my-3');
        removeBtn.innerText = 'Remove Balance';
        removeBtn.classList.add('btn','btn-danger' ,'mx-2' ,'my-3');
        td1.innerHTML = `${data[data.length - 1].userName}`;
        td2.innerHTML = `${data[data.length - 1].userID}`;
        td3.innerHTML = `${data[data.length - 1].Balance} $`;
        td4.innerHTML = `on <em>${data[data.length - 1].taskDate}</em>`;
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        td5.append(editBtn);
        td5.append(removeBtn);
        tr.append(td5);
        tBody.append(tr);


        // red button action // 
        removeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.parentElement.remove();
            })
    }