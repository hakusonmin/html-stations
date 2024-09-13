async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await Promise.all(userList.map(test));
  //console.log(result)
  return await result
}

//ロジックとしては station15でjqueryで表示している createしているからね
function test(userList) {
  //console.log(userList)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...userList,
        full_name: `${userList.family_name} ${userList.first_name}`,
      });
    },5000);
  });
}

