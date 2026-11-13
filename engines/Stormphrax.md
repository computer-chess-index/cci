# Engine: Stormphrax

Author: Ciekce

Home: https://github.com/Ciekce/Stormphrax

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3341<sub>(+155) | 3611<sub>(+347) | 3654<sub>(+68) |  |
| 7.0.0 | 2025-06-24 | 3186 | 3264 | 3586 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3420<sub>(+304) | 3623<sub>(+477) | 3645<sub>(+513) |  |
| 7.0.0 | 2025-06-24 | 3116 | 3146 | 3132 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2026-06-27 | 3413<sub>(+51) | 3557<sub>(+28) | 3587<sub>(+22) |  |
| 7.0.0 | 2025-06-24 | 3362<sub>(+53) | 3529<sub>(+42) | 3565<sub>(+47) |  |
| 6.0.0 | 2024-10-29 | 3309<sub>(+99) | 3487<sub>(+76) | 3518<sub>(+70) |  |
| 5.0.0 | 2024-06-26 | 3210 | 3411 | 3448 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Stormphrax+<version>&body=###%20Engine%20name%0AStormphrax%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:43:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3186, 3341]
  line "E1: LTC (60.0+0.60s)" [3264, 3611]
  line "E1: VLTC (2m24s+1.12s)" [3586, 3654]
  line "P1: STC (8.0+0.08s)" [3116, 3420]
  line "P1: LTC (60.0+0.60s)" [3146, 3623]
  line "P1: VLTC (2m24s+1.12s)" [3132, 3645]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0.0", "6.0.0", "7.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3210, 3309, 3362, 3413]
  line "T1: LTC (60.0+0.60s)" [3411, 3487, 3529, 3557]
  line "T1: VLTC (2m24s+1.12s)" [3448, 3518, 3565, 3587]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3645 | 36 | 176 | 50% | 3644 | 88% |
|  |  | T1 | 3587 | 26 | 326 | 51% | 3582 | 89% |
|  |  | E1 | 3654 | 31 | 232 | 51% | 3650 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3557 | 24 | 392 | 50% | 3555 | 91% |
|  |  | E1 | 3611 | 29 | 264 | 50% | 3614 | 88% |
|  |  | P1 | 3623 | 37 | 172 | 51% | 3613 | 82% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3413 | 25 | 400 | 50% | 3411 | 71% |
|  |  | E1 | 3341 | 25 | 419 | 45% | 3375 | 66% |
|  |  | P1 | 3420 | 28 | 316 | 48% | 3434 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3586 | 292 | 12 | 100% | 2939 | 0% |
|  |  | P1 | 3132 | 145 | 12 | 71% | 2952 | 58% |
|  |  | T1 | 3565 | 18 | 722 | 51% | 3563 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3529 | 17 | 824 | 51% | 3524 | 87% |
|  |  | E1 | 3264 | 157 | 12 | 71% | 3058 | 42% |
|  |  | P1 | 3146 | 226 | 16 | 97% | 2380 | 6% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3362 | 17 | 930 | 51% | 3355 | 69% |
|  |  | E1 | 3186 | 180 | 16 | 75% | 2838 | 13% |
|  |  | P1 | 3116 | 177 | 12 | 63% | 2954 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3518 | 14 | 1184 | 50% | 3517 | 82% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3487 | 14 | 1228 | 50% | 3490 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3309 | 15 | 1188 | 50% | 3308 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3448 | 32 | 248 | 51% | 3443 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3411 | 27 | 340 | 54% | 3379 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3210 | 29 | 332 | 48% | 3227 | 57% |