import random

def generate_lotto():
    nums = sorted(random.sample(range(1, 46), 6))
    return nums

# 1. 템플릿 HTML 읽기
with open("template.html", "r", encoding="utf-8") as f:
    template = f.read()

# 2. 로또 번호 생성
numbers = generate_lotto()
numbers_str = " · ".join(map(str, numbers))

# 3. 템플릿에 번호 넣기
output_html = template.replace("{{numbers}}", numbers_str)

# 4. index.html 로 저장
with open("index.html", "w", encoding="utf-8") as f:
    f.write(output_html)

print("✔ index.html 생성 완료!")
