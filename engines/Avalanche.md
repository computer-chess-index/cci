# Engine: Avalanche

Author: Yinuo Huang

Home: https://github.com/SnowballSH/Avalanche

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3344<sub>(+135) | 3578<sub>(+60) | 3645<sub>(+76) |  |
| 4.0.0 | 2026-08-08 | 3209 | 3518 | 3569 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0.0 | 2026-10-11 | 3484<sub>(+129) | 3694<sub>(+83) | 3758<sub>(+101) |  |
| 4.0.0 | 2026-08-08 | 3355 | 3611 | 3657 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

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

Generated: 2026-11-07 05:36:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "5.0.0"]
  y-axis "Elo Rating" 3200 --> 3800
  line "E1: STC (8.0+0.08s)" [3209, 3344]
  line "E1: LTC (60.0+0.60s)" [3518, 3578]
  line "E1: VLTC (2m24s+1.12s)" [3569, 3645]
  line "P1: STC (8.0+0.08s)" [3355, 3484]
  line "P1: LTC (60.0+0.60s)" [3611, 3694]
  line "P1: VLTC (2m24s+1.12s)" [3657, 3758]
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

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3758 | 37 | 170 | 49% | 3767 | 80% |
|  |  | E1 | 3645 | 34 | 208 | 51% | 3636 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3694 | 39 | 158 | 52% | 3679 | 75% |
|  |  | E1 | 3578 | 27 | 334 | 53% | 3555 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3344 | 30 | 286 | 50% | 3339 | 64% |
|  |  | P1 | 3484 | 35 | 216 | 49% | 3492 | 65% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3657 | 36 | 178 | 48% | 3667 | 81% |
|  |  | E1 | 3569 | 31 | 252 | 50% | 3572 | 75% |
|  |  | T1 | 3448 | 26 | 370 | 52% | 3432 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3611 | 39 | 164 | 50% | 3607 | 73% |
|  |  | E1 | 3518 | 33 | 244 | 50% | 3519 | 64% |
|  |  | T1 | 3395 | 28 | 304 | 51% | 3384 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3209 | 30 | 304 | 44% | 3254 | 59% |
|  |  | T1 | 3194 | 29 | 312 | 49% | 3204 | 63% |
|  |  | P1 | 3355 | 37 | 204 | 47% | 3379 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3237 | 32 | 262 | 53% | 3208 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3201 | 34 | 240 | 53% | 3164 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2905 | 31 | 320 | 51% | 2894 | 41% |