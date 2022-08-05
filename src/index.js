import "./styles.css";

const onClickAdd = () => {
  //入力されたテキストの値を取得した後、初期化する
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  //divタグ生成, 一旦JS上の変数divに格納する
  const div = document.createElement("div");
  div.className = "ListRow";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //イベント完了ボタン
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親divタグを未完了リストから削除
    deleteFromImcompleteList(completeButton.parentNode);

    //完了リストに移動させるdivを変数に入れる
    const addTarget = completeButton.parentNode;
    //移動させるTODOのテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // //divの中身を初期化
    // addTarget.textContent = null;

    //中身を細かい要素から順に中身を作っていって、最後にそのdivの追加先を指定する

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //button（戻す）生成
    const backButton = document.createElement("button");
    completeButton.innerText = "戻す";
    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(backButton);

    //完了リストに追加                                                    //エラーappendChileはnullを読めません
    document.getElementById("CompleteList").appendChild(addTarget);

    //divの中身を初期化
    addTarget.textContent = null;
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  //押された削除ボタンの親divタグを未完了リストから削除
  deleteButton.addEventListener("click", () => {
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  //divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("imcompleteList").appendChild(div);
};

//関数　未完了リストから指定の要素（targetとして渡されるdivタグ）を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("imcompleteList").removeChild(target);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
