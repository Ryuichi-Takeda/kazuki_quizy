// quizの解答を作成しまーす約79万人

"use strict";
// 正解の表示、ここでボタンをクリックするとクラスを追加して正解、不正解が出るようにしたい！！

// https://techmemo.biz/javascript/click-toggle-class/

// とりあえず、以下にhtmlでjsを書くをやってみて、うまく行ったらそれをコピーするという形を取りたいとおもう
const quizSet = [
  [
    "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    ["約28万人", "約79万人", "約183万人"],
    ["不正解...", "正解!", "不正解..."],
    "img-quiz01.png",
    1,
    0,
    [
      "question1_answer_incorrect",
      "question1_answer_correct",
      "question1_answer_incorrect",
    ],
  ],
  [
    "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    ["INTECH", "BIZZTECH", "X-TECH"],
    ["不正解...", "不正解...", "正解!"],
    "img-quiz02.png",
    2,
    0,
    [
      "question2_answer_incorrect",
      "question2_answer_incorrect",
      "question2_answer_correct",
    ],
  ],
  [
    "IoTとは何の略でしょう？",
    ["Internet of Things", "Integrate into Technology", "Information of Tool"],
    ["正解!", "不正解...", "不正解..."],
    "img-quiz03.png",
    0,
    1,
    [
      "question3_answer_correct",
      "question3_answer_incorrect",
      "question3_answer_incorrect",
    ],
  ],
  [
    "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    ["Society 5.0", "CyPhy", "SDGs"],
    ["正解!", "不正解...", "不正解..."],
    "img-quiz04.png",
    0,
    1,
    [
      "question4_answer_correct",
      "question4_answer_incorrect",
      "question4_answer_incorrect",
    ],
  ],
  [
    "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    ["Web3.0", "NFT", "メタバース"],
    ["正解!", "不正解...", "不正解..."],
    "img-quiz05.png",
    //  ここに , を入れ忘れて画像が読み込めなかった！！  注意！！！！！
    0,
    1,
    [
      "question5_answer_correct",
      "question5_answer_incorrect",
      "question5_answer_incorrect",
    ],
  ],
  [
    "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
    ["約２倍", "約５倍", "約１１倍"],
    ["不正解...", "正解!", "不正解..."],
    "img-quiz06.png",
    1,
    0,
    [
      "question6_answer_incorrect",
      "question6_answer_correct",
      "question6_answer_incorrect",
    ],
  ],
];
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
shuffleArray(quizSet);

let quizSetLength = quizSet.length;
for (let i = 0; i < quizSetLength; i++) {
  let index = quizSet[i][4];
  let indexin = quizSet[i][5];
  let questionContent =
    `<section class="question${i + 1}">` +
    `<div class="question${i + 1}_quiz">` +
    `<h2 class="question${i + 1}_quiz_title">` +
    `<span class="question${i + 1}_quiz_title_label">Q${i + 1}</span>` +
    `<span class="question${i + 1}_quiz_title_text">${quizSet[i][0]}</span>` +
    `</h2>` +
    `<figure class="question${i + 1}_quiz_title_image">` +
    `<img src="${quizSet[i][3]}" alt="" class="question${
      i + 1
    }_quiz_title_img">` +
    ` </figure>` +
    `</div>` +
    `<div class="question${i + 1}_answer">` +
    `<span class="question${i + 1}_answer_label">A</span>` +
    `<ul class="question${i + 1}_answer_list">`;
  for (let j = 0; j < quizSet[i][1].length; j++) {
    questionContent +=
      `<li class="question${i + 1}_answer_list_item">` +
      `<button class="question${i + 1}_answer_list_item_button" id="js_answer_${
        i + 1
      }${j + 1}">${quizSet[i][1][j]}` +
      ` <img src="icon-arrow.svg" ` +
      `class="question${i + 1}_answer_list_item_button_icon" ></img>` +
      `</button>` +
      `</li>`;
  }
  questionContent +=
    `</ul>` +
    `<div class="js_answer${i + 1}_box">` +
    `<p class="question${i + 1}_answer_correct_title" id="js_answer${
      i + 1
    }_correct_title">` +
    `${quizSet[i][2][index]}</p>` +
    ` <p class="question${i + 1}_answer_incorrect_title" ` +
    `id="js_answer${i + 1}_incorrect_title">${quizSet[i][2][indexin]}</p>` +
    `<p class="question${i + 1}_answer_correct_content" ` +
    `id="js_answer${i + 1}_title_correct_content">` +
    // ここをif (正解が押された時){<p class="question${i + 1}_answer_correct_title" id="js_answer${i + 1 }_correct_title">` +`正解！</p>}else... ってやれば上手くいく？？？
    `<span class="question${i + 1}_answer_correct_content_label">A</span>` +
    `<span class="js_answer_text">${quizSet[i][1][index]}</span>` +
    //１問目の場合、 quizSet[i]で[日本〜]、[1]で選択肢、[index]で[選択肢の中の正解]を出した
    `</p>` +
    `</div>` +
    `</div>` +
    `</section>`;
  document
    .getElementById("js_main")
    .insertAdjacentHTML("beforeend", questionContent);

  // let btn = document.getElementById(`js_answer_${i + 1}${p + 1}`);
  // let box = document.getElementsByClassName(`js_answer${i + 1}_box`);
  // let title = document.getElementById(`js_answer${i + 1}_incorrect_title`);
  for (let p = 0; p < 3; p++) {
    let boxclass = function (el) {
      el.classList.add(`${quizSet[i + 1][6][p + 1]}`);
    };
    document.getElementById(`js_answer_${i + 1}${p + 1}`).addEventListener(
      "click",
      () => {
        boxclass(document.getElementById(`js_answer_${i + 1}${p + 1}`));
      },
      false
    );
    document
      .getElementById(`js_answer_${i + 1}${p + 1}`)
      .addEventListener("click", () => {
        // const targetnode = document.getElementById(`js_answer_${i + 1}${p + 1}`);
        document.getElementById(`js_answer_${i + 1}${p + 1}`).style.border =
          "solid 5px #0071BC";
        document.getElementById(
          `js_answer_${i + 1}${p + 1}`
        ).style.backgroundColor = "#f6f6f6";
      });
    document
      .getElementById(`js_answer_${i + 1}${p + 1}`)
      .addEventListener("click", () => {
        // const targetnode = document.getElementById(`${quizSet[i + 1][6]}_title`);
        document.getElementById(
          `js_answer${i + 1}_correct_title`
        ).style.display = "block";
      });
    document
      .getElementById(`js_answer_${i + 1}${p + 1}`)
      .addEventListener("click", () => {
        for (let q = 0; q < 3; q++) {
          document
            .getElementById(`js_answer_${i + 1}${q + 1}`)
            .setAttribute("disabled", "true");
        }
      });
  }
}