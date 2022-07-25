const addButton = document.getElementById("add");
const content = document.getElementById("text");
const list = document.querySelector(".todoList");

//添加事务到列表
addButton.addEventListener("click", async() => {
    if (content.value == '') {
        alert("请输入正确的值");
        return 0;
    }
    console.log(content.value)
    const memos = document.createElement("div");
    const x = document.createElement("span");
    memos.style.backgroundColor = 'white';
    x.className = "dlt";
    x.innerHTML = "x";
    memos.className = "memos";
    memos.innerHTML = " " + content.value;
    content.value = "";
    memos.appendChild(x);
    list.appendChild(memos);
    deleteX();
    complete();
})

//删除事务
async function deleteX() {
    const xs = document.querySelectorAll(".dlt");
    const memos = document.querySelectorAll(".memos");
    for (let i = 0; i < xs.length; i++) {
        xs[i].addEventListener("click", async() => {
            xs[i].remove();
            memos[i].remove();
        })
    }
}
deleteX();

//完成事务
async function complete() {
    const memos = document.querySelectorAll(".memos");
    console.log(memos);
    for (let i = 0; i < memos.length; i++) {
        let flag = 1;
        memos[i].addEventListener("click", async() => {
            const value = memos[i]
            if (flag) {
                memos[i].style.textDecoration = "line-through";
                // memos[i].innerHTML = 
                memos[i].style.backgroundColor = 'rgb(228,194,194)';
                flag = 0;
            } else {
                memos[i].style.textDecoration = "none";
                memos[i].style.backgroundColor = 'white';
                flag = 1;
            }

        })
    }
}

complete();
// memos[0].remove;
// console.log("?")