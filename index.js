
const onClickAdd = () => {
    // textの中身を取得
    const inputText = document.getElementById("add-text").value;
    // 入力したものが残り続けると邪魔なので空文字にする
    document.getElementById("add-text").value = ""


    // liを生成
    const li = document.createElement("li");
    // クラス名を付与
    li.className = "list-row" ;

    // ｐタグ生成
    const p = document.createElement("p");
    // pタグの中身は取得したinputText
    p.innerText = inputText;

// 完了button生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
// 完了ボタンをクリックしたときにイベント発生
    completeButton.addEventListener("click", () => {
    // 未完了のTODOから削除する関数実行
        deleteFromIncompleteList(completeButton.parentNode);

    // 完了したTODOに追加
        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode;
        // テキストの中身は1番最初の子要素
        const text = addTarget.firstChild.innerText;

        // liタグ以下を初期化
        addTarget.textContent = null;
        
        // li作成
        const p = document.createElement("p");
        // liタグの中身はtext
        p.innerText = text;

        // 戻すボタン作成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";

        // liタグの子要素にp,buttonタグ生成
        li.appendChild(p);
        li.appendChild(backButton);
        
        // 完了リストに追加
        document.getElementById("complete-list").appendChild(addTarget);
    });

    // 削除button生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
        // 削除ボタンをクリックしたときにイベント発生
    deleteButton.addEventListener("click", () => {
        // 未完了のTODOから削除する関数実行
        deleteFromIncompleteList(deleteButton.parentNode);
    });
    
    // liタグの子要素にp,buttonタグ生成
    li.appendChild(p);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);


    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
  };
  
// 未完了TODOから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}


//テキスト入力し追加ボタンをクリックするとonClickAdd()が発動
  document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
  