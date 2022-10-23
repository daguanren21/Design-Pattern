// interface Itiktok {
//   flow: (key: string, args: Iargs) => void;
//   connect: (args: any, ...rest: unknown[]) => void;
//   cilentList: unknown[];
// }
// type Iargs = {
//   userName: string;
//   action: (args: IArguments) => void;
// };
let tiktok = {}
tiktok.cilentList = []
//发布视频资源
tiktok.flow = function (key, options) {
  if (!this.cilentList[key]) {
    this.cilentList[key] = [];
  }
  this.cilentList[key].push(options);
};

tiktok.connect = function () {
  let key = Array.prototype.shift.call(arguments);
  let fans = this.cilentList[key];
  if (!fans || !fans.length) {
    console.log("fans is empty array");
  }
  for (let i = 0, fan;
    (fan = fans[i++]);) {
    fan.action.apply(this, arguments);
  }
};

tiktok.flow("美女跳舞", {
  userName: "zqh",
  action: (video) => {
    console.log(video, "有趣");
  },
});
tiktok.flow("老头练功", {
  userName: "lyc",
  action: (video) => {
    console.log(video, "有趣");
  },
});
console.log(tiktok.cilentList)
tiktok.connect("老头练功", "12312312"); 
