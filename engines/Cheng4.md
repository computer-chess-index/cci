# Engine: Cheng4

Author: Martin Sedlak

Home: https://github.com/kmar/cheng4_releases

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2947<sub>(-32) | 3239<sub>(+30) | 3325<sub>(+77) |  |
| 4.48 | 2026-07-12 | 2979 | 3209 | 3248 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2938<sub>(+111) | 3187<sub>(-57) | 3305<sub>(+41) |  |
| 4.48 | 2026-07-12 | 2827 | 3244 | 3264 |  |
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

Generated: 2026-11-14 05:36:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2979, 2947]
  line "E1: LTC (60.0+0.60s)" [3209, 3239]
  line "E1: VLTC (2m24s+1.12s)" [3248, 3325]
  line "P1: STC (8.0+0.08s)" [2827, 2938]
  line "P1: LTC (60.0+0.60s)" [3244, 3187]
  line "P1: VLTC (2m24s+1.12s)" [3264, 3305]
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
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3310 | 34 | 228 | 51% | 3305 | 64% |
|  |  | P1 | 3305 | 29 | 306 | 51% | 3297 | 67% |
|  |  | E1 | 3325 | 27 | 362 | 49% | 3335 | 60% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3248 | 32 | 264 | 50% | 3247 | 61% |
|  |  | P1 | 3187 | 30 | 304 | 49% | 3200 | 53% |
|  |  | E1 | 3239 | 26 | 418 | 48% | 3255 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2977 | 34 | 250 | 49% | 2986 | 44% |
|  |  | P1 | 2938 | 35 | 246 | 49% | 2943 | 45% |
|  |  | E1 | 2947 | 27 | 430 | 47% | 2979 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.48 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3286 | 25 | 432 | 53% | 3252 | 61% |
|  |  | P1 | 3264 | 111 | 22 | 66% | 3128 | 59% |
|  |  | E1 | 3248 | 89 | 48 | 72% | 2838 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3244 | 133 | 22 | 73% | 2974 | 27% |
|  |  | E1 | 3209 | 80 | 48 | 60% | 3109 | 46% |
|  |  | T1 | 3247 | 29 | 320 | 52% | 3210 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2827 | 102 | 40 | 63% | 2417 | 25% |
|  |  | E1 | 2979 | 84 | 54 | 69% | 2564 | 33% |
|  |  | T1 | 2989 | 29 | 370 | 54% | 2942 | 41% |