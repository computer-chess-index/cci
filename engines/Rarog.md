# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3019<sub>(+103) | 3347<sub>(+145) | 3436<sub>(+119) |  |
| 2.5.0 | 2026-10-05 | 2916<sub>(+358) | 3202<sub>(+267) | 3317<sub>(+239) |  |
| 2.4.0 | 2026-09-11 | 2558 | 2935 | 3078 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3197<sub>(+232) | 3387<sub>(+69) | 3511<sub>(+95) |  |
| 2.5.0 | 2026-10-05 | 2965<sub>(+292) | 3318<sub>(+266) | 3416<sub>(+300) |  |
| 2.4.0 | 2026-09-11 | 2673 | 3052 | 3116 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-09-11 | 2614 | 2930 | 3015 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rarog+<version>&body=###%20Engine%20name%0ARarog%0A%0A###%20Version%0A2.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-03 05:41:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2500 --> 3600
  line "E1: STC (8.0+0.08s)" [2558, 2916, 3019]
  line "E1: LTC (60.0+0.60s)" [2935, 3202, 3347]
  line "E1: VLTC (2m24s+1.12s)" [3078, 3317, 3436]
  line "P1: STC (8.0+0.08s)" [2673, 2965, 3197]
  line "P1: LTC (60.0+0.60s)" [3052, 3318, 3387]
  line "P1: VLTC (2m24s+1.12s)" [3116, 3416, 3511]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3436 | 30 | 296 | 48% | 3447 | 60% |
|  |  | P1 | 3511 | 38 | 180 | 51% | 3506 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3347 | 32 | 268 | 51% | 3343 | 56% |
|  |  | P1 | 3387 | 40 | 170 | 52% | 3368 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3019 | 35 | 248 | 49% | 3024 | 41% |
|  |  | P1 | 3197 | 46 | 142 | 52% | 3178 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3416 | 36 | 206 | 53% | 3394 | 61% |
|  |  | E1 | 3317 | 30 | 312 | 54% | 3290 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3318 | 35 | 230 | 48% | 3332 | 52% |
|  |  | E1 | 3202 | 33 | 264 | 53% | 3175 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2965 | 45 | 150 | 51% | 2951 | 40% |
|  |  | E1 | 2916 | 32 | 312 | 56% | 2863 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3015 | 35 | 256 | 53% | 2984 | 40% |
|  |  | P1 | 3116 | 39 | 198 | 51% | 3108 | 42% |
|  |  | E1 | 3078 | 29 | 367 | 52% | 3067 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2930 | 33 | 292 | 57% | 2861 | 38% |
|  |  | P1 | 3052 | 42 | 168 | 53% | 3017 | 43% |
|  |  | E1 | 2935 | 32 | 310 | 47% | 2966 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2673 | 46 | 156 | 46% | 2709 | 31% |
|  |  | E1 | 2558 | 36 | 252 | 41% | 2653 | 33% |
|  |  | T1 | 2614 | 36 | 266 | 52% | 2564 | 29% |