# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3193<sub>(+131) | 3379<sub>(+11) | 3502<sub>(+81) |  |
| 4.0.0 | 2026-08-08 | 3062 | 3368 | 3421 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3461<sub>(+186) | 3571<sub>(+42) | 3711<sub>(+135) |  |
| 4.0.0 | 2026-08-08 | 3275 | 3529 | 3576 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-08-08 | 3194<sub>(+289) | 3395<sub>(+194) | 3448<sub>(+211) |  |
| 3.0.0 | 2026-06-25 | 2905 | 3201 | 3237 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Avalanche+<version>&body=###%20Engine%20name%0AAvalanche%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-13 04:36:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0"]
  y-axis "Elo Rating" 3000 --> 3800
  line "E1: STC (8.0+0.08s)" [3062, 3193]
  line "E1: LTC (60.0+0.60s)" [3368, 3379]
  line "E1: VLTC (2m24s+1.12s)" [3421, 3502]
  line "P1: STC (8.0+0.08s)" [3275, 3461]
  line "P1: LTC (60.0+0.60s)" [3529, 3571]
  line "P1: VLTC (2m24s+1.12s)" [3576, 3711]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "T1: STC (8.0+0.08s)" [2905, 3194]
  line "T1: LTC (60.0+0.60s)" [3201, 3395]
  line "T1: VLTC (2m24s+1.12s)" [3237, 3448]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3711 | 157 | 10 | 70% | 3579 | 60% |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 80 | 40 | 58% | 3444 | 65% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3571 | 159 | 8 | 56% | 3538 | 88% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3379 | 72 | 48 | 51% | 3374 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3461 | 131 | 16 | 69% | 3320 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3193 | 57 | 82 | 54% | 3160 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3448 | 26 | 370 | 52% | 3432 | 79% |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 36 | 178 | 48% | 3586 | 81% |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3421 | 31 | 252 | 50% | 3422 | 75% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 39 | 164 | 50% | 3526 | 73% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3368 | 33 | 244 | 50% | 3370 | 64% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3395 | 28 | 304 | 51% | 3384 | 75% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3275 | 37 | 204 | 47% | 3299 | 55% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3062 | 30 | 304 | 44% | 3106 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3194 | 29 | 312 | 49% | 3204 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3237 | 32 | 262 | 53% | 3208 | 59% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3201 | 34 | 240 | 53% | 3164 | 56% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2905 | 31 | 320 | 51% | 2894 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |