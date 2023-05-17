
const onClickAdd = () => {
    // textの中身を取得
    const inputText = document.getElementById("add-text").value;
    // 入力したものが残り続けると邪魔なので空文字にする
    document.getElementById("add-text").value = ""


    // divを生成
    const li = document.createElement("li");
    // クラス名を付与
    li.className = "list-row" ;

    // ｐタグ生成
    const p = document.createElement("p");
    // pタグの中身は取得したinputText
    p.innerText = inputText;
    
    // divタグの子要素にｐタグ生成
    li.appendChild(p);
    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
  };
  
  document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
  