function solution(hp) {
  let general = ~~(hp / 5)
  let soldier = ~~(hp % 5 / 3)
  let ergate = (hp % 5) % 3
  return general + soldier + ergate
}

// 장군개미(5), 병정개미(3), 일개미(1)
// 필요한 장군개미의 수 = 사냥감을 장군개미의 공격력으로 나누어 내림 처리 한 수 (hp / 5)
// 필요한 병정개미의 수 = 사냥감에서 장군개미의 공격력으로 나눈 나머지 값을 나누어 내림처리한 수 ((hp % 5) / 3)
// 필요한 일개미의 수 = 사냥감을 장군개미의 공격력과 병정개미의 공격력으로 나눈 나머지 ((hp % 5) % 3)