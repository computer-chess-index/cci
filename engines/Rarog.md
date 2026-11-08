# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3019<sub>(+106) | 3345<sub>(+144) | 3436<sub>(+119) |  |
| 2.5.0 | 2026-10-05 | 2913<sub>(+357) | 3201<sub>(+266) | 3317<sub>(+240) |  |
| 2.4.0 | 2026-09-11 | 2556 | 2935 | 3077 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3201<sub>(+231) | 3407<sub>(+82) | 3515<sub>(+93) |  |
| 2.5.0 | 2026-10-05 | 2970<sub>(+296) | 3325<sub>(+267) | 3422<sub>(+302) |  |
| 2.4.0 | 2026-09-11 | 2674 | 3058 | 3120 |  |
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

Generated: 2026-11-08 05:41:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2500 --> 3600
  line "E1: STC (8.0+0.08s)" [2556, 2913, 3019]
  line "E1: LTC (60.0+0.60s)" [2935, 3201, 3345]
  line "E1: VLTC (2m24s+1.12s)" [3077, 3317, 3436]
  line "P1: STC (8.0+0.08s)" [2674, 2970, 3201]
  line "P1: LTC (60.0+0.60s)" [3058, 3325, 3407]
  line "P1: VLTC (2m24s+1.12s)" [3120, 3422, 3515]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3515 | 38 | 180 | 51% | 3511 | 61% |
|  |  | E1 | 3436 | 29 | 322 | 49% | 3447 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3407 | 35 | 222 | 53% | 3378 | 55% |
|  |  | E1 | 3345 | 30 | 304 | 50% | 3344 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3201 | 43 | 158 | 52% | 3185 | 45% |
|  |  | E1 | 3019 | 34 | 268 | 50% | 3023 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3317 | 30 | 312 | 54% | 3291 | 55% |
|  |  | P1 | 3422 | 36 | 206 | 53% | 3401 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3201 | 33 | 264 | 53% | 3174 | 55% |
|  |  | P1 | 3325 | 35 | 230 | 48% | 3337 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2970 | 45 | 150 | 51% | 2957 | 40% |
|  |  | E1 | 2913 | 32 | 312 | 56% | 2861 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3015 | 35 | 256 | 53% | 2984 | 40% |
|  |  | P1 | 3120 | 39 | 198 | 51% | 3112 | 42% |
|  |  | E1 | 3077 | 29 | 367 | 52% | 3066 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2930 | 33 | 292 | 57% | 2861 | 38% |
|  |  | P1 | 3058 | 42 | 168 | 53% | 3023 | 43% |
|  |  | E1 | 2935 | 32 | 310 | 47% | 2966 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2614 | 36 | 266 | 52% | 2564 | 29% |
|  |  | P1 | 2674 | 46 | 156 | 46% | 2711 | 31% |
|  |  | E1 | 2556 | 36 | 252 | 41% | 2650 | 33% |