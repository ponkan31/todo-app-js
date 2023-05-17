
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
    const cumpleteButton = document.createElement("button");
    cumpleteButton.innerText = "完了";
        // 完了ボタンをクリックしたときにイベント発生
    cumpleteButton.addEventListener("click", () => {
        alert("ああ");
    });
    
    // 削除button生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
        // 削除ボタンをクリックしたときにイベント発生
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親要素参照
        const deleteTarget = deleteButton.parentNode;
        // 取得してきた親要素incomplete-listから子要素のdeleteTargetを削除
        document.getElementById("incomplete-list").removeChild(deleteTarget);

    });
    
    // liタグの子要素にp,buttonタグ生成
    li.appendChild(p);
    li.appendChild(cumpleteButton);
    li.appendChild(deleteButton);


    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
  };
  
//テキスト入力し追加ボタンをクリックするとonClickAdd()が発動
  document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
  