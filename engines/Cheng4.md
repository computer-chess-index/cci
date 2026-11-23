# Engine: Cheng4

Author: Martin Sedlak

Home: https://github.com/kmar/cheng4_releases

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2959<sub>(-14) | 3245<sub>(+14) | 3337<sub>(+59) |  |
| 4.48 | 2026-07-12 | 2973 | 3231 | 3278 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2971<sub>(+77) | 3201<sub>(-61) | 3310<sub>(+27) |  |
| 4.48 | 2026-07-12 | 2894 | 3262 | 3283 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2977<sub>(-12) | 3248<sub>(+1) | 3310<sub>(+24) |  |
| 4.48 | 2026-07-12 | 2989 | 3247 | 3286 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cheng4+<version>&body=###%20Engine%20name%0ACheng4%0A%0A###%20Version%0A4.49" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-23 05:37:02

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2973, 2959]
  line "E1: LTC (60.0+0.60s)" [3231, 3245]
  line "E1: VLTC (2m24s+1.12s)" [3278, 3337]
  line "P1: STC (8.0+0.08s)" [2894, 2971]
  line "P1: LTC (60.0+0.60s)" [3262, 3201]
  line "P1: VLTC (2m24s+1.12s)" [3283, 3310]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2900 --> 3400
  line "T1: STC (8.0+0.08s)" [2989, 2977]
  line "T1: LTC (60.0+0.60s)" [3247, 3248]
  line "T1: VLTC (2m24s+1.12s)" [3286, 3310]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3310 | 28 | 322 | 51% | 3303 | 66% |
|  |  | E1 | 3337 | 26 | 402 | 49% | 3344 | 60% |
|  |  | T1 | 3310 | 34 | 228 | 51% | 3305 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3245 | 25 | 446 | 48% | 3260 | 57% |
|  |  | T1 | 3248 | 32 | 264 | 50% | 3247 | 61% |
|  |  | P1 | 3201 | 29 | 332 | 48% | 3213 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2959 | 25 | 488 | 48% | 2982 | 43% |
|  |  | T1 | 2977 | 34 | 250 | 49% | 2986 | 44% |
|  |  | P1 | 2971 | 32 | 282 | 49% | 2981 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.48 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3286 | 25 | 432 | 53% | 3252 | 61% |
|  |  | P1 | 3283 | 63 | 66 | 54% | 3248 | 62% |
|  |  | E1 | 3278 | 58 | 96 | 62% | 3059 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3247 | 29 | 320 | 52% | 3210 | 58% |
|  |  | P1 | 3262 | 74 | 56 | 55% | 3185 | 43% |
|  |  | E1 | 3231 | 55 | 96 | 55% | 3179 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2989 | 29 | 370 | 54% | 2942 | 41% |
|  |  | P1 | 2894 | 64 | 84 | 58% | 2665 | 33% |
|  |  | E1 | 2973 | 63 | 92 | 60% | 2732 | 30% |